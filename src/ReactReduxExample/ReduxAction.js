export const AddItemAsync = (item) => {
    return (dispatch) => {
        dispatch({ type: "ADD_ITEM_REQUEST" }); // ✅ consistent naming

        setTimeout(() => {
            dispatch({
                type: "ADD_ITEM_SUCCESS",
                payload: item
            });
        }, 1000);
    };
};