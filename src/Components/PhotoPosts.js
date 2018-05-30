import React,{Component} from 'react'
import Photos from "./Photos";
import PropTypes from 'prop-types'

function PhotoPosts(props) {
    return <div className="photo-grid">
                {props.posts.map((post,index)=> <Photos key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
            </div>

}

PhotoPosts.propTypes={
    posts:PropTypes.array

}

export default PhotoPosts