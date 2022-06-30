const GRAPHQL_URL = 'http://localhost:9000/';

async function getGreeting() {
  const graphqlQuery = {
    query: `
        query {
            greetings
        }
        `,
  };

  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(graphqlQuery),
  });

  const { data } = await response.json();
  //   const responseBody = await response.json();
  //   console.log(responseBody);
  return data;
}

getGreeting().then(({ greetings }) => {
  const h1 = document.getElementById('greetings');
  h1.textContent = greetings;
});
