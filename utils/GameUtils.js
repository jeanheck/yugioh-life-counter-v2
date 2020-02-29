import { Audio } from 'expo-av';

export async function playLifePointsSound() {
  const soundObject = new Audio.Sound();

  try {
    await soundObject.loadAsync(require('../files/points-drop.mp3'));
    await soundObject.playAsync();
  } catch (error) {
    alert('Ops! Aconteceu alguma coisa estranha com o som :( ...')
    console.log('ERROR > ', error);
  }
}

export function getInterval(pointsToSubstract){
  switch(pointsToSubstract){
    case 10:
      return 1;
    case 100:
      return 2.5;
    default:
      return 25;
  }
}

export function getSpeed(pointsToSubstract){
  switch(pointsToSubstract){
    case 10:
      return 250;
    default:
      return 1;
  }
}