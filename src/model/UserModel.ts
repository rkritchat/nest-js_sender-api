export class UserModel {
  constructor(
    public email: string,
    public password: string,
    public firstname: string,
    public lastname: string,
    public age: number,
  ) {}
}
