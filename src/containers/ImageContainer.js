import React, { Component } from 'react'
import Images from '../components/Images'

export default class ImageContainer extends Component {
    state = {
        imageList: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/images')
            .then(resp => resp.json())
            .then(data => this.setState({
                imageList: data
            }))
    }

    render() {
        return (
            <div>
                <Images imageList={this.state.imageList}/>
            </div>
        )
    }
}
