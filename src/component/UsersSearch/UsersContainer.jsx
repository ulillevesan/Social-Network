import { connect } from 'react-redux'
import { followedAC, unfollowedAC, usersAC,SetPageAC} from '../../redux/user-reducer'
import Users from './Users'

const mapDispatchToProps=(dispatch) => {
    return {
        follow:(userId) => dispatch(followedAC(userId)),
        unfollow:(userId) => dispatch(unfollowedAC(userId)),
        setUsers:(users) => dispatch(usersAC(users)),
        setPage:(page) => dispatch(SetPageAC(page))
    }
}
const mapStateToProps=(state) => {
    return{
        users:state.UsersPage.users,
        PageSize:state.UsersPage.PageSize,
        totalCount:state.UsersPage.totalCount,
        currentPage:state.UsersPage.currentPage
    }
}
let UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer