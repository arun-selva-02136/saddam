import React from 'react';
import { Container, Table, Image } from 'react-bootstrap';
import drinkImg from '../../assets/jusice-img.jpg'

const Menu = () => {
    return (

        <Container className="mt-4">
            <h1 className="text-center">MINUMAN</h1>
            <div className="text-center">
                <Image src={drinkImg} alt="Refreshing Drink" fluid className="mb-4" />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Drink</th>
                        <th>Hot (Panas)</th>
                        <th>Iced/Takeaway (Ais/Bungkus)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Teh</td>
                        <td>$1.50</td>
                        <td>$3.50</td>
                    </tr>
                    <tr>
                        <td>Teh O</td>
                        <td>$1.50</td>
                        <td>$2.50</td>
                    </tr>
                    <tr>
                        <td>Kopi</td>
                        <td>$1.50</td>
                        <td>$3.50</td>
                    </tr>
                    <tr>
                        <td>Kopi O</td>
                        <td>$1.50</td>
                        <td>$2.50</td>
                    </tr>
                    <tr>
                        <td>Sirap</td>
                        <td>$2.00</td>
                        <td>$2.50</td>
                    </tr>
                    <tr>
                        <td>Nescafe</td>
                        <td>$3.00</td>
                        <td>$4.00</td>
                    </tr>
                    <tr>
                        <td>Milo</td>
                        <td>$3.00</td>
                        <td>$4.00</td>
                    </tr>
                    <tr>
                        <td>Limau</td>
                        <td>$2.50</td>
                        <td>$3.00</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
};

export default Menu;
