import {selectUserById} from "../../store/slices/users/selectors";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useSelectUser from "../../hooks/useSelectUser";
import useAppSelector from "../../hooks/useAppSelector";
import {selectAllPosts} from "../../store/slices/posts/selectors";

const useSelectProfileInfo = () => {
    const {profileId} = useParams()
    const navigate = useNavigate()
    const {id} = useSelectUser()
    const [isLoggedUser, setLoggedUser] = useState(!!(profileId || id))
    const profile = useAppSelector(state => selectUserById(state, (profileId || id)))
    useEffect(() => {
        if (profileId === id) {
            navigate('/profile')
        }
        if (!!profileId) {
            setLoggedUser(false)
        } else {
            setLoggedUser(true)
        }
    }, [profileId, id, navigate])

    const posts = useAppSelector(selectAllPosts)
        .filter(post => post.author === profile.id)
    return [posts, profile, isLoggedUser] as const
}
export default useSelectProfileInfo