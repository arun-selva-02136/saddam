import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { FaTrash, FaCheckSquare } from "react-icons/fa";
import { db } from "../../pages/Firebase/config";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import MenuImg from "../../assets/dash-img.png";
import "./Dashboard.css";

function Dashboard() {
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [menuItem, setMenuItem] = useState({ category: "", name: "", price: "" });
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      const categorySnapshot = await getDocs(collection(db, "categories"));
      const categoryList = categorySnapshot.docs.map(doc => doc.data().name);
      setCategories(categoryList);
    };

    const fetchMenuItems = async () => {
      const menuSnapshot = await getDocs(collection(db, "menuItems"));
      const items = {};
      menuSnapshot.docs.forEach(doc => {
        const data = doc.data();
        if (!items[data.category]) {
          items[data.category] = [];
        }
        items[data.category].push({ id: doc.id, name: data.name, price: data.price });
      });
      setMenuItems(items);
    };

    fetchCategories();
    fetchMenuItems();
  }, []);

  const handleDelete = async (category, id) => {
    await deleteDoc(doc(db, "menuItems", id));
    setMenuItems(prevItems => ({
      ...prevItems,
      [category]: prevItems[category].filter(item => item.id !== id)
    }));
  };

  const handleAddCategory = async () => {
    if (categoryName && !categories.includes(categoryName)) {
      await addDoc(collection(db, "categories"), { name: categoryName });
      setCategories([...categories, categoryName]);
      setCategoryName("");
      setShowCategoryPopup(false);
    }
  };

  const handleAddMenuItem = async () => {
    if (menuItem.category && menuItem.name && menuItem.price) {
      const docRef = await addDoc(collection(db, "menuItems"), {
        category: menuItem.category,
        name: menuItem.name,
        price: parseFloat(menuItem.price)
      });
      setMenuItems(prevItems => ({
        ...prevItems,
        [menuItem.category]: [...(prevItems[menuItem.category] || []), { id: docRef.id, name: menuItem.name, price: parseFloat(menuItem.price) }]
      }));
      setMenuItem({ category: "", name: "", price: "" });
      setShowMenuPopup(false);
    }
  };

  return (
    <>
      <Container className="dashboard-container">
        <Row className="align-items-start g-0">
          <Col md={6} className="dash-content">
            <h1 className="dash-h1" style={{ fontWeight: "700" }}>
              Restaurant <span className="dash-menu">Menu</span> <br /> Management
            </h1>
            <p className="dash-para">
              Manage your restaurant's menu by adding, editing, or removing items below.
            </p>
            <div className="dash-btn-div">
              <Button className="dash-button" onClick={() => setShowCategoryPopup(true)}>+ Add Category</Button>
              <Button className="dash-button" onClick={() => setShowMenuPopup(true)}>+ Add Menu</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src={MenuImg} alt="Menu" width={400} className="img-fluid menu-img" />
          </Col>
        </Row>
      </Container>

      <Container className="dash-menu-container py-4">
        <Row>
          {categories.map(category => (
            <Col md={6} key={category}>
              <h4 className="text-success text-center">{category.toUpperCase()}</h4>
              <Table striped bordered hover>
                <tbody>
                  {menuItems[category]?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price.toFixed(2)}</td>
                      <td><FaCheckSquare className="text-success" /></td>
                      <td><FaTrash className="text-danger" onClick={() => handleDelete(category, item.id)} /></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          ))}
        </Row>
      </Container>

      {showCategoryPopup && (
        <div className="overlay">
          <div className="category-main">
          <div className="popup category-popup">
            <h4 style={{marginLeft:"-10px"}}>Add Category</h4>
            <Form.Control
              type="text"
              style={{width:"70%",marginLeft:"-30px"}}
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <Button style={{marginLeft:"30px"}} className="btn dash-popup-button" onClick={handleAddCategory}>Save</Button>
          </div>
        </div>
        </div>
      )}

      {showMenuPopup && (
        <div className="overlay">
          <div className="menu-main">

          
          <div className="popup menu-popup">
            <h4 >Add Menu Item</h4>
            <Form.Control as="select" value={menuItem.category} onChange={(e) => setMenuItem({ ...menuItem, category: e.target.value })}>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </Form.Control>
            <Form.Control type="text" placeholder="Enter item name" value={menuItem.name} onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })} />
            <Form.Control type="number" placeholder="Enter price" value={menuItem.price} onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })} />
            <Button className=" dash-popup-button" onClick={handleAddMenuItem}>Save</Button>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
