export class UserResponseDto {
  public readonly id: string;
  public readonly name: string;
  public readonly age: number;

  constructor(id: string, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
