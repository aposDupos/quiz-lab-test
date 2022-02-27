import React from "react";
import {CloseOutlined} from "@ant-design/icons";
import {Button} from "antd";
import usePostRemove from "./usePostRemove";
import {IPostRemove} from "./IPostRemove";

export const PostRemove: React.FC<IPostRemove> = ({postAuthor, postId}) => {
    const [curUserId, postRemove] = usePostRemove()
    return (
        <>
            {curUserId === postAuthor && <Button
                icon={<CloseOutlined/>}
                shape={"circle"}
                onClick={() => postRemove(postId)}
            />}
        </>
    )
}