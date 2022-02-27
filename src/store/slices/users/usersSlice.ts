import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import IUser from "../interfaces/IUser";

export const usersAdapter = createEntityAdapter<IUser>({
    sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
        userAdded: usersAdapter.addOne,
        usersReceived: (state, action: PayloadAction<IUser[]>) => {
            usersAdapter.setAll(state, action.payload)
        },
        userUpdated: usersAdapter.updateOne
    }
})

export const {
    userAdded,
    usersReceived,
    userUpdated
} = usersSlice.actions

export default usersSlice.reducer