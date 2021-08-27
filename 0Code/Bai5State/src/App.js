import React, { Component } from 'react';
import './App.css'

class App extends Component 
{
  constructor(props) 
    {
      super(props);
      this.state =
      {
        trangthai:0,
        x:0
      }
    }
  
 NutBam = () => 
{
  if(this.state.trangthai === 0)
  {
    this.setState({trangthai:1});
  }
  else
  {
    this.setState({trangthai:0});
  }
  console.log(this.state.trangthai);
}

 CheckChange  = () => 
{
  if(this.state.trangthai === 1)
  {
    return (<h3> Văn Thọ</h3>);
  }
  else
  {
    return (<h3> Chu Mục</h3>);
  }
}
  render() 
  {
    return (
      <div>
          <div className="container">
            <div className="row">

              <div className="col-md-2 col-md-push-5">
                  <div onClick={()=>this.NutBam()} className="btn btn-danger"> Use State </div>
                  {this.CheckChange()}
              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default App;