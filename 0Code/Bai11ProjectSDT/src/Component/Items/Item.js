import React, { Component } from 'react';


class Item extends Component {

PhanQuyen = () => 
{
    if((this.props.per == 0) || (this.props.per == "0")) return "Admin";
    if((this.props.per == 1) || (this.props.per == "1")) return "Admin";
    if((this.props.per == 2) || (this.props.per == "2")) return "Modrator";
    if((this.props.per == 3) || (this.props.per == "3")) return "Nomal user";
}

onclicksua = () =>
 {
    this.props.changeEditUserStatus();
    this.props.edituser();
 }

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.username}</td>
                <td>{this.props.tel}</td>
                <td>{this.PhanQuyen()}</td>
                <td>
                    <div className="btn-group">
                    <div onClick={()=>this.onclicksua()} className="btn btn-warning sua"><div className="fa fa-edit"></div>Sửa</div>
                    <div onClick= {(idUser)=>this.props.deletebutonClick(this.props.id)} className="btn btn-danger xoa"><div className="fa fa-trash"></div>Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Item;