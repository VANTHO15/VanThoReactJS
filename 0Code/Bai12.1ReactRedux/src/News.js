import React, { Component } from 'react';
import { connect } from 'react-redux';
class News extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center">Đây là News</h3>
                <div onClick={()=>this.props.useEditStatusInStore()} className="btn btn-danger">Bấm Vào Thay Đổi State Trong Store</div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      editStatus: state.editStatus
    }
  } 
const  mapDispatchToProps= (dispatch, ownProps) => {
    return {
        // có luôn 1 cái props là hàm useEditStatusInStore
        useEditStatusInStore: () => 
        {
            dispatch({type:"CHANGE_EDIT_STATE"});
        }
    }
  } 

export default connect(mapStateToProps,mapDispatchToProps)(News);

