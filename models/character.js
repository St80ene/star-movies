import pkg from 'sequelize';

const { Model } = pkg;

export default (sequelize, DataTypes) => {
  class Character extends Model {
    representer() {
      return {
        name: this.name,
        height: this.height,
        gender: this.gender,
      };
    }
  }
  Character.init(
    {
      name: DataTypes.STRING,
      height: DataTypes.INTEGER,
      gender: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Character',
    }
  );
  return Character;
};
