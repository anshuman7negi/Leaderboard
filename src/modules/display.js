export default (data) => {
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  data.result.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user} : ${item.score}`;
    scoreList.appendChild(li);
  });
};