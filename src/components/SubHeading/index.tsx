import React from 'react';

interface SubHeadingProps {
  text: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
  return (
    <div className='font-bold text-sm leading-4 text-subHeading uppercase text-center'>
      {text}
    </div>
  );
};

export default SubHeading;
