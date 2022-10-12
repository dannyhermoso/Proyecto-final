import { configureStore } from '@reduxjs/toolkit'

import foodsReducer from '../slices/foodSlice.js'
import shoppingReducer, { getTotals } from '../slices/shoppingSlice.js'
import userReducer from '../slices/userSlice'
import restaurantsReducer from '../slices/restaurantsSlice'
import shopReducer from '../slices/shopSlice'

const store = configureStore({
    reducer:{
        foods: foodsReducer,
        shopping: shoppingReducer,
        user: userReducer,
        restaurants: restaurantsReducer,
        shop: shopReducer
    }
})
store.dispatch(getTotals())

export default store;