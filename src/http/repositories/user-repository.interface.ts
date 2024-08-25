export interface IUsersRepository {
  findAll(): Promise<User | null>;
}
