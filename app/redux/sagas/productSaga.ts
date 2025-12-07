// redux/sagas/productSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../actions/productActions";

function fetchProductsApi() {
  return axios.get("https://fakestoreapi.com/products");
}

function* fetchProductsSaga() {
  try {
    const response = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* watchProductSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
