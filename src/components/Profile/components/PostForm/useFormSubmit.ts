import {IPost} from "../../../../store/slices/interfaces/IPost";
import {postAdded} from "../../../../store/slices/posts/postsSlice";
import {userUpdated} from "../../../../store/slices/users/usersSlice";
import {useAppDispatch, useGenerateId, useSelectUser} from "../../../../hooks";

const useFormSubmit = () => {
    const dispatch = useAppDispatch()
    const id = useGenerateId()
    const {id: userId, posts} = useSelectUser()
    return (text) => {
        const post: IPost = {
            id,
            text,
            author: userId,
            likes: [],
            createdAt: Date.now() + ''
        }
        dispatch(postAdded(post))
        dispatch(userUpdated({id: userId, changes: {posts: [...posts, id]}}))
    }
}
export default useFormSubmit