import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ImageContainer from './containers/ImageContainer';

class App extends React.Component {
  state = {
    imageList: []
  }
  
  componentDidMount(){
    fetch('http://localhost:3001/images')
      .then(resp => resp.json())
      .then(data => this.setState({
        imageList: [
          ...this.state.imageList,
          data
        ]
      }))
  }
  
  render() {
    return (
      <ImageContainer />
    );
  }
}

export default App;
