const InitialState = {
    count : 0
}

export const creatReducre = (state = InitialState , action)=>{
    switch(action.type){
        case "INCREMENT":
            return{...state, count : state.count+1}
        case "DECREMENT" :
            return{...state, count : state.count-1}
        default:
            return state; 
    }
}