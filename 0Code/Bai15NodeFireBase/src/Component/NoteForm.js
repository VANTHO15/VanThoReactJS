import React, { Component } from 'react';
import {connect} from "react-redux"
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle:"",
            noteContent:"",
            id:""
        } 
    }
    isChange  = (event) => 
    {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        
        
        this.setState({
            [name]:value
        });
    }
    addData  = (title,content) => 
    {
        var item={};
        item.noteTitle= title;
        item.noteContent= content;
        // gửi item lên store để xử lý
        this.props.addDataStore(item);
    }
    
    componentWillMount() {
        if(this.props.editItem)
        {
            this.setState({
                noteTitle:this.props.editItem.noteTitle,
                noteContent:this.props.editItem.noteContent,
                id:this.props.editItem.id
            });
        }
    }
    
    addDataUpdate  = () => 
    {
        var item={};
        item.id=this.props.editItem.id;
        item.noteTitle= this.state.noteTitle;
        item.noteContent= this.state.noteContent;
        console.log("click");
        
        // gửi item lên store để xử lý
        this.props.addDataStoreUpdate(item);
        this.props.changeditstatus();
    }
    
    SuaHayThem  = () => 
    {
        if(this.props.isEdit)
        {
            return (
                <div className="col-12">
                        <h3>Sửa Nội Dung</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="noteTitle">Tiêu đề note</label>
                                <input defaultValue={this.props.editItem.noteTitle} onChange={(event)=>this.isChange(event)} type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="noteContent">Nội dung note</label>
                                <textarea defaultValue={this.props.editItem.noteContent} onChange={(event)=>this.isChange(event)} type="text" name="noteContent" id="noteContent" className="form-control" placeholder="Nội dung note" aria-describedby="helpId"  />
                            </div>
                            <button onClick={()=>this.addDataUpdate()}  type="reset" className="btn btn-block btn-warning">Lưu</button>
                        </form>
                </div>  
            )
        }
        else return (
            <div className="col-12">
                        <h3>Thêm Nội Dung</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="noteTitle">Tiêu đề note</label>
                                <input defaultValue="" onChange={(event)=>this.isChange(event)} type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="noteContent">Nội dung note</label>
                                <textarea onChange={(event)=>this.isChange(event)} type="text" name="noteContent" id="noteContent" className="form-control" placeholder="Nội dung note" aria-describedby="helpId" defaultValue={""} />
                            </div>
                            <button onClick={()=>this.addData(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-block btn-warning">Thêm</button>
                        </form>
                </div>  
        )
    }
    
    render() {
        console.log(this.props.editItem);
        
        return (
                <div className="col-4">
                   {this.SuaHayThem()}
                </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit,
        editItem:state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        addDataStoreUpdate: (getItemUpdate) => {
            dispatch({type:"UPDATE_DATA",getItemUpdate})
        },
        changeditstatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteForm);


