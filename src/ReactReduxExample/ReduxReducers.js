const initialState = {
    items: [],
    loading: false,
    error: null // ✅ good practice
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };

        case "ADD_ITEM_SUCCESS":
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload]
            };

        case "ADD_ITEM_FAILURE": // ✅ handle errors
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};