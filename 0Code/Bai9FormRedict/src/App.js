import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      fName:"",
      fPhone :"",
      fEmail:"",
      fNgay:"thu4",
      fAnh:""
    }
  }
  

  SubmitForm = (event) => 
  {
    event.preventDefault();
    var ten = this.state.fName;
    var sdt = this.state.fPhone;
    var email = this.state.fEmail;
    var ngay = this.state.fNgay;
    var anh = this.state.fAnh;
    console.log(ten + " "+ sdt+ " "+ email+ " "+ ngay+ " "+anh);
  }

  isChange = (event) =>
   {
     const ten = event.target.name;
     const giatri = event.target.value;
     this.setState({
       [ten]:giatri
     });
   }
   isFileChange = (event) =>
    {
      // const fAnh= event.target.files[0];
      const tenanh= event.target.files[0].name;
      this.setState({
        fAnh:tenanh
      });

    }
  
  
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-push-3">

                  
                <form  method="POST" role="form">
                  <div className="form-group">
                    <label >Điền thông tin</label>
                    <input onChange={(event)=>this.isChange(event)} name="fName" type="text" className="form-control"  placeholder="Nhập tên" />
                    <input onChange={(event)=>this.isChange(event)} name = "fPhone" type="text" className="form-control"  placeholder="Nhập Sdt" />
                    <input onChange={(event)=>this.isChange(event)} name ="fEmail" type="text" className="form-control"  placeholder="Nhập email" />
                  </div>
                  <button onClick={(event)=>this.SubmitForm(event) }  className="btn btn-primary">Submit</button>
                  <button onClick={(event)=>this.SubmitForm(event) }  className="btn btn-danger">Submit</button>
              </form>

              <select value={this.state.fNgay} onChange={(event)=>this.isChange(event)} name="fNgay" id="input" className="form-control" required="required">
                <option value="thu2">Ngày Thứ 2</option>
                <option value="thu3">Ngày Thứ 3</option>
                <option value="thu4">Ngày Thứ 4</option>
                <option value="thu5">Ngày Thứ 5</option>
              </select>

              <input onChange={(event)=>this.isFileChange(event)} type="file" className="form-control-file" name="fAnh"/>
              <p className="help-block text-danger"></p>
              
              
            </div>
          </div>
        </div>
    );
  }
}

export default App;