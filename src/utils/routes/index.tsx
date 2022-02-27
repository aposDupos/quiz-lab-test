import {UserOutlined, HomeOutlined, TableOutlined} from "@ant-design/icons";
import {AuthPage, PostsPage, ProfilePage} from "../../pages";
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
}
export default routes