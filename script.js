const words = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12', 'word13', 'word14', 'word15', 'word16', 'word17', 'word18', 'word19', 'word20'];
const gameBoard = document.getElementById('game-board');

words.forEach(word => {
  const card = document.createElement('div');
  card.classList.add('card');

  const front = document.createElement('div');
  front.classList.add('front');
  front.textContent = 'Click to flip';

  const back = document.createElement('div');
  back.classList.add('back');
  back.textContent = word;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });

  gameBoard.appendChild(card);
});
