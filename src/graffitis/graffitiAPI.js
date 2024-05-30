import { Graffiti } from "./Graffiti";

const baseUrl = "https://graffitiapi.onrender.com";
//const baseUrl = "http://localhost:3000";
const url = `${baseUrl}/graffitis`;

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return "Please login again.";
    case 403:
      return "You do not have permission to view the project(s).";
    default:
      return "There was an error retrieving the project(s). Please try again.";
  }
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response) {
  return response.json();
}

// eslint-disable-next-line
function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

const graffitiAPI = {
  get(page = 1, limit = 20) {
    const token = getToken();

    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`, {
      headers: {
        Auth: JSON.stringify(token),
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((graffitis) => {
        return graffitis.map((p) => {
          return new Graffiti(p);
        });
      })
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },

  patch(graffiti) {
    const token = getToken();
    return fetch(`${url}`, {
      method: "PATCH",
      body: JSON.stringify(graffiti),
      headers: {
        "Content-Type": "application/json",
        Auth: JSON.stringify(token),
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((graffiti) => {
        return new Graffiti(graffiti);
      })
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error updating the project. Please try again."
        );
      });
  },

  find(_id) {
    const token = getToken();
    return fetch(`${url}/${_id}`, {
      headers: {
        Auth: JSON.stringify(token),
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((graffiti) => {
        return new Graffiti(graffiti);
      })
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error retrieving the project. Please try again."
        );
      });
  },

  add(graffiti) {
    const token = getToken();
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(graffiti),
      headers: {
        "Content-Type": "application/json",
        Auth: JSON.stringify(token),
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error updating the project. Please try again."
        );
      });
  },

  delete(graffiti) {
    const token = getToken();
    console.log(token);
    console.log(JSON.stringify(graffiti._id));
    console.log(JSON.stringify(graffiti));
    return fetch(`${url}`, {
      method: "DELETE",
      body: JSON.stringify(graffiti),
      headers: {
        "Content-Type": "application/json",
        Auth: JSON.stringify(token),
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error deleting the entry. Please try again."
        );
      });
  },

  search(searchString) {
    const token = getToken();
    return fetch(`${url}?search=${searchString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Auth: JSON.stringify(token),
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((graffitis) => {
        return graffitis.map((p) => {
          return new Graffiti(p);
        });
      })
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error searching for graffiti. Please try again."
        );
      });
  },
};

export { graffitiAPI };
