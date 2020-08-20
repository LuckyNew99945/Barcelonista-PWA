const base_url = 'https://api.football-data.org/v2/teams/81/';
const match_url = 'https://api.football-data.org/v2/matches/';
const player_url = 'https://api.football-data.org/v2/players/';
const token = '45ad292de75f4c839dd0e2a8f64bed20';

const status = (response) => {
  if (response.status !== 200) {
    console.log(`Error : ${response.status}`);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
};

const json = (response) => {
  return response.json();
};

const error = (error) => {
  console.log(`Error : ${error}`);
};

const getMatches = () => {
  fetch(`${base_url}matches`, {
    mode: 'cors',
    headers: {
      'X-Auth-Token': token,
    },
  })
    .then(status)
    .then(json)
    .then((data) => {
      let matchesHTML = '';
      data.matches.forEach((match) => {
        matchesHTML += `
       
          <div class="card waves-effect">
          <a href="./match.html?id=${match.id}">
            <div class="card-content">
              <h5 class="center-align"><strong>${match.competition.name}</strong></h5>
              <p class="center-align">MatchDay :<strong>${match.matchday}</strong></p>       
              <h5 class="center-align"><strong>${match.homeTeam.name}</strong></h5>
              <h5 class="center-align"><strong>${match.score.fullTime.homeTeam}</strong></h5>
              <h5 class="center-align">VS</h5>
              <h5 class="center-align"><strong>${match.score.fullTime.awayTeam}</strong></h5>
              <h5 class="center-align"><strong>${match.awayTeam.name}</strong></h5>
              <h5 class="center-align">Status :<strong>${match.status}</strong></h5>   
            </div>
          </a>
            </div>
          </div>
     
            `;
      });
      document.getElementById('matches').innerHTML = matchesHTML;
    })
    .catch(error);
};

const getMatchesById = () => {
  return new Promise((resolve, reject) => {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get('id');
    console.log(idParam);

    fetch(`${match_url}${idParam}`, {
      mode: 'cors',
      headers: {
        'X-Auth-Token': token,
      },
    })
      .then(status)
      .then(json)
      .then((data) => {
        let matchHTML = '';
        matchHTML += `
       
          <div class="card">
            <div class="card-content ">
              <h5 class="center-align"><strong>${data.match.competition.name}</strong></h5>
              <p class="center-align">MatchDay :<strong>${data.match.matchday}</strong></p>       
              <h5 class="center-align"><strong>${data.match.homeTeam.name}</strong></h5>
              <h5 class="center-align"><strong>${data.match.score.fullTime.homeTeam}</strong></h5>
              <h5 class="center-align">VS</h5>
              <h5 class="center-align"><strong>${data.match.score.fullTime.awayTeam}</strong></h5>
              <h5 class="center-align"><strong>${data.match.awayTeam.name}</strong></h5>
              <h5 class="center-align">Status :<strong>${data.match.status}</strong></h5>   
            </div>
            </div>
          </div>
       
            `;

        document.getElementById('body-content').innerHTML = matchHTML;
        resolve(data);
      })
      .catch(error);
  });
};

const getSavedMatches = () => {
  getAllMatches().then((match) => {
    let matchesHTML = '';

    match.forEach((match) => {
      matchesHTML += `
           
        
              <div class="card waves-effect ">
              <a href="./match.html?id=${match.id}&saved=true">
              <div class="card-content">
              <h5 class="center-align"><strong>${match.competition.name}</strong></h5>
              <p class="center-align">MatchDay :<strong>${match.matchday}</strong></p>       
              <h5 class="center-align"><strong>${match.homeTeam.name}</strong></h5>
              <h5 class="center-align"><strong>${match.score.fullTime.homeTeam}</strong></h5>
              <h5 class="center-align">VS</h5>
              <h5 class="center-align"><strong>${match.score.fullTime.awayTeam}</strong></h5>
              <h5 class="center-align"><strong>${match.awayTeam.name}</strong></h5>
              <h5 class="center-align">Status :<strong>${match.status}</strong></h5>   
            </div> 
              </a>
                </div>
              </div>
          
                `;
    });
    document.getElementById('body-content').innerHTML = matchesHTML;
  });
};

const getSavedMatchesById = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get('id');

  getByIdMatches(idParam).then((data) => {
    let matchHTML = '';

    matchHTML += `
        
            <div class="card ">
            <div class="card-content ">
            <h5 class="center-align">${data.match.competition.name}</h5>
            <p class="center-align">MatchDay :${data.match.matchday}</p>       
            <h5 class="center-align">${data.match.homeTeam.name}</h5>
            <h5 class="center-align">${data.match.score.fullTime.homeTeam}</h5>
            <h5 class="center-align">VS</h5>
            <h5 class="center-align">${data.match.score.fullTime.awayTeam}</h5>
            <h5 class="center-align">${data.match.awayTeam.name}</h5>
            <h5 class="center-align">Status :${data.match.status}</h5>   
          </div>  
            </a>
              </div>
            </div>
       
              `;

    document.getElementById('body-content').innerHTML = matchHTML;
  });
};

const getPlayers = () => {
  fetch(`${base_url}`, {
    mode: 'cors',
    headers: {
      'X-Auth-Token': token,
    },
  })
    .then(status)
    .then(json)
    .then((data) => {
      let playersHTML = '';
      data.squad.forEach((squad) => {
        playersHTML += `
        
    <div class="card  waves-effect">
      <a href="./player.html?id=${squad.id}">
      <div class="card-content ">
        <h5>Name : <strong>${squad.name}</strong></h5>
        <h5>position : <strong>${squad.position}</strong></h5>
       
      </div>
      </a>
    </div>
  
            `;
      });

      document.getElementById('players').innerHTML = playersHTML;
    })
    .catch(error);
};

const getSavedPlayers = () => {
  getAllPlayers().then((player) => {
    let playerHTML = '';

    player.forEach((player) => {
      playerHTML += `
     
  <div class="card ">
    <a href="./player.html?id=${player.id}&saved=true">
    <div class="card-content">
    <h5>Name : <strong>${player.name}</strong></h5>
    <h5>position : <strong>${player.position}</strong></h5>
  </div>
    </a>
  </div>

          `;
    });
    document.getElementById('body-content').innerHTML = playerHTML;
  });
};

const getPlayersById = () => {
  return new Promise((resolve, reject) => {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get('id');

    fetch(`${player_url}${idParam}`, {
      mode: 'cors',
      headers: {
        'X-Auth-Token': token,
      },
    })
      .then(status)
      .then(json)
      .then((data) => {
        let playersHTML = '';
        let shirtNum = data.shirtNumber;
        if (shirtNum === null) {
          shirtNum = 'none';
        }

        playersHTML += `
         
      <div class="card">
      <div class="card-content">
      <h5><strong>Name : <strong>${data.name}</strong></h5>
      <h5><strong>position : <strong>${data.position}</strong></h5>
      <h5><strong>dateOfBirth : <strong>${data.dateOfBirth.substr(
        0,
        10
      )}</strong></h5>
      <h5><strong>countryOfBirth : <strong>${data.countryOfBirth}</strong></h5>
      <h5><strong>Nationality : <strong>${data.nationality}</strong></h5>
      <h5><strong>ShirtNumber : <strong>${shirtNum}</strong></h5>
    </div>
      </div>
 
  
  
  
              `;

        document.getElementById('body-content').innerHTML = playersHTML;
        resolve(data);
      })
      .catch(error);
  });
};

const getSavedPlayersById = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get('id');

  getByIdPlayers(idParam).then((data) => {
    let playersHTML = '';
    let shirtNum = data.shirtNumber;
    if (shirtNum === null) {
      shirtNum = 'none';
    }

    playersHTML += `
       
    <div class="card">
    <div class="card-content">
    <h5>Name : <strong>${data.name}</strong></h5>
    <h5>position : <strong>${data.position}</strong></h5>
    <h5>dateOfBirth : <strong>${data.dateOfBirth.substr(0, 10)}</strong></h5>
    <h5>countryOfBirth : <strong>${data.countryOfBirth}</h5>
    <h5>Nationality : <strong>${data.nationality}</strong></h5>
    <h5>ShirtNumber : <strong>${shirtNum}</strong></h5>
  </div>
    </div>
  
            `;

    document.getElementById('body-content').innerHTML = playersHTML;
  });
};

const getTeam = () => {
  fetch(`${base_url}`, {
    mode: 'cors',
    headers: {
      'X-Auth-Token': token,
    },
  })
    .then(status)
    .then(json)
    .then((data) => {
      let teamHTML = '';
      let shortname = data.shortname;
      if (shortname === undefined) {
        shortname = 'none';
      }
      teamHTML += `
       
      
      <div class="col s12 m7 l12">
      <div class="card">
        <div class="card-image">
          <img src="${data.crestUrl}" />
        </div>
        <div class="card-content left-align">
          <h5>Based on :</h5>
          <p><strong>${data.area.name}</strong></p>
          <h5>Name :</h5>
          <p><strong>${data.name}</strong></p>
          <h5>Shortname :</h5>
          <p><strong>${shortname}</strong></p>
          <h5>Founded :</h5>
          <p><strong>${data.founded}</strong></p>
          <h5>Home Stadium :</h5>
          <p><strong>${data.venue}</strong></p>
          <h5>Address :</h5>
          <p><strong>${data.address}</strong></p>
          <h5>Phone :</h5>
          <p><strong>${data.phone}</strong></p>
          <h5>Website :</h5>
          <p><strong><a href="${data.website}">${data.website}</a></strong></p>
          <h5>Email :</h5>
          <p><strong><a href="mailto:${data.email}">${data.email}</a></strong></p>

        </div>
      </div>
    </div>
  </div>
    
      
            `;

      document.getElementById('team').innerHTML = teamHTML;
    })
    .catch(error);
};
