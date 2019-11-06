import { ExerciseList } from '../models/exercise-list';
import { code } from '../utils/code';
import { define } from '../utils/define';

export const variablesExercises: ExerciseList = {
  title: '01 - Variables',
  exercises: [
    {
      title: 'Declaring Variables',
      description: [
        'There are 4 ways to declare a variable in JavaScript',
        define('No keyword', `${code('x = 5;')} declares ${code('x')} to be global. TypeScript will not allow this`),
        define('var', `${code('var x = 5;')} declares x to be scoped to its parent function.`),
        define('let¹', `${code('let x = 5;')} declares x to be scoped to its parent code block.`),
        define('const²', `${code('let x = 5;')} declares x to be scoped to its parent code block, and immutable.`),
        '',
        define('[1]', 'we prefer const, then let.'),
        define('[2]', 'const variables do not guarantee their contents to be immutable'),
      ],
      objective: `Modify ${code('x')} to make ${code('isComplete')} return ${code('true')}`,
      isComplete(): boolean {
        /* eslint-disable prefer-const */
        // ↓ Modify code below this line ↓
        let x = false;
        // ↑ Modify code above this line ↑
        return x;
      },
    },
    {
      title: 'Equality',
      description: [
        'There are 2 ways to compare values in JavaScript',
        define('===', `${code('"5" === 5')} is ${code('false')}, because the underlying data types do not match`),
        define('==', `${code('"5" == 5')} is ${code('true')} due to Type Inference`),
        '',
        define('Note', `we prefer ${code('===')}`),
      ],
      objective: `Modify ${code('x')} to make ${code('isComplete')} return ${code('true')}`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        let x = 'incorrect';
        // ↑ Modify code above this line ↑
        return x === 'correct';
      },
    },
    {
      title: 'Truthiness',
      description: [
        'All values are "truthy" in JavaScript except the following:',
        code('false'), code('0'), code('""'), code('null'), code('undefined'), code('NaN'),
        '',
        define('Note', `empty list (${code('[]')}) is <strong>truthy</strong>`),
        '',
        define('Note', `we prefer ${code('===')}.`),
        define('Note', `${'!!x'} and ${code('Boolean{x}')} both coerce ${code('x')} to boolean.`),
      ],
      objective: `Modify ${code('x')} to make ${code('isComplete')} return ${code('true')}`,
      isComplete(): boolean {
        // ↓ Modify code below this line ↓
        const x = 0;
        // ↑ Modify code above this line ↑
        return !!x;
      },
    },
  ],
};
