import Icons from "./icons/Icons";
import Content from "./content/Content";
import '@styles/about/education/education.sass'
import Title from "@components/reusable/title/Title";

const Education = () => {
 
  return (
    <div className="wrapper">
       <Title title="education" />
      <div className="education-wrapper">
      <Icons/>
      <Content/>
      </div>
    </div>
  );
};
export default Education;
 