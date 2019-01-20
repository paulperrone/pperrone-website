import React from "react"
import containerStyles from "./titlecontainer.module.css"

export default props => (
    <div className={containerStyles.container}>
        <h1>{props.titleText}</h1>
    </div>
)