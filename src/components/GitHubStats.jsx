import { useState, useEffect } from "react";
import { fetchGitHubContributions } from "../utils/githubApi";

const palettes = {
  forest: [
    "rgba(32, 39, 32, 1)",
    "rgba(54, 90, 54, 1)",
    "rgba(74, 135, 74, 1)",
    "rgba(109, 186, 109, 1)",
    "rgba(176, 242, 176, 1)",
  ],
  retro: [
    "rgba(244, 240, 228, 1)",
    "rgba(238, 205, 173, 1)",
    "rgba(233, 173, 120, 1)",
    "rgba(224, 140, 64, 1)",
    "rgba(191, 90, 11, 1)",
  ],
    vibrant: [
    "#ebedf0",
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ],
};


export default function GitHubStats({ themeName = "vibrant" }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(null); // NEW state

  const activePalette = palettes[themeName] ?? palettes.vibrant;

  const getColor = (count) => {
    if (count === 0) return activePalette[0];
    if (count < 5) return activePalette[1];
    if (count < 10) return activePalette[2];
    if (count < 20) return activePalette[3];
    return activePalette[4];
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchGitHubContributions("DWEDM", year);
        setContributions(data);
      } catch (err) {
        console.error("Error loading contributions:", err);
        setContributions([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [year]);

  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  // Group contributions into weeks (7 days each)
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Generate month labels for the timeline
  const monthLabels = [];
  const weekWidth = 14;
  let lastMonth = "";
  weeks.forEach((week) => {
    const firstDay = week[0]?.date;
    if (firstDay) {
      const month = new Date(firstDay).toLocaleString("default", { month: "short" });
      if (month !== lastMonth) {
        monthLabels.push(month);
        lastMonth = month;
      } else {
        monthLabels.push("");
      }
    }
  });

  return (
    <div className="w-full text-content">
      <div className="m-2 md:m-4 p-6 md:p-8 bg-base-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-x-auto">
        {/* Header section */}
        <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-content">
              My GitHub Contributions
            </h1>
            <p className="text-sm font-normal text-content mt-1">
              {year} Activity Overview
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => {
                  setYear(y);
                  setHoverInfo(null); // clear hover text when switching years
                }}
                aria-pressed={y === year}
                className={
                  "btn btn-xs sm:btn-sm md:btn-md " +
                  (y === year ? "btn-primary" : "btn-outline")
                }
              >
                {y}
              </button>
            ))}
          </div>

        </div>

        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {/* Month labels */}
            <div className="flex text-xs text-content mb-1 ml-1">
              {monthLabels.map((month, index) => (
                <div
                  key={index}
                  className="text-center"
                  style={{ width: `${weekWidth}px` }}
                >
                  {month}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px] mr-[3px]">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className="w-3 h-3 rounded-sm hover:scale-125 transition-transform duration-150 cursor-pointer"
                      onMouseEnter={() =>
                        setHoverInfo(`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`)
                      }
                      onMouseLeave={() => setHoverInfo(null)}
                      style={{ backgroundColor: getColor(day.count) }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Hover info displayed below */}
            <p className="text-center mt-4 text-sm text-content">
              {hoverInfo || "Hover over a day to see contributions"}
            </p>
          </div>
        )}

        {/* Legend */}
        {!loading && (
          <div className="flex justify-end mt-4 text-xs text-content">
            <div className="flex items-center gap-2">
              <span>Less</span>
              {[0, 1, 3, 5, 7].map((count) => (
                <div
                  key={count}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: getColor(count) }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}