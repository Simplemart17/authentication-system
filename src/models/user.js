export default (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      verificationToken: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM('basic', 'admin', 'superAdmin'),
        defaultValue: 'basic',
      },
    });

  // eslint-disable-next-line no-unused-vars
  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};
