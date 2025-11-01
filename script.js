let reverse = 0;
carousel(reverse);

function prev() {
  reverse = reverse - 1;
  carousel(reverse);
}

function next() {
  reverse = reverse + 1;
  carousel(reverse);
}

function carousel(review) {
  let reviews = document.getElementsByClassName("review_items");



  if (review >= reviews.length) {
    review = 0;
    reverse = 0;
  }
  if (review < 0) {
    review = reviews.length - 1;
    reverse = reviews.length - 1;

  }

  
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[review].style.display = "block";
}
