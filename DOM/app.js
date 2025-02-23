const all = document.querySelector(".parent");

// console.log(all.children);

// for (let i = 0; i < all.children.length; i++) {
//   console.log("Inner Text", all.children[i].innerHTML);
// }

const parent = document.querySelector(".parent");
// console.log(parent.children[1].innerHTML)

// Array.from(parent.children).forEach((child) => {
//   console.log("Inner Text:", child.innerHTML);
// });

parent.children[0].style.color = "red";
parent.children[1].style.color = "yellow";
parent.children[2].style.color = "green";
parent.children[3].style.color = "orange";
parent.children[4].style.color = "blue";
parent.children[5].style.color = "white";
parent.children[6].style.color = "gold";

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

// const dayOne = document.querySelector('.day');
// console.log(dayOne);

console.log("Nodes: ", parent.childNodes);
