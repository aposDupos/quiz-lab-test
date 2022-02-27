import useAppDispatch from "../../../hooks/useAppDispatch";
import {userRemove} from "../../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const useSignOut = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    return () => {
        dispatch(userRemove())
        navigate('/')
    }
}
export default useSignOut