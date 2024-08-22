import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import scategoriesReducer from "../features/scategorieSlice"
import authReducer from "../features/authSlice"
import {cartReducer,cartMiddleware } from "../features/cartSlice"
const store = configureStore({
  reducer: {
    storearticles:articlesReducer,
    storescategories: scategoriesReducer,
    storecart : cartReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
})
export default store
