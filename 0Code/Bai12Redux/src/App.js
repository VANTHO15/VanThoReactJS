import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {

    var redux = require('redux');
    var oldState = 
    {
      num: ["man hình", "chuột", "Bàn phim"],
      editStatus:true
    }
    var reducer1 = (state=oldState, action) =>
    {
      switch (action.type) {
        case "CHANGE_EDIT_STATE":
          return {...state,editStatus:!state.editStatus};
        case "ADD_NEW":
          return {...state,num:[...state.num,action.NewTho]};
        case "DELETE":
          return {...state,num:state.num.filter((value,key)=>key !==action.chiso)};
        default: return state;
      }
    }
    // reducer quản lý state, store quản lý reducer
    // thông qua store mới truy cập đc state
    // action chỉ là cái tên thôi
    var store1 = redux.createStore(reducer1);
    store1.subscribe(() => {
      console.log(store1.getState());
    }
    )
    store1.dispatch({type:"CHANGE_EDIT_STATE"});
    store1.dispatch({
      type:"ADD_NEW",
      NewTho:"Tai Nghe"
    })
    store1.dispatch({
      type:"DELETE",
      chiso:1
    })
  


    return (
      <div>
        
      </div>
    );
  }
}

export default App;