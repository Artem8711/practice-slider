const slider = [
   {
      src: `https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg`,
      alt: `landscape1`
   },
   {
      src: `https://images.unsplash.com/photo-1506744038136-46273834b3fb`,
      alt: `landscape2`
   },
   {
      src: `https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg`,
      alt: `landscape3`
   },
   {
      src: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/NASA-Hubble-Space-Telescope-image-of-the-Pillars-of-Creation.jpg/800px-NASA-Hubble-Space-Telescope-image-of-the-Pillars-of-Creation.jpg`,
      alt: `landscape4`
   }
];

let currentSlideIndex = 0;

const slideImg = document.querySelector(`img`);

slideImg.src = slider[0].src;
slideImg.alt = slider[0].alt;

//////////////////////////////

const [prevBtn, nextBtn] = document.querySelectorAll(`.navBtn`);

function nextSlideHandler() {
   if (currentSlideIndex < slider.length - 1) {
      currentSlideIndex++;
   } else {
      currentSlideIndex = 0;
   }

   slideImg.src = slider[currentSlideIndex].src;
   slideImg.alt = slider[currentSlideIndex].alt;
}

nextBtn.addEventListener(`click`, nextSlideHandler);

function prevSlideHandler() {
   if (currentSlideIndex > 0) {
      currentSlideIndex--;
   } else {
      currentSlideIndex = slider.length - 1;
   }

   slideImg.src = slider[currentSlideIndex].src;
   slideImg.alt = slider[currentSlideIndex].alt;
}
prevBtn.addEventListener(`click`, prevSlideHandler);
