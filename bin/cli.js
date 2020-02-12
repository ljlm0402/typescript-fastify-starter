#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-fastify-starter project.
 * created by Lim Kyungmin, 02/12/2020
 *****************************************************************/

const path = require('path');
const tsFastifyStarter = require('../lib/typescript-fastify-starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-fastify-starter';
  return path.join(process.cwd(), destFolder);
};

tsFastifyStarter(destination);
