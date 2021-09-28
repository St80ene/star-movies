import pkg from 'sequelize';

const { Model } = pkg;

export default (sequelize, DataTypes) => {
  class Comment extends Model {
    representer() {
      return {
        comments: this.comments,
        user_ip: this.user_ip,
      };
    }
  }
  Comment.init(
    {
      comment: DataTypes.STRING,
      user_ip: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};