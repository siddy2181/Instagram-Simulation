import React,{Component} from 'react'
import Photos from "./Photos";


class PhotoPosts extends Component{
    render(){
        return <div className="photo-grid">
            {this.props.posts.map((post,index)=> <Photos key={index} post={post}/>)}
        </div>
    }
}

export default PhotoPosts