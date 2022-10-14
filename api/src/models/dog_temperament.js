import dog from './dog.js';
import temperament from './temperament.js';

export const idDog = dog.belongsToMany(temperament, {
	through: 'dog_temperament',
	timestamps: false,
});

export const idTemperament = temperament.belongsToMany(dog, {
	through: 'dog_temperament',
	timestamps: false,
});
