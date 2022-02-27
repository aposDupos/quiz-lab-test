import {
    createSlice,
} from '@reduxjs/toolkit'

const initialState: { id: string, isAuthed: boolean } = {
    id: '',
    isAuthed: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuth: (state, action) => {
            return {id: action.payload, isAuthed: true}
        },
        userRemove: () => initialState,
    }
})

export const {
    userAuth,
    userRemove
} = userSlice.actions

export default userSlice.reducer