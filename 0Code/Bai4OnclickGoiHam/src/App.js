import './App.css';

function thongbao1()
{
  alert("Đây là thông báo 1");
}
function thongbao2( ten)
{
  alert("Đây là thông báo " + ten);
}

function App() {
  return (
    <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-push-4 tho">
                <div className="btn btn-group">
                  <div onClick={()=>thongbao1()} className="btn btn-primary">Button 1</div>
                  <div onClick={()=>thongbao2("VanTho")} className="btn btn-warning">Button 2</div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;


