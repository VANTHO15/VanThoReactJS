import React, { Component } from 'react';
import './App.css';
import News from './News';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        <News></News>
        {this.props.dulieu}
      </div>
    );
  }
} 

// coi như có luôn 1 biến là this,props.dulieu
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}
export default connect(mapStateToProps)(App);