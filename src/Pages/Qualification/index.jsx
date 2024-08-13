import { IoIosSchool } from "react-icons/io";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.css'
function Qualification() {

  const education = [
    { date: "July 2016 - July 2021", collage: "Vidya Academy of Science and Technology", course: "Electronics And Communication Engineering", place: 'Thrissur, India' },
    { date: "Jun 2014- March 2016", collage: "Holy Angel’s", course: "Higher Secondary Education", place: 'Thrissur, India' },
    { date: "Jun 2013- March 2014", collage: "St. Anne's English Medium School", course: "Secondary Education", place: 'Thrissur, India' },
  ]

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {education.map(({ date, collage, course, place }, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work "
              // contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              // contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={date}
              iconStyle={{ background: '#ffff', color: 'rgb(39, 40, 34)' }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title">{collage}</h3>
              <h4 className="vertical-timeline-element-subtitle">{place} | <span>{date}</span></h4>
              <p>{course}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Qualification;