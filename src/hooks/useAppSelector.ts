import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/slices";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector