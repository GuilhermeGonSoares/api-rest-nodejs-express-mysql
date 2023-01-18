import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: 'Guilherme',
      sobrenome: 'Gonçalves Soares',
      email: 'guilherme16.gon@gmail.com',
      idade: 24,
      peso: 80,
    });

    res.status(201).json({
      aluno,
    });
  }
}

export default new HomeController();
