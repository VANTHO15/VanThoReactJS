import React from 'react';
import PropTypes from 'prop-types';

ThangCon.propTypes = {
    todos: PropTypes.array,   // pta
    onTodoClick : PropTypes.func,  // ptf
};
ThangCon.defaultProps = {
    todos:[],
    onTodoClick:null,
}

function ThangCon(props) {

    const {todos, onTodoClick} = props;

    function handleClick(todo){
        if(onTodoClick)
        {
            onTodoClick(todo);
        }
    }
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li 
                key={todo.id}
                onClick={()=>handleClick(todo)}
                >
                    {todo.title}
                </li> 
            ))}
        </ul>
    );
}

export default ThangCon; 