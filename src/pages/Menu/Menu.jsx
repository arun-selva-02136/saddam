import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Card, Button } from 'antd';
import { fetchMenu } from "../../sevices/MenuService/MenuService";
import './Menu.css';
const { Title, Text } = Typography;

const Menu = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedCategories, setExpandedCategories] = useState({});

    useEffect(() => {
        loadMenu();
    }, []);

    const loadMenu = async () => {
        try {
            const menu = await fetchMenu();
            
            // Group menu items by category
            const groupedCategories = menu.reduce((acc, item) => {
                if (!acc[item.categoryName]) {
                    acc[item.categoryName] = [];
                }
                acc[item.categoryName].push(item);
                return acc;
            }, {});
            
            // Convert to array format for easier rendering
            const categoriesArray = Object.keys(groupedCategories).map(categoryName => ({
                name: categoryName,
                items: groupedCategories[categoryName]
            }));
            
            setCategories(categoriesArray);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Menu: ", error);
            setLoading(false);
        }
    };

    // Function to get first letter of menu name
    const getFirstLetter = (name) => {
        return name?.charAt(0)?.toUpperCase() || '';
    };

    const toggleCategory = (categoryIndex) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryIndex]: !prev[categoryIndex]
        }));
    };

    return (
        <div style={{ padding: '24px',marginTop:"70px" }}>
            {categories.map((category, categoryIndex) => {
                const isExpanded = expandedCategories[categoryIndex];
                const visibleItems = isExpanded ? category.items : category.items.slice(0, 8);
                const hasMoreItems = category.items.length > 8;
                
                return (
                    <div 
                        key={category.name}
                        className='menuCard' 
                        style={{
                            border: 'none',
                            marginTop: '40px',
                            boxShadow: '10px 24px 45px #5FE26C',
                            maxWidth: '80%',
                            margin: '0 auto 40px',
                            position: 'relative'
                        }}
                    >
                        <Card>
                            <div style={{display:'flex', justifyContent:'space-between',flexWrap:'wrap', alignItems: 'center' , borderBottom:"solid 1px black"}}>
                                <Title 
                                    level={2} 
                                    style={{ 
                                        marginBottom: '24px', 
                                        color: '#39DB4A',
                                        textAlign: categoryIndex % 2 === 0 ? 'left' : 'right',
                                        padding: '0 20px',
                                        wordBreak:'unset'
                                    }}
                                >
                                    {category.name.toUpperCase()}
                                </Title>
                                
                                {hasMoreItems && (
                                    <Button 
                                        onClick={() => toggleCategory(categoryIndex)}
                                        type="primary"
                                        style={{ 
                                            backgroundColor: '#39DB4A', 
                                            borderColor: '#39DB4A',
                                            height: '40px',
                                            padding: '0 20px',
                                            marginTop:"-20px",
                                            borderRadius: '20px',
                                           

                                        }}
                                    >
                                        {isExpanded ? 'Show Less' : 'Show More'}
                                    </Button>
                                )}
                            </div>
                            
                            {/* First Row - 4 items */}
                            <Row gutter={[16, 16]} style={{ marginBottom: '36px',marginTop:"40px" }}>
                                {visibleItems.slice(0, 4).map((item) => (
                                    <Col xs={24} sm={12} md={6} key={item.menuId}>
                                        <MenuCard item={item} loading={loading} />
                                    </Col>
                                ))}
                            </Row>
                            
                            {/* Second Row - 4 items */}
                            {visibleItems.length > 4 && (
                                <Row gutter={[16, 16]}>
                                    {visibleItems.slice(4, 8).map((item) => (
                                        <Col xs={24} sm={12} md={6} key={item.menuId}>
                                            <MenuCard item={item} loading={loading} />
                                        </Col>
                                    ))}
                                </Row>
                            )}
                            
                            {/* Additional Rows when expanded */}
                            {isExpanded && visibleItems.length > 8 && (
                                <>
                                    {Array.from({ length: Math.ceil((visibleItems.length - 8) / 4) }).map((_, rowIndex) => (
                                        <Row gutter={[16, 16]} key={`row-${rowIndex}`} style={{ marginTop: '16px' }}>
                                            {visibleItems.slice(8 + rowIndex * 4, 8 + (rowIndex + 1) * 4).map((item) => (
                                                <Col xs={24} sm={12} md={6} key={item.menuId}>
                                                    <MenuCard item={item} loading={loading} />
                                                </Col>
                                            ))}
                                        </Row>
                                    ))}
                                </>
                            )}
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

// Separate component for Menu Card to keep code clean
const MenuCard = ({ item, loading }) => {
    return (
        <Card 
            loading={loading}
            hoverable
            style={{ 
                borderRadius: '22px',
                boxShadow: '0px 2px 20px #888888',
                // textAlign: 'center',
                height: '100%',
                position: 'relative',
            }}
            bodyStyle={{ padding: '24px 16px 16px' }}
        >
            {/* First letter badge */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
                <Text strong style={{ 
                    color: 'white', 
                    fontSize: '18px',
                    lineHeight: '40px'
                }}>
                    {item?.menuName?.charAt(0)?.toUpperCase() || ''}
                </Text>
            </div>
            
            <Title level={4} style={{ 
                marginBottom: '8px',
                textAlign: 'center',
                marginTop: '16px' 
            }}>
                {item.menuName}
            </Title>
            <div className='d-flex justify-content-end'>
            <Text strong style={{ 
                fontSize: '16px',
                color: '#333'
            }}>
                $ {item.price}
            </Text>
            </div>
            
        </Card>
    );
};

export default Menu;