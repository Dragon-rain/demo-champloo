import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import { WithAuthRedirect } from '../Hok/WithAuthRedirect';
import Dialogs from './Dialogs'

/*const DialogsContaner = (props) => {
    return (
        <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsPage;

            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }
        
            let newText = (text) => {
                store.dispatch(updateInputMessageActionCreator(text));
            }    
            return <Dialogs updateInputMessage={newText} addMessage={addMessage} state={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}

/*let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContaner = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/


export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)