export const reducer = (state, action) => {
    if(action.type === 'CLEAR') {
        return {
            ...state,
            cart: []
        }
    }
    if(action.type === 'INC') {
        const increment = state.cart.map((item) => {
            if(item.id === action.payload) {
                return {...item, amount: item.amount + 1}
            }
            return item
        })
        return {
            ...state,
            cart: increment 
        }
    }
    if(action.type === 'DEC') {
        const decrement = state.cart.map((item) => {
            if(item.id === action.payload) {
                return {...item, amount: item.amount - 1}
            }
            return item
        })
        return {
            ...state,
            cart: decrement 
        }
    }
}