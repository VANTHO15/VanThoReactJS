import React, { Component } from 'react';
import './App.css';
import AddUser from './Component/AddUser/AddUser';
import Header from './Component/Header/Header';
import Item from './Component/Items/Item';
import Search from './Component/Search/Search';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      AppToAddUser:true,
      data:DataUser,
      searchText:"",
      editUserStatus:false,
      userEditObject:{}
    }
  }

  
  componentWillMount() 
  {
    // kiểm tra xem có local storage chưa ( chưa có thì tạo mưới có t=rồi thì thôi)
    if(localStorage.getItem('userData') === null)
    {
      localStorage.setItem('userData',JSON.stringify( DataUser));
    }
    else
    {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  

  AppToSearch = () => 
  {
    this.setState({
      AppToAddUser: !this.state.AppToAddUser
    });
  }

  mappingDataUser=(ketqua)=>ketqua.map((value,key)=>
  (
    <Item deletebutonClick={(idUser)=>this.deletebutonClick(idUser)} changeEditUserStatus={()=>this.changeEditUserStatus()} edituser={(user)=>this.EditUser(value)} id={value.id} per={value.Permission} tel={value.tel} username ={value.name} key={key} stt={key}></Item>
  ))

  ChuyenDoiCol9Col12 = (ketqua) => 
  {
    if(this.state.AppToAddUser === true)
    {
      return (
        <div className="col-9">
        <table className="table table-striped table-striped table-hover ">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>TÊN</th>
              <th>ĐIỆN THOẠI</th>
              <th>QUYỀN</th>
              <th>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
                {this.mappingDataUser(ketqua)}
          </tbody>
        </table>
      </div>
      )
    }
    return (<div className="col-12">
      <table className="table table-striped table-striped table-hover ">
        <thead className="thead-inverse">
          <tr>
            <th>STT</th>
            <th>TÊN</th>
            <th>ĐIỆN THOẠI</th>
            <th>QUYỀN</th>
            <th>THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
               {this.mappingDataUser(ketqua)}
        </tbody>
      </table>
  </div>)
   
  }

  getTextSearch= (dl) =>
  {
    this.setState({
      searchText:dl   
    });
  }

  getNewUserData = (name, tel, Permission) => 
  {
    var item={};
    item.id =uuidv4();
    item.name=name;
    item.tel=tel;
    item.Permission= Number(Permission);
    console.log(item);
    var items= this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
   // đẩy vaofd dữ liệu
   localStorage.setItem('userData',JSON.stringify(items));
    
  }

  EditUser = (user) => 
  {
    console.log(user);
    this.setState({
      userEditObject:user
    });
  }
  
  changeEditUserStatus  = () => 
  {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  
  getUserEditInfoApp = (info) => 
  {
    console.log("thon gtin da sua xong"+ info.name);
    this.state.data.forEach((value,key) => {
      if(value.id === info.id)
      {
        value.name= info.name;
        value.tel = info.tel;
        value.Permission= info.Permission;
      } 
    })
    // đẩy vaofd dữ liệu
   localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  
  deletebutonClick  = (idUser) => 
  {

    // ham filter
    // var arr= [1,2,3];
    // var x=2;
    // arr = arr.filter(item => item!=x);
    // console.log(arr);
    

    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    });

    // đẩy vaofd dữ liệu
    localStorage.setItem('userData',JSON.stringify( tempData));
    
    // tempData.forEach((value,key)=>{
    //   if(value.id === idUser)
    //   {
        
    //   }
    // })
  }
  
  
  render() {
   // localStorage.setItem("userData",JSON.stringify( DataUser));

    var ketqua=[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1)
      {
        ketqua.push(item);
      }
    })
    return (
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
                <Search getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)} userEditObject={this.state.userEditObject}  changeEditUserStatus={()=>this.changeEditUserStatus()} editusetstatus={this.state.editUserStatus}  gettextsearch={(dl)=>this.getTextSearch(dl)} truyenveSearch={this.state.AppToAddUser}  apptosearch={()=>this.AppToSearch()} ></Search>
                {this.ChuyenDoiCol9Col12(ketqua)}
                <AddUser add={(name, tel, Permission)=>this.getNewUserData(name, tel, Permission)} AppToAddUser={this.state.AppToAddUser}></AddUser>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default App;