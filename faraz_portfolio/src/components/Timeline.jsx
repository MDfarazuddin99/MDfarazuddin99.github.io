import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';
import { v4 as uuidv4 } from 'uuid';
const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
    <div className="w-full md:w-7/12" >
          <Title>Timeline</Title>
          {timeline.map(item => (
              <TimelineItem 
                key = {uuidv4()}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
                informationArray = {item.informationArray}
              />
          ))}
        </div>
    </div>
  )
}

export default Timeline