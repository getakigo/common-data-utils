module.exports = {
  'file-extension': [
    '.js', '.json', '.md'
  ],
  'file-name': [ /^[A-Za-z0-9-.@]+$/, ],
  'directory-name': [ /^[a-z0-9-]+$/ ],
  'directory-index': {
    ignore: [
      /config$/,
    ]
  }
};
