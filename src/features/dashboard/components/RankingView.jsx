import React, { useState } from "react";

const initialPlayers = [
  { rank: 1, name: "สมชาย วิชัย", initials: "สว", position: "PG", wins: 18, losses: 5, points: 22.4, rebounds: 5.1, assists: 7.8, jersey: "#3", color: "bg-[#0074e4]" },
  { rank: 2, name: "วีรชัย ทองดี", initials: "วท", position: "SF", wins: 16, losses: 7, points: 17.8, rebounds: 7.4, assists: 2.9, jersey: "#23", color: "bg-[#805ad5]" },
  { rank: 3, name: "กิตติ ศรีสุข", initials: "กศ", position: "SG", wins: 15, losses: 8, points: 19.2, rebounds: 4.2, assists: 3.5, jersey: "#9", color: "bg-[#00bfa5]" },
  { rank: 4, name: "อรรถพล นามดี", initials: "อน", position: "C", wins: 14, losses: 9, points: 14.5, rebounds: 11.2, assists: 1.8, jersey: "#34", color: "bg-[#e53e3e]" },
  { rank: 5, name: "นพดล แก้วมณี", initials: "นก", position: "PF", wins: 13, losses: 10, points: 15.0, rebounds: 8.5, assists: 2.1, jersey: "#7", color: "bg-[#dd6b20]" },
  { rank: 6, name: "เกียรติศักดิ์ ศรีเมือง", initials: "กศ", position: "SF", wins: 12, losses: 11, points: 16.2, rebounds: 5.8, assists: 3.2, jersey: "#11", color: "bg-[#3182ce]" },
  { rank: 7, name: "ธีรภัทร ชูจิตร", initials: "ธช", position: "PG", wins: 11, losses: 12, points: 13.8, rebounds: 3.1, assists: 6.5, jersey: "#0", color: "bg-[#d53f8c]" },
  { rank: 8, name: "ปิยะพงษ์ ผิวอ่อน", initials: "ปผ", position: "SG", wins: 10, losses: 13, points: 12.5, rebounds: 4.0, assists: 2.8, jersey: "#14", color: "bg-[#319795]" },
  { rank: 9, name: "มานพ รักดี", initials: "มร", position: "PF", wins: 9, losses: 14, points: 11.0, rebounds: 9.2, assists: 1.5, jersey: "#45", color: "bg-[#4a5568]" },
  { rank: 10, name: "สุรชัย จตุรภัทรพงศ์", initials: "สจ", position: "C", wins: 8, losses: 15, points: 9.5, rebounds: 10.1, assists: 1.2, jersey: "#55", color: "bg-[#2d3748]" },
];

function SearchIcon({ className = "w-5 h-5" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
    </svg>
  );
}

export default function RankingView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlayers = initialPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Top 3 for podium
  const top1 = initialPlayers.find((p) => p.rank === 1);
  const top2 = initialPlayers.find((p) => p.rank === 2);
  const top3 = initialPlayers.find((p) => p.rank === 3);

  // Helper for Position Badge Styling
  const getPositionBadge = (pos) => {
    switch (pos) {
      case "PG":
        return <span className="bg-[#ff6600]/10 border border-[#ff6600]/30 text-[#ff6600] text-xs font-bold px-2 py-0.5 rounded-md uppercase">PG</span>;
      case "SF":
        return <span className="bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-bold px-2 py-0.5 rounded-md uppercase">SF</span>;
      case "SG":
        return <span className="bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] text-xs font-bold px-2 py-0.5 rounded-md uppercase">SG</span>;
      case "PF":
        return <span className="bg-[#facc15]/10 border border-[#facc15]/30 text-[#facc15] text-xs font-bold px-2 py-0.5 rounded-md uppercase">PF</span>;
      case "C":
        return <span className="bg-[#f43f5e]/10 border border-[#f43f5e]/30 text-[#f43f5e] text-xs font-bold px-2 py-0.5 rounded-md uppercase">C</span>;
      default:
        return <span className="bg-gray-700/50 text-gray-300 text-xs font-bold px-2 py-0.5 rounded-md uppercase">{pos}</span>;
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Header section with search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[#ff6600] tracking-[0.2em] uppercase">
            Season 2025
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-1">ตารางคะแนน</h2>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
            <SearchIcon className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="ค้นหาผู้เล่น..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#11141b] border border-[#232835] rounded-full pl-11 pr-5 py-2.5 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* Podium Cards Section - only show if search is not filtering out top 3 */}
      {searchQuery === "" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mt-4">
          {/* Rank 2 (Left) */}
          {top2 && (
            <div className="bg-[#11141b] border border-[#232835] p-6 rounded-3xl flex flex-col items-center relative text-center order-2 md:order-1 h-80 justify-center group hover:border-[#2f3647] hover:scale-[1.02] transition-all duration-300">
              {/* Silver Medal Badge */}
              <div className="absolute -top-4 w-9 h-9 rounded-full bg-[#cbd5e1] border-2 border-[#94a3b8] flex items-center justify-center text-sm font-bold text-gray-900 shadow-md">
                🥈
              </div>
              
              {/* Avatar circle */}
              <div className={`w-20 h-20 rounded-full ${top2.color} flex items-center justify-center text-2xl font-black text-white shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                {top2.initials}
              </div>

              <h3 className="text-xl font-bold">{top2.name}</h3>
              <div className="mt-1.5">{getPositionBadge(top2.position)}</div>

              <div className="mt-4 flex flex-col items-center">
                <span className="text-3xl font-black text-[#ff6600] tracking-tight">{top2.wins}W</span>
                <span className="text-xs text-gray-400 mt-1">{top2.points} pts/g</span>
              </div>
            </div>
          )}

          {/* Rank 1 (Center - Highlighted/Taller) */}
          {top1 && (
            <div className="bg-[#11141b] border border-[#ff6600]/30 shadow-2xl shadow-[#ff6600]/5 p-8 rounded-3xl flex flex-col items-center relative text-center order-1 md:order-2 h-96 justify-center group hover:border-[#ff6600]/50 hover:scale-[1.03] transition-all duration-300">
              {/* Gold Medal Badge */}
              <div className="absolute -top-5 w-11 h-11 rounded-full bg-[#fbbf24] border-2 border-[#d97706] flex items-center justify-center text-base font-bold text-amber-950 shadow-lg">
                🥇
              </div>
              
              {/* Avatar circle */}
              <div className={`w-24 h-24 rounded-full ${top1.color} flex items-center justify-center text-3xl font-black text-white shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                {top1.initials}
              </div>

              <h3 className="text-2xl font-black">{top1.name}</h3>
              <div className="mt-1.5">{getPositionBadge(top1.position)}</div>

              <div className="mt-5 flex flex-col items-center">
                <span className="text-4xl font-black text-[#ff6600] tracking-tight">{top1.wins}W</span>
                <span className="text-sm text-gray-400 mt-1">{top1.points} pts/g</span>
              </div>
            </div>
          )}

          {/* Rank 3 (Right) */}
          {top3 && (
            <div className="bg-[#11141b] border border-[#232835] p-6 rounded-3xl flex flex-col items-center relative text-center order-3 md:order-3 h-80 justify-center group hover:border-[#2f3647] hover:scale-[1.02] transition-all duration-300">
              {/* Bronze Medal Badge */}
              <div className="absolute -top-4 w-9 h-9 rounded-full bg-[#f59e0b]/80 border-2 border-[#b45309] flex items-center justify-center text-sm font-bold text-amber-950 shadow-md">
                🥉
              </div>
              
              {/* Avatar circle */}
              <div className={`w-20 h-20 rounded-full ${top3.color} flex items-center justify-center text-2xl font-black text-white shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                {top3.initials}
              </div>

              <h3 className="text-xl font-bold">{top3.name}</h3>
              <div className="mt-1.5">{getPositionBadge(top3.position)}</div>

              <div className="mt-4 flex flex-col items-center">
                <span className="text-3xl font-black text-[#ff6600] tracking-tight">{top3.wins}W</span>
                <span className="text-xs text-gray-400 mt-1">{top3.points} pts/g</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rankings List Table */}
      <div className="bg-[#11141b] border border-[#232835] rounded-3xl overflow-hidden shadow-xl mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#232835] text-xs font-semibold text-gray-400 tracking-wider">
                <th className="py-4 px-6 text-center w-16">#</th>
                <th className="py-4 px-6">ผู้เล่น</th>
                <th className="py-4 px-6 text-center">ตำแหน่ง</th>
                <th className="py-4 px-6 text-center">ชนะ</th>
                <th className="py-4 px-6 text-center">แพ้</th>
                <th className="py-4 px-6 text-center">คะแนน</th>
                <th className="py-4 px-6 text-center">รีบาวด์</th>
                <th className="py-4 px-6 text-center">แอสซิสต์</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1c202a]">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <tr
                    key={player.rank}
                    className="hover:bg-[#181b24] transition-colors duration-200"
                  >
                    {/* Rank */}
                    <td className="py-4 px-6 text-center font-bold text-sm text-gray-400">
                      {player.rank === 1 ? (
                        <span className="text-amber-400 font-extrabold">1</span>
                      ) : player.rank === 2 ? (
                        <span className="text-slate-300 font-extrabold">2</span>
                      ) : player.rank === 3 ? (
                        <span className="text-amber-600 font-extrabold">3</span>
                      ) : (
                        player.rank
                      )}
                    </td>

                    {/* Player Info */}
                    <td className="py-4 px-6 font-semibold">
                      <div className="flex items-center gap-3">
                        {/* Circle initials */}
                        <div
                          className={`w-9 h-9 rounded-full ${player.color} flex items-center justify-center text-xs font-bold text-white shadow-md`}
                        >
                          {player.initials}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white hover:text-[#ff6600] transition-colors duration-150">
                            {player.name}
                          </span>
                          <span className="text-[11px] text-gray-500 font-semibold mt-0.5">
                            {player.jersey}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Position */}
                    <td className="py-4 px-6 text-center">
                      {getPositionBadge(player.position)}
                    </td>

                    {/* Wins */}
                    <td className="py-4 px-6 text-center font-extrabold text-[#00c853] text-sm">
                      {player.wins}
                    </td>

                    {/* Losses */}
                    <td className="py-4 px-6 text-center font-semibold text-gray-500 text-sm">
                      {player.losses}
                    </td>

                    {/* Points */}
                    <td className="py-4 px-6 text-center font-extrabold text-[#ff6600] text-sm">
                      {player.points}
                    </td>

                    {/* Rebounds */}
                    <td className="py-4 px-6 text-center font-semibold text-gray-300 text-sm">
                      {player.rebounds}
                    </td>

                    {/* Assists */}
                    <td className="py-4 px-6 text-center font-semibold text-gray-300 text-sm">
                      {player.assists}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-gray-500 font-semibold">
                    ไม่พบข้อมูลผู้เล่นที่ค้นหา
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
