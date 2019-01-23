import React from "react"
import { Link } from "gatsby"
import containerStyles from "./navigation.module.css"

export default () => (
    <div className={containerStyles.container}>
        <Link to="/career/" className={containerStyles.link}>career</Link><br />
        <Link to="/projects/" className={containerStyles.link}>projects</Link><br />
        <Link to="/writing/" className={containerStyles.link}>writing</Link><br />
        <Link to="/music/" className={containerStyles.link}>music</Link><br />
    </div>
)