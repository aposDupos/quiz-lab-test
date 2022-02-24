import useAppSelector from "../../../hooks/useAppSelector";
import {selectAllUsers, userAdded} from "../../../store/slices/usersSlice";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {userAuth} from "../../../store/slices/userSlice";
import IUser from "../../../store/slices/interfaces/IUser";
import {useNavigate} from "react-router-dom";

const useSignIn = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const users = useAppSelector(selectAllUsers)
    const newId = users.length + 1
    const login = ({name}: { name: string }) => {
        const currUser = users.find(item => item.name === name)
        if (currUser) {
            dispatch(userAuth(currUser))
        } else {
            const initialUser: IUser = {
                id: newId,
                name,
                subscribes: [],
                subscribers: [],
                posts: []
            }
            dispatch(userAdded(initialUser))
            dispatch(userAuth(initialUser))
        }
        navigate('posts')
    }
    return login
}
export default useSignIn