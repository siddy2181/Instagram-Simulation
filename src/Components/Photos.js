import React,{Component} from 'react'

function Photos(props) {

        const post=props.post
        return <figure className="figure">
                    <img  className="photo" src={post.imageLink} alt={post.description}/>
                    <figcaption><p>{post.description}</p></figcaption>
                    <div className="button-container">
                    <button className="photo-button" onClick={() =>{
                        props.onRemovePhoto(post)
                    }}>Remove</button>
                    </div>
                </figure>


}

export default Photos