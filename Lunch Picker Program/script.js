let lunches = [];

function addLunchToEnd(array, item) {
  array.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, item) {
  array.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  } else {
    const item = array.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
    return array;
  }
}

function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  } else {
    const item = array.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
    return array;
  }
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
    return array;
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    console.log(`Randomly selected lunch: ${item}`);
    return array;
  }
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
    return array;
  } else {
    console.log("Menu items: " + array.join(", "));
    return array;
  }
}
