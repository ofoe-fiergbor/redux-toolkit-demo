import {configureStore} from "@reduxjs/toolkit";
import ShoppingListReducer from "./shoppinglistSlicer"

export const store = configureStore({
    reducer:{
        list: ShoppingListReducer
    }
})