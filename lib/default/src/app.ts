import fastify from 'fastify';
import indexRoute from './routes/index.route';

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });
  server.register(indexRoute);

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
}

export default createServer;
