import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const rawToken = process.env.GITHUB_TOKEN;
const GITHUB_TOKEN = rawToken ? rawToken.trim() : null;

console.log("Token loaded?", !!GITHUB_TOKEN);
console.log("Token length:", GITHUB_TOKEN ? GITHUB_TOKEN.length : 0);

app.post("/github-contributions", async (req, res) => {
  try {
    const { username, from, to } = req.body;

    if (!username || !from || !to) {
      return res
        .status(400)
        .json({ error: "username, from, and to are required" });
    }

    if (!GITHUB_TOKEN) {
      console.error("Missing GITHUB_TOKEN env var.");
      return res
        .status(500)
        .json({ error: "Server misconfigured: missing GitHub token" });
    }

    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const ghRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Bearer" casing is fine; GitHub ignores case, but let's be clean.
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { username, from, to },
      }),
    });

    const ghJson = await ghRes.json();

    if (!ghRes.ok) {
      console.error("GitHub API error:", ghJson);
      return res.status(ghRes.status).json(ghJson);
    }

    res.json(ghJson);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Simple test route
app.get("/", (req, res) => {
  res.send("✅ GitHub Proxy API is running!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
