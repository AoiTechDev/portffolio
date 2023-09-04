import Education from "./Education";
import Qualities from "./Qualities";
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
    //content: <Hobbies />,
    content: (
      <p>
        My current interests focus on constantly improving myself as a front-end
        developer, but also in other areas, for example, physical fitness.
        Regular strength training provides me with discipline and satisfaction.
        I also occasionally enjoy playing various computer games and painting
        whatever comes to mind.
      </p>
    ),
  },
  {
    id: "myqualities",
    title: "My qualities",
    qualities: ['Teamwork', 'Discipline', 'Communication', 'Creative', 'Adaptation'],
    content: <Qualities/>
  }
];
