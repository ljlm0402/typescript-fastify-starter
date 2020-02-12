import createServer from '../src/app';

describe('[TEST] index', () => {
  const server = createServer();
  beforeEach(async () => { await server.ready() });
  afterAll(() => server.close());

  test('[GET] /', done => {
    server.inject({ method: 'GET', url: '/' }, (err, res) => {
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(res.payload)).toEqual({ method: 'get' });
        done(err);
      }
    )
  });
});
