import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import {RootState} from "./index";
import {IPost} from "./interfaces/IPost";

export const postsAdapter = createEntityAdapter<IPost>({
    sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        postAdded: postsAdapter.addOne,
        postUpdated: postsAdapter.updateOne
    }
})

export const {
    postAdded,
    postUpdated
} = postsSlice.actions
export const {
    selectById: selectPostById,
    selectIds: selectPostIds,
    selectEntities: selectPostEntities,
    selectAll: selectAllPosts,
    selectTotal: selectTotalPosts
} = postsAdapter.getSelectors<RootState>(state => state.posts)

export default postsSlice.reducer