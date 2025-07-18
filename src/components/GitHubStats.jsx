import { useState, useEffect } from "react";
import { fetchGitHubContributions } from "../utils/githubApi";

const palettes = {
  forest: [
    "rgba(20, 24, 20, 0.95)",   // 0
    "rgba(45, 52, 45, 0.85)",   // 1
    "rgba(70, 80, 70, 0.75)",   // 5+
    "rgba(110, 125, 110, 0.65)",// 10+
    "rgba(150, 170, 150, 0.55)" // 20+
  ],
  retro: [
    "rgba(240, 240, 235, 0.95)",
    "rgba(215, 215, 210, 0.85)",
    "rgba(185, 185, 180, 0.75)",
    "rgba(150, 150, 145, 0.65)",
    "rgba(115, 115, 110, 0.55)"
  ],
  vibrant: [  // GitHub-like colors
    "#ebedf0",   // 0
    "#9be9a8",   // 1-4
    "#40c463",   // 5-9
    "#30a14e",   // 10-19
    "#216e39"    // 20+
  ]
};

export default function GitHubStats({ themeName = "vibrant" }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);

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
  weeks.forEach((week, index) => {
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
      <div className="m-2 md:m-4 p-6 md:p-8 bg-base-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-content">
              My GitHub Contributions
            </h1>
            <p className="text-sm text-content mt-1">
              {year} Activity Overview
            </p>
          </div>
          <div className="flex gap-1 md:gap-2">
            {years.map((y) => (
              <button
                key={y}
                className={`btn btn-sm md:btn-md px-3 md:px-4 btn-outline transition-all ${
                  year === y ? 'btn-active btn-primary' : 'hover:bg-base-200'
                }`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="relative">
            {/* Month labels */}
            <div className="flex text-xs text-accent mb-1">
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

            {/* Contribution grid - Wrapped in overflow container */}
            <div className="overflow-x-auto pb-2">
              <div className="flex" style={{ width: `${weeks.length * 17}px` }}>
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1 mr-1 relative z-0">
                    {week.map((day, di) => (
                      <div
                        key={di}
                        className="tooltip tooltip-top rounded-sm hover:scale-125 transition-transform duration-150 cursor-pointer relative z-10"
                        data-tip={`${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
                        style={{
                          backgroundColor: getColor(day.count),
                          width: "14px",
                          height: "14px",
                          zIndex: "10",
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!loading && (
          <div className="flex justify-end mt-4 text-xs text-accent">
            <div className="flex items-center gap-2">
              <span>Less</span>
              {[0, 1, 3, 5, 7].map((count) => (
                <div
                  key={count}
                  className="rounded-sm"
                  style={{
                    backgroundColor: getColor(count),
                    width: "14px",
                    height: "14px",
                  }}
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