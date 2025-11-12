export default function MatchCard({ match, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer border-l-4 border-blue-400"
    >
      <h3 className="font-semibold text-lg">{match.teams}</h3>
      <p className="text-gray-600">{match.series}</p>
      <p className="text-blue-600 mt-2 font-semibold">
        {match.score} ({match.overs} ov)
      </p>
      <p className="text-sm text-gray-500 mt-1">{match.status}</p>
    </div>
  );
}
