import GitHubCalendar from "react-github-calendar";

const GitHubStats = ({ themeName }) => {

const palettes = {
  coffee: [
    "rgba(27, 31, 27, 0.8)", 
    "rgba(59, 93, 42, 0.5)",
    "rgba(79, 124, 55, 0.7)", 
    "rgba(108, 171, 71, 0.85)", 
    "rgba(141, 216, 92, 1)", 
  ],
  bumblebee: [
    "rgba(229, 231, 235, 0.8)",
    "rgba(236, 72, 153, 0.5)",
    "rgba(6, 182, 212, 0.7)",
    "rgba(251, 191, 36, 0.85)",
    "rgba(139, 92, 246, 1)",
  ],
};


  const activePalette = palettes[themeName] ?? palettes.bumblebee;
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