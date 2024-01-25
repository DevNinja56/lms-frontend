import React from "react";
import SubHeading from "@components/Common/SubHeading";
import { CiCircleCheck } from "react-icons/ci";

const WhatLearn = () => {
  return (
    <div className="pb-6">
      <SubHeading heading="What you 'll learn" />
      <div className="flex flex-wrap gap-7 text-mainParaColor">
        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">Become a UX designer</span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">Create quick wireframes.</span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            You will be able to add UX designer to your CV
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            Downloadable exercise files
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">Become a UX designer</span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            Build a UX project from beginning to end.
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            Build & test a full website design.
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            Learn to design websites & mobile phone apps.
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            Create your first UX brief & persona.
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            All the techniques used by UX professionals
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            How to use premade UI kits.
          </span>
        </div>

        <div className="flex gap-4 items-center w-[48%]">
          <div className="text-3xl">
            <CiCircleCheck />
          </div>
          <span className="text-sm font-normal">
            You will be able to talk correctly with other UX design.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhatLearn;
