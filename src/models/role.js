export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role',
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      role: DataTypes.ENUM('basic', 'admin', 'superAdmin'),
      defaultValue: 'basic',
    });
  Role.associate = (models) => {
    Role.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return Role;
};
