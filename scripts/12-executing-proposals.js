import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // inicializar o contrato de governança
    const vote = await sdk.getContract("0x44432373457a2f4dbb92E933509276C249E77Ef4", "vote");

    // Ver todas as propostas
    const allProposals = await vote.getAll()
    console.log(`Total de propostas: `, allProposals);

    // Primeiro você deve pegar o id da proposta para depois executa-la
    // Nese caso estou selecionando a proposta [2] que refere-se à terceira proposta que eu criei
    const proposalId = allProposals[2].proposalId
    console.log("Proposal Executed: ", await vote.execute(proposalId))

} catch (error) {
    console.error("Falha ao listar e executar propostas:", error);
    process.exit(1);
  }
})();