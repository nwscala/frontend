import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default class Images extends Component {

    renderImages = (imageArray) => {
        let manyRows = [];

        for(let i = 0; i < imageArray.length; i = i + 3) {
            manyRows.push(this.renderRows(imageArray.slice(i, i+3)));
        }

        return manyRows
    }

    renderRows = (partialImageArray) => {
        return <Row>
            {partialImageArray.map((image) => {
                return <Col>
                    <Card style={{width: '300px', height: "300px"}}>
                        <Card.Img style={{width: '300px', height: "200px"}} variant="top" src={image.link}/>
                    </Card>
                </Col>
            })}
        </Row>
    }

    render() {
        return (
            <div>
                <Container>
                    {this.renderImages(this.props.imageList)}
                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.ytimg.com/vi/qnkMobV-GvU/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
                </Container>
            </div>
        )
    }
}
