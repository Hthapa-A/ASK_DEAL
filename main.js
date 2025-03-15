function showSection(sectionId) {
  // Hide all sections and display the selected one
  document
    .querySelectorAll("section")
    .forEach((section) => section.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  // Show items based on the category selected
  const categoryMapping = {
    electronics: showItems,
    clothing: showItems,
    food: showItems,
    furniture: showItems,
    sports: showItems,
    toys: showItems,
    books: showItems,
  };

  // Check if a valid category exists, then call showItems
  if (categoryMapping[sectionId]) {
    showItems(sectionId);
  }
}

function showItems(category) {
  const items = getItemsData();

  const categoryItems = items[category];
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Clear the container
  container.classList.add("loading"); // Add a loading state

  // Simulate loading time (to mimic a real request)
  setTimeout(() => {
    container.classList.remove("loading"); // Remove loading state

    categoryItems.forEach((item) => {
      const itemBox = createItemCard(item);
      container.appendChild(itemBox);
    });
  }, 1000); // Adjust the timeout for loading simulation
}

function createItemCard(item) {
  const itemBox = document.createElement("div");
  itemBox.classList.add("box");

  itemBox.innerHTML = `
    <img src="${item.img}" alt="${item.name}" class="item-image" />
    <h3>${item.name}</h3>
    <p>${item.description || "No description available."}</p>
    <p>Price: <strong>${item.price}</strong></p>
    <button class="button">Buy Now</button>
  `;

  // Add hover effect for the product card
  itemBox.addEventListener("mouseenter", () => {
    itemBox.classList.add("hover");
  });
  itemBox.addEventListener("mouseleave", () => {
    itemBox.classList.remove("hover");
  });

  return itemBox;
}

function getItemsData() {
  return {
    electronics: [
      {
        name: "Gaming Laptop",
        price: "$1200",
        img: "gaming-laptop.jpg",
        description:
          "High performance gaming laptop with 16GB RAM and 512GB SSD.",
      },
      {
        name: "Smartphone",
        price: "$800",
        img: "smartphone.jpg",
        description: "Latest model with a powerful camera and fast processor.",
      },
      {
        name: "Headphones",
        price: "$150",
        img: "headphones.jpg",
        description:
          "Noise-cancelling wireless headphones with 30 hours of battery life.",
      },
      {
        name: "Smartwatch",
        price: "$250",
        img: "smartwatch.jpg",
        description:
          "Water-resistant smartwatch with fitness tracking and heart rate monitor.",
      },
      {
        name: "4K Smart TV",
        price: "$1000",
        img: "4k-tv.jpg",
        description:
          "Ultra HD Smart TV with vibrant colors and great sound quality.",
      },
    ],
    clothing: [
      { name: "T-shirt", price: "$25", img: "t-shirt.jpg" },
      { name: "Jeans", price: "$45", img: "jeans.jpg" },
      { name: "Jacket", price: "$70", img: "jacket.jpg" },
      { name: "Dress", price: "$60", img: "dress.jpg" },
    ],
    food: [
      { name: "Pizza", price: "$15", img: "pizza.jpg" },
      { name: "Pasta", price: "$12", img: "pasta.jpg" },
      { name: "Burger", price: "$8", img: "burger.jpg" },
      { name: "Salad", price: "$10", img: "salad.jpg" },
    ],
    furniture: [
      { name: "Sofa", price: "$400", img: "sofa.jpg" },
      { name: "Chair", price: "$50", img: "chair.jpg" },
      { name: "Table", price: "$100", img: "table.jpg" },
      { name: "Lamp", price: "$30", img: "lamp.jpg" },
    ],
    sports: [
      { name: "Football", price: "$20", img: "football.jpg" },
      { name: "Tennis Racket", price: "$40", img: "tennis-racket.jpg" },
      { name: "Basketball", price: "$25", img: "basketball.jpg" },
      { name: "Gym Equipment", price: "$150", img: "gym-equipment.jpg" },
    ],
    toys: [
      { name: "Action Figure", price: "$10", img: "action-figure.jpg" },
      { name: "Puzzle", price: "$15", img: "puzzle.jpg" },
      { name: "Stuffed Animal", price: "$20", img: "stuffed-animal.jpg" },
      { name: "Board Game", price: "$30", img: "board-game.jpg" },
    ],
    books: [
      { name: "Fiction Book", price: "$12", img: "fiction-book.jpg" },
      { name: "Science Book", price: "$18", img: "science-book.jpg" },
      { name: "History Book", price: "$20", img: "history-book.jpg" },
      { name: "Math Book", price: "$25", img: "math-book.jpg" },
    ],
  };
}
