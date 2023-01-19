import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const usuarios = await User.findAll({ attributes: ['id', 'nome', 'email'] });

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
      const usuario = await User.findByPk(id, { attributes: ['id', 'nome', 'email'] });
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
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;
      const usuario = await User.findByPk(id);

      if (!usuario) {
        return res.status(404).json({
          errors: ["Usuário não cadastrado no banco de dados!"],
        });
      }

      const novoUsuario = await usuario.update(req.body);
      const { nome, email } = novoUsuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }

  async detele(req, res) {
    try {
      const id = req.userId;

      const usuario = await User.findByPk(id);
      if (!usuario) {
        return res.status(404).json({
          errors: ["Usuário não cadastrado no banco de dados!"],
        });
      }

      await usuario.destroy();

      const { nome, email } = usuario;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }
}

export default new UserController();
