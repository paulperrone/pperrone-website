import React from "react"
import { Link } from "gatsby"
import containerStyles from "./subpageheader.module.css"


const hyphen = "-"

export default props => (
    <div className={containerStyles.container}>
        <pre>
{`-----------------------------------`}<br />
{`--- `}{<Link to="/">{props.name}</Link>}{` ${hyphen.repeat(30-props.name.length)}`}<br />
{`-----------------------------------`}<br />
{`-------------------- `}{props.linkStatus === "inactive" ? props.siteArea : <Link to="/">{props.siteArea}</Link>}{` ${hyphen.repeat(13-props.siteArea.length)}`}<br />
{`-----------------------------------`}
        </pre>
    </div>
)