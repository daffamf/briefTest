import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'


const Itemcard = (props) => {
    return (
        <div >
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={props.img} />
                            <Card.Body>
                                <span className="tag tag-teal">{props.produk}</span>
                                <Card.Title>{props.desc}</Card.Title>
                                <Card.Text>
                                    {props.produk}
                                </Card.Text>
                                <h5 className="harga">
                                    RP.{props.price}
                                </h5>
                                <h5 >{props.lokasi}</h5>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>

    )
}

export default Itemcard