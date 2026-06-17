
const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Mehta",
    age: 26,
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Kapoor",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Karan Malhotra",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ananya Singh",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Rohan Gupta",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Neha Joshi",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Aditya Raj",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Isha Agarwal",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];


const root = document.getElementById("root");

const arr = [];
users.forEach(({ name, age, photo }, index) => {
    const div = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const p = document.createElement("p");
    p.textContent = age;

    const img = document.createElement("img");
    img.src = photo;
    img.alt = name;

    div.append(h2, p, img);
    arr.push(div);
});

root.append(...arr); //* (better for performance than appending one-by-one)


// const fragment = document.createDocumentFragment();

// users.forEach(({ name, age, photo }) => {
//     const div = document.createElement("div");

//     const h2 = document.createElement("h2");
//     h2.textContent = name;

//     const p = document.createElement("p");
//     p.textContent = age;

//     const img = document.createElement("img");
//     img.src = photo;

//     div.append(h2, p, img);
//     fragment.append(div);
// });

// root.append(fragment);