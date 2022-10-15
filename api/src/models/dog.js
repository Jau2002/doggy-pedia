import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const dog = sequelize.define(
	'dog',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
			unique: true,
		},
		lowest_height: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		highest_height: {
			type: DataTypes.SMALLINT,
		},
		lowest_weight: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		highest_weight: {
			type: DataTypes.SMALLINT,
		},
		lowest_life_span: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		highest_life_span: {
			type: DataTypes.SMALLINT,
		},
		image: {
			type: DataTypes.TEXT,
			defaultValue: 'https://svgsilh.com/svg/1185460.svg',
		},
		created_in_db: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	},
	{ freezeTableName: true, timestamps: false, underscored: true }
);

export default dog;
