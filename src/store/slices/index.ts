import {combineReducers} from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import userSlice from "./userSlice";
import postsSlice from "./posts/postsSlice";

const rootReducer = combineReducers({
    users: usersSlice,
    user: userSlice,
    posts: postsSlice
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer