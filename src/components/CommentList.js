import React, {PropTypes} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {

    const comments = () => {
        const {comments} = props

        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment =>
            <li key={comment.id}>
                <Comment comment={comment}/>
            </li>
        )

        return <ul>{commentItems}</ul>
    }

    const actionText = props.isOpen ? 'hide' : 'show'

    return (
        <div>
            <a href="#" onClick={props.toggleOpen}>{actionText} comments</a>
            {props.isOpen && comments()}
        </div>
    )
}

CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array,
    toggleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
}

export default toggleOpen(CommentList)