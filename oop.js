// Base class for Animalia
class Animalia {
    constructor(_name, _type, _backboneType, _bloodType) {
      this.name = _name;
      this.type = _type;
      this.backboneType = _backboneType;
      this.bloodType = _bloodType;
    }
  
    // Encapsulation: private method
    #hiddenFunction() {
      console.log(`This is a private function for ${this.name}.`);
    }
  
    // Abstraction: common method for all animals
    makeSound() {
      console.log(`${this.name} makes a generic sound.`);
      // Encapsulation: calling a private method
      this.#callhiddenFunction();
    }
  
    // Public method to call private function
    #callhiddenFunction() {
      this.#hiddenFunction();
    }
  }
  
  // Inheritance and Derived Classes
  
  class WithBackbone extends Animalia {
    constructor(_name, _type, _bloodType) {
      super(_name, _type, 'With Backbone', _bloodType);
    }
  
    makeSound() {
      console.log(`${this.name} with backbone makes a specific sound.`);
      // No need to directly call #internalFunction here
      // The overridden makeSound calls the base class method, which indirectly calls #internalFunction
      super.makeSound();
    }
  }
  
  class WithoutBackbone extends Animalia {
    constructor(_name, _type, _bloodType) {
      super(_name, _type, 'Without Backbone', _bloodType);
    }
  
    makeSound() {
      console.log(`${this.name} without backbone makes a different sound.`);
      super.makeSound();
    }
  }
  
  class ColdBlooded extends Animalia {
    constructor(_name, _type) {
      super(_name, _type, '', 'Cold Blooded');
    }
  
    makeSound() {
      console.log(`${this.name} is cold-blooded and has a specific behavior.`);
      super.makeSound();
    }
  }
  
  class WarmBlooded extends Animalia {
    constructor(_name, _type) {
      super(_name, _type, '', 'Warm Blooded');
    }
  
    makeSound() {
      console.log(`${this.name} is warm-blooded and has a different behavior.`);
      super.makeSound();
    }
  }
  
  // Example usage
  const lion = new WithBackbone('Lion', 'Mammal', 'Warm Blooded');
  const tortoise = new WithoutBackbone('Tortoise', 'Reptile', 'Cold Blooded');
  const butterfly = new WithoutBackbone('Butterfly', 'Anthropoda', 'Cold Blooded');
  const eagle = new WarmBlooded('Eagle', 'Bird');
  
  lion.makeSound();
  tortoise.makeSound();
  butterfly.makeSound();
  eagle.makeSound();
  