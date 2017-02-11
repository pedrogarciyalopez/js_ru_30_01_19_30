import React, { Component } from 'react'
import './style.css'

export default class AddComment extends Component {
    state = {
        userName: '',
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addComment = () => {
        console.log(`User: ${this.state.userName}, comment: ${this.state.comment}`);
        this.setState({
            userName: '',
            comment: ''
        })
    }

    render() {
        return (
            <div>
                <input
                    className="user-name"
                    type="text"
                    placeholder="enter your name"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
                <textarea
                    className="comment"
                    name="comment"
                    placeholder="enter your comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <button
                    className="submit"
                    type="button"
                    onClick={this.addComment}
                >add comment</button>
            </div>
        )
    }
}