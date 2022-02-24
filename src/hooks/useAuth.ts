import useAppSelector from "./useAppSelector";

const useAuth = () => {
    const {isAuthed} = useAppSelector(state => state.user)
    return isAuthed
}
export default useAuth