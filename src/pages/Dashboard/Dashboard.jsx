import React, { useState, useEffect } from 'react';
import "./Dashboard.css"
import { Container } from "react-bootstrap";
import { Row, Col, Typography, Button, Modal, Form, Input, Select, Card, Table, message } from 'antd';
import { DeleteOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import MenuImg from "../../assets/dash-img.png";
import { fetchCategory, addCategory, deleteCategory } from "../../sevices/CategoryServices/CategoryServices";
import { fetchMenu, addMenu, updateMenu, deleteMenu } from "../../sevices/MenuService/MenuService";
import { Timestamp } from "firebase/firestore";


const Dashboard = () => {
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);
  const [isEditMenuModalVisible, setIsEditMenuModalVisible] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null);
  const [addEditMenuForm] = Form.useForm();
  const [categoryData, setCategoryData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [addCategoryForm] = Form.useForm();
  const [addMenuForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    loadCategory();
    loadMenu();
  }, []);

  const loadCategory = async () => {
    try {
      const category = await fetchCategory();
      setCategoryData(category);
    } catch (error) {
      messageApi.error("Error fetching Category: " + error.message);
    }
  };

  const loadMenu = async () => {
    try {
      const menu = await fetchMenu();
      setMenuData(menu);
    } catch (error) {
      messageApi.error("Error fetching Menu: " + error.message);
    }
  };

  const handleCategorySave = async (values) => {
    try {
      const highestCategoryId =
        categoryData.length > 0
          ? Math.max(...categoryData.map((user) => parseInt(user.categoryId)))
          : 100;
      const newCategory = { ...values, categoryId: highestCategoryId + 1, createdAt: Timestamp.now() };

      await addCategory(newCategory);
      messageApi.success("Category added successfully!");
      addCategoryForm.resetFields();
      setIsCategoryModalVisible(false); // Close the modal
      loadCategory(); // Reload categories
    } catch (error) {
      messageApi.error("Error adding Category: " + error.message);
    }
  };

  const handleMenuSave = async (values) => {
    try {
      const highestMenuId =
        menuData.length > 0
          ? Math.max(...menuData.map((user) => parseInt(user.menuId)))
          : 100;
      const newMenu = { ...values, menuId: highestMenuId + 1, createdAt: Timestamp.now(), updatedAt: Timestamp.now() };

      await addMenu(newMenu);
      messageApi.success("Menu added successfully!");
      addMenuForm.resetFields();
      setIsMenuModalVisible(false); // Close the modal
      loadMenu(); // Reload menus
    } catch (error) {
      messageApi.error("Error adding Menu: " + error.message);
    }
  };

  const handleEditMenu = (menu) => {
    setEditingMenu(menu);
    addEditMenuForm.setFieldsValue({
      categoryName: menu.categoryName,
      menuName: menu.menuName,
      price: menu.price,
    });
    setIsEditMenuModalVisible(true);
  };
  

  const handleUpdateMenuSave = async (values) => {
    try {
      const updatedData = {
        ...values,
        updatedAt: Timestamp.now(), // <-- Add this line
      };
      await updateMenu(editingMenu.id, updatedData); // use menuId or id accordingly
      messageApi.success("Menu updated successfully!");
      setIsEditMenuModalVisible(false);
      setEditingMenu(null);
      loadMenu();
    } catch (error) {
      messageApi.error("Error updating Menu: " + error.message);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      // Find the category name for this categoryId
      const categoryToDelete = categoryData.find((cat) => cat.id === categoryId);
      if (!categoryToDelete) return;

      const { categoryName } = categoryToDelete;

      // Delete all menus belonging to this category first
      const menusToDelete = menuData.filter((menu) => menu.categoryName === categoryName);

      for (let menu of menusToDelete) {
        await deleteMenu(menu.id); // or menu.id if your menuId is stored as `id`
      }

      // Now delete the category
      await deleteCategory(categoryId);

      messageApi.success("Category and its associated menus deleted successfully!");
      loadCategory();
      loadMenu();
    } catch (error) {
      messageApi.error("Error deleting Category: " + error.message);
    }
  };


  const handleDeleteMenu = async (menuId) => {
    try {
      await deleteMenu(menuId);
      messageApi.success("Menu deleted successfully!");
      loadMenu(); // Reload menus
    } catch (error) {
      messageApi.error("Error deleting Menu: " + error.message);
    }
  };


  // Group menu items by category
  const groupedMenuData = menuData.reduce((acc, menu) => {
    if (!acc[menu.categoryName]) {
      acc[menu.categoryName] = [];
    }
    acc[menu.categoryName].push(menu);
    return acc;
  }, {});

  return (
    <div style={{ padding: '50px', backgroundColor: '#fff' }}>
      {contextHolder}
      <Container>
      <Row gutter={[32, 32]} justify="center" align="middle">
        <Col md={12}>
          <Typography.Title level={1} style={{ fontWeight: '700', fontSize:'50px',}}>Restaurant <span style={{color:"green"}}>Menu</span> Management</Typography.Title>
          <Typography.Text style={{ fontSize: '16px', color: '#555' }}>
            Manage your restaurant's menu by adding, editing, or removing items below.
          </Typography.Text>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'30px', }} className='mt-5'>
            <Button
              className='px-5 py-4'
              type="primary"
              icon={<PlusOutlined />}
              style={{ fontWeight:'700', fontSize:'18px', border:'none', borderRadius:'50px', backgroundColor: '#39DB4A', borderColor: '#39DB4A', color:'#FDF100', boxShadow:'0px 4px 20px #63FF6F', }}
              onClick={() => setIsCategoryModalVisible(true)}
            >
              Add Category
            </Button>
            <Button
            className='px-5 py-4'
              type="primary"
              icon={<PlusOutlined />}
              style={{ fontWeight:'700', fontSize:'18px', border:'none', borderRadius:'50px', backgroundColor: '#39DB4A', borderColor: '#39DB4A', color:'#FDF100', boxShadow:'0px 4px 20px #63FF6F', }}
              onClick={() => setIsMenuModalVisible(true)}
            >
              Add Menu
            </Button>
          </div>
        </Col>
        <Col md={12} className="text-center">
          <img src={MenuImg} alt="Menu" width={400} className="img-fluid menu-img" />
        </Col>
      </Row>
      </Container>
      

      {/* Header Section */}
      <Container>
      <Row justify="center" align="middle">
        <Col>
          <div style={{
            padding: '10px 20px',
            borderRadius: '50px',
            boxShadow: '2px 2px 45px 7px #FDF100',
            // display: 'inline-block'
          }}>
            <div style={{
              background: 'white',
              padding: '10px 30px',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              flexWrap:'wrap',
              gap: '15px'
            }}>
              {categoryData.map((category) => (
                <div key={category.categoryId} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Typography.Text style={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>
                    {category.categoryName.toUpperCase()}
                  </Typography.Text>
                  <Button
                    type="text"
                    icon={<DeleteOutlined style={{ color: 'red' }} />}
                    onClick={() => handleDeleteCategory(category.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      </Container>
      

      {/* Menu Display Section */}
      <Container>
      {Object.entries(groupedMenuData).reduce((rows, entry, index, array) => {
        if (index % 2 === 0) {
          rows.push(array.slice(index, index + 2));
        }
        return rows;
      }, []).map((rowPair, rowIndex) => (
        <Row key={rowIndex} justify="space-around" style={{ marginTop: '40px' }}>
          {rowPair.map(([categoryName, menus]) => (
            <Col key={categoryName} md={11}>
              <Card style={{ boxShadow: "-15px 5px 45px #39DB4A" }} className='mt-3'>
                <Typography.Title level={2} style={{ color: 'green', textAlign: 'center' }}>
                  {categoryName.toUpperCase()}
                </Typography.Title>
                <Table
                  columns={[
                    { title: 'Menu Name', dataIndex: 'menuName', key: 'menuName' },
                    { title: 'Price', dataIndex: 'price', key: 'price' },
                    {
                      title: 'Action',
                      key: 'action',
                      render: (_, record) => (
                        <>

                          <Button
                            type="text"
                            style={{ color: 'blue', marginLeft: 8 }}
                            icon={<EditOutlined style={{color: 'green'}} />}
                            onClick={() => handleEditMenu(record)}
                          />
                          <Button
                            type="text"
                            icon={<DeleteOutlined style={{ color: 'red' }} />}
                            onClick={() => handleDeleteMenu(record.id)}
                          />
                        </>


                      ),
                    },
                  ]}
                  dataSource={menus}
                  pagination={false}
                />
              </Card>
            </Col>
          ))}
        </Row>
      ))}
      </Container>


      {/* Category Modal */}
      <Modal
        title="Add Category"
        open={isCategoryModalVisible}
        onCancel={() => setIsCategoryModalVisible(false)}
        footer={null}
         className="category-modal-bg"
      >
        <Form form={addCategoryForm} onFinish={handleCategorySave} layout="vertical" style={{width: '50%'}} className='mt-5'>
          <Form.Item label="Category Name" name="categoryName">
            <Input placeholder="Enter category name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#63FF86', borderColor: '#63FF86', borderRadius:'20px', color:'#FFFFFF', boxShadow:'2px 2px 20px #63FF86' }}>Add</Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Menu Modal */}
      <Modal
        title="Add Menu"
        open={isMenuModalVisible}
        onCancel={() => setIsMenuModalVisible(false)}
        footer={null}
      >
        <Form form={addMenuForm} onFinish={handleMenuSave} layout="vertical">
          <Form.Item label="Category" name="categoryName">
            <Select placeholder="Select Category">
              {categoryData.map((category) => (
                <Select.Option key={category.categoryId} value={category.categoryName}>
                  {category.categoryName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Menu Name" name="menuName">
            <Input placeholder="Enter menu name" />
          </Form.Item>
          <Form.Item label="Price" name="price">
            <Input placeholder="Enter price" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: 'green', borderColor: 'green' }}>Add</Button>
          </Form.Item>
        </Form>
      </Modal>
      
      {/* Edit Menu Modal */}
      <Modal
  title="Edit Menu"
  open={isEditMenuModalVisible}
  onCancel={() => {
    setIsEditMenuModalVisible(false);
    setEditingMenu(null);
  }}
  footer={null}
>
  <Form form={addEditMenuForm} onFinish={handleUpdateMenuSave} layout="vertical">
    <Form.Item label="Category" name="categoryName">
      <Select placeholder="Select Category">
        {categoryData.map((category) => (
          <Select.Option key={category.categoryId} value={category.categoryName}>
            {category.categoryName}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
    <Form.Item label="Menu Name" name="menuName">
      <Input placeholder="Enter menu name" />
    </Form.Item>
    <Form.Item label="Price" name="price">
      <Input placeholder="Enter price" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" style={{ backgroundColor: 'green', borderColor: 'green' }}>
        Update
      </Button>
    </Form.Item>
  </Form>
</Modal>

    </div>
  );
};

export default Dashboard;