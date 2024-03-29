import React from 'react';
import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

const elements = posts.map(item => {
    const{id, ...itemProps} = item;
    console.log(1);
    if (itemProps.label && id){
    return (
        <li key = {id} className = 'list-group-item'>
            <PostListItem {...itemProps} />
        </li>
    )
    }
});

    return (
        <ul className = 'app-list list-group'>
          {elements}
        </ul>
    )
}

export default PostList;