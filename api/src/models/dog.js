import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Dog = sequelize.define(
	'dog',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
		underscored: true,
		paranoid: true,
	}
);

export default Dog;
