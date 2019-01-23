import React from "react"
import { Link } from "gatsby"
import containerStyles from "./navigation.module.css"

export default () => (
    <div className={containerStyles.container}>
        <Link to="/career/" className={containerStyles.link}>Career</Link><br />
        <Link to="/projects/" className={containerStyles.link}>Projects</Link><br />
        <Link to="/writing/" className={containerStyles.link}>Writing</Link><br />
        <Link to="/music/" className={containerStyles.link}>Music</Link><br />
    </div>
)