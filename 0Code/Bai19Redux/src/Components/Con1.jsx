import React from 'react';
import { useDispatch, useSelector } from "react-redux"

function Con1(props) {
    const state2 = useSelector(state => state.state2)
    const dispatch = useDispatch();

    const handleCallFunction= ()=>{
        dispatch({type:"HanhDong2"});
    }
    const handleCallFunctionSentData  = (data) => 
    {
        const truyenveStore = data;
        dispatch({type:"HanhDong1", truyenveStore})
    }
    return (
        <div>
            {state2} 
            <button onClick={handleCallFunction}>Thực hiện gọi hàm</button>
            <button onClick={()=>handleCallFunctionSentData("Tham số truyen tới")}>Thực hiện gọi hàm truyền tham số</button>
            
        </div>
    );
}
export default (Con1);