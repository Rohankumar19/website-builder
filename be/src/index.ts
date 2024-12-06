require("dotenv").config();

import { Anthropic } from '@anthropic-ai/sdk';

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;


const anthropic = new Anthropic();

async function main() {
const msg = await anthropic.messages.create({
  model: "claude-3-sonnet-20240229",
  max_tokens: 1000,
  temperature: 0,
  messages: []
});

console.log(msg);