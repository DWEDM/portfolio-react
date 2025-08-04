import { useState, useEffect } from "react";
import { fetchGitHubContributions } from "../utils/githubApi";

const COLOR_PALETTES = {
  dracula: [
    "#414558", // 0 - Base (softer dracula bg - more visible)
    "#6272a4", // 1 - Low activity (bright purple-blue)
    "#8be9fd", // 2 - Medium activity (electric cyan)
    "#ff79c6", // 3 - High activity (vibrant pink)
    "#f1fa8c", // 4 - Peak activity (neon yellow)
  ],
  nord: [
    "#E5E9F0", // 0 - Base (brighter snow)
    "#81A1C1", // 1 - Low activity (soft blue)
    "#5E81AC", // 2 - Medium activity (deep nord blue)
    "#D08770", // 3 - High activity (warm orange)
    "#BF616A", // 4 - Peak activity (nord red - more vibrant)
  ],
  spicy: [
    "#414863", // 0 - Base (deep purple-gray)
    "#7C9EB2", // 1 - Low activity (soft teal)
    "#B48EAD", // 2 - Medium activity (lavender)
    "#FF7E9D", // 3 - High activity (hot pink)
    "#FFB347", // 4 - Peak activity (sunset orange)
  ],
};

const ACTIVITY_LEVELS = [
  { threshold: 0, description: "No activity" },
  { threshold: 1, description: "Low activity" },
  { threshold: 5, description: "Medium activity" },
  { threshold: 10, description: "High activity" },
  { threshold: 20, description: "Peak activity" },
];

// Fixed dimensions to prevent layout shift
const SQUARE_SIZE = 16;
const GAP = 3;
const WEEK_WIDTH = SQUARE_SIZE + GAP;
const GRID_HEIGHT = (SQUARE_SIZE * 7) + (GAP * 6);
const MONTH_LABEL_HEIGHT = 24;

export default function GitHubStats({ themeName = "spicy" }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [hoverInfo, setHoverInfo] = useState(null);

  const activePalette = COLOR_PALETTES[themeName] ?? COLOR_PALETTES.spicy;
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  const getColor = (count) => {
    for (let i = ACTIVITY_LEVELS.length - 1; i >= 0; i--) {
      if (count >= ACTIVITY_LEVELS[i].threshold) {
        return activePalette[i];
      }
    }
    return activePalette[0];
  };

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const data = await fetchGitHubContributions("DWEDM", year);
        setContributions(data);
      } catch (error) {
        console.error("Failed to load GitHub contributions:", error);
        setContributions([]);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, [year]);

  // Process contributions data
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Calculate month positions
  const monthLabels = [];
  const monthPositions = [];
  
  let lastMonth = null;
  weeks.forEach((week, weekIndex) => {
    const firstDay = week[0]?.date;
    if (firstDay) {
      const date = new Date(firstDay);
      const month = date.getMonth();
      const monthName = date.toLocaleString("default", { month: "short" });
      
      if (month !== lastMonth) {
        monthLabels.push(monthName);
        monthPositions.push(weekIndex * WEEK_WIDTH);
        lastMonth = month;
      }
    }
  });

  return (
    <div className="w-full text-content mb-24">
      {/* Header Section - Always visible */}
      <header className="flex justify-between items-center mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-content">
            GitHub Contributions
          </h1>
          <p className="text-sm font-normal text-content/80 mt-1">
            {year} Activity Overview
          </p>
        </div>
      </header>
      <div className="p-6 md:p-8 bg-base-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-x-auto">
        {/* Main Content - Fixed height container */}
        <div 
          className="relative overflow-x-auto" 
          style={{ 
            minHeight: `${GRID_HEIGHT + MONTH_LABEL_HEIGHT + 32}px` // Grid + labels + padding
          }}
        >
          {/* Loading overlay */}
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center /80 z-10">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          )}

          {/* Month Labels - Always rendered */}
          <div className="flex relative h-6 mb-1 ml-7">
            {monthLabels.map((month, index) => (
              <div
                key={index}
                className="absolute text-xs text-content/80 whitespace-nowrap"
                style={{ left: `${monthPositions[index]}px` }}
              >
                {month}
              </div>
            ))}
          </div>

          {/* Contribution Grid */}
          <div className="flex">
            {/* Day of Week Labels */}
            <div className="flex flex-col justify-between mr-2 text-xs text-content/60">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div 
                  key={day} 
                  className="h-4 flex items-center justify-end pr-1"
                  style={{ height: `${SQUARE_SIZE}px` }}
                >
                  {day[0]}
                </div>
              ))}
            </div>

            {/* Contribution Squares */}
            <div className="flex">
              {weeks.map((week, weekIndex) => (
                <div 
                  key={weekIndex} 
                  className="flex flex-col gap-[3px] mr-[3px]"
                >
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`rounded-sm transition-all duration-150 cursor-pointer hover:scale-110 border border-base-200 ${
                        loading ? "opacity-50" : ""
                      }`}
                      onMouseEnter={() => 
                        !loading && setHoverInfo(
                          `${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`
                        )
                      }
                      onMouseLeave={() => !loading && setHoverInfo(null)}
                      style={{ 
                        backgroundColor: loading ? "var(--fallback-bc,oklch(var(--bc)/0.1))" : getColor(day.count),
                        width: `${SQUARE_SIZE}px`,
                        height: `${SQUARE_SIZE}px`,
                        opacity: day.count > 0 ? 0.9 + (day.count * 0.01) : 0.7
                      }}
                      aria-label={loading ? "Loading..." : `${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Info */}
        <div className="mt-3 w-full text-center">
          <p className="text-sm text-content/80 min-h-6">
            {loading ? "Loading contribution data..." : 
              hoverInfo || "Hover over squares to view contribution details"}
          </p>
        </div>

        {/* Legend - Always visible */}
        <footer className="flex justify-between items-center mt-4 text-xs">
          <div className="text-content/60">
            {loading ? "Loading..." : 
             hoverInfo ? "Click a year to change" : "Select a year above"}
          </div>
          <div className="flex items-center gap-2 bg-base-200/50 px-2 py-1 rounded-lg">
            <span className="text-content">Less</span>
            {[0, 1, 3, 5, 7].map((count) => (
              <div
                key={count}
                className="w-3 h-3 rounded-sm border border-base-300 transition-all"
                style={{ 
                  backgroundColor: loading ? "var(--fallback-bc,oklch(var(--bc)/0.1))" : getColor(count),
                  opacity: count > 0 ? 0.9 + (count * 0.01) : 0.7
                }}
              />
            ))}
            <span className="text-content">More</span>
          </div>
        </footer>
        
        {/* Year Selector - Always visible */}
        <div className="flex items-center gap-2 justify-center mt-4">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => {
                setYear(y);
                setHoverInfo(null);
                setLoading(true);
              }}
              aria-pressed={y === year}
              className={`btn btn-xs md:btn-sm ${y === year ? "btn-primary" : "btn-ghost"}`}
              disabled={loading && y === year}
            >
              {y}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}