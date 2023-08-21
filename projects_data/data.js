import css_icon from "../assets/icons/technology/css-icon.png";
import react_icon from "../assets/icons/technology/react-icon.png";
import js_icon from "../assets/icons/technology/js-icon.png";
import html_icon from "../assets/icons/technology/html-icon.png";
import node_icon from "../assets/icons/technology/node-icon.png";
import sass_icon from "../assets/icons/technology/sass-icon.png";

import vscode_icon from "../assets/icons/tools/vscode-icon.png";
import git_icon from "../assets/icons/tools/git-icon.png";
import github_icon from "../assets/icons/tools/github-icon.png";

import next_icon from "../assets/icons/learning/next-icon.png";
import ts_icon from "../assets/icons/learning/ts-icon.png";
import redux_icon from "../assets/icons/learning/redux-icon.png";

export const diploma_work = {
  title:
    "Web application to collect, present and process information and statistics from the game World of Warcraft",
  description:
    "The application allows users to search for any character or guild and display all relevant information about them in a simple and clear way. It uses appropriate queries to an external API provided by the game developers.",
  github: "https://github.com/BorPawel/praca-inz",
};

export const project_data = [
  {
    id: "diploma",
    name: "My diploma work",
    title:
      "Web application to collect, present and process information and statistics from the game World of Warcraft",
    description:
      "The application allows users to search for any character or guild and display all relevant information about them in a simple and clear way. It uses appropriate queries to an external API provided by the game developers.",
    spec: "Using the ExpressJs framework, I created customized endpoints to retrieve data from an external application programming interface (API). In response to the limitations on the number of queries per second imposed by the game's developers, I implemented a suitable control mechanism to adhere to these guidelines. Using asynchronicity, I split the code in a way that allows independent loading of data for each section, reducing the time the user has to wait for the full pool of information to be retrieved.",
    github: "https://github.com/BorPawel/praca-inz",
    tech: [react_icon, js_icon, css_icon, html_icon, node_icon],
  },
  {
    id: "portfolio",
    name: "Personal portfolio",
    title: "Personal portfolio",
    description:
      "This website is a reflection of my identity and my abilities. Here I try to present myself authentically and to reflect both my programming skills and my sense of aesthetics. My goal in creating this website was to highlight the passion and dedication I put into every detail.",
    spec: "",
    github: "https://github.com/BorPawel/portffolio",
    tech: [next_icon, js_icon, sass_icon, css_icon, html_icon],
  },
];
