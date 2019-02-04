import React from "react"
import SubpageHeader from "../components/subpageheader"

const pStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
};

export default () => (
    <div>
        <SubpageHeader name="home" siteArea="career" linkStatus="inactive" />
        <p style={pStyle}><a href="https://www.linkedin.com/in/paulbperrone/">Visit my LinkedIn profile</a></p>
    </div>
)
