import AuthPage from "../../pages/AuthPage";
import SubscribesPage from "../../pages/SubscribesPage";
import PostsPage from "../../pages/PostsPage";
import ProfilePage from "../../pages/ProfilePage";
import {UserOutlined, HomeOutlined, CaretRightOutlined, TableOutlined} from "@ant-design/icons";
import {IRoutes, RoutesEnum} from "./IRoutes";

const routes: Record<RoutesEnum, IRoutes> = {
    auth: {
        element: <AuthPage/>,
        path: '/',
        icon: <HomeOutlined/>,
        name: 'Главная'
    },
    posts: {
        element: <PostsPage/>,
        path: '/posts',
        icon: <TableOutlined/>,
        name: 'Лента'
    },
    profile: {
        element: <ProfilePage/>,
        path: '/profile',
        icon: <UserOutlined/>,
        name: 'Профиль'
    },
    subscribes: {
        element: <SubscribesPage/>,
        path: '/subscribes',
        icon: <CaretRightOutlined/>,
        name: 'Подписки'
    },
}
export default routes