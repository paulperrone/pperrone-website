import React from "react";
import SubpageHeader from "../components/subpageheader";
import ComingSoon from "../components/comingsoon";

export default () => (
  <div>
    <SubpageHeader name="home" siteArea="projects" linkStatus="inactive" />
    <ComingSoon />
  </div>
);
