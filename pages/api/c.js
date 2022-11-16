import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

export default async function handler(req, res) {
  //   if (req.method !== "POST") {
  //     res.status(405).send({ message: "Only POST requests allowed" });
  //     return;
  //   }

  //   {
  //     apiKey: 'asd123'
  //     id: '',
  //     nama: '',
  //     kota: '',
  //     kategori: ''
  //     tanggal: '' M/W
  //     gender: '' M/W
  //     waktu: '' M/W
  //     size: '' M/W
  //   }

  const templateBuffer = fs.readFileSync(
    path.join(process.cwd() + "/templates/kartu-peserta-minify.html")
  );

  const templateRaw = templateBuffer.toString().replace("{NAMA}", "Guntur");

  const br = await puppeteer.launch();
  const pg = await br.newPage();
  await pg.setViewport({
    width: 1280,
    height: 950,
    deviceScaleFactor: 1,
  });
  await pg.setContent(templateRaw);

  const dom = await pg.$("body");

  var imgBuffer = await dom.screenshot({
    omitBackground: true,
    captureBeyondViewport: true,
  });

  fs.writeFileSync('./public/peserta/kartu-peserta/image.png', imgBuffer, /* callback will go here */);

  res.writeHead(200, {
    "Content-Type": "image/jpg",
    "Content-Length": imgBuffer.length,
  });

  res.end(imgBuffer);
}
