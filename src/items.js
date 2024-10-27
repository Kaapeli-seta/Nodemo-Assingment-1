const items = [
  {id: 1, name: 'Item1'},
  {id: 2, name: 'Item2'},
];

const getItmes = (res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(items));
};

const postItmes = (req, res) => {
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      res.end(body);
      items.push(JSON.parse(body));
    });
};

export {getItmes, postItmes};
