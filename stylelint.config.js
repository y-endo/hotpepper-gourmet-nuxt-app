module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  rules: {
    'font-weight-notation': null,
    'at-rule-no-unknown': null,
    'max-empty-lines': 2,
    'comment-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: ['display-mode']
      }
    ]
  }
};
