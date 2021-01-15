//import axios from 'axios';
const headerContainer = document.querySelector('.header-container');

const Header = (title, date, temp) => {
  const mainHead = document.createElement('div');
  const mainDate = document.createElement('span');
  const mainTitle = document.createElement('h1');
  const mainTemp = document.createElement('span');

  mainHead.classList.add('header');
  mainDate.classList.add('date');
  mainTemp.classList.add('temp');

  mainDate.textContent = date;
  mainTitle.textContent = title;
  mainTemp.textContent = temp;

  mainHead.appendChild(mainDate);
  mainHead.appendChild(mainTitle);
  mainHead.appendChild(mainTemp);

return mainHead;
  //console.log(Header);

  


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  headerContainer.appendChild(Header('Lambda Times', 'january 6th 2021', '26 Degrees'))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
