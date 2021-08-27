import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangthaichinhsua:false,
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
    }
    HienThiNut = () =>
     {
         if(this.state.trangthaichinhsua === true)
         {
            return <div onClick={()=>this.ThayDoiTrangThai()} className="btn btn-block btn-outline-danger">Thêm mới</div>;
         }
         else
         {
            return <div onClick={()=>this.ThayDoiTrangThai()} className="btn btn-block btn-outline-success  ">Đóng lại</div>;
         }

     }

     ThayDoiTrangThai = () => 
     {
        this.setState({
           trangthaichinhsua:!this.state.trangthaichinhsua
        });
     }
     
     HienThiForm = () => 
     {
         if(this.state.trangthaichinhsua === false)
         {
             return (
                
                <div className="card text-left">
                     <form>
                            <div className="card border-success mb-3">
                                <div className="card-header">Thêm mới User</div>
                                    <div className="card-body text-success">
                                        <div className="form-group">
                                        <input onChange={(event)=>this.isChange(event)} type="text" name="name" id className="form-control" placeholder="Tên user" aria-describedby="helpId" />
                                        </div>
                                        <div className="form-group">
                                        <input onChange={(event)=>this.isChange(event)} type="text" name="tel" id className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Chọn quyền mặc định</label>
                                        <select onChange={(event)=>this.isChange(event)} name="Permission" className="form-control" id="exampleFormControlSelect1">
                                            <option value={1}>Admin</option>
                                            <option value={2}>Modrator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                        </div>
                                        <div className="form-group">
                                        <input type="reset" onClick={()=>this.props.add(this.state.name,this.state.tel, this.state.Permission)} className="btn btn-block btn-primary" value="Thêm mới"/>
                                    </div>
                                </div>
                            </div>
                     </form>
                 </div>
             )
         }
     }
     
     AnHienForm = () => 
     {
         if(this.props.AppToAddUser === true)
         {
             return (
               <div>
                {this.HienThiNut()}
                {this.HienThiForm()}
               </div>
             )
         }
     }
     
     isChange  = (event) => 
     {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });
        // đóng gói lại thành 1 mang
        var item={};
        item.id=this.state.id;
        item.name=this.state.name;
        item.tel=this.state.tel;
        item.Permission=this.state.Permission;
     }
     
     
    
    render() {
       
        
        return (
          
            <div className="col-3">

              {this.AnHienForm()}
            
             </div>
                   
        );
    }
}

export default AddUser;