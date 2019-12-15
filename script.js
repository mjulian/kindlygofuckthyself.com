fetch('quotes.txt')
  .then((response) => response.text())
  .then((raw) => raw.split("\n").filter((s) => s.length > 0))
  .then((items) => {
    const i = Math.floor(Math.random() * Math.floor(items.length));
    document.getElementById('quote-box').innerHTML = items[i];
  });

// Reload the page if they click anywhere except on a link
document.addEventListener('click', (e) =>
  e.target.tagName != 'A' && location.reload()
);
