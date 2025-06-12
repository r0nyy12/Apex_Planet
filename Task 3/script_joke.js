const jokeBtn = document.getElementById('joke-btn');
const jokeContainer = document.getElementById('joke');

jokeBtn.addEventListener('click', () => {
  jokeContainer.textContent = 'Loading...';
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      jokeContainer.textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(err => {
      jokeContainer.textContent = 'Oops! Something went wrong.';
      console.error('Error:', err);
    });
});