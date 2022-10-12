import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const dog = sequelize.define(
	'dog',
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		lowest_height: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		highest_height: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		lowest_weight: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		highest_weight: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		lowest_life_span: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		highest_life_span: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		image: {
			type: DataTypes.CHAR(255),
			allowNull: false,
			defaultValue: 'https://svgsilh.com/svg/1185460.svg',
		},
		created_in_db: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	},
	{ freezeTableName: true, timestamps: false, underscored: true }
);

export default dog;
