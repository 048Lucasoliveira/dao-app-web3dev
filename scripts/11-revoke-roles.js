import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const token = sdk.getToken("0x313D10EC6b56AE607ac3538d0Bd430C06E7C7aE3", "token");
    // Mostre os papeis atuais.
    const allRoles = (await token).roles;

    console.log(
      "👀 Papeis que existem agora:",
      await allRoles.getAll(allRoles.roles)
    );

    // Remova todos os superpoderes que sua carteira tinha sobre o contrato ERC-20.
    await allRoles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Papeis depois de remover nós mesmos",
      await allRoles.getAll(allRoles.roles)
    );
    console.log("✅ Revogados nossos super-poderes sobre os tokens ERC-20");

  } catch (error) {
    console.error("Falha ao remover nossos direitos sobre o tesouro da DAO", error);
  }
})();