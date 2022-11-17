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

  if (apiKey == null || apiKey != process.env["get-kartu-peserta-key"]) {
    res.status(400).send();
    return;
  }

  try {
    const id = payload["id"];

    fs.rmSync(`./public/peserta/${id}/kartu.png`, { force: true });

    res.json({
      succes: true,
    });
  } catch (e) {
    res.json({ succes: false, message: e });
  }
}
