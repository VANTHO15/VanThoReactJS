import React, { Component } from 'react';
import noteData from ".././firebaseConnect"
import firebase from 'firebase/app';
import "firebase/database";
import {connect} from "react-redux"
class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataFirebase:[],
        }
    }
    
    componentWillMount() {
         // lấy dữ liệu ra bỏ vào state
         var data = firebase.database().ref("dataForNote/");
         data.on("value", (notes) => 
         {
             var arrayData=[];
             notes.forEach(element => {
                 const key = element.key;
                 const noteTitle = element.val().noteTitle;
                 const noteContent = element.val().noteContent;
                 arrayData.push({
                     id:key,
                     noteTitle:noteTitle,
                     noteContent:noteContent
                 })
             });
             this.setState({
                 dataFirebase:arrayData
             });
         }
         )
    }
    
    twoActionBTN  = (id, noteContent,noteTitle) =>
     {
        this.props.changeditstatus();
        var item={};
        item.id=id;
        item.noteTitle=noteTitle;
        item.noteContent=noteContent;
        this.props.getEditdata(item);
        
     }
     delete  = (id) =>
      {
         this.props.deleteByID(id);
      }
     
    getData  = () =>
     {
        if(this.state.dataFirebase)
        {
          return  this.state.dataFirebase.map((value,key)=>{
                return(
                    <div id="noteList" role="tablist" aria-multiselectable="true">
                        <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href={"#number"+key} aria-expanded="true" aria-controls="noteContent1">
                                {value.noteTitle}
                            </a>
                            <div className="btn-group float-right">
                                <button onClick={()=>this.twoActionBTN(value.id,value.noteContent,value.noteTitle)} className="btn btn-outline-info">Sửa</button>
                                <button onClick={()=>this.delete(value.id)} className="btn btn-outline-danger">Xóa</button>
                            </div>
                            </h5>
                        </div>
                        <div id={"number"+key} className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                            {value.noteContent}
                            </div>
                        </div>
                        </div>
                        {/* end 1 item  */}
                    </div>
                )

            })
        }
     }
    
    render() {
        return (
            <div className="col-8">
                {this.getData()}
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
        },
        getEditdata: (editObject) => {
            dispatch({type:"GET_EDIT_DATA",editObject})
        },
        deleteByID: (idDelete) => {
            dispatch({type:"DELETE",idDelete})
        }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(NoteList);
