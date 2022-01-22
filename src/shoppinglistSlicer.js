import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    shoppingList:[]
}


const shoppingListSlice = createSlice(
    {
        name:"shoppingList",
        initialState,
        reducers:{
            addItemsToShoppingList:(state, action) => {
                state.shoppingList = [...state.shoppingList, action.payload]
            },
            deleteShoppingListItem: (state, action) => {
                state.shoppingList = state.shoppingList.filter(item => item.id !== action.payload)
            }
        }
    }
)

export const {addItemsToShoppingList, deleteShoppingListItem} = shoppingListSlice.actions

export default shoppingListSlice.reducer;