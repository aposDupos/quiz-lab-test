import useSubscribe from "./useSubscribe";
import {Button} from "antd";

export const Subscribe = () => {
  const [isSubscribed, subscribeHandler] = useSubscribe()
  return <Button onClick={subscribeHandler}>{isSubscribed ? 'Отписаться' : 'Подписаться'}</Button>
}