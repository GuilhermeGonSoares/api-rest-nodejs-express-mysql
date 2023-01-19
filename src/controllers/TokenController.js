import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const usuario = await User.findOne({ where: { email } });
      if (!usuario) {
        return res.status(404).json({
          errors: ['Não existe usuário com esse email'],
        });
      }

      if (!(await usuario.passwordIsValid(password))) {
        return res.status(404).json({
          errors: ['Senha inválida'],
        });
      }

      const { id } = usuario;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((er) => er.message),
      });
    }
  }
}

export default new TokenController();
