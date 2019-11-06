import { ExerciseList } from '../models/exercise-list';
import { code } from '../utils/code';
import { define } from '../utils/define';

export const dataTypesExercises: ExerciseList = {
  title: '02 - Data Types',
  exercises: [
    {
      title: 'Data Types',
      description: [
        'There are 7 basic data types in JavaScript:',
        define('number', 'Numbers of any kind: integer or floating-point.'),
        define('string', 'A string may have one or more characters, there’s no separate single-character type.'),
        define('boolean', 'true or false. !, &&, and || used for comparison'),
        define('null', 'unknown values – a standalone type that has a single value null.'),
        define('undefined', 'Unassigned values – a standalone type that has a single value undefined.'),
        define('object', 'for more complex data structures. Can be string or number indexed.'),
        define('symbol', 'for unique identifiers. Unlike Ruby, this is new and rarely used.'),
      ],
      objective: `Make ${code('isComplete')} return ${code('true')}.`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        return false;
        // ↑ Modify code above this line ↑
      },
    },
    {
      title: 'Numbers',
      description: [
        'JavaScript Numbers are Always 64-bit Floating Point.',
        'There are 3 special numbers: <strong>NaN, Infinity, -Infinity</strong>',
        define('NaN', 'Not a Number'),
        define('Infinity', 'Greater than all other numbers. The result of division by 0'),
        define('-Infinity', 'Lesser than all other numbers. Like Infinity, but negative'),
      ],
      objective: `Initialize ${code('numbers')} with ${code('NaN')}, ${code('Infinity')}, and ${code('-Infinity')}.`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        const numbers: number[] = [];
        // ↑ Modify code above this line ↑
        return (
          numbers.length
          && numbers[1] > numbers[2]
          && !isFinite(numbers[2])
          && !isFinite(numbers[1])
          && isNaN(numbers[0])
        );
      },
    },
    {
      title: 'Strings',
      description: [
        'JavaScript strings are very similar to Ruby Strings.',
        'There are 3 ways to declare strings: \', ", and `.',
        define('\' \'', 'Preferred. Does not support interpolation.'),
        define('" "', 'Allowed, but not preferred by most style guides. This is convenient inside of \'\'-strings.'),
        define('` `', `Supports interpolation with ${code('${expression}')} syntax.`),
      ],
      objective: `Initialize ${code('strings')} with 3 different strings, each initialized in a unique way.`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        const strings: number[] = [];
        // ↑ Modify code above this line ↑
        return strings.length === 3;
      },
    },
    {
      title: 'Strings: indexing',
      description: [
        `JavaScript strings support ${code('[index]')} access.`,
      ],
      objective: `Modify ${code('index')} to make ${code('isComplete')} return ${code('true')}.`,
      isComplete(): boolean {
        const hello = 'hello';
        // ↓ Modify code below this line ↓
        const index = 2;
        // ↑ Modify code above this line ↑
        return hello[index] === 'o';
      },
    },
    {
      title: 'Strings: includes()',
      description: [
        `JavaScript strings support ${code('includes(substr')} for detecting the presence of a substring.`,
      ],
      objective: `Modify ${code('needle')} to make ${code('isComplete')} return ${code('true')}.`,
      isComplete(): boolean {
        const hello = 'hello';
        // ↓ Modify code below this line ↓
        const needle = 'w';
        // ↑ Modify code above this line ↑
        return hello.includes(needle);
      },
    },
    {
      title: 'Strings: indexOf()',
      description: [
        `JavaScript strings support ${code('indexOf(substr)')} for returning the position of a substring.`,
      ],
      objective: `Modify ${code('needle')} to make ${code('isComplete')} return ${code('true')}.`,
      isComplete(): boolean {
        const hello = 'hello';
        // ↓ Modify code below this line ↓
        const needle = 'o';
        // ↑ Modify code above this line ↑
        return hello.indexOf(needle) === 1;
      },
    },
  ],
};
