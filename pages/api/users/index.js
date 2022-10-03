import connectMongo from '../../../database/dbConnection';
import { getUsers, registerUser } from '../../../lib/users/userController';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      break;
    case 'POST':
      registerUser(req, res);
      break;
    // case 'PUT':
    //   putUser(req, res);
    //   break;
    // case 'DELETE':
    //   deleteUser(req, res);
    //   break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
