import React from 'react';

export interface ClassSchedule {
  day: string;
  time: string;
}

interface ClassScheduleCardProps {
  title: string;
  schedule: ClassSchedule[];
  duration: string;
  price: string;
  extra?: string;
}

const ClassScheduleCard: React.FC<ClassScheduleCardProps> = ({ title, schedule, duration, price, extra }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <h4 className="text-xl font-bold text-forest-800 mb-4">{title}</h4>
    <div className="space-y-2 text-forest-600">
      {schedule.map((item, idx) => (
        <div className="flex justify-between" key={idx}>
          <span>{item.day}</span>
          <span>{item.time}</span>
        </div>
      ))}
      <div className="flex justify-between">
        <span>Duration:</span>
        <span>{duration}</span>
      </div>
      {extra && <div className="flex justify-between"><span>{extra}</span></div>}
      <div className="text-forest-800 font-bold text-lg mt-4">{price}</div>
    </div>
  </div>
);

export default ClassScheduleCard; 