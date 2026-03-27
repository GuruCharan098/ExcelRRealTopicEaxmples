import { takeEvery, put, delay } from "redux-saga/effects";

function* addItemSaga(action) {
    // start loading
    yield put({ type: "ADD_ITEM_START" });

    // simulate API delay
    yield delay(1000);

    // success
    yield put({
        type: "ADD_ITEM_SUCCESS",
        payload: action.payload,
    });
}

export function* rootSaga() {
    yield takeEvery("ADD_ITEM_REQUEST", addItemSaga);
}