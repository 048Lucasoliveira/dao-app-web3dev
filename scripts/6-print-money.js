import sdk from "./1-initialize-sdk.js";

// Esse é o endereço do nosso contrato ERC-20 impresso no passo anterior.
const token = await sdk.getContract("0x0eFc68Ad081e85412AEAC42E7B6BFa5ecBB8a45e", "token");

(async () => {
  try {
    // Qual o fornecimento máximo que você quer? 1,000,000 é um número legal!
    const amount = 1_000_000;
    // Interaja com o seu contrato ERC-20 e cunhe os tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();
    
    // Mostre quantos dos seus tokens existem agora!
    console.log("✅ Agora temos", totalSupply.displayValue, "$INV em circulação");
  } catch (error) {
    console.error("Falha ao imprimir o dinheiro", error);
  }
})();