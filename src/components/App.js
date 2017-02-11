import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Calendar from './Calendar'


class App extends Component {

    render() {
        const {articles} = this.props

        return (
            <div>
                <Calendar />
                <ArticleList articles={articles}/>
            </div>
        )
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default App