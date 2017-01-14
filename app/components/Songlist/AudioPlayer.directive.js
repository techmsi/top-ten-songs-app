class AudioPlayerDirectiveController {
  constructor () {
    this.audio = new Audio();
    this.audio.src = this.song.preview_url;
    this.on = true;
  }
  playTrack(index) {
    this.on = !this.on;

    if(this.on) {
      this.pause();
    } else {
      this.play();
    }
  }
  stop() {
    if (this.audio.src) {
      this.audio.pause();
      this.audio.currentTime = 0.0;
    }
  }
  pause() {
    if (this.audio.src) {
      this.audio.pause();
    }
  }

  play() {
    if (this.audio.src) {
      this.audio.play();
    }
  }
}

class AudioPlayerDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {
      song: '='
    }
    this.template = `
    <div class="audioplayer">
      <span class="marquee"><span>{{aud.song.name}}</span></span>
      <button ng-click="aud.playTrack(songTrack, $index)" ng-class="{ 'play': aud.on, 'stop': !aud.on}" class="play">{{aud.text}}</button>
    </div>
    `;
    this.controller = AudioPlayerDirectiveController;
    this.controllerAs = 'aud';
    this.bindToController = true;
  }
}

AudioPlayerDirective.$inject = ['$scope'];

export default AudioPlayerDirective;
