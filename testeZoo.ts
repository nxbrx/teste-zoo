import { Animal, Zoo } from './zoo';

describe('Zoo Class Tests', () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test('addAnimal should add an animal to the zoo', () => {
    const animal = new Animal('Leo', 'Lion', 3);
    zoo.addAnimal(animal);
    expect(zoo.getAllAnimals()).toContain(animal);
  });

  test('removeAnimal should remove an existing animal by name', () => {
    const animal = new Animal('Leo', 'Lion', 3);
    zoo.addAnimal(animal);
    zoo.removeAnimal('Leo');
    expect(zoo.getAllAnimals()).not.toContain(animal);
  });

  test('getAnimal should return the correct animal by name', () => {
    const animal = new Animal('Leo', 'Lion', 3);
    zoo.addAnimal(animal);
    const foundAnimal = zoo.getAnimal('Leo');
    expect(foundAnimal).toEqual(animal);
  });

  test('getAverageAge should return the correct average age of animals', () => {
    const lion = new Animal('Leo', 'Lion', 3);
    const tiger = new Animal('Tigger', 'Tiger', 5);
    zoo.addAnimal(lion);
    zoo.addAnimal(tiger);
    expect(zoo.getAverageAge()).toBe(4);
  });

  // Adicione mais testes conforme necessário
});
