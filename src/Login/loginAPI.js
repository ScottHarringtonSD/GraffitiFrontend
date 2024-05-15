//const baseUrl = "https://graffitiapi.onrender.com";
const baseUrl = "http://localhost:3000";
const url = `${baseUrl}/login`;

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return "Login details incorrect";
    default:
      return "There was an error logging in. Please try again.";
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

const loginAPI = {
  login(credentials) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(error);
      });
  },
};

export { loginAPI };
