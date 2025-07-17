import GitHubCalendar from "react-github-calendar";

const GitHubStats = ({ themeName }) => {
  const palettes = {
    forest: ["#1b1f1b", "#3b5d2a", "#4f7c37", "#6cab47", "#8dd85c"],
    cmyk:   ["#e5e7eb", "#ec4899", "#06b6d4", "#fbbf24", "#8b5cf6"],
  };
  const activePalette = palettes[themeName] ?? palettes.cmyk;
  const calendarTheme = { light: activePalette, dark: activePalette };

  return (
    <div className="w-full text-content">
      <div className="m-2 md:m-4 p-8 bg-base-100 rounded-2xl shadow-2xl overflow-x-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          My GitHub contributions:
        </h1>
        <GitHubCalendar
          key={themeName}            // forces re-mount on theme change
          username="DWEDM"
          theme={calendarTheme}
          colorScheme="light"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
};

export default GitHubStats;