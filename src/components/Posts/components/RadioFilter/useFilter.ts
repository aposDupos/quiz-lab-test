import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const useFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter')
    useEffect(() => {
        if (!filter) setSearchParams({filter: 'all'})
    }, [])
    const setParams = (value: string) => setSearchParams({filter: value})
    return [filter, setParams] as const
}
export default useFilter