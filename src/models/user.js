import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
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
    });

  const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  User.beforeCreate((user) => {
    const hashedPass = hash(user.dataValues.password);
    user.password = hashedPass;
  });

  User.associate = (models) => {
    User.hasMany(models.Role, {
      foreignKey: 'userId',
      as: 'userRoles',
      onDelete: 'CASCADE',
    });
    User.hasMany(models.Group, {
      foreignKey: 'userId',
      as: 'userGroups',
      onDelete: 'CASCADE',
    });
  };
  User.prototype.comparePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

  return User;
};
