import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

export default class Images extends Component {

    renderImages = (imageArray) => {
        let manyRows = [];

        for(let i = 0; i < imageArray.length; i = i + 3) {
            manyRows.push(this.renderRows(imageArray.slice(i, i+3)));
        }

        return manyRows
    }

    handleDelete = (event) => {
        const targetId = event.target.id
        fetch(`http://localhost:3001/images/${targetId}`, {
            method: "DELETE",
        })
            .then(() => {
                this.props.removeImage(targetId)
                document.getElementById(`card${targetId}`).remove()
            })
    }

    renderRows = (partialImageArray) => {
        return <Row key={partialImageArray[0].id - 0.5}>
            {partialImageArray.map((image) => {
                return <Col key={image.id}>
                    <Card style={{width: '300px', height: "300px"}} id={`card${image.id}`}>
                        <Card.Img style={{width: '300px', height: "200px"}} variant="top" src={image.link}/>
                        <Button id={image.id} onClick={this.handleDelete} variant="danger">Delete</Button>
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
                </Container>
            </div>
        )
    }
}
