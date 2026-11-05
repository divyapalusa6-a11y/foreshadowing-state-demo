const state = {
  crabCount: 0
};

const addCrab = (event) => {
  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');
  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);

  // Crab Count Behavior
  state.crabCount += 1;
  const crabCountContainer = document.querySelector('#crabCount');
  crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
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
  const crabButton = document.querySelector('#addCrabButton');
  crabButton.addEventListener('click', addCrab);

  const lightThemeButton = document.querySelector('#lightThemeButton');
  lightThemeButton.addEventListener('click', turnOnLightMode);

  const darkThemeButton = document.querySelector('#darkThemeButton');
  darkThemeButton.addEventListener('click', turnOnDarkMode);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);