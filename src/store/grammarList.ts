import { Card } from '../interfaces/Card';

const grammarList: Card[] = [
  {
    id: 1,
    name: 'Present Simple',
    rules: ['I/you/we/they + V1', 'he/she/it +V1+s(es)'],
    negation: ['I/you/we/they +do not', 'he/she/it +does not'],
    question: ['Do + I/you/we/they', 'Does + he/she/it'],
  },
  {
    id: 2,
    name: 'Past Simple',
    rules: ['I/he/she/it/you/we/they + V2/V-ed', 'I/he/she/it + was', 'you/we/they + were'],
    negation: ['I/he/she/it/you/we/they + did not +V2/V-ed', 'I/he/she/it + was not', 'you/we/they + were not'],
    question: ['Did + I/he/she/it/we/they + V1', 'was + I/he/she/it', 'were + you/we/they'],
  },
];

export default grammarList;
