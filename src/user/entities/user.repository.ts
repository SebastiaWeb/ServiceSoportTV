import { User } from './user.entity';

export class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async save(user: User): Promise<User> {
    const generatedId = Date.now();

    user.id = generatedId;
    this.users.push(user);
    console.log(this.users);
    return user;
  }

}
