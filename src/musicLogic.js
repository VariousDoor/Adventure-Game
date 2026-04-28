class Tune {
    constructor(path) {
        this.path = path;
        this.audio = new Audio(this.path);
        this.name = path.slice(6, -24);
    };
    play() {
        
        this.audio.play();
    }
};
class Music {
    constructor(tunes) {
        this.tunes = tunes;
        for(const tune of tunes) {
            this[tune.name] = tune;
        }
    };
};
function loadUI(music) {
    tune_card_top = 0;
    tune_id = 0;
    for(const tune of music.tunes) {
        var tune_card = document.createElement("div");
        var tune_card_text = document.createElement("div");
        tune_card_text.style =  "position: absolute; top: 50%; left 6.4%; transform: translate(0%, -50%);"
        tune_card.style = `position: absolute; top: ${tune_card_top}%; left: 0%; width: 100%; height: 18.75%; border-radius: 10%/40%; background-color: whitesmoke; padding-top: 0%; padding-left: 0%; color: black; font-size: 3.2vw;`
        tune_card_text.innerHTML = tune.name;
        tune_card.onclick = () => {tune.play();}
        console.log(`game_music.tunes[${tune_id}].play();`)
        music_menu.appendChild(tune_card).appendChild(tune_card_text);
        tune_card_top += 21;
        tune_id += 1;
    };
};