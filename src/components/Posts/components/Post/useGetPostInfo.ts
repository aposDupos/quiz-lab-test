import {selectUserById} from "../../../../store/slices/users/selectors";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {postUpdated} from "../../../../store/slices/posts/postsSlice";
import {selectPostById} from "../../../../store/slices/posts/selectors";

const useGetPostInfo = (id) => {
    const dispatch = useAppDispatch()
    const {id: curUserId} = useAppSelector(state => state.user)

    const post = useAppSelector(state => selectPostById(state, id))
    const postAuthor = useAppSelector(state => selectUserById(state, post.author))

    const onLike = () => {
        const liked = post.likes.includes(curUserId)
        if (liked) {
            dispatch(postUpdated({
                id: post.id,
                changes: {
                    likes: post.likes.filter(index => index !== curUserId)
                }
            }))
        } else {
            dispatch(postUpdated({
                id: post.id,
                changes: {
                    likes: [...post.likes, curUserId]
                }
            }))
        }
    }
    return [post, postAuthor, onLike] as const
}
export default useGetPostInfo