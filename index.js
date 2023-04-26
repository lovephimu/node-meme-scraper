const memeUrl = 'https://memegen-link-examples-upleveled.netlify.app/'; // the memepage Url

async function getStuff(url) {
  // fetch function for HTML
  await fetch(url)
    .then(
      (response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Boom! Response not okay!');
      },
      (networkError) => {
        console.log(networkError.message);
      },
    )
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
}

await getStuff(memeUrl);

// fetch('https://memegen-link-examples-upleveled.netlify.app/');
