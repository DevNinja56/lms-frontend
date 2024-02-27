import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { name: "Page A", uv: 0 },
  { name: "Page B", uv: 10 },
  { name: "Page C", uv: 20 },
  { name: "Page D", uv: 30 },
  { name: "Page E", uv: 40 },
  { name: "Page F", uv: 50 },
  { name: "Page G", uv: 60 },
  { name: "Page H", uv: 70 },
  { name: "Page I", uv: 80 },
  { name: "Page J", uv: 90 },
  { name: "Page K", uv: 100 },
];

const customTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const tickFormatter = (tickValue: number) => {
  return `${tickValue}%`;
};

const customLabel = ({ x, y, value }: any) => {
  return (
    <text
      x={x}
      y={y}
      dy={-8}
      fontSize={"10px"}
      textAnchor="start"
      fill="#435FB5"
    >
      {value}%
    </text>
  );
};

const StatsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        layout="centric"
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <CartesianGrid vertical={false} stroke="#ccc" />
        <XAxis tick={false} />
        <YAxis
          type="number"
          tickFormatter={tickFormatter}
          ticks={customTicks}
          fontSize={"10px"}
          color="#435FB5"
          domain={[0, 100]}
          reversed
          label={<Label content={customLabel} />}
        />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatsChart;
