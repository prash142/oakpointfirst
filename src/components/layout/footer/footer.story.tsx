import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Oakstone Trading Ltd",
  facebook: "https://www.oakstonetrading.com/",
  instagram: "https://www.oakstonetrading.com/",
  twitter: "https://www.oakstonetrading.com/",
  github: "https://www.oakstonetrading.com/",
  dribble: "https://www.oakstonetrading.com/",
  linkedin: "https://www.oakstonetrading.com/",
};

story.add("Footer", () => <Footer {...data} />);
