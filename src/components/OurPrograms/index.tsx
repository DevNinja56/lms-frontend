// OurPrograms.tsx
import ProgramCard from '@components/ProgramCard';
import SecondaryHeading from '@components/SecondaryHeading';
import SubHeading from '@components/SubHeading';
import React from 'react';


const OurPrograms: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="p-24">
        <SubHeading text="COURSE CATEGORIES" />
        <SecondaryHeading text="Our Programs" />
        <div className='flex items-center justify-center gap-8 pt-10'>
      {data.map((program, index) => (
        <ProgramCard key={index} data={program} />
      ))}</div>
    </div>
  );
};

export default OurPrograms;
