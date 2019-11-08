import { ExerciseList } from '../models/exercise-list';
import { code, codeBlock } from '../utils/code';

export const arraysExercises: ExerciseList = {
  title: '05 - Arrays',
  exercises: [
    {
      title: 'Arrays',
      description: [
        `Arrays in JavaScript are a subclass of Object. Arrays provide a handy ${code('length')} property,
        equal to the largest index + 1.`,
        codeBlock(
          '// JS Array:',
          'let numbers = [1, 2, 3];',
          'numbers.length === 3 // Returns true',
        ),
        'Arrays are also mutable',
        codeBlock(
          '# JS Array:',
          'numbers[50] = "hello"',
          'numbers.length === 51 // Returns true',
          'numbers[17] // undefined',
          'numbers[18] // undefined',
          'numbers[19] // undefined',
        ),
      ],
      objective: `Modify the ${code('numbers')} Array.`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        const numbers = [1, 2, 3];
        // ↑ Modify code above this line ↑
        return numbers.length === 5;
      },
    },
    {
      title: 'Array Destructuring',
      description: [
        'JavaScript provides convenient syntax for extracting items from arrays to local variables',
        codeBlock(
          '// JS Array destructuring:',
          'let numbers = [1, 2]',
          'const [ first, second ]  = numbers',
          'first // 1',
          'second // 2',
        ),
      ],
      objective: `Use Array destructuring to make ${code('isComplete')} to return ${code('true')}`,
      isComplete(): boolean {
        const numbers = [1, 2, 3];
        // ↓ Modify code below this line ↓
        const firstNumber = numbers[-1];
        // ↑ Modify code above this line ↑
        return firstNumber === 1;
      },
    },
    {
      title: 'Array Spread Operator',
      description: [
        `Making new Arrays from existing ones is easy with the ${code('...')} operator`,
        codeBlock(
          '// Shallow copy',
          'const numbers = [1, 2, 3, 4]',
          'const newNumbers = [...numbers]',
          'numbers !== newNumbers // Not the same object',
          'person.length === doppelganger.length // Same items',
        ),
        'This is also useful for breaking up argument lists',
        codeBlock(
          'const numbers = [1, 2, 3]',
          'const [first, ...rest] = numbers',
          'first // 1',
          'rest // [2, 3]',
        ),
      ],
      objective: `Use the Array spread operator to correctly instantiate ${code('first')} and ${code('rest')}.`,
      isComplete(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const numbers = [1, 2, 3];
        // ↓ Modify code below this line ↓
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const first = numbers[-1];
        const rest = numbers;
        // ↑ Modify code above this line ↑
        return first === 1 && rest.length === 2 && rest[0] === 2 && rest[1] === 3;
      },
    },
    {
      title: 'array.slice()',
      description: [
        'Unlike Object, most Array helper methods are defined on the Array prototype, the base-object for all Arrays',
        `slice is equivalent in JavaScript and Ruby, which is sugared as ${code('list[start:end]')}`,
        codeBlock(
          '// Iterating over keys',
          'const numbers = [1, 2, 3, 4];',
          'numbers.slice(1, 3) // [2, 3]',
        ),
      ],
      objective: `Instantiate ${code('middleNumbers')} using ${code('slice()')}`,
      isComplete(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const numbers = [1, 2, 3, 4];
        // ↓ Modify code below this line ↓
        const middleNumbers = numbers;
        // ↑ Modify code above this line ↑
        return middleNumbers.length === 2 && middleNumbers[0] === 2 && middleNumbers[1] === 3;
      },
    },
    {
      title: 'Higher Order Functions',
      description: [
        'JavaScript supports many common higher-order functions',
        'ForEach loops',
        code('[1, 2, 3].forEach(num => console.log(num * 2));'),
        'Map:',
        code('[1, 2, 3].map(num => num * 2);'),
        'Reduce:',
        code('[1, 2, 3].reduce((accumulator, next) => accumulator + next, 0);'),
        'Filter:',
        code('[1, 2, 3].filter(num => num % 2 === 0);'),
        'Every:',
        code('[1, 2, 3].every(num => num % 2 === 0); // false'),
        'Includes:',
        code('[1, 2, 3].includes(num => num % 2 === 0); // true'),
      ],
      objective: `Modify ${code('isComplete')} to return true')}`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        return false;
        // ↑ Modify code above this line ↑
      },
    },
  ],
};
