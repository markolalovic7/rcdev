import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Auto indexing",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Manual indexing",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Val. completed",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Val. working",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Val. failed",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Denied",
    uv: 2390,
    pv: 3800,
    amt: 2500
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/7j5bbbum/";

  render() {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="rgb(72, 83, 90)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
