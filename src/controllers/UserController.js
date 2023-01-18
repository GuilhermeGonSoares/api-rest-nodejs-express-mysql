import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const usuarios = await User.findAll();

      return res.json(usuarios);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async detail(req, res) {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id);
      if (!usuario) {
        return res.status(404).json('Não há esse elemento no banco de dados. ID INVÁLIDO');
      }

      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async create(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const usuario = await User.findByPk(id);
      if (!usuario) {
        return res.status(404).json({
          errors: ["Usuário não cadastrado no banco de dados!"],
        });
      }

      const novoUsuario = await usuario.update(req.body);
      return res.json(novoUsuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async detele(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const usuario = await User.findByPk(id);
      if (!usuario) {
        return res.status(404).json({
          errors: ["Usuário não cadastrado no banco de dados!"],
        });
      }

      await usuario.destroy();
      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }
}

export default new UserController();
