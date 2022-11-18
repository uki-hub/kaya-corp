// {
//   "apiKey": "0ed365ed-daf4-4747-a7d8-5434dfbb33c3",
//   "idEvent": "123",
//   "ebib": "123",
//   "nama": "uki",
//   "lomba": "fun ride" ,
//   "gender": "M"
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
    const lomba = payload["lomba"];
    const gender = payload["gender"];

    let templateRaw = fs
      .readFileSync(path.join("./templates/ebib-minify.html"))
      .toString();

    templateRaw = templateRaw
      .replace("{NAMA}", nama)
      .replace("{NOMOR}", ebib)
      .replace("{LOMBA}", lomba);

      if(gender == "M") {
        templateRaw = templateRaw.replaceAll("{WARNA}", "#ED1F24");
      } else if (gender == "W")  {
        templateRaw = templateRaw.replaceAll("{WARNA}", "#37863F");
      }

    const br = await puppeteer.launch();
    const pg = await br.newPage();
    await pg.setViewport({
      width: 1280,
      height: 720,
      isLandscape: true,
    });
    await pg.setContent(templateRaw);

    const pdf = await pg.pdf({
      omitBackground: true,
      printBackground: true,
      format: "A4",
      landscape: true,
    });

    prepareFolder(idEvent, ebib);

    try {
      fs.writeFile(`./public/${idEvent}/ebib/${ebib}/${ebib}.pdf`, pdf, () => {});
    } catch (e) {
      throw 1;
    }

    res.json({
      succes: true,
      url: `${req.headers.host}/${idEvent}/ebib/${ebib}/${ebib}.pdf`,
    });
  } catch (e) {
    res.json({ succes: false, message: e });
  }
}

const prepareFolder = (idEvent, ebib) => {
  try {
    if (!fs.existsSync(`./public/${idEvent}`))
      fs.mkdirSync(
        `./public/${idEvent}`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 0;
  }

  try {
    if (!fs.existsSync(`./public/${idEvent}/ebib`))
      fs.mkdirSync(
        `./public/${idEvent}/ebib`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 1;
  }

  try {
    if (!fs.existsSync(`./public/${idEvent}/ebib/${ebib}`))
      fs.mkdirSync(
        `./public/${idEvent}/ebib/${ebib}`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 2;
  }
};
