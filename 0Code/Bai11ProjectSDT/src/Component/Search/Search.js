import React, { Component } from 'react';
import EditUser from '../EditUser/EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            doinut:false,
            tempValue:"",
            userObj:{}
        }
    }

    ThayDoiChu = () => 
    {
        if(this.props.truyenveSearch === true)
        {
            return  <div onClick={()=>this.props.apptosearch()} className="btn btn-danger">Ẩn đi</div>;
        }
        else return  <div onClick={()=>this.props.apptosearch()} className="btn btn-danger">Hiện lên</div>
    }

    isChange = (event) => 
    {
        
        this.setState({
            tempValue:event.target.value
        });

        this.props.gettextsearch(this.state.tempValue);
        
    }
    getUserEditInfo  = (info) => 
    {
        this.setState({
            userObj:info
        }); 
        this.props.getUserEditInfoApp(info);
    }
    
    
    iShowEditForm  = () => 
    {
        if(this.props.editusetstatus === true)
        {
            return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)} userEditObject={this.props.userEditObject} changeEditUserStatus= {()=>this.props.changeEditUserStatus()}></EditUser>
        }
    }
    
    render() {
      
        return (

                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                        <input onChange={(event)=>this.isChange(event)}   type="text" name className="form-control" placeholder="Nhập tên cần tìm" aria-describedby="helpId" />
                        <div onClick={(dl)=>this.props.gettextsearch(this.state.tempValue)} className="btn btn-info">Tìm</div>
                        </div>
                        {this.ThayDoiChu()}
                    </div>
                    <div className="row">
                        {this.iShowEditForm()}
                    </div>
                </div>
        );
    }
}

export default Search;