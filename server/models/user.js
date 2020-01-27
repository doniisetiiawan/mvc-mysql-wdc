module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {},
  );
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Band);
  };
  return User;
};
