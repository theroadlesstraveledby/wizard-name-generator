const firstNames = ["Gandalf", "Saruman", "Merlin", "White-beard", "Stonehenge", "Catnip", "Albus", "Winstone", "Fluffy", "Albert", "Engelbert", "Sterheim", "Salamander", "Battlemeyer", "Baldwin", "Stanley", "Bartholomew", "Angleworth", "Northwind", "Melvin", "Trottleburt", "Shropshire", "Hemlock", "Appleby", "Beetle", "Anglomorous"];

const lastNames = ["Great", "Skunk", "Humble", "Daft", "Toad", "Grim", "Whisk", "Whiz", "Turnip", "Wise", "String-bean", "Grey", "White", "Trustworthy", "Fool", "Dreadful", "Bewildered", "Brainy", "Abashed", "Cat", "Caffinated", "Jubilant", "Merry", "Meek", "Outlandish", "Quizzical"];

function randomInt(limit) {
  return Math.floor(Math.random() * limit);
}

function randomEntry(array) {
  const randomIndex = randomInt(array.length);

  return array[randomIndex];
}

function randomName() {
  const firstName = randomEntry(firstNames);
  const lastName = randomEntry(lastNames);
  const fullName = firstName + ' the ' + lastName;

  return fullName;
}

function nameGenerationHandler() {
  const nameDiv = document.getElementById('name');
  const newName = randomName();

  nameDiv.textContent = newName;
}

document.getElementById('generate').addEventListener('click', nameGenerationHandler);
