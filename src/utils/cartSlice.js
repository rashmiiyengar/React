import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItem : (state,action)=>{
             
            //Vanilla Redux => DONT MUTATE STATE,Return was mandatory
            //const newState = [...state]
            //newState.items.push(action.payload)
            //return newState

            //Redux Toolkit we have to mutate the state
            //mutating the state we are directly modifying the state,return not mandatory
            
            state.items.push(action.payload)
        },  
        removeItem : (state)=>{
            state.items.pop();
            console.log(current(state));
        },
        clearCart : (state) =>{
           // state.items.length = 0; // state as [] empty array
            //Reduxttoolkit say either mutate the stae or return a new State
           return {items:[]};
        }
    }
});

export const {addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;
