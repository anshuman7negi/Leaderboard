export default (data) => {
    const scoreList = document.querySelector('.score-list');
    data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} : ${item.score}`;
      scoreList.appendChild(li);
    });
  };