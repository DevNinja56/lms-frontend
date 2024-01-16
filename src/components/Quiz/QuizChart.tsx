import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 9 },
  { name: "Group B", value: 1 },
  { name: "Group C", value: 0 },
];

const COLORS = ["#E5E5E5", "#A5BAFD", "#435FB5"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}: any) => {
  if (value === 0) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);


  return (
    <text
      x={x}
      y={y}
      fontSize={16}
      fill="#333333"
      textAnchor={"middle"}
      dominantBaseline="middle"
    >
      {`${value}`}
    </text>
  );
};

const QuizChart = () => {
  return (
    <div className="flex flex-col w-full">
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            startAngle={-270}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-evenly w-full mt-8">
        <div className="flex gap-x-2 items-center">
          <div className="h-7 w-7 bg-mainColor rounded-full"></div>
          <p className="text-base">Correct</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="h-7 w-7 bg-[#A5BAFD] rounded-full"></div>
          <p className="text-base">Incorrect</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
          <p className="text-base">Unattempted</p>
        </div>
      </div>
    </div>
  );
};

export default QuizChart;
