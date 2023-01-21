class HomeController {
  async index(req, res) {
    res.status(201).json("Página inicial!");
  }
}

export default new HomeController();
