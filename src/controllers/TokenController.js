import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      console.log('uai');
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
  }
}

export default new TokenController();
