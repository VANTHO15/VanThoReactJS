import noteData from "./firebaseConnect"
import firebase from 'firebase/app';
import "firebase/database";
var redux = require('redux');
const noteInitialState = {
    isEdit:false,
    editItem:{}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            // biến nhận vào là do mk tự định nghĩ, action.TenBienDinhNghia
           // console.log("Biến nhận vào :"+ action.getItem);
            var data = firebase.database().ref("dataForNote/");
            data.push(action.getItem);
            return state
        case "UPDATE_DATA":
            var data = firebase.database().ref("dataForNote/"+action.getItemUpdate.id);
            data.update({
                noteTitle:action.getItemUpdate.noteTitle,
                noteContent:action.getItemUpdate.noteContent
            })
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "DELETE":
            var data = firebase.database().ref("dataForNote/"+action.idDelete);
            data.remove();
            return state
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        default:
            return state
    }
}
var store1 = redux.createStore(allReducer);
// store1.subscribe(function(){
//     console.log(JSON.stringify(store1.getState())); 
// })
export default store1;