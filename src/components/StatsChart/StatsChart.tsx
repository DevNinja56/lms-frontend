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
  {
    name: "Page A",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page B",
    uv: 10,
    pv: 10,
    amt: 10,
  },
  {
    name: "Page C",
    uv: 20,
    pv: 20,
    amt: 20,
  },
  {
    name: "Page D",
    uv: 30,
    pv: 30,
    amt: 30,
  },
  {
    name: "Page E",
    uv: 40,
    pv: 40,
    amt: 40,
  },
  {
    name: "Page F",
    uv: 50,
    pv: 50,
    amt: 50,
  },
  {
    name: "Page G",
    uv: 60,
    pv: 60,
    amt: 60,
  },
  {
    name: "Page H",
    uv: 70,
    pv: 70,
    amt: 70,
  },
  {
    name: "Page I",
    uv: 80,
    pv: 80,
    amt: 80,
  },
  {
    name: "Page J",
    uv: 90,
    pv: 90,
    amt: 90,
  },
  {
    name: "Page K",
    uv: 100,
    pv: 100,
    amt: 100,
  },
];

const tickFormatter = (tickValue : number) => {
  return `${tickValue}%`;
};

const customTicks = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

const customLabel = ({ x, y, value } : any) => {
  return (
    <text x={x} y={y} dy={-8} fontSize={"10px"} textAnchor="start" fill="#435FB5">
      {value}%
    </text>
  );
};

const StatsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        layout="vertical"
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: -25,
          bottom: 0,
        }}
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
