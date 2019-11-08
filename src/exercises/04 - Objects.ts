import { ExerciseList } from '../models/exercise-list';
import { code, codeBlock } from '../utils/code';

export const objectExercises: ExerciseList = {
  title: '04 - Objects',
  exercises: [
    {
      title: 'Objects',
      description: [
        'Objects in JavaScript are very similar to hashes in Ruby.',
        codeBlock(
          '# Ruby hash:',
          'person = { name: "Bob", age: 25, shoe_size: 9 }',
          '// JS object:',
          'let person = { name: "Bob", age: 25, shoe_size: 9 };',
        ),
        'You also access their values in similar, but not identical, ways:',
        codeBlock(
          '# Ruby hash:',
          'person[:age]',
          '=> 25',
          '// JS object:',
          'person.age;',
          '=> 25',
        ),
      ],
      objective: `Modify the ${code('person')} object.`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        const person = { name: '' };
        // ↑ Modify code above this line ↑
        return person.name === 'Bob';
      },
    },
    {
      title: 'Object Destructuring',
      description: [
        'JavaScript provides convenient syntax for extracting properties from objects to local variables',
        codeBlock(
          '// JS destructuring:',
          'let person = { name: "Bob", age: 25, shoe_size: 9 };',
          'const { name } = person',
          '// name === "Bob"',
        ),
        'You can even rename keys inside of a destructuring expression',
        codeBlock(
          '// JS destructuring with rename:',
          'let person = { name: "Bob", age: 25, shoe_size: 9 };',
          'const { name: personName } = person',
          '// personName === "Bob"',
        ),
      ],
      objective: `Use destructuring to make ${code('isComplete')} to return ${code('true')}`,
      isComplete(): boolean {
        const person = { name: 'Bob' };
        // ↓ Modify code below this line ↓
        const personName = '';
        // ↑ Modify code above this line ↑
        return personName === person.name;
      },
    },
    {
      title: 'Object Spread Operator',
      description: [
        `Making new objects from existing ones is easy with the ${code('...')} operator`,
        codeBlock(
          '// Shallow copy',
          'const person = { name: "Bob", age: 25, shoe_size: 9 }',
          'const doppelganger = { ...person }',
          'person !== doppelganger // Not the same object',
          'person.name === doppelganger.name // Same keys and values',
        ),
        'This is also useful for combining multiple object into new objects, or extending old objects with new properties',
        codeBlock(
          'const person = { name: "Bob", age: 25, shoe_size: 9 }',
          'const cyborg = { ...person, battery_level: "75%" }',
        ),
      ],
      objective: `Use the Object spread operator to instantiate ${code('tallerBob')}.`,
      isComplete(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const bob = { name: 'Bob', age: 17, height: 75 };
        // ↓ Modify code below this line ↓
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const tallerBob = bob;
        // ↑ Modify code above this line ↑
        return tallerBob.name === 'Bob' && tallerBob.age === 17 && tallerBob.height > 75;
      },
    },
    {
      title: 'Object.keys()',
      description: [
        'Unlike Ruby, most Object helper methods are defined on Object, not individual objects',
        codeBlock(
          '// Iterating over keys',
          'Object.keys({1: "foo", 2: "bar"}))',
          '// Returns:',
          '[1, 2]',
        ),
      ],
      objective: `Modify ${code('personKeys')} using ${code('Object.entries()')}.`,
      isComplete(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const person = { name: 'Bob', age: 17 };
        // ↓ Modify code below this line ↓
        const personKeys: (keyof typeof person)[] = [];
        // ↑ Modify code above this line ↑
        return personKeys.length === 2 && personKeys.includes('name') && personKeys.includes('age');
      },
    },
    {
      title: 'Object.values()',
      description: [
        'JavaScript provides a convenience method for iterating over an object\'s values',
        codeBlock(
          '// Iterating over values',
          'Object.values({1: "foo", 2: "bar",}))',
          '// Returns:',
          '["foo", "bar"]',
        ),
      ],
      objective: `Modify ${code('personValues')} using ${code('Object.values()')}.`,
      isComplete(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const person = { name: 'Bob', age: 17 };
        // ↓ Modify code below this line ↓
        const personValues: (number | string)[] = [];
        // ↑ Modify code above this line ↑
        return personValues.length === 2
          && personValues[0] === person.name
          && personValues[1] === person.age;
      },
    },
    {
      title: 'Object.entries()',
      description: [
        `In the case of iterating over the entire object, ${code('Object.entries')} is very useful`,
        codeBlock(
          '// Iterating over entries',
          'Object.entries({1: "foo", 2: "bar",}))',
          '// Returns:',
          '[[1, "foo"], [2, "bar"]]',
        ),
      ],
      objective: `Modify ${code('personEntries')} using ${code('Object.entries()')}.`,
      isComplete(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const person = { name: 'Bob', age: 17 };
        // ↓ Modify code below this line ↓
        const personEntries: [string, string | number][] = [];
        // ↑ Modify code above this line ↑
        return personEntries.length === 2
          && personEntries.every(entry => entry.length === 2)
          && personEntries[0][0] === 'name'
          && personEntries[0][1] === person.name
          && personEntries[1][0] === 'age'
          && personEntries[1][1] === person.age;
      },
    },
  ],
};
