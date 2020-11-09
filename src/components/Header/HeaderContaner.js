import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { Logout} from '../../redux/auth-reduser'

class HeaderComponent extends React.Component {

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {Logout})(HeaderComponent);