import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function Tho()  // cách 1
{
  return (
    <div>
      <h1>Cách số 1</h1>
      <h2>Cách số 1 dòng 2</h2>
    </div>
  )
}

var Cach2 = function() // cách 2
{
  return (
    <div>
        <h1> Cách số 2</h1>
        <h3> Hihi</h3>
    </div>
  )
}

var Cach3 = () =>
(
  <div>
    <h1>Cách số 3</h1>
    <h2>ahihi</h2>
  </div>
);

class Cach4 extends Component {
  render() {
    return (
      <div>
        <button>Cách số 4</button>
      </div>
    );
  }
}
// sử dụng props cách 1
function NumberOne(props)
{
  return(
      <div className="col-6">
        <div className="card">
          <img className="card-img-top" src= {props.linkanh} alt=""/>
          <div className="card-body">
            <h4 className= "cart-title">{props.tieude}</h4>
            <p className="cart-text"> text</p>
          </div>
        </div>
      </div>
  )
}
// sử dụng class và props
class NumberTwo extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">

              <img class="card-img-top" src={this.props.linkanh} alt=""/>
              <div class="card-body">
                <p class="card-text">{this.props.tieude}</p>
              </div>

          </div>
      </div>
    );
  }
}
const ten = "nguyễn Văn Thọ"
class Bien extends Component {
  render() {
    return (
      <div>
        <h3 > Tên tôi là {ten}</h3>
      </div>
    );
  }
}

// ví dụ về hàm map ( giống foreach)
const so = [1,2,3,4,5,6];
const so2 = so.map((x) => x*2 + " ");
class App1 extends Component {
  render() {
    return (
      <div>
        {so2}
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <Cach4></Cach4>
      <div className="container" >
        <div className="row">
          <Bien></Bien>
        </div>
      </div>
      {/* end  */}
      <div className="form-check">
      <label className="form-check-label">
      <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
       Display value
      </label>
      </div>
      <App1></App1>
    </div>
  );
}

export default App;
