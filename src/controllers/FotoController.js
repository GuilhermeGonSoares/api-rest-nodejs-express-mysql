class FotoController {
  async upload(req, res) {
    res.status(201).json("Página inicial!");
  }
}

export default new FotoController();
