import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import MatchCard from "./components/MatchCard";
import ScoreBoard from "./components/ScoreBoard";
import TeamComparison from "./components/TeamComparison";

// Utility to generate fake cricket match data
const generateRandomMatch = (id) => {
  const teams = [
    ["India", "Australia"],
    ["Pakistan", "New Zealand"],
    ["England", "South Africa"],
    ["Sri Lanka", "Bangladesh"],
    ["West Indies", "Afghanistan"],
    ["Ireland", "Zimbabwe"],
  ];
  const seriesList = ["T20 World Cup", "ODI Series", "Test Match", "Asia Cup"];
  const [teamA, teamB] = teams[Math.floor(Math.random() * teams.length)];
  const series = seriesList[Math.floor(Math.random() * seriesList.length)];
  const runsA = Math.floor(Math.random() * 120) + 100;
  const wktsA = Math.floor(Math.random() * 10);
  const overs = (Math.random() * 20).toFixed(1);
  const isLive = Math.random() > 0.5;

  return {
    id,
    teams: `${teamA} vs ${teamB}`,
    series: `${series} 2025`,
    score: `${runsA}/${wktsA}`,
    overs,
    status: isLive ? "Match in Progress" : `${teamA} won by ${Math.floor(Math.random() * 30) + 1} runs`,
    result: isLive ? `${teamA} batting first` : "Completed",
    topBatsman: "Random Player - " + (Math.floor(Math.random() * 80) + 20) + "(42)",
    topBowler: "Star Bowler - " + (Math.floor(Math.random() * 3) + 1) + "/" + (Math.floor(Math.random() * 40) + 20),
    teamA,
    teamB,
    teamARuns: runsA,
    teamAWkts: wktsA,
    teamBRuns: Math.floor(Math.random() * 150) + 50,
    teamBWkts: Math.floor(Math.random() * 10),
  };
};

export default function App() {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // generate new matches on load + refresh every 15s
  useEffect(() => {
  // function to generate matches
  const generateMatches = () => {
    const list = Array.from({ length: 6 }, (_, i) => generateRandomMatch(i + 1));
    setMatches(list);
    setSelectedMatch(list[0]);
  };

  // run immediately once
  generateMatches();

  // run automatically every 5 seconds (like live Cricbuzz)
  const interval = setInterval(generateMatches, 15000);

  // clean up interval when component unmounts
  return () => clearInterval(interval);
}, []);


  // search and filter logic
  const filteredMatches = matches.filter((match) => {
    const searchMatch = match.teams.toLowerCase().includes(search.toLowerCase());
    const filterMatch =
      filter === "All"
        ? true
        : filter === "Live"
        ? match.status.toLowerCase().includes("progress")
        : match.status.toLowerCase().includes("completed") ||
          match.status.toLowerCase().includes("won");
    return searchMatch && filterMatch;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          🏏 Dynamic Cricket Score Dashboard
        </h2>

        <Filters
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onSelect={() => setSelectedMatch(match)}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-3 text-center mt-4">
              No matches found 😕
            </p>
          )}
        </div>

        {selectedMatch && (
          <div className="mt-10">
            <ScoreBoard match={selectedMatch} />
            <TeamComparison match={selectedMatch} />
          </div>
        )}
      </div>
    </div>
  );
}
