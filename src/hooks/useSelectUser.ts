import useAppSelector from "./useAppSelector";

const useSelectUser = () => useAppSelector(state => state.user)

export default useSelectUser