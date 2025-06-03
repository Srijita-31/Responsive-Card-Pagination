const itemsContainer = document.getElementById('itemsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const itemsPerPage = 6;
let currentPage = 1;

// ✅ Use a real image URL array
const imageUrls = [
  "https://i.pinimg.com/236x/8c/5c/e2/8c5ce253c92d23f9abe51277cf489ae6.jpg",
  "https://i.pinimg.com/236x/9a/b8/7d/9ab87d48cea80a765c23334ec158f2cf.jpg",
  "https://i.pinimg.com/236x/ad/c2/37/adc2373c602fe00ecd70357e97408479.jpg",
  "https://i.pinimg.com/236x/1c/15/ac/1c15acc30f8052c60e3573700aa8aaa3.jpg",
  "https://i.pinimg.com/236x/80/3c/c2/803cc273ed79b65394f94b6ac8b52318.jpg",
  "https://i.pinimg.com/236x/bc/80/f6/bc80f623c3209cc5fd8f00ca0c575233.jpg",
  "https://i.pinimg.com/236x/37/8e/5e/378e5ec24860c959b1f1d53c5afa7d21.jpg",
  "https://i.pinimg.com/236x/e7/83/65/e78365d11aff1eda5145a06ea3fa512d.jpg",
  "https://i.pinimg.com/236x/b5/ff/a3/b5ffa3c375ff78a6c994c911f64c0f51.jpg",
  "https://i.pinimg.com/236x/1d/7a/d8/1d7ad8d14158c0449956c3629e5ae7a6.jpg",
  "https://i.pinimg.com/236x/56/5d/7c/565d7c823effb334213d507e0573ea93.jpg",
  "https://i.pinimg.com/236x/c0/ef/93/c0ef931039a7ab8253f090043d5889b7.jpg"
];

const totalItems = imageUrls.length;

function renderItems() {
  itemsContainer.innerHTML = '';
  const start = (currentPage - 1) * itemsPerPage;
  const end = Math.min(start + itemsPerPage, totalItems);

  for (let i = start; i < end; i++) {
    const item = document.createElement('div');
    item.className = 'item';
    item.style.backgroundImage = `url('${imageUrls[i]}')`;
    itemsContainer.appendChild(item);
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage * itemsPerPage >= totalItems;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderItems();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage * itemsPerPage < totalItems) {
    currentPage++;
    renderItems();
  }
});

renderItems();
