var SerieModel = (function () {
    'use strict';

    function SerieModel (data) {
        this.id = data.id;
        this.title = data.name || data.title;
        this.number_episode = data.number_of_episodes || data.number_episode;
        this.season = data.number_of_seasons || data.season;
        this.synopsis = data.overview || data.synopsis;

        this.number_episode = data.number_episode;
        this.current_episode = data.current_episode;
        this.added = data.added;

    }

    SerieModel.prototype.addSerie = function () {
      this.added = true;
      this.current_episode = 0;
    }

    SerieModel.prototype.inc = function () {
      return (this.current_episode === this.number_episode) ? false : !!++this.current_episode;
    }

    SerieModel.prototype.dec = function () {
      return (this.current_episode !== 0) ? false : !!this.current_episode--;
    }

    return SerieModel;
}());
