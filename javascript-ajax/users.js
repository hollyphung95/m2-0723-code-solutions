/* In users.js, complete the following tasks:
/* Query the DOM for the '#user-list' element. */
const $userList = document.querySelector('#user-list');

function getUserData() {
  /*  new XMLHttpRequest() to create a new XHR object. */
  const xhr = new XMLHttpRequest();

  /* open() the xhr object to send a 'GET' request to 'https://jsonplaceholder.typicode.com/users' */
  /* xhr.open() to set the request method and URL. */
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

  /* Set the responseType */
  /*  xhr.responseType to automatically parse the JSON response body into JavaScript objects. */
  xhr.responseType = 'json';

  /* Listen for the 'load' event on the xhr object in order to: */
  /*  xhr.addEventListener() to execute a function when the response is eventually loaded. */
  xhr.addEventListener('load', function () {
    /* log the status of the xhr object to the console */
    /*  xhr.status to read the HTTP status code of the response message */
    console.log(xhr.status);

    /* log the response of the xhr object to the console */
    /*  xhr.response to get the body of the HTTP response once it has been converted from a JSON string to JavaScript objects.  */
    console.log(xhr.response);

    /* loop through the response of the xhr object. */
    xhr.response.forEach((element) => {
      /* for each user object in the response, create an <li>, */
      const $listItem = document.createElement('LI');

      /* set its textContent to the user's name, */
      $listItem.textContent = element.name;
      /* append it to the '#user-list' element */
      $userList.append($listItem);
    });
  });
  /*  xhr.send() to actually send the request to the server at the URL specified in xhr.open(). */
  xhr.send();
}

/* Call the function */
getUserData();
