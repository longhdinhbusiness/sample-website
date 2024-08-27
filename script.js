const displayMyName = () => {
  const nameDisplay = document.getElementById('display_name');
  const newParagraph = document.createElement('div');
  newParagraph.innerHTML = `<p id="name">Long Hoang Dinh</p>`;

  nameDisplay.appendChild(newParagraph);
};

displayMyName();
