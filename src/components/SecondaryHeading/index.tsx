import React from 'react';

interface SecondaryHeadingProps {
  text: string;
}

const SecondaryHeading: React.FC<SecondaryHeadingProps> = ({ text }) => {
  return (
    <div className='font-bold text-3xl leading-9 text-lightBlackColor text-center'>
      {text}
    </div>
  );
};

export default SecondaryHeading;
