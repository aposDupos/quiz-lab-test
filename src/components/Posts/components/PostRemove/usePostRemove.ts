import {userUpdated} from "../../../../store/slices/users/usersSlice";
import {postRemoved} from "../../../../store/slices/posts/postsSlice";
import {useAppDispatch, useSelectUser} from "../../../../hooks";

const usePostRemove = () => {
    const dispatch = useAppDispatch()
    const {id, posts} = useSelectUser()
    const postRemove = (postId) => {
        const newPosts = posts.filter(post => post !== postId)
        dispatch(userUpdated({id, changes: {posts: newPosts}}))
        dispatch(postRemoved(postId))
    }
    return [id, postRemove] as const
}

export default usePostRemove