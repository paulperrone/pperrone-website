import React from "react"
import { Link } from "gatsby"

export default props => (
    <div>
        <pre>
{`-----------------------------------`}<br />
{`--- `}{<Link to="/">{props.name}</Link>}{` ------------------`}<br />
{`-----------------------------------`}<br />
{`-------------------- `}{props.link === "inactive" ? props.siteArea : <Link to="/">{props.siteArea}</Link>}{` -------`}<br />
{`-----------------------------------`}
        </pre>
    </div>
)