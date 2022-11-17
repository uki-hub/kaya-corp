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
    const id = payload["id"];
    const nama = payload["nama"];
    const kota = payload["kota"];
    const kategori = payload["kategori"];
    const tanggal = payload["tanggal"];
    const gender = payload["gender"];
    const waktu = payload["waktu"];
    const size = payload["size"];

    let templateRaw = fs
      .readFileSync(path.join("./templates/kartu-peserta-minify.html"))
      .toString();

    templateRaw = templateRaw
      .replace("{ID}", id)
      .replace("{NAMA}", nama)
      .replace("{KOTA}", kota)
      .replace("{KATEGORI}", kategori)
      .replace("{TANGGAL}", tanggal)
      .replace("{KELAMIN}", gender)
      .replace("{WAKTU}", waktu)
      .replace("{SIZE}", size);

    const br = await puppeteer.launch();
    const pg = await br.newPage();
    await pg.setViewport({
      width: 1280,
      height: 527,
    });
    await pg.setContent(templateRaw);

    const dom = await pg.$("body");

    const imgBuffer = await dom.screenshot({
      omitBackground: true,
    });

    prepareFolder(id);

    try {
      fs.writeFileSync(`./public/kartu/${id}/kartu.png`, imgBuffer);
    } catch (e) {
      throw 3;
    }

    res.json({
      succes: true,
      url: `${req.headers.host}/kartu/${id}/kartu.png`,
    });
  } catch (e) {
    res.json({ succes: false, message: e });
  }
}

const prepareFolder = (id) => {
  try {
    if (!fs.existsSync(`./public/kartu`))
      fs.mkdirSync(
        `./public/kartu`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 1;
  }

  try {
    if (!fs.existsSync(`./public/kartu/${id}`))
      fs.mkdirSync(
        `./public/kartu/${id}`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 2;
  }
};
