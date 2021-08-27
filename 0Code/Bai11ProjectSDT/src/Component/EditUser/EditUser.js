import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            Permission:this.props.userEditObject.Permission
        }
    }

    isChange  = (event) =>
     {
         const name = event.target.name;
         const value = event.target.value;
         this.setState({
             [name]:value
         });
     }
    
     savebtn  = () => 
     {
         var info={};
         info.id=this.state.id;
         info.name=this.state.name;
         info.tel=this.state.tel;
         info.Permission=this.state.Permission;
         this.props.getUserEditInfo(info);
         this.props.changeEditUserStatus();
     }
     
    
    render() {
        console.log(this.state);
        
        return (
            <div className="card text-left col-12">
                     <form>
                            <div className="card text-white border-warning mb-3">
                                <div className="card-header">Sửa thông tin User</div>
                                    <div className="card-body text-success">
                                        <div className="form-group">
                                        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" id className="form-control" placeholder="Tên user" aria-describedby="helpId" />
                                        </div>
                                        <div className="form-group ">
                                        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel}  type="text" name="tel" id className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />
                                        </div>
                                        <div className="form-group">
                                        <label className="hihi">Chọn quyền mặc định</label>
                                        <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.Permission}  name="Permission" className="form-control" id="exampleFormControlSelect1">
                                            <option value={1}>Admin</option>
                                            <option value={2}>Modrator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                        </div>
                                        <div className="form-group">
                                        <input type="button" onClick={()=>this.savebtn()}  className="btn btn-block btn-success" value="Lưu thông tin"/>
                                    </div>
                                </div>
                            </div>
                     </form>
                 </div>
        );
    }
}

export default EditUser;