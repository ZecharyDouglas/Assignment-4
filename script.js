const quoteObjs = [
  {
    img_source:
      "https://www.brainyquote.com/photos_tr/en/c/confucius/136802/confucius1-2x.jpg",
    title: "Wednesday, June 21 2023",
    quote: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius",
  },
  {
    img_source:
      "https://www.brainyquote.com/photos_tr/en/a/alberteinstein/125368/alberteinstein1.jpg",
    title: "Thursday, June 22 2023",
    quote:
      "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    author: "Albert Einstein",
  },
  {
    img_source:
      "https://www.brainyquote.com/photos_tr/en/a/alberteinstein/174001/alberteinstein1-2x.jpg",
    title: "Friday, June 23 2023",
    quote: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein",
  },
  {
    img_source:
      "https://www.brainyquote.com/photos_tr/en/b/benjaminfranklin/138217/benjaminfranklin1-2x.jpg",
    title: "Saturday, June 24 2023",
    quote: "By failing to prepare, you are preparing to fail.",
    author: "Benjamin Franklin",
  },
];

const posterDiv = document.querySelector(".poster");
const posterTitle = document.getElementById("poster-title");
const posterImage = document.querySelector(".poster-image");
const posterQuote = document.getElementById("poster-quote");
const posterAuthor = document.getElementById("poster-author");

randomizePosters = () => {
  const randomIndex = Math.floor(Math.random() * quoteObjs.length);
  const randomQuoteObj = quoteObjs[randomIndex];

  posterTitle.textContent = randomQuoteObj.title;
  posterImage.src = randomQuoteObj.img_source;
  posterQuote.textContent = randomQuoteObj.quote;
  posterAuthor.textContent = randomQuoteObj.author;
};

updatePoster = () => {
  posterAuthor.textContent =
    document.getElementById("poster-form-author").value;
  posterQuote.textContent = document.getElementById("poster-form-quote").value;
};
randomizePosters();
document.getElementById("submit").addEventListener("click", updatePoster);
