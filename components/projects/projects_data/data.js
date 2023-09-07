import css_icon from "@assets/icons/technology/css-icon.png";
import react_icon from "@assets/icons/technology/react-icon.png";
import js_icon from "@assets/icons/technology/js-icon.png";
import html_icon from "@assets/icons/technology/html-icon.png";
import node_icon from "@assets/icons/technology/node-icon.png";
import sass_icon from "@assets/icons/technology/sass-icon.png";

import next_icon from "@assets/icons/learning/next-icon.png";
import ts_icon from "@assets/icons/learning/ts-icon.png";
import redux_icon from "@assets/icons/learning/redux-icon.png";
import { SiExpress, SiNodedotjs } from "react-icons/si";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiSass,
} from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
export const project_data = [
  {
    id: "diploma",
    name: "My diploma work",
    title:
      "Web application to collect, present and process information and statistics from the game World of Warcraft",
    description:
      "The application allows the user to search for any character or guild in game\
    and presents all relevant information about them in a simple and clear way.",
    spec: [
      "Create the appropriate end-points on the back-end side to establish communication with the external\
    API.",
      "Monitor the number of requests executed per second to avoid exceeding the limit imposed by the game\
    developers.",
      "Downloading and displaying data in asynchronous mode to reduce the waiting time for the full content\
    to load and avoid long waits.",
      "Provide the user with a convenient interface, using existing graphical conventions from the game to\
    enhance the application's clarity and user experience.",
    ],
    github: "https://github.com/BorPawel/praca-inz",
    tech: [
      <DiReact className="tech-icon" />,
      <DiJavascript1 className="tech-icon" />,
      <DiCss3 className="tech-icon" />,
      <DiHtml5 className="tech-icon" />,
      <SiNodedotjs className="tech-icon" />,
      <SiExpress className="tech-icon" />,
    ],
  },
  {
    id: "portfolio",
    name: "Personal portfolio",
    title: "Personal portfolio",
    description:
      "This website is a reflection of my identity and my abilities. Here I try to present myself authentically and to reflect both my \
       programming skills and my sense of aesthetics. My goal in creating this website was to highlight the passion and dedication I put into every detail.",

    github: "https://github.com/BorPawel/portffolio",
    tech: [
      <TbBrandNextjs className="tech-icon" />,
      <DiJavascript1 className="tech-icon" />,
      <DiSass className="tech-icon" />,
      <DiCss3 className="tech-icon" />,
      <DiHtml5 className="tech-icon" />,
    ],
  },
];
