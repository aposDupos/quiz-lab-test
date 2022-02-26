import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useAppSelector from "../../hooks/useAppSelector";
import {IPost} from "../../store/slices/interfaces/IPost";
import {selectAllPosts} from "../../store/slices/postsSlice";

const useSelectPosts = () => {
    const allPosts = useAppSelector(selectAllPosts)
    const [posts, setPosts] = useState<IPost[]>(allPosts)
    const [searchParams] = useSearchParams()
    const receivedParams: string = searchParams.get('filter') as string
    const {id: curId, subscribes: curSubscribes} = useAppSelector(state => state.user)
    useEffect(() => {
        if (receivedParams === 'subscribes') {
            setPosts(posts.filter(({author}) => (author === curId || curSubscribes.includes(author))))
        } else {
            setPosts(allPosts)
        }
    }, [searchParams])
    return posts
}
export default useSelectPosts