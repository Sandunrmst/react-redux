const defaultState = {
    number:5,
}

const reducer = (state = defaultState, action) => {
    if(action.type === 'increment'){
        return {
            number: state.number + action.data
        }
    }
    else if(action.type === 'decrement'){
        return{
            number: state.number - action.data
        }
    }
    
    return state;
}

export default reducer