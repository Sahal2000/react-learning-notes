import React, {Component} from "react"

export default class ClassComponentTwo extends Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}