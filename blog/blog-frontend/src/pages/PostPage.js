import React from 'react';
import PostViewer from '../components/post/PostViewer';
import HeadereContainer from '../containers/common/HeadereContainer';

const PostPage = () => {
    return (
        <div>
            <HeadereContainer />
            <PostViewer />
        </div>
    );
};

export default PostPage;