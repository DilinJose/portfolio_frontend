import './index.css'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma, FaGithub, FaJira, FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiPostman, SiSwagger, SiMui, SiTailwindcss } from "react-icons/si";
import { useEffect } from 'react';
const Skill = () => {

  const skills = [
    {
      icon: <FaHtml5 />,
      skill: "HTML",
      percentage: '6'

    },
    {
      icon: <FaCss3 />,
      skill: "CSS",
      percentage: '5'

    },
    {
      icon: <DiJavascript />,
      skill: "JavaScript",
      percentage: '6'

    },
    {
      icon: <FaReact />,
      skill: "React JS",
      percentage: '7'

    },
    {
      icon: <FaNodeJs />,
      skill: "Node JS",
      percentage: '4'

    },
    {
      icon: <SiTypescript />,
      skill: "TypeScript",
      percentage: ''

    },
    {
      icon: <FaFigma />,
      skill: "Figma",
      percentage: '4'

    }, {
      icon: <FaGithub />,
      skill: "Github",
      percentage: '7'

    },
    {
      icon: <FaJira />,
      skill: "Jira",
      percentage: ''

    },
    {
      icon: <SiPostman />,
      skill: "Postman",
      percentage: ''

    },
    {
      icon: <SiSwagger />,
      skill: "Swagger API",
      percentage: ''

    },
    {
      icon: <FaBootstrap />,
      skill: "Bootstrap",
      percentage: '7'

    },
    {
      icon: <SiMui />,
      skill: "Material UI",
      percentage: ''

    },
    {
      icon: <SiTailwindcss />,
      skill: "Tailwind CSS",
      percentage: ''

    }
  ]


  return (
    //i want half my div background color black and other half white white the content in the black section shoud have the oposite color of the background
    <div className='cursor' id="cursor">
      <div className='skill-wrapper'>
        {
          skills?.map(({ icon, skill, percentage }, index) => {
            return (
              <div key={index} className='skill-card'>
                <figure>
                  {icon}
                </figure>

                <h3>{skill}</h3>
                <progress className='progress-bar' value={percentage} max={10} />

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skill