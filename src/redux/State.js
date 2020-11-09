import dialogsReducer from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'post about TicTok', likesCount: 2},
                {id: 2, text: 'post about apple', likesCount: 3},
                {id: 3, text: 'post about google', likesCount: 5},
                {id: 4, text: 'post about instagram', likesCount: 7}
            ],
            newPostState: 'Your text'
        },
        dialogsPage: {
            people: [
                {name: 'Hagrid', id: 1, photo: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/entertainment/Hagrid-dcf1a1468c4d89537bb7684fd8f4fed7.jpg'},
                {name: 'Harry', id: 2, photo: 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg'},
                {name: 'Hermiona', id: 3, photo: 'https://cdn.vox-cdn.com/thumbor/3AL25v8sPmoeo9INQ-SNXM1-Iic=/0x0:1024x768/1400x1050/filters:focal(408x210:570x372):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/51000509/harry-potter-top-10-hermione-granger-moments-hermione-granger-358045.0.jpg'},
                {name: 'Ron', id: 4, photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg'},
            ],
    
            messages: [
                {id: 1, text: 'I love sleeping'},
                {id: 2, text: 'I love exercise'},
                {id: 3, text: 'I love girls'},
                {id: 4, text: 'I love food'}
            ],

            newMessageState: 'your text'
        },

        sideBar: { 

        }
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('im here')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    
    _addPost() {
        let newPost = {
            id: this._state.profilePage.posts[this._state.profilePage.posts.length-1].id + 1,
            text: this._state.profilePage.newPostState,
            likesCount: 0
        }
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostState = '';
        this._callSubscriber(this._state);
    },


    _updateNewPost(text) {
        this._state.profilePage.newPostState = text;
        this._callSubscriber(this._state);
    },

    _addMessage() {
        let newMessage = {
            id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length-1].id + 1,
            text: this._state.dialogsPage.newMessageState,
            likesCount: 0
        }
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageState = '';
        this._callSubscriber(this._state);
    },


    _updateInputMessage(text) {
        this._state.dialogsPage.newMessageState = text;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);

    }
    
}

export default store;
window.store = store;