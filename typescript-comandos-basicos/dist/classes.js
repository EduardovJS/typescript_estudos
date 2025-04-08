"use strict";
class Perso {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
class Employee extends Perso {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
const eduardo = new Perso(1, "Eduardo", 22);
// Mesma coisa que acima
class Shorthand {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
