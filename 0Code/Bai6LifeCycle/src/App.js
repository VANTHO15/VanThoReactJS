import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthai:"khoitao"
    }
  }
  // Chạy đầu tiên
  componentWillMount() {  
    console.log("componentWillMount đã chạy");
  }
  // Chạy Thứ 3
  componentDidMount() {
    console.log("componentDidMount đã chạy");
    
  }
  
  // Chạy thứ 2
  render() {
    console.log("Đây là rendel");
    
    return (
      <div>
       
      </div>
    );
  }
}

export default App;