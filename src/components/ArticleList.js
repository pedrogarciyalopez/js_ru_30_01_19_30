import React, {PropTypes} from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'

function ArticleList(props) {

    const {articles} = props
    const articleElements = articles.map((article) =>
        <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == props.openArticleId}
                toggleOpen={props.toggleOpen(article.id)}
            />
        </li>)

    return (<ul>{articleElements}</ul>)
}

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    openArticleId: PropTypes.string
}

export default accordeon(ArticleList)