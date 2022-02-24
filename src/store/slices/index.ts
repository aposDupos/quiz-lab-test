import {combineReducers} from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
    users: usersSlice,
    user: userSlice
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer