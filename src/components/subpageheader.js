import React from "react"
import { Link } from "gatsby"

const hyphen = "-"

export default props => (
    <div>
        <pre>
{`-----------------------------------`}<br />
{`--- `}{<Link to="/">{props.name}</Link>}{` ------------------`}<br />
{`-----------------------------------`}<br />
{`-------------------- `}{props.linkStatus === "inactive" ? props.siteArea : <Link to="/">{props.siteArea}</Link>}{` ${hyphen.repeat(13-props.siteArea.length)}`}<br />
{`-----------------------------------`}
        </pre>
    </div>
)