import React from 'react';
import {addPostAC, onPostChangeAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {PostsPropsType} from '../../../redux/store';

export type MyPostsContainerPropsType = {
    // posts: Array<PostsPropsType>
    // addPost: (postMessage: string) => void
    // newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    // store: Store
    // dispatch: Dispatch
}


// const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState()
//                 const addPost = () => {
//                     // props.addPost(props.newPostsText)
//                     // props.dispatch({type: 'ADD-POST', postMessage: props.newPostsText})
//                     store.dispatch(addPostAC(state.profilePage.newPostsText))
//                 }
//
//                 let onPostChange = (newText: string) => {
//                     // props.updateNewPostsCallBack(e.currentTarget.value)
//                     // props.dispatch(onPostChangeAC(e.currentTarget.value))
//                     let action = onPostChangeAC(newText)
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts
//                     posts={state.profilePage.posts}
//                     newPostsText={state.profilePage.newPostsText}
//                     // dispatch={props.dispatch}
//                     updateNewPostsCallBack={onPostChange}
//                     addPost={addPost}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

export type mapStateToPropsType = {
    posts: Array<PostsPropsType>
    newPostsText: string
}

export type mapDispatchToPropsType = {
    updateNewPostsCallBack: (newText: string) => void
    addPost: (newPostsText: string) => void
}

export type MyPostsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    } as const
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostsCallBack: (newText: string) => {
            let action = onPostChangeAC(newText)
            dispatch(action)
        },
        addPost: (newPostsText: string) => {
            // dispatch(addPostAC(state.profilePage.newPostsText))
            dispatch(addPostAC(newPostsText))
        }
    } as const
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;