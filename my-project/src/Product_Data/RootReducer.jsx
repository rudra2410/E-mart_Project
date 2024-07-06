import {combineReducers} from 'redux'
import reducer from './Redux/Reducer'
import ProductReducer from './ProductRedux/ProductReducer'
import Wish_reducer from './Redux/Wish_Reducer'

const RootReducer =combineReducers({
    reducer,
    Wish_reducer,
    ProductReducer
})

export default RootReducer