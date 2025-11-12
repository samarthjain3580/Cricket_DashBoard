import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function TeamComparison({ match }) {
  const data = [
    { name: match.teamA, Runs: match.teamARuns, Wickets: match.teamAWkts },
    { name: match.teamB, Runs: match.teamBRuns, Wickets: match.teamBWkts },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4 text-blue-600">
        Team Comparison
      </h3>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Runs" fill="#3b82f6" />
        <Bar dataKey="Wickets" fill="#f97316" />
      </BarChart>
    </div>
  );
}
