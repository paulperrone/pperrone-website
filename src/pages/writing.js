import React from "react"
import {Link} from "gatsby"
import SubpageHeader from "../components/subpageheader"

export default () => (
    <div>
        <SubpageHeader headerText="Writing" />
        <Link to="/">Home</Link>
        <p>Placeholder text</p>
    </div>
)