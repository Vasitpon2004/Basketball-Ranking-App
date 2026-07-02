import React from "react";

const upcomingMatches = [
  {
    id: 1,
    date: "2025-07-08 • 18:00",
    location: "สนาม A - ชั้น 1",
    team1: "THUNDER HAWKS",
    team1Players: 5,
    team2: "STORM WOLVES",
    team2Players: 5,
  },
  {
    id: 2,
    date: "2025-07-10 • 17:00",
    location: "สนาม C - อาคารกีฬา",
    team1: "GOLDEN EAGLES",
    team1Players: 5,
    team2: "SILVER BULLS",
    team2Players: 5,
  },
];

const completedMatches = [
  {
    id: 3,
    date: "2025-07-04 • 19:30",
    location: "สนาม B - ชั้น 2",
    team1: "FIRE DRAGONS",
    team1Score: 78,
    team1Players: 5,
    team2: "ICE KINGS",
    team2Score: 65,
    team2Players: 5,
    winner: "team1",
  },
  {
    id: 4,
    date: "2025-06-30 • 18:30",
    location: "สนาม A - ชั้น 1",
    team1: "SHARK BAY",
    team1Score: 82,
    team1Players: 5,
    team2: "FOREST TIGERS",
    team2Score: 85,
    team2Players: 5,
    winner: "team2",
  },
];

function ClockIcon({ className = "w-4 h-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function LocationIcon({ className = "w-4 h-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export default function ScheduleView() {
  return (
    <div className="flex flex-col gap-10 animate-fade-in">
      {/* Header Section */}
      <div>
        <span className="text-xs font-semibold text-[#ff6600] tracking-[0.2em] uppercase">
          Bangkok Basketball League 2025
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-1">ตารางการแข่งขัน</h2>
      </div>

      {/* Upcoming Section */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6600]"></span>
          <h3 className="text-lg font-bold text-gray-200">
            กำลังจะมาถึง ({upcomingMatches.length})
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {upcomingMatches.map((match) => (
            <div
              key={match.id}
              className="bg-[#11141b] border border-[#232835] rounded-3xl p-6 flex flex-col gap-6 hover:border-[#2f3647] hover:scale-[1.01] transition-all duration-300"
            >
              {/* Card Meta & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400 font-semibold">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="w-4 h-4 text-gray-500" />
                    <span>{match.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <LocationIcon className="w-4 h-4 text-gray-500" />
                    <span>{match.location}</span>
                  </div>
                </div>
                <span className="bg-[#ff6600]/10 border border-[#ff6600]/20 text-[#ff6600] px-3.5 py-1 rounded-full text-[11px] font-bold">
                  กำลังมา
                </span>
              </div>

              {/* Matchup Teams */}
              <div className="grid grid-cols-7 items-center justify-center text-center">
                {/* Team 1 */}
                <div className="col-span-3 flex flex-col items-center">
                  <h4 className="text-lg md:text-2xl font-black tracking-tight text-white hover:text-[#ff6600] transition-colors duration-150">
                    {match.team1}
                  </h4>
                  <span className="text-xs text-gray-500 font-semibold mt-1">
                    {match.team1Players} ผู้เล่น
                  </span>
                </div>

                {/* VS Separator */}
                <div className="col-span-1 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600 bg-[#181b24] border border-[#232835] w-9 h-9 rounded-full flex items-center justify-center uppercase">
                    VS
                  </span>
                </div>

                {/* Team 2 */}
                <div className="col-span-3 flex flex-col items-center">
                  <h4 className="text-lg md:text-2xl font-black tracking-tight text-white hover:text-[#ff6600] transition-colors duration-150">
                    {match.team2}
                  </h4>
                  <span className="text-xs text-gray-500 font-semibold mt-1">
                    {match.team2Players} ผู้เล่น
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Section */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00c853]"></span>
          <h3 className="text-lg font-bold text-gray-200">
            ผลการแข่งขัน ({completedMatches.length})
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {completedMatches.map((match) => (
            <div
              key={match.id}
              className="bg-[#11141b] border border-[#232835] rounded-3xl p-6 flex flex-col gap-6 hover:border-[#2f3647] hover:scale-[1.01] transition-all duration-300"
            >
              {/* Card Meta & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400 font-semibold">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="w-4 h-4 text-gray-500" />
                    <span>{match.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <LocationIcon className="w-4 h-4 text-gray-500" />
                    <span>{match.location}</span>
                  </div>
                </div>
                <span className="bg-[#00c853]/10 border border-[#00c853]/20 text-[#00c853] px-3.5 py-1 rounded-full text-[11px] font-bold">
                  จบแล้ว
                </span>
              </div>

              {/* Matchup with Scores */}
              <div className="grid grid-cols-9 items-center text-center">
                {/* Team 1 Name */}
                <div className="col-span-3 flex flex-col items-center">
                  <h4
                    className={`text-lg md:text-2xl font-black tracking-tight transition-colors duration-150 ${
                      match.winner === "team1"
                        ? "text-[#ff6600]"
                        : "text-white hover:text-[#ff6600]"
                    }`}
                  >
                    {match.team1}
                  </h4>
                  <span className="text-xs text-gray-500 font-semibold mt-1">
                    {match.team1Players} ผู้เล่น
                  </span>
                </div>

                {/* Team 1 Score */}
                <div className="col-span-1 flex justify-end pr-2 md:pr-4">
                  <span
                    className={`text-2xl md:text-4xl font-black tracking-tight ${
                      match.winner === "team1" ? "text-[#ff6600]" : "text-gray-400"
                    }`}
                  >
                    {match.team1Score}
                  </span>
                </div>

                {/* Score Separator */}
                <div className="col-span-1 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">—</span>
                </div>

                {/* Team 2 Score */}
                <div className="col-span-1 flex justify-start pl-2 md:pl-4">
                  <span
                    className={`text-2xl md:text-4xl font-black tracking-tight ${
                      match.winner === "team2" ? "text-[#ff6600]" : "text-gray-400"
                    }`}
                  >
                    {match.team2Score}
                  </span>
                </div>

                {/* Team 2 Name */}
                <div className="col-span-3 flex flex-col items-center">
                  <h4
                    className={`text-lg md:text-2xl font-black tracking-tight transition-colors duration-150 ${
                      match.winner === "team2"
                        ? "text-[#ff6600]"
                        : "text-white hover:text-[#ff6600]"
                    }`}
                  >
                    {match.team2}
                  </h4>
                  <span className="text-xs text-gray-500 font-semibold mt-1">
                    {match.team2Players} ผู้เล่น
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
