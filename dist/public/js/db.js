const dbMatch = idb.open('barcelonista-match', 1, (upgradeDb) => {
  upgradeDb.createObjectStore('matches', {
    keyPath: 'id',
  });
});

const dbPlayer = idb.open('barcelonista-player', 1, (upgradeDb) => {
  upgradeDb.createObjectStore('players', {
    keyPath: 'id',
  });
});

const matchSaveForLater = (matches) => {
  dbMatch
    .then((db) => {
      let tx = db.transaction('matches', 'readwrite');
      let store = tx.objectStore('matches');

      store.put(matches.match);
      return tx.complete;
    })
    .then(() => {
      console.log('Add Match Success To Saved Matches');
    });
};

const deleteMatch = (matches) => {
  dbMatch
    .then((db) => {
      let tx = db.transaction('matches', 'readwrite');
      let store = tx.objectStore('matches');
      store.delete(matches.match.id);

      return tx.complete;
    })
    .then(() => {
      console.log('Remove Match Success From Saved Matches');
    });
};

const getAllMatches = () => {
  return new Promise((resolve, reject) => {
    dbMatch
      .then((db) => {
        var tx = db.transaction('matches', 'readonly');
        var store = tx.objectStore('matches');
        return store.getAll();
      })
      .then((matches) => {
        resolve(matches);
      });
  });
};

const getByIdMatches = (id) => {
  return new Promise((resolve, reject) => {
    dbMatch
      .then((db) => {
        let tx = db.transaction('matches', 'readonly');
        let store = tx.objectStore('matches');

        return store.get(id);
      })
      .then((match) => {
        resolve(match);
      });
  });
};

const playerSaveForLater = (player) => {
  dbPlayer
    .then((db) => {
      let tx = db.transaction('players', 'readwrite');
      let store = tx.objectStore('players');

      store.put(player);
      return tx.complete;
    })
    .then(() => {
      console.log('Add Player Success To Saved Players');
    });
};

const deletePlayer = (player) => {
  dbPlayer
    .then((db) => {
      let tx = db.transaction('players', 'readwrite');
      let store = tx.objectStore('players');

      store.delete(player.id);

      return tx.complete;
    })
    .then(() => {
      console.log('Remove Player Success From Saved Players');
    });
};

const getAllPlayers = () => {
  return new Promise((resolve, reject) => {
    dbPlayer
      .then((db) => {
        var tx = db.transaction('players', 'readonly');
        var store = tx.objectStore('players');
        return store.getAll();
      })
      .then((players) => {
        resolve(players);
      });
  });
};

const getByIdPlayers = (id) => {
  return new Promise((resolve, reject) => {
    dbPlayer
      .then((db) => {
        let tx = db.transaction('players', 'readonly');
        let store = tx.objectStore('players');

        return store.get(id);
      })
      .then((player) => {
        resolve(player);
      });
  });
};
