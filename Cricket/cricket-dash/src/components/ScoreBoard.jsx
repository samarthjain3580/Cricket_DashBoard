export default function ScoreBoard({ match }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-xl font-bold mb-2 text-blue-600">
        {match.teams} - Live Score
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-semibold text-gray-800">{match.score}</p>
          <p className="text-gray-600">{match.overs} overs</p>
          <p className="mt-2 text-green-600 font-medium">{match.result}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">Top Batsman: {match.topBatsman}</p>
          <p className="font-semibold">Top Bowler: {match.topBowler}</p>
        </div>
      </div>
    </div>
  );
}
