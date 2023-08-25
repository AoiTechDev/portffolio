import Education from "./Education";
import Hobbies from "./Hobbies";
export const myData = [
  {
    id: "whoami",
    title: "Who am I?",
    content: (
      <p>
        As a recently graduated student pursuing front-end development, I
        combine my artistic background with programming skills to create
        aesthetically pleasing, detailed interfaces. My ambition is to
        constantly evolve as an expert, transforming my vision into functional,
        beautiful designs.
      </p>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: <Education />,
  },
  {
    id: "hobbies",
    title: "Hobbies",
    content: <Hobbies />,
  },
];
