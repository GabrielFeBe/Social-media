import User from '../../database/models/User';
import { IUserModel } from '../../interface/Models';
import { IUser } from '../../interface/Tuser';

export default class UserModel implements IUserModel {
  private Model = User;

  async create(data: Omit<IUser, 'id'>): Promise<IUser> {
    const response = this.Model.create(data);
    return response;
  }

  async delete(id: number): Promise<number> {
    const response = await this.Model.destroy({ where: {
      id,
    } });
    return response;
  }

  async findAll(): Promise<IUser[]> {
    const perPage = 100;
    const page = 1;
    const response = await this.Model.findAll({
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: User,
          as: 'requested',
          attributes: ['id', 'name', 'email'],
          through: {
            attributes: [], 
          },
        },
      ],
      offset: page * perPage - perPage,
      limit: perPage, 
    });

    return response;
  }

  async findById(id: number): Promise<IUser | null> {
    const response = await this.Model.findByPk(id, {
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: User,
          as: 'requested',
          attributes: ['id', 'name', 'email'],
          through: {
            attributes: [], 
          },
        },
      ],
    });

    return response;
  }
}