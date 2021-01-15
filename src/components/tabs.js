import axios from 'axios';

const tabsContainer = document.querySelector('.tabs-container');


axios.get("https://lambda-times-api.herokuapp.com/topics")
.then( ( res ) => {
  tabsContainer.appendChild( Tabs ( res ) );
  console.log(res);
})
.catch((error) => {
  console.log(error);
})

const Tabs = (topics) => {

  const allTopic = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  allTopic.classList.add('topics');
  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');

  return topics;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

 

const tabsAppender = (selector) => {
 
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
