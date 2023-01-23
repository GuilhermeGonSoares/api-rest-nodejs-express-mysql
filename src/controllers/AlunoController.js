import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.status(201).json(alunos);
  }

  async detail(req, res) {
    try {
      const { id = '' } = req.params;
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.status(201).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id = '' } = req.params;
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não encontrado!'],
        });
      }
      const novoAluno = await aluno.update(req.body);
      return res.status(200).json(novoAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id = '' } = req.params;
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não encontrado!'],
        });
      }
      await aluno.destroy();
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }
}

export default new AlunoController();
