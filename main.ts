// "Have You Tried Turning It Off?" — make.fun entry
// Writes one funny tech-support line to /output/entry.txt.
// Plain Node.js, no dependencies, no network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Great news — I've restarted your ticket, so as far as the system is concerned, your computer is fixed. Fancy a coffee while reality catches up?";

const MAX_CHARS = 199;

function validateEntry(text: string): boolean {
  if (text.length < 1 || text.length > MAX_CHARS) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

function main(): void {
  if (!validateEntry(LINE)) {
    throw new Error("Entry failed validation: must be 1-199 chars, single line.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
