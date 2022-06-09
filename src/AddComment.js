import React from 'react';
import { getHeaders } from './utils';

class AddComment extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            post_id: this.props.postId,
            value: ""
        }
        
        this.createComment = this.createComment.bind(this);
        this.postComment = this.postComment.bind(this);

    }

    createComment(ev) {
        this.setState({ value: ev.target.value });
    }

    postComment(ev) {
        const url = '/api/comments';
        const postData = {
            post_id: this.state.post_id,
            text: this.state.value
        }
        console.log('create comment:', url);
        ev.preventDefault()
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            this.props.refreshPost()
            this.setState({value : ''});
        })  
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }
            
    render () {
        return (
            <form onSubmit={this.postComment}>

                <div className="comment-smiley">
                    <i className="far fa-smile"></i>
                    <input className="adding-comment" value={this.state.value} onChange={this.createComment} type="text" placeholder="Add a comment..." />
                    
                </div>
                <div className="post-comment-action">
                    <h5><button className="postingcomment-button" aria-label="Post Comment" type="submit">Post</button></h5>
                </div>
            </form>
        )
    }
}
export default AddComment;