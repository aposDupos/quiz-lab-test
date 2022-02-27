import {RootState} from "../index";
import {postsAdapter} from "./postsSlice";

export const {
    selectById: selectPostById,
    selectIds: selectPostIds,
    selectEntities: selectPostEntities,
    selectAll: selectAllPosts,
    selectTotal: selectTotalPosts
} = postsAdapter.getSelectors<RootState>(state => state.posts)