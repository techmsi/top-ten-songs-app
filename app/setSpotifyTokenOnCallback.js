const ls = window.localStorage;

const setSpotifyTokenOnCallback = () => {
  var hash = window.location.hash;

  if (window.location.search.substring(1).indexOf('error') !== -1) {
    window.close();
  } else if (hash) {
    var token = window.location.hash.split('&')[0].split('=')[1];
    ls.setItem('spotify-token', token);
  }
};

window.onload = setSpotifyTokenOnCallback();
