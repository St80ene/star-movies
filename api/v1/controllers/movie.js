import sequelize from 'sequelize';
import comment from '../../../models/comment.js';
import db from '../../../models/index.js';

const Movie = db.movie;

const getMovies = async (req, res) => {
  try {
    const getPagination = (page, size) => {
      const limit = size ? +size : 3;
      const offset = page ? page * limit : 0;

      return { limit, offset };
    };

    const getPagingData = (data, page, limit) => {
      const { count: totalItems, rows: movies } = data;
      const currentPage = page ? +page : 0;
      const totalPages = Math.ceil(totalItems / limit);

      return { totalItems, movies, totalPages, currentPage };
    };

    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);

    const listOfMovies = await Movie.findAndCountAll({
      order: sequelize.literal(`release_date ASC`),
      limit,
      offset,
    });

    // console.log('movies => ', rows);

    const response = getPagingData(listOfMovies, page, limit);

    const movieArray = response.movies.map((item, index, value) => {
      return {
        id: item.id,
        commentCount: item.comments.length,
        title: item.title,
        episode: item.episode,
        opening_crawl: item.opening_crawl,
        director: item.director,
        producer: item.producer,
        release_date: item.release_date,
        characters: item.characters,
        comments: item.comments,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    });

    return res.status(200).json({
      status: 200,
      message: "Here's a list of all Movies",
      data: movieArray,
    });

  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      error: error.message || 'An Error occured while fetching movies',
    });
  }
};

const getComment = async (req, res) => {};

export { getMovies, getComment };
