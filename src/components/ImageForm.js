import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class ImageForm extends Component {
    state = {
        id: "",
        link: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/images', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(resp => resp.json())
            .then(newImage => {
                if(newImage.error) {
                    alert(newImage.error_messages)
                } else {
                    console.log(newImage)
                    this.setState({
                        id: newImage.id
                    })
                    this.props.addImage(this.state)
                }
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="link">
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" value={this.state.link}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
