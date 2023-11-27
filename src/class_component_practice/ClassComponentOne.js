import React, {Component} from "react"
import ClassComponentTwo from "./ClassComponentTwo"
import ClassComponentThree from "./ClassComponentThree"

export default class ClassComponentOne extends Component {
    render() {
        return (
            <div>
                <ClassComponentTwo username="Sahal"/>
                <ClassComponentThree/>
            </div>
        )
    }
}