import { createContext, useReducer } from 'react';

export const PostContext = createContext({
    posts: [],
    addPost: () => {},
    setPosts: () => {},
    deltePost: () => {},
    updatePost: () => {},
});


function postReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'SET':
            return action.payload;
        case 'DELETE':
            return state.filter((post) => post.id !== action.payload);
        case 'UPDATE':
           const updateIndex = state.findIndex((post) => post.id === action.payload.id);
           const updatedPost = {...state[updateIndex], ...action.payload.data};
           const updatedPosts = [...state];
           updatedPosts[updateIndex] = updatedPost;
           return updatedPosts;
        default:
            return state;
    }
}

function PostContextProvider({ children }) {
    const [posts, dispatch] = useReducer(postReducer, []);
    function addPost(post) {
        dispatch({ type: 'ADD', payload: post });
    }

    function setPosts(posts) {
        dispatch({ type: 'SET', payload: posts });
    }

    function deletePost(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updatePost(post) {
        dispatch({ type: 'UPDATE', payload: post });
    }

    return (
        <PostContext.Provider
            value={{
                posts,
                addPost,
                setPosts,
                deletePost,
                updatePost,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider