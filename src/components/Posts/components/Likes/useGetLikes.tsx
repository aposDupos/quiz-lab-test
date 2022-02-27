import React from "react";
import {Link} from "react-router-dom";
import {selectAllUsers} from "../../../../store/slices/users/selectors";
import {useAppSelector} from "../../../../hooks";

const useGetLikes = (likes) => {
    const users = useAppSelector(selectAllUsers)
    return users
        .filter(user => likes.includes(user.id))
        .map(user => (
            <React.Fragment key={user.name}>
                <Link to={`/profile/${user.id}`}>{user.name}</Link> </React.Fragment>
        ))
}
export default useGetLikes