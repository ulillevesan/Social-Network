const followed= "FOLLOW"
const unfollowed="UNFOLLOW"
const user="USERS-INF"
const set_user="SET-USERS"
let InitialState={
  users:[],
  currentPage:1,
  totalCount:100,
  PageSize:5,
  }
const UsersReducer = (state = InitialState,action) => {
    switch (action.type) {
      case followed:
      return{...state,
      users:state.users.map( u => {
          if (u.id===action.userId) {
              return{...u, follow:true}
          }
          return u
      })}
      case unfollowed:
        return{...state,
      users:state.users.map( u => {
          if (u.id===action.userId) {
              return{...u, follow:false}
          }
          return u
      })}

        case user:{
          return {...state, users:action.users}}
        case set_user:{
                return {...state, currentPage:action.page}}
      default: return state;
      }
}
export const followedAC= (userId) => ({type:"FOLLOW",userId})
export const usersAC= (users) => ({type:"USERS-INF",users})
export const unfollowedAC= (userId) => ({type:"UNFOLLOW",userId})
export const SetPageAC= (page) => ({type:"SET-USERS",page})
export default UsersReducer


