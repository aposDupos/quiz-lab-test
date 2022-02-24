import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import IUser from "./interfaces/IUser";
import {RootState} from "./index";

export const usersAdapter = createEntityAdapter<IUser>({
    sortComparer: (a, b) => a.id - b.id,
});

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
        userAdded: usersAdapter.addOne,
        usersReceived: (state, action: PayloadAction<IUser[]>) => {
            usersAdapter.setAll(state, action.payload)
        }
    }
})

export const {
    userAdded,
    usersReceived
} = usersSlice.actions
export const {
    selectById: selectUserById,
    selectIds: selectUserIds,
    selectEntities: selectUserEntities,
    selectAll: selectAllUsers,
    selectTotal: selectTotalUsers
} = usersAdapter.getSelectors<RootState>(state => state.users)
export default usersSlice.reducer