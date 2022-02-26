import useAppDispatch from "../../../hooks/useAppDispatch";
import {postUpdated, selectPostById} from "../../../store/slices/postsSlice";
import useAppSelector from "../../../hooks/useAppSelector";
import {selectUserById} from "../../../store/slices/usersSlice";

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