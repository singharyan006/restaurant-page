export default function loadContact() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = "Contact Us";

  const info = document.createElement('div');
  info.classList.add('contact-info');
  info.innerHTML = `
    <p>📞 Phone: (123) 456-7890</p>
    <p>📧 Email: hello@codechefkitchen.com</p>
    <p>📍 Address: 42 Coding Street, DevTown</p>
    <p>🕒 Hours: Mon-Sat: 11am - 10pm</p>
  `;

  content.appendChild(headline);
  content.appendChild(info);
}
