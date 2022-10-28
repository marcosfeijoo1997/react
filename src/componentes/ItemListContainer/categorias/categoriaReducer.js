import { TYPES } from "./categoriaAction";

export const initialState=()=>({
    products:[
    
    ],

});

export function categoriaReducer(state=initialState(),action={}){

    switch (action.type){
        case TYPES.FETCH_PRODUCTS:{
            return Object.assign({}, state, {
                products: action.payload
             })
        }


          default:
            return state;
    }
}