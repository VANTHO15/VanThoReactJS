var redux = require('redux');
var oldState = 
{
    num: ["man hình", "chuột", "Bàn phim"],
    editStatus:true
}
const numInitialState = ["man hình", "chuột", "Bàn phim"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state,action.NewTho];
        case "DELETE":
            return [state.filter((value,key)=>key !==action.chiso)];
        default:
            return state;
    }
}
const editStatusInitialState = true;
const editStatusReducer = (state = editStatusInitialState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATE":
        return !state;
        default:
            return state;
    }
}
const allReducers = redux.combineReducers({
    num:numReducer,
    editStatus:editStatusReducer
})
var store1 = redux.createStore(allReducers);
store1.subscribe(() => 
{
    console.log(store1.getState());
}
)
store1.dispatch({type:"CHANGE_EDIT_STATE"});
store1.dispatch({
    type:"ADD_NEW",
    NewTho:"Tai Nghe"
})
store1.dispatch({
    type:"DELETE",
    chiso:1
}) 

export default store1;