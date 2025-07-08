export default function loadMenu() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = "Our Menu";

  const items = [
    { name: "Spaghetti Algo-nese", desc: "Classic pasta with a twist of recursion.", price: "$12" },
    { name: "React Roast", desc: "Modern JavaScript slow-roasted to perfection.", price: "$15" },
    { name: "Binary Burger", desc: "Grilled to binary perfection — 0s and 1s optional.", price: "$10" },
  ];

  content.appendChild(headline);

  items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');

    const name = document.createElement('h2');
    name.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.desc;

    const price = document.createElement('p');
    price.textContent = item.price;

    div.appendChild(name);
    div.appendChild(desc);
    div.appendChild(price);

    content.appendChild(div);
  });
}
