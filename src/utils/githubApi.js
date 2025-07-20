// src/utils/githubApi.js
export async function fetchGitHubContributions(username, year) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const res = await fetch("https://portfolio-react-backend-5ia7.onrender.com/github-contributions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, from, to }),
  });

  const json = await res.json();

  console.log("githubApi response:", json);

  if (!json.data || !json.data.user) {
    throw new Error("Failed to fetch GitHub data");
  }

  const weeks =
    json.data.user.contributionsCollection.contributionCalendar.weeks ?? [];

  const days = weeks.flatMap((w) => w.contributionDays);

  return days.map((d) => ({
    date: d.date,
    count: d.contributionCount,
    level:
      d.contributionCount === 0
        ? 0
        : Math.min(4, Math.floor(d.contributionCount / 5)),
  }));
}
