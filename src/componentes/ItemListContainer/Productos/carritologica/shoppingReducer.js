import { TYPES } from "./shoppingAction";

export const shoppingInitialState={

    cart:[],
};
/*
case TYPES.ADD_TO_CART:{
    let newItem = state.products.find ((product)=>product.id===action.payload)

    let itemInCart=state.cart.find ((item)=>item.id===newItem.id)
    return  itemInCart ? {

        ...state , cart :state.cart.map((item)=>item.id===newItem.id? {...item,quantity:item.quantity+1}:item)

    }:{
        ...state , 
        cart:[...state.cart ,{...newItem,quantity:1}]
    }



}*/

export function shoppingReducer(state,{type,payload}){
    switch (type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.cart?.find (({name})=>name===payload)
            
            if(newItem)
                return {...state,cart:state.cart.map((item)=>item.name===newItem.name? {...item,quantity:item.quantity+1}:item)}
            else
                return {...state,cart:[...state.cart,{name:payload,cantidad:1}]}

        

        }
        case TYPES.REMOVE_ONE_FROM_CART:{

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.CLEAR_CART:{

        }

          default:
            return state;
    }
}