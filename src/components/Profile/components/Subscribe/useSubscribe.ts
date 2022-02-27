import {useState} from "react";
import {useParams} from "react-router-dom";
import {userUpdated} from "../../../../store/slices/users/usersSlice";
import {selectUserById} from "../../../../store/slices/users/selectors";
import {useAppDispatch, useAppSelector, useSelectUser} from "../../../../hooks";

const useSubscribe = () => {
    const dispatch = useAppDispatch()
    const {profileId} = useParams()
    const {id, subscribes} = useSelectUser()
    const profileUser = useAppSelector(state => selectUserById(state, profileId || id))
    const [isSubscribed, setSubscribed] = useState<boolean>(subscribes.includes(profileUser.id))
    const subscribeHandler = () => {
        let newSubscribes = []
        let newSubscribers = []
        if (isSubscribed) {
            newSubscribes = subscribes.filter(subscribe => subscribe !== profileUser.id)
            newSubscribers = profileUser.subscribers.filter(subscriber => subscriber !== id)
            setSubscribed(false)
        } else {
            newSubscribes = [...subscribes, profileUser.id]
            newSubscribers = [...profileUser.subscribers, id]
            setSubscribed(true)
        }
        //Обновляем пользователя, который в системе
        dispatch(userUpdated({id, changes: {subscribes: newSubscribes}}))
        //Обновляем подписчиков у владельца профиля
        dispatch(userUpdated({id: profileUser.id, changes: {subscribers: newSubscribers}}))
    }
    return [isSubscribed, subscribeHandler] as const
}
export default useSubscribe