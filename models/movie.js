import pkg from 'sequelize';

const { Model } = pkg;

export default (sequelize, DataTypes) => {
  class Movie extends Model {
    representer() {
      return {
        title: this.title,
        episode: this.episode,
        opening_crawl: this.opening_crawl,
        director: this.director,
        producer: this.producer,
        release_date: this.release_date,
        characters: this.characters,
        comments: this.comments,
      };
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      episode: DataTypes.INTEGER,
      opening_crawl: DataTypes.STRING(2048),
      director: DataTypes.STRING,
      producer: DataTypes.STRING,
      release_date: DataTypes.STRING,
      characters: DataTypes.ARRAY(DataTypes.STRING(2048)),
      comments: DataTypes.ARRAY(DataTypes.STRING(2048)),
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
