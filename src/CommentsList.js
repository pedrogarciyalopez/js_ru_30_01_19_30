import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {

    state = {
        isShown: false
    }

    renderComments = () => {
        return (
            <ul>
                {this.props.comments.map((comment) =>
                    <li key={comment.id}>
                        <Comment {...comment} />
                    </li>
                )}
            </ul>

        )
    }

    toggle = () => {
        this.setState({
            isShown: !this.state.isShown
        })
    }

    render() {
        if (this.props.comments && this.props.comments.length) {
            const btnTitle = this.state.isShown
                ? 'Скрыть комментарии'
                : `Показать комментарии (${this.props.comments.length})`

            return (
                <div>
                    <button onClick={this.toggle}>{btnTitle}</button>
                    {this.state.isShown && this.renderComments()}
                </div>
            )
        } else {
            return <p>Комментариев пока нет.</p>
        }

    }
}