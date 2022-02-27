import {useSearchParams} from "react-router-dom";
import {useAppSelector, useSelectUser} from "../../hooks";
import {selectAllPosts} from "../../store/slices/posts/selectors";

const useSelectPosts = () => {
    const posts = useAppSelector(selectAllPosts)
    const [searchParams] = useSearchParams()
    const receivedParams: string = searchParams.get('filter') as string
    const {id: curId, subscribes: curSubscribes} = useSelectUser()
    if (receivedParams === 'subscribes') {
        return posts.filter(({author}) => (author === curId || curSubscribes.includes(author)))
    }
    return posts
}
export default useSelectPosts