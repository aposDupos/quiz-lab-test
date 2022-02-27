import {message} from "antd";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector, useSelectUser} from "../../hooks";
import {selectAllUsers} from "../../store/slices/users/selectors";
import {userUpdated} from "../../store/slices/users/usersSlice";

const useChangeName = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const user = useSelectUser()
    const users = useAppSelector(selectAllUsers)
    return ({name}: { name: string }) => {
        if (name === user.name) {
            return message.warn('Вы ввели такое же имя')
        }
        if (users.filter(item => item.name === name).length > 0) {
            return message.error('Имя уже занято')
        }
        dispatch(userUpdated({id: user.id, changes: {name}}))
        message.success('Имя успешно изменено', 0.4)
            .then(() => navigate('/profile'))
    }
}
export default useChangeName