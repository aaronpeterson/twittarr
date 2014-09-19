var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');
module.exports = {
  development: {
    db: '',
    root: rootPath,
    port: 8082,
    app: {
      name: 'Node Twitter'
    },
    facebook: {
      clientID: "",
      clientSecret: "",
      callbackURL: ""
    },
    github: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
  },
  test: {
    db: '',
    root: rootPath,
    port: 8082,
    app: {
      name: 'Node Twitter'
    },
    facebook: {
      clientID: "",
      clientSecret: "",
      callbackURL: ""
    },
    github: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
  },
  production: {
    db: '',
    root: rootPath,
    port: 8082,
    app: {
      name: 'Node Twitter'
    },
    facebook: {
      clientID: "",
      clientSecret: "",
      callbackURL: ""
    },
    github: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
  }
};
