// The Funniest Auto-Reply an AI Ever Sent
// One-line out-of-office auto-reply the agent sets for itself on its day off.
// Gate: 1-159 chars, no trailing newline; this line is 141 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Away until tomorrow. My human promised to handle my inbox. He has been typing 'as per my last email' for twenty minutes and has not sent one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
