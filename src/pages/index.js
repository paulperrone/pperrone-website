import React from "react"
import { Link } from "gatsby"
import TitleContainer from "../components/titlecontainer"

export default () => (
    <div>
        <TitleContainer titleText="Paul Perrone" />
        <Link to="/career/">Career</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/writing/">Writing</Link>
        <Link to="/music/">Music</Link>
    </div>
)