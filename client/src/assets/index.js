// backgrounds
import elysium from './background/elysium.jpg';
import tartarus from './background/tartarus.jpg';
import asphodel from './background/asphodel.jpg';
import sunset from './background/sunset.png';
import zagreusImg from './background/zagreus-img.png';

// cards
import knight from './Knight.jpg';
import scandinavionWarrior from './ScandinavianWarrior.jpg';
import satoshiNakamoto from './SatoshiNakamoto.jpg';
import coldNight from './ColdNight.jpg';
import goblinMystic from './GoblinMystic.jpg';
import goblinShaman from './GoblinShaman.jpg';
import goblinWoodcutter from './GoblinWoodcutter.jpg';
import ohMyMan from './OhMyMan.jpg';
import anya from './Anya.jpg';
import gigachad from './Gigachad.jpg';
import shadow from './Shadow.jpg';
import vasserman from './Vasserman.jpg';
import dickSlayer from './DickSlayer.jpg';


// logo
import logo from './logo.svg';

// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';

// players
import player01 from './player01.png';
import player02 from './player02.png';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';

export const allCards = [
  knight,
  scandinavionWarrior,
  satoshiNakamoto,
  coldNight,
  goblinMystic,
  goblinShaman,
  goblinWoodcutter,
  ohMyMan,
  anya,
  gigachad,
  shadow,
  vasserman,
  dickSlayer,
  dickSlayer,
  dickSlayer,
  dickSlayer,
];

export {
  tartarus,
  asphodel,
  elysium,
  sunset,
  zagreusImg,

  knight,
  scandinavionWarrior,
  satoshiNakamoto,
  coldNight,
  goblinMystic,
  goblinShaman,
  goblinWoodcutter,
  ohMyMan,
  anya,
  gigachad,
  shadow,
  vasserman,
  dickSlayer,

  logo,

  attack,
  defense,
  alertIcon,
  AlertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-tartarus', image: tartarus, name: 'Tartarus' },
  { id: 'bg-asphodel', image: asphodel, name: 'Asphodel' },
  { id: 'bg-elysium', image: elysium, name: 'Elysium' },
  { id: 'bg-sunset', image: sunset, name: 'Sunset' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
];