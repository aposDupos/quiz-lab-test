import {IRoutes} from "./IRoutes";
import AuthPage from "../../pages/AuthPage";
import SubscribesPage from "../../pages/SubscribesPage";
import PostsPage from "../../pages/PostsPage";
import ProfilePage from "../../pages/ProfilePage";
import {UserOutlined, HomeOutlined, CaretRightOutlined, TableOutlined} from "@ant-design/icons";

const routes: IRoutes[] = [
    {
        element: <AuthPage/>,
        path: '/',
        icon: <HomeOutlined/>,
        name: 'Главная'
    },
    {
        element: <PostsPage/>,
        path: '/posts',
        icon: <TableOutlined/>,
        name: 'Лента'
    },
    {
        element: <ProfilePage/>,
        path: '/profile',
        icon: <UserOutlined/>,
        name: 'Профиль'
    },
    {
        element: <SubscribesPage/>,
        path: '/subscribes',
        icon: <CaretRightOutlined/>,
        name: 'Подписки'
    },
]
export default routes