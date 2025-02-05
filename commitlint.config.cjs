module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Add',
        'Fix',
        'Env',
        'Design',
        'Refactor',
        'Comment',
        'Docs',
        'Test',
        'Chore',
        'Rename',
        'Remove',
      ],
    ],
    'subject-case': [2, 'always', ['sentence-case']],
    'type-case': [2, 'always', 'pascal-case'],
  },
};
