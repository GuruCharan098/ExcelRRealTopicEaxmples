const initialState = {
    items: [],
    loading: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_START":
            return {
                ...state,
                loading: true,
            };

        case "ADD_ITEM_SUCCESS":
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload],
            };

        default:
            return state;
    }
};