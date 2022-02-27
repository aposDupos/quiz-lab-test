import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import {IPost} from "../interfaces/IPost";

export const postsAdapter = createEntityAdapter<IPost>({
    sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        postAdded: postsAdapter.addOne,
        postUpdated: postsAdapter.updateOne,
        postRemoved: postsAdapter.removeOne
    }
})

export const {
    postAdded,
    postUpdated,
    postRemoved
} = postsSlice.actions

export default postsSlice.reducer