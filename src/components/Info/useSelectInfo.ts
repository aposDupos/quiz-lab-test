import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {selectAllUsers, selectUserById} from "../../store/slices/users/selectors";
import {useAppSelector, useSelectUser} from "../../hooks";


const useSelectInfo = () => {
    const {profileId} = useParams()
    const {id: curId} = useSelectUser()
    const user = useAppSelector(state => selectUserById(state, profileId || curId))
    const users = useAppSelector(selectAllUsers)

    const [data, setData] = useState<{ name: string, id: string }[]>()
    const [searchParams, setSearchParams] = useSearchParams()
    const type = searchParams.get('type')
    useEffect(() => {
        if (!type || type !== 'subscribes' && type !== 'subscribers') {
            setSearchParams({type: 'subscribes'})
        } else {
            setData(users
                .filter(item => user[type || 'subscribes'].includes(item.id))
                .map(item => ({name: item.name, id: item.id})))
        }
    }, [searchParams, setSearchParams])

    return [type, data] as const
}
export default useSelectInfo