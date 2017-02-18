import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle, addComment} from '../../AC'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <div ref = {this.getContainerRef}>
                <h3 onClick={toggleOpen}>
                    {article.title}
                    <a href="#" onClick = {this.handleDelete}>Delete me</a>
                </h3>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const {isOpen, article: {text, comments}} = this.props
        if (!isOpen) return null

        return (
            <section>
                {text}
                <CommentList
                    comments={comments}
                    addComment={this.addComment}
                    ref = {this.getCommentsRef}
                />
            </section>
        )
    }

    addComment = (comment) => {
        this.props.addComment(this.props.article.id, comment)
    }

    handleDelete = ev => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }
}

export default connect(null, {
    deleteArticle,
    addComment
})(Article)