import React, { useEffect, useState } from 'react';
import ThangCon from './Components/ThangCon';
import './App.css';
import ThemData from './Components/ThemData';

function App() {
  const [todoList, setTodoList] = useState([
    {id:1 , title: " Nguyễn Văn Thọ"},
    {id:2 , title: " Nguyễn Văn Thanh"},
    {id:3 , title: " Nguyễn Văn Tài"},
    {id:4 , title: " Thái Thị Nga"},
  ])
  useEffect(()=>{
    async function fetchAPI(){
        try {
          const resquesURL = "http://js-post-api.herokuapp.com/api/posts?_limit=1&_page=1";
          const response= await fetch(resquesURL);
          const responseJSON = await response.json();
          console.log({responseJSON})

          const {data} = responseJSON;
          // setState nữa là ok 
        } catch (error) {
          console.log("Lỗi rồi");
        }
    }
    fetchAPI();
  },[]);
  function hanleTodoClick(todo)
  {
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0)  return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);  // hàm ni hay, xóa đc mà cx thêm đc
    setTodoList(newTodoList);
  }
  function NhanVeTuThemData(e){
    var data={
      id: todoList.length + 1,
      title:e.title
    }
    const newtodoListThem =[...todoList];
    newtodoListThem.push(data);
    setTodoList(newtodoListThem);
    
  }
  return (
    <div>
      <h1> React Hook truyền Props</h1>
      <ThemData onSubmit = {(e)=>NhanVeTuThemData(e)}/>
      <ThangCon todos={todoList} onTodoClick={(todo)=>hanleTodoClick(todo)} />
    </div>
  );
}

export default App;
