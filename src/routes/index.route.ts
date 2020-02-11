export default function indexRoute(server, options, next) {
    server.get('/', (req, res) => {
        res.code(200).send({ method: 'get' });
    });

    server.post('/', (req, res) => {
        res.code(201).send({ method: 'post' });
    });

    server.put('/', (req, res) => {
        res.code(200).send({ method: "put" });
    });

    server.delete('/', (req, res) => {
        res.code(200).send({ method: 'delete' });
    });

    next();
};
