import React, { Component } from 'react';
import './App.css';
//import ContentContaner from './components/Content/ContentContaner';
//import DialogsContaner from './components/Dialogs/DialogsContaner';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Setings from './components/Setings/Setings';
import UsersContaner from './components/Users/UsersContaner';
import HeaderComponent from './components/Header/HeaderContaner';
import Login from './components/Login/Login';
import NavContaner from './components/Nav/NavContaner';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reduser';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import store from './redux/redux-store';
import { WithSuspence } from './components/Hok/WithSuspence';
let DialogsContaner = React.lazy(() => import('./components/Dialogs/DialogsContaner')); // подрузит данную страницу только если пользователь сделает запрос
let ContentContaner = React.lazy(() => import('./components/Content/ContentContaner')); // подрузит данную страницу только если пользователь сделает запрос



class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader/>
    }

    return (
      
        <div className='app-wraper'>
          <HeaderComponent/>
          <NavContaner/>
          <div className='app-wraper-content'>
            <Route path='/dialogs' render={WithSuspence(DialogsContaner)}/>
            <Route path='/profile/:userId?' render={WithSuspence(ContentContaner)}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/setings' render={ () => <Setings/>}/>
            <Route path='/users' render={ () => <UsersContaner/>}/>
            <Route path='/login' render={ () => <Login/>}/>
          </div>
        </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

//export default compose(withRouter, connect(null, {getUserData}))(App);
let AppContaner = compose(withRouter,connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJsApp = (props) => {
  return <BrowserRouter>
            <Provider store={store}>
              <AppContaner/>
            </Provider>
         </BrowserRouter>
}

export default SamuraiJsApp
