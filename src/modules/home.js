export default function loadHome() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to CodeChef's Kitchen 🍽️";

  const paragraph = document.createElement('p');
  paragraph.textContent =
    "Experience gourmet delights made with the finest ingredients and a touch of code magic. We serve passion on every plate!";

  content.appendChild(headline);
  content.appendChild(paragraph);
}
