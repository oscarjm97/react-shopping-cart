export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
};

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION_TYPE = {
    // ADD TO CART
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload;
        const productInCartIndex = state.findIndex((item) => item.id === id);
        let newState = [];

        if (productInCartIndex >= 0) {
            newState = [
                ...state.slice(0, productInCartIndex),
                { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
                ...state.slice(productInCartIndex + 1),
            ];
        } else {
            newState = [
                ...state,
                {
                    ...action.payload, // This contains the product
                    quantity: 1,
                },
            ];
        }

        updateLocalStorage(newState);
        return newState;
    },

    // REMOVE FROM CART
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id, quantity } = action.payload;
        const productInCartIndex = state.findIndex((item) => item.id === id);
        let newState = [];

        if (quantity > 1) {
            newState = [
                ...state.slice(0, productInCartIndex),
                { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity - 1 },
                ...state.slice(productInCartIndex + 1),
            ];
        } else {
            newState = state.filter((item) => item.id !== id);
        }

        updateLocalStorage(newState);
        return newState;
    },

    // CLEAR CART
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([]);
        return [];
    },
};

export const cartReducer = (state, action) => {
    const { type } = action;
    const updateState = UPDATE_STATE_BY_ACTION_TYPE[type];
    return updateState ? updateState(state, action) : state;
};
