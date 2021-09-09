import React, { useState } from 'react';
import PropTypes from 'prop-types';

ThemData.propTypes = {
    onSubmit: PropTypes.func,
};
ThemData.defaultProps ={
    onSubmit: null,
}

function ThemData(props) {
    
    const [value, setValue] = useState("");

    function handleChange(e){
        // const name = e.target.name;
        const data = e.target.value;
        console.log(data);
        setValue( data);
    }
    function handleSubmit(e){  // bấm enter không bị reload trang
        e.preventDefault();
        if(! props.onSubmit) return ;
        var noidung ={
            title: value
        }
        props.onSubmit(noidung);

        setValue(""); // reset value
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' name="form 1" value={value} onChange={(e)=>handleChange(e)}></input>
        </form>
    );
}

export default ThemData;