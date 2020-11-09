import React from 'react'
import { connect } from 'react-redux'
import { FollowThunk, unFollowThunk, requestUsers} from '../../redux/users-reducer'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux';
import { getPageSize, getUsersSuperSelector, getTotalUsersCount, getCurrentPage, getIsFetching, getButtonDisable} from '../../redux/Selectors/Users-selectors'

class UsersContaner extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
        /*UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });*/
    };

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    
    };

    render() {
        return <div> 
                    {this.props.isFetching 
                    && <Preloader/>}
                    <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      selectedPage = {this.props.selectedPage}
                      users = {this.props.users}
                      onPageChanged = {this.onPageChanged}
                      componentDidMount = {this.componentDidMount}
                      unFollowThunk = {this.props.unFollowThunk}
                      FollowThunk = {this.props.FollowThunk}
                      buttonDisable = {this.props.buttonDisable}
                      />
                </div>
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {

        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}*/

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        buttonDisable: state.usersPage.buttonDisable,
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        buttonDisable: getButtonDisable(state),
    }
}

/*let withRedirect = WithAuthRedirect(UsersContaner)

export default connect(mapStateToProps, {FollowThunk, unFollowThunk, setCurrentPage, getUsers})(withRedirect);*/

export default compose(connect(mapStateToProps, {FollowThunk, unFollowThunk, requestUsers}))(UsersContaner);