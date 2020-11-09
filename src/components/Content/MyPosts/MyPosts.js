import React from 'react'
import Class from './MyPosts.module.css'
import Post from './Posts/Post'
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControl/Forms-control';

const MaxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newPost" placeholder="Post text" validate={[required, MaxLength10]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm)



// два примера компонент с умной перерисовкой VirtualDOM

const MyPosts = React.memo(props => { // функциональная компонента обернутая в хок который применяет фунцию propsAreEqual которая сравнивает изменился ли state или props

    const OnSubmit = (formData) => {
        props.addPost(formData.newPost);
    }

    return (
        < div className={Class.myPostsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={OnSubmit}/>
            <div className={Class.myPosts}>
                {props.posts.map((post)=> {
                    return <Post message={post.text} key={post.id}/>
                })}
                
            </div>
         </div>
         
    )
})

class MyPostsClass extends React.PureComponent { // PureComponent - автоматически запускает функцию shouldComponentUpdate и сравнивает изменился ли state или props

    /*shouldComponentUpdate(nextProps, nextState) {                    
        return nextProps != this.props || nextState != this.state
    }*/

    render() {

        const OnSubmit = (formData) => {
            this.props.addPost(formData.newPost);
        }

        return (
            < div className={Class.myPostsBlock}>
                <h3>My posts</h3>
                <PostReduxForm onSubmit={OnSubmit}/>
                <div className={Class.myPosts}>
                    {this.props.posts.map((post)=> {
                        return <Post message={post.text} key={post.id}/>
                    })}
                    
                </div>
            </div>
            
        )
    }
}

export default MyPosts