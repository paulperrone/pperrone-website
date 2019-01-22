import React from "react"
import {Link} from "gatsby"
import SubpageHeader from "../components/subpageheader"

export default () => (
    <div>
        <SubpageHeader name="paul perrone" siteArea="writing" link="inactive" />
        <Link to="/">Home</Link>
        <p>Placeholder text</p>
    </div>
)