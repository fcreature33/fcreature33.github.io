const text = "Insider Cheats";

  let line = 0;
  let count = 0;
  let result = '';

  function typeLine() {
    let interval = setTimeout(
      () => {
        result += text[line][count]
        document.getElementById('type_text').innerHTML =result +'|';


      count++;
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line == text.length) {
          clearTimeout(interval);
           document.getElementById('type_text').innerHTML =result;
          return true;
        }
      }
      typeLine();
    }, getRandomInt(getRandomInt(450*2.5)))
  }
  typeLine();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}