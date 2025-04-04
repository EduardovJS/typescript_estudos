interface IPerso {
  id: number;
  sayMyName(): string;
}

class Perso implements IPerso {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  sayMyName() {
    return this.name;
  }
}

class Employee extends Perso {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }
}
const eduardo = new Perso(1, "Eduardo", 22);

// Mesma coisa que acima
class Shorthand {
  constructor(readonly id: number, readonly name: string) {}
}
