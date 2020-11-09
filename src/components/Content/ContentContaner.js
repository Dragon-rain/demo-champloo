import React from 'react'
import { connect } from 'react-redux';
import Content from './Content'
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';



class ContentContaner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) { 
            userId = this.props.userId
            if(!userId) {
                this.props.history.push("/login")
            }
        };
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    
    };

    render() {
        return <Content  {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

/*let AuthRedirectComponent = WithAuthRedirect(ContentContaner)

let whithUrlDataContanerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(whithUrlDataContanerComponent)*/

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}), withRouter)(ContentContaner)