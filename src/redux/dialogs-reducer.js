const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_INPUT_MESSAGE = 'UPDATE-INPUT-MESSAGE';

let initialState = {
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
        ]

}



const _addMessage = (state, text) => {
    let newMessage = {
        id: state.messages[state.messages.length-1].id + 1,
        text: text,
        likesCount: 0
    }

    let stateCopy = {
        ...state,
        messages: [...state.messages, newMessage]
    };
    return stateCopy;
}

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case ADD_MESSAGE: 
            return _addMessage(state, action.text);

        default:
            return state;
    }
}

export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        text: text
    }
}

export default dialogsReducer;