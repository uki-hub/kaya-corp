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
    const nomor = payload["nomor"];
    const lomba = payload["lomba"];

    let templateRaw = fs
      .readFileSync(path.join("./templates/ebib-minify.html"))
      .toString();

    templateRaw = templateRaw
      .replace("{NAMA}", nama)
      .replace("{NOMOR}", nomor)
      .replace("{LOMBA}", lomba);

      if("M") {
        //merah
      } else if ("G")  {
        //biru
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

    prepareFolder(id);

    try {
      fs.writeFile(`./public/ebib/${id}/ebib.pdf`, pdf, () => {});
    } catch (e) {
      throw 1;
    }

    res.json({
      succes: true,
      url: `${req.headers.host}/ebib/${id}/ebib.pdf`,
    });
  } catch (e) {
    res.json({ succes: false, message: e });
  }
}

const prepareFolder = (id) => {
  try {
    if (!fs.existsSync(`./public/ebib`))
      fs.mkdirSync(
        `./public/ebib`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 1;
  }

  try {
    if (!fs.existsSync(`./public/ebib/${id}`))
      fs.mkdirSync(
        `./public/ebib/${id}`,
        {
          recursive: true,
        },
        () => {}
      );
  } catch (e) {
    throw 2;
  }
};
