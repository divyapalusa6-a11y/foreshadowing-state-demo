const state = {
  elephantCount: 0
};

const addElephant = (event) => {
  const newElephant = document.createElement('span');
  const elephantContainer = document.querySelector('#elephantContainer');
  newElephant.textContent = '🐘';
  elephantContainer.appendChild(newElephant);

  // Elephant Count Behavior
  state.elephantCount += 1;
  const elephantCountContainer = document.querySelector('#elephantCount');
  elephantCountContainer.textContent = `Elephant Count: ${state.elephantCount}`;
};
// Light Mode Behavior
const turnOnLightMode = (event) => {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
};

// Dark Mode Behavior
const turnOnDarkMode = (event) => {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
};

const registerEventHandlers = (event) => {
  const elephantButton = document.querySelector('#addElephantButton');
  elephantButton.addEventListener('click', addElephant);

  const lightThemeButton = document.querySelector('#lightThemeButton');
  lightThemeButton.addEventListener('click', turnOnLightMode);

  const darkThemeButton = document.querySelector('#darkThemeButton');
  darkThemeButton.addEventListener('click', turnOnDarkMode);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);