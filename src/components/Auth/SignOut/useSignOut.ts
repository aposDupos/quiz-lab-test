import useAppDispatch from "../../../hooks/useAppDispatch";
import {userRemove} from "../../../store/slices/userSlice";

const useSignOut = () => {
    const dispatch = useAppDispatch()
    return () => dispatch(userRemove())
}
export default useSignOut