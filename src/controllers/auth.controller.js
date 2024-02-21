import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class AuthController {
  static async login(req, res) {
    const { body } = req;
    const user = await UserModel.findOne({ email: body.email });
    const errorResponse = {
      error: 'Invalid username and password',
      success: false,
    };

    if (!user) return res.status(400).send(errorResponse);

    const result = await bcrypt.compare(body.password, user.hashed_password);

    if (!result) return res.status(400).send(errorResponse);

    const token = await jwt.sign(
      { id: user._id, email: user.email },
      '647HSH&^6d6e6e644',
      { expiresIn: 3600 }
    );

    res.status(200).send({ Data: { token }, success: true });
  }

  static async register(req, res) {
    const { body } = req;

    const userExists = await UserModel.findOne({ email: body.email });

    if (userExists)
      return res.status(400).send(getErrorResponse('Account already exists!'));

    const hashed_password = await bcrypt.hash(body.password, 10);
    const user = { email: body.email, hashed_password };
    UserModel.create(user);

    res.status(200).send(getSuccessResponse(null));
  }
}

const getErrorResponse = (error) => ({
  error,
  success: false,
});

const getSuccessResponse = (data) => ({
  data,
  error: null,
  success: true,
});
