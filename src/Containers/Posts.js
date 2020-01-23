import React, { Component } from 'react';
import Loader from '../Components/Loader';
import Layout from '../Components/Layout';
import axious from '../axiosInstance';
import {fetchPosts} from '../store/actions/posts.actions';
import {setLoading} from '../store/actions/loader.actions';
import List from '../Components/List';
import {connect} from 'react-redux';

class Post extends Component {
    
    componentDidMount(){
        this.props.fetchPosts(this.props.match.params.userId);
    }
    render() {
        const {posts, loading} = this.props;
        const postList = posts.map((post,i)=><List>
            <h3>
            {i+1}. {post.title}
            </h3>
            </List>
        )

        return (
            <Loader loading={posts.length}>
            <Layout title="Posts">
            {postList}
            </Layout>
                
            </Loader>
        )
    }
}
const mapStateToProps = ({loading, posts})=>{
    return {
      loading,
      posts
    }
};

  
const mapsDispatchToProps = {
    fetchPosts,
    setLoading
}

export default connect(mapStateToProps,mapsDispatchToProps)(Post);