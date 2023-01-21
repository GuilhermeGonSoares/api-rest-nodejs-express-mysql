import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.status(201).json(alunos);
  }
}

export default new AlunoController();
