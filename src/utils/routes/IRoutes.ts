import React from "react";

export interface IRoutes {
    path: string
    element: React.ReactNode | any
    icon?: React.ReactNode | any
    name?: string
}