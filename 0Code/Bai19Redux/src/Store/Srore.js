var redux = require('redux');
const VanThoInitialState = {
    state1:true,
    state2:"Nguyen Van Tho"
}
const VanTho = (state = VanThoInitialState, action) => {
    switch (action.type) {
        case "HanhDong1":
            const VanThoState1 = {...state, state1: !state.state1}
            console.log(action.truyenveStore);
            return VanThoState1

        case "HanhDong2":
            const VanThoState2 = {...state, state2: "Đã thay đổi"}
            return VanThoState2

        case "HanhDong3":
            return state
        
        default:
            return state
    }
}
var myStore = redux.createStore(VanTho);
myStore.subscribe(function(){
    console.log(JSON.stringify(myStore.getState())); 
})
export default myStore;