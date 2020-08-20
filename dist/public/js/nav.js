document.addEventListener('DOMContentLoaded', () => {
  let sideBarElements = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideBarElements);
  loadNav();

  function loadNav() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status !== 200) return;

        document
          .querySelectorAll('.topnav, .sidenav')
          .forEach((sideBarElement) => {
            sideBarElement.innerHTML = xhttp.responseText;
          });

        document
          .querySelectorAll('.sidenav a, .topnav a')
          .forEach((sideBarElement) => {
            sideBarElement.addEventListener('click', (event) => {
              let sidenav = document.querySelector('.sidenav');
              M.Sidenav.getInstance(sidenav).close();

              page = event.target.getAttribute('href').substr(1);
              loadPage(page);
            });
          });
      }
    };
    xhttp.open('GET', 'nav.html', true);
    xhttp.send();
  }

  let page = window.location.hash.substr(1);
  if (page === '') page = 'matches';
  loadPage(page);

  function loadPage(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        const content = document.querySelector('#body-content');

        if (page === 'matches') {
          getMatches();
        }

        if (page === 'team') {
          getTeam();
        }

        if (page === 'players') {
          getPlayers();
        }

        if (page === 'saved-matches') {
          getSavedMatches();
        }

        if (page === 'saved-players') {
          getSavedPlayers();
        }
        if (xhttp.status === 200) {
          content.innerHTML = xhttp.responseText;
        } else if (this.status === 404) {
          content.innerHTML = '<h1>Pages Not Found (404).</h1>';
        } else {
          content.innerHTML = `<h1>You Cannot Access This Page (${xhttp.status})</h1>`;
        }
      }
    };
    xhttp.open('GET', 'pages/' + page + '.html', true);
    xhttp.send();
  }
});
