Javascript 

ES6 0x00
ECMAScript 2015(ES6) sixth and major Edition of ECMAScript language specification standard.

defines standard for for JavaScript implementation.
brought significant changes to JS  language introducing new features and syntax enhancements.
1. Arrow Functions
    const addOne = (x) => x + 1;

2. Template Literals
    const name = 'Alice';
    console.log(`Hello, ${name}!`);

3. Blocked Scoped variables
    let count = 0;
    const maxAttempts = 3;

4. Destructing assignment 
    const [first, second] = [1, 2];

5. classes and inheritance
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(`${this.name} makes a sound.`);
        }
      }

6. Modules
     // math.js
    export function add(a, b) {
        return a + b;
    }
    // main.js
    import { add } from './math.js';

