/*
new Promise((resolve, reject) => {
  setTimeout(resolve, 2000);
  //reject('loh');
})
  .then(() => {
    setTimeout(test, 2000);
  })
  .then(() => {
    console.log('third');
  })
  .catch(error => {
    console.error(error);
  });

function test() {
  console.log('second');
}
*/

// third — выскакивааем недождавшись second

/*
  new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
    //reject('loh');
  })
    .then(() => {
      return new Promise((resolve, reject) =>
        setTimeout(() => {
          test();
          resolve();
        }, 2000)
      );
    })
    .then(() => {
      console.log('third');
    })
    .catch(error => {
      console.error(error);
    });

  function test() {
    console.log('second');
  }

*/

/* ---------------------------------------------------------------- */

import getLevels from './ajax';

const player = {};
const levels = {};

getLevels()
  .then(loadedLevels => saveLevels(loadedLevels))
  // .then(levels => console.log(levels))
  .then(() => loadPlayerSave(levels))
  // .then(player => console.log(player))
  .then(player => startGame(player))
  .catch(error => console.error(error));


function startGame(player){
  console.log(`${player.nickname} с возвращением в игру!`);
}

function loadPlayerSave(levels){
  return new Promise((resolve, reject) => {

    console.warn('Загружается сохранение...');
    let playerSave = localStorage.getItem('playerSave');

    if(playerSave){
      playerSave = JSON.parse(playerSave);
      Object.assign(player, playerSave);
      
      setTimeout(()=>{
        resolve(player);
      } , 2000);
    }
    else{
      reject('Undefined save');
    }
    
  });
}

function saveLevels(loadedLevels){
  return new Promise((resolve, reject) => {
    Object.assign(levels, loadedLevels);
    resolve();
  });
}
