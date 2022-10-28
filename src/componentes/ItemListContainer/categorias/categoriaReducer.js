import { TYPES } from "./categoriaAction";

export const categoriaInitialState={
    products:[
    
    ],
   
};

export function categoriaReducer(state,action){

    switch (action.type){
        case TYPES.FETCH_PRODUCTS:{
            state.products=action.payload;
        }


          default:
            return state;
    }
}