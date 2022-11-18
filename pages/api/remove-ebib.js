import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send();
    return;
  }

  const payload = req.body;
  const apiKey = payload["apiKey"];

  if (apiKey == null || apiKey != process.env["api-key"]) {
    res.status(400).send();
    return;
  }

  try {
    const ebib = payload["ebib"];

    fs.rmSync(`./public/ebib/${ebib}/ebib.pdf`, { force: true });

    res.json({
      succes: true,
    });
  } catch (e) {
    res.json({ succes: false, message: e });
  }
}
