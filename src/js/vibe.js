// make some vibe options
document.addEventListener('DOMContentLoaded', () => {
  const vibes = [
    "... and you are awesome!",
    "... and have a wonderful day!",
    "... and you've got this!",
    "... and so is this puppy 🐶"
  ];

  const randElement = (arr) => {
    return arr[(Math.floor(Math.random() * (arr.length)))];
  }

  const extendVibe = (options) => {
    const vibeDiv = document.querySelector('.vibe');
    return vibeDiv.append(randElement(vibes));
  };

  extendVibe();

});