import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , INCREMENT , DECREMENT } from "./Constant";

export const addToCart = (data) => {
    console.warn('addToCartAction Called', data);

    return{
        type :ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) =>{
    console.warn('removeToCart Called', data);

    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const EmptyCart = () =>{
    console.log('emptyCartAction Called');

    return{
        type:EMPTY_CART
    }
}




export const addToWishlist = (data) => {
    console.warn('addToWishlistAction Called', data);

    return{
        type :ADD_TO_WISHLIST,
        data
    }
}

export const RemoveToWishlist = (data) =>{
    console.warn('removeToWishlist Called', data);

    return{
        type:REMOVE_TO_WISHLIST,
        data
    }
}

export const EmptyWishlist = () =>{
    console.log('emptyWishlistAction Called');

    return{
        type:EMPTY_WISHLIST
    }
}




export const increment = (data) => {
    return{
      type:INCREMENT,
      data
    }

}

export const decrement = (data) => {
 return{
   type:DECREMENT,
   data
 }
}