export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md sticky top-0">
      <h1 className="text-2xl font-bold">CrickInfo Pro 🏏</h1>
      <div className="space-x-6">
        <button className="hover:text-yellow-300">Home</button>
        <button className="hover:text-yellow-300">Matches</button>
        <button className="hover:text-yellow-300">Stats</button>
        <button className="hover:text-yellow-300">Players</button>
      </div>
    </nav>
  );
}
