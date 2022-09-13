
// import { ADD_DATA } from "./action";

const initialState = {
    data: [],  
}

const dataReducer = (state = initialState, actions ) => {
    switch ( actions.type ) {
        case 'ADD_DATA':
            return {
                ...state,
                data: [...state.data, actions.payload]
            }
        default:
            return state
            }
            }
 export default dataReducer;