// {
//   "apiKey": "0ed365ed-daf4-4747-a7d8-5434dfbb33c3",
//   "idEvent": "123",
//   "ebib": "123",
//   "nama": "uki",
//   "kota": "jakarta",
//   "kategori": "run 10k",
//   "tanggal": "2022-12-12",
//   "gender": "M" ,
//   "waktu": "08:00",
//   "size": "M"
// }

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
    const idEvent = payload["idEvent"];
    const ebib = payload["ebib"];
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
      .replace("{ID}", ebib)
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

    prepareFolder(idEvent, ebib);

    try {
      fs.writeFileSync(
        `./public/${idEvent}/kartu/${ebib}/${ebib}.png`,
        imgBuffer
      );
    } catch (e) {
      throw 3;
    }

    res.json({
      succes: true,
      url: `${req.headers.host}/${idEvent}/kartu/${ebib}/${ebib}.png`,
    });
  } catch (e) {
    res.json({ succes: false, message: e });
  }
}

const prepareFolder = (idEvent, ebib) => {
  try {
    if (!fs.existsSync(`./public/${idEvent}/kartu/${ebib}`))
      fs.mkdirSync(
        `./public/${idEvent}/kartu/${ebib}`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 2;
  }
};
