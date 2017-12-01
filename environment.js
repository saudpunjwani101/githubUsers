const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

//replace this with your own ApiKey
const ApiKey = "";

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `Bearer ${ApiKey}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);
const handlerProvider = null;
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  handlerProvider,
  network,
  store,
});
