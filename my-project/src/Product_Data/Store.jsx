import RootReducer from "./RootReducer";
import {configureStore} from '@reduxjs/toolkit'
import ProductSaga from "./ProductRedux/ProductSaga";
import createSagaMiddleware from 'redux-saga'

const sagaMiddlewere = createSagaMiddleware()

const store = configureStore({
    reducer:RootReducer,
    middleware:()=> [sagaMiddlewere]
})

sagaMiddlewere.run(ProductSaga)

export default store