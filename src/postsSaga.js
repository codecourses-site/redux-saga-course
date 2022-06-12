import { call, takeLatest, put } from "redux-saga/effects";
import { setPosts } from "./postsSlice";
import { FETCH_POSTS } from "./postsActions";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (e) {}
}

export default function* rootSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
}
