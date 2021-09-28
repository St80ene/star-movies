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
        characters: this.characters,
        comments: this.comments,
      };
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      episode: DataTypes.STRING,
      opening_crawl: DataTypes.STRING,
      director: DataTypes.STRING,
      producer: DataTypes.STRING,
      characters: DataTypes.ARRAY(DataTypes.INTEGER),
      comments: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
