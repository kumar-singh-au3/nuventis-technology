import React, { Component } from 'react';
import Loader from '../Components/Loader';
import axious from '../axiosInstance';
import {fetchAlbums} from '../store/actions/albums.actions';
import {setLoading} from '../store/actions/loader.actions';
import List from '../Components/List';
import Layout from '../Components/Layout';
import {connect} from 'react-redux';

class Albums extends Component {
    
    componentDidMount(){
        this.props.fetchAlbums(this.props.match.params.userId);
    }

    render() {
        const {albums, loading} = this.props;
        const albumList = albums.map((album,i)=><List>
            <h3>
              {i+1}.  {album.title}
            </h3>
            </List>
        )
        return (
            <Loader loading={albums.length}>
          <Layout title="Albums">
            {albumList}
            </Layout>
            </Loader>
        )
    }
}
const mapStateToProps = ({loading, albums})=>{
    return {
      loading,
      albums
    }
};

  
const mapsDispatchToProps = {
    fetchAlbums,
    setLoading
}

export default connect(mapStateToProps,mapsDispatchToProps)(Albums);