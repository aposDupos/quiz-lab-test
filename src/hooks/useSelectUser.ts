import useAppSelector from "./useAppSelector";
import {selectUserById} from "../store/slices/users/selectors";

const useSelectUser = () => {
    const {id} = useAppSelector(state => state.user)
    return useAppSelector(state=> selectUserById(state, id))
}

export default useSelectUser