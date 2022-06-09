// import React from 'react';
// import {getHeaders} from './utils';

// class Comment extends React.Component {
// // constructor
//     constructor(props) {
//         super(props);
//     }

   

//     render () {
//         const comments = this.props.comments
//         if (comments && comments.length > 0) {
//             const lastComment = comments[comments.length - 1];
//             return (
//                     <>
//                     <p>
//                         <strong>{lastComment.user.username}</strong> 
//                         {lastComment.text}
//                     </p>
//                     <div>{lastComment.display_time}</div>
//                     </>
//                     )
//           }
//         return (<></>)
//     }
         
// }    

// export default Comment;
import React from 'react';
import {getHeaders} from './utils';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const comments = this.props.comments
        if (comments.length > 1) {
            return (
                <>
                    <h5 className="view-comments">
                        <button>View all {comments.length} Comments</button>
                    </h5>
                    <h5>
                        <span className="comment-username">{comments[comments.length - 1].user.username}</span>
                        {comments[comments.length - 1].text}
                    </h5>
                </>
            )
        } else if (comments.length === 1) {
            return (
                <h5>
                    <span className="comment-username">{comments[0].user.username}</span>
                    {comments[0].text}
                </h5>
            )
        } else {
            return (<></>)
        }
         
    }
}

export default Comment;