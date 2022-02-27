import {userAuth} from "../../../store/slices/userSlice";
import IUser from "../../../store/slices/interfaces/IUser";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector, useGenerateId} from "../../../hooks";
import {selectAllUsers} from "../../../store/slices/users/selectors";
import {userAdded} from "../../../store/slices/users/usersSlice";

const useSignIn = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const users = useAppSelector(selectAllUsers)
    const newId = useGenerateId()

    return ({name}: { name: string }) => {
        const currUser = users.find(item => item.name === name)
        if (currUser) {
            dispatch(userAuth(currUser.id))
        } else {
            const initialUser: IUser = {
                id: newId,
                name,
                subscribes: [],
                subscribers: [],
                posts: []
            }
            dispatch(userAdded(initialUser))
            dispatch(userAuth(initialUser.id))
        }
        navigate('/posts')
    }
}
export default useSignIn