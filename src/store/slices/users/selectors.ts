import {RootState} from "../index";
import {usersAdapter} from "./usersSlice";

export const {
    selectById: selectUserById,
    selectIds: selectUserIds,
    selectEntities: selectUserEntities,
    selectAll: selectAllUsers,
    selectTotal: selectTotalUsers
} = usersAdapter.getSelectors<RootState>(state => state.users)