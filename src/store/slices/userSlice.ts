import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import IUser from "./interfaces/IUser";

const initialState: IUser & { isAuthed: boolean } = {
    id: -1,
    name: '',
    subscribers: [],
    subscribes: [],
    posts: [],
    isAuthed: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuth: (state, action) => {
            return {...action.payload, isAuthed: true}
        },
        userRemove: () => initialState
    }
})

export const {
    userAuth,
    userRemove
} = userSlice.actions

export default userSlice.reducer