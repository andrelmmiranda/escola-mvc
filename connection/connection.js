const { access } = require('../utils/access');
const { readFileSync } = require('fs');
const { connect } = require('mongoose');

connect(access(readFileSync('../../6-node/access-mongodb.txt', { encoding:'utf8', flag:'r' }), 'escola'), { useNewUrlParser: true, useUnifiedTopology: true });