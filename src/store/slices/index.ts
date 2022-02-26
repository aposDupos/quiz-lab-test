import {combineReducers} from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import userSlice from "./userSlice";
import postsSlice from "./postsSlice";

const rootReducer = combineReducers({
    users: usersSlice,
    user: userSlice,
    posts: postsSlice
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer