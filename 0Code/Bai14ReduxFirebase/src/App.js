import React, { Component } from 'react';
import './App.css';
import firebaseConnect from './firebaseConnect';
import firebase from 'firebase/app';
import "firebase/database";
class App extends Component {
  // push nó tự sinh ra Id luôn
  PushData = () => 
  {
    var data = firebase.database().ref("dataForNote/");
    data.push({
      titleNote:"ghi chú số 4",
      contentNote:"Nội dung ghi chú số 4"
    })
    console.log("click");
  }
  DeleteData = (id) => 
  {
    var data = firebase.database().ref("dataForNote/");
    data.child(id).remove();
    console.log("Xóa thành công "+ id);
  }
  
  render() {
    return (
      <div>
        <button onClick={()=>this.PushData()}>Click push data</button>
        <button onClick={()=>this.DeleteData("-MgAZYUH48XzU96cPjVW")}>Click delete data</button>
      </div>
    );
  }
}

export default App;