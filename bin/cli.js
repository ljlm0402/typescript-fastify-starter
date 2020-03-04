#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-fastify-starter project.
 * By AGUMON <ljlm0402@gmail.com>
 * February 12, 2020.
 *****************************************************************/

const path = require('path');
const starter = require('../lib/starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-fastify-starter';
  return path.join(process.cwd(), destFolder);
};

starter(destination);
