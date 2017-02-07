import React, {PropTypes} from 'react'
import CommentList from './CommentList'

export default function Article(props) {

    const articleBody = () => {
        const {article: {text, comments}} = props
        return (
            <section>
                {text}
                <CommentList comments={comments}/>
            </section>
        )
    }

    const {isOpen, article, toggleOpen} = props

    return (
        <div>
            <h3 onClick={toggleOpen}>{article.title}</h3>
            {isOpen && articleBody()}
        </div>
    )

}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
    }).isRequired
}