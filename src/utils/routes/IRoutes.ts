import React from "react";
export enum RoutesEnum {
    auth = 'auth',
    posts = 'posts',
    profile = 'profile',
    subscribes = 'subscribes'
}
export interface IRoutes {
    path: string
    element: React.ReactNode | any
    icon?: React.ReactNode | any
    name?: string
}