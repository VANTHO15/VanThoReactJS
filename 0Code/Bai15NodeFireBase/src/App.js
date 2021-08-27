import React, { Component } from 'react';
import './App.css';
import Menu from './Component/Menu';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';
import noteData from "./firebaseConnect"
import firebase from 'firebase/app';
import "firebase/database";
import {connect} from "react-redux"
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }
 

  render() {
    return (
      <div>
        <Menu></Menu>
        <div className="container cachnhau">
          <div className="row">
            <NoteList></NoteList>
            <NoteForm ></NoteForm>    
         </div>    
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      changeditstatus: () => {
          dispatch({type:"CHANGE_EDIT_STATUS"})
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);