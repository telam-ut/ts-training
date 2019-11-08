import { ExerciseList } from '../models/exercise-list';
import { code, codeBlock } from '../utils/code';

export const functionExercises: ExerciseList = {
  title: '03 - Functions',
  exercises: [
    {
      title: 'Functions',
      description: [
        'Functions are first-class citizens in JavaScript',
        codeBlock(
          '# Ruby function:',
          'def hello',
          '  puts "hello"',
          'end',
          '',
          '// JS function:',
          'function hello() {',
          '  console.log("hello");',
          '}',
        ),
      ],
      objective: `Modify the ${code('foo')} function to make ${code('isComplete')} return ${code('true')}`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        function foo() {
          return false;
        }

        // ↑ Modify code above this line ↑
        return foo();
      },
    },
    {
      title: 'Arrow Functions',
      description: [
        'Arrow functions can be used for lambdas, or be composed of multiple statements.',
        codeBlock(
          '# Ruby lambda:',
          'say_something = -> { "This is a lambda" }',
          'puts say_something.call',
          '',
          '// JS arrow function, lambda-style:',
          'const saySomething = () => "This is a lambda"',
          'console.log(saySomething());',
          '',
          '// JS arrow function, multiple lines:',
          'const saySomething = () => {',
          '  return "This is a function";',
          '}',
          'console.log(saySomething());',
        ),
      ],
      objective: `Modify the ${code('foo')} constant to make ${code('isComplete')} return ${code('true')}`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        const foo = () => false;
        /* eslint-disable arrow-body-style */
        const bar = () => {
          return true;
        };
        // ↑ Modify code above this line ↑
        return foo() && !bar();
      },
    },
  ],
};
