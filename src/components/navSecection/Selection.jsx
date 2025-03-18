import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Selection.css";
 
const Selection = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
  const menuItems = [
    { key: "/about", label: "Journey" },
    { key: "/about/Branches", label: "Branches" },
    { key: "/about/Business", label: "Business Concepts" },
    { key: "/about/Vips-Vists", label: "VIP’s Visit" },
    { key: "/about/Ambiance", label: "Ambiance & Dining Experience" },
    { key: "/about/Awards", label: "Awards" },
  ];
 
  return (
<Navbar expand="lg" >
<Container className="nav-container">
{/* <Navbar.Toggle aria-controls="navbarNav" /> */}
{/* <Navbar.Collapse id="navbarNav"> */}
<Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            onClick={({ key }) => navigate(key)}
            className="w-100 navigation"
>
            {menuItems.map((item) => (
<Menu.Item key={item.key} className="nav-item">
                {item.label}
</Menu.Item>
            ))}
</Menu>
{/* </Navbar.Collapse> */}
</Container>
</Navbar>
  );
};
 
export default Selection;