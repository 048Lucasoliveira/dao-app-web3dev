import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x9cA243c9CC297268727B9Fb680218e4077709139", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Barra de Ouro",
        description: "Esse NFT vai te dar acesso ao INVESTDAO!",
        image: readFileSync("scripts/assets/ouro.jpg"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()