const produtoController = {
  listarProdutos(req, res) {
    res.json([{ nome: "Produto1" }, { nome: "Produto2" }]);
  },

  cadastrarProduto: (req, res) => {
    console.log(req.body);
    res.json("Produto Cadastrado");
  },
};

module.exports = produtoController;
