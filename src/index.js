const ramenAPI = 'http://localhost:3000/ramens';
const ramenMenu = document.getElementById('ramen-menu');
const newRamenForm = document.getElementById('new-ramen');

fetch(ramenAPI)
.then(res => res.json())
.then(data => displayRamens(data));

function displayRamens(ramens) {
ramens.forEach(displayRamen);
}

function displayRamen(ramen) {
const ramenImage = document.createElement('img');
ramenImage.src = ramen.image;
ramenMenu.append(ramenImage);
ramenImage.addEventListener('click', () => addRamenListener(ramen));
}

function addRamenListener(ramen) {
document.getElementsByClassName("detail-image")[0].src = ramen.image;
document.getElementsByClassName("name")[0].textContent = ramen.name;
document.getElementsByClassName("restaurant")[0].textContent = ramen.restaurant;
document.getElementById('rating-display').textContent = ramen.rating;
document.getElementById('comment-display').textContent = ramen.comment;
}

newRamenForm.addEventListener('submit', newItem);

function newItem(event) {
event.preventDefault();
const newRamen = {
name: event.target.name.value,
restaurant: event.target.restaurant.value,
image: event.target.image.value,
rating: event.target.rating.value,
comment: event.target['new-comment'].value, 
};
displayRamen(newRamen);
event.target.reset();
}