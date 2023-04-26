const memeUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

async function getStuff(url) {
  await fetch(url).then(
    (response) => {
      if (response.ok) {
        return console.log(response);
      }
      throw new Error('Boom! Response not okay!');
    },
    (networkError) => {
      console.log(networkError.message);
    },
  );
}

getStuff(memeUrl);

// fetch('https://memegen-link-examples-upleveled.netlify.app/');
