let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:4000";
    break;

  case "eab-my-awesomeapp1.herokuapp.com":
    APIURL = "https://eab-my-awesomeapp.herokuapp.com";
}

export default APIURL;
