import { expect } from 'chai';
import sequelize from '../../../config/db.config.js';
import dog from '../../../models/dog.js';

describe('dog model', () => {
	before(() =>
		sequelize.authenticate().catch((err) => {
			throw new Error('Unable to connect to the database:', err);
		})
	);

	describe('validate attributes', async () => {
		let model;

		beforeEach(async () => {
			model = await dog.create({
				name: 'Affenpinscher',
				lowest_weight: 3,
				highest_weight: 6,
				lowest_height: 23,
				highest_height: 29,
				lowest_life_span: 10,
				highest_life_span: 12,
			});
		});

		describe('dataTypes id', () => {
			beforeEach(() => dog.sync({ force: true }));

			it('should not have a null ID value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.id')
					.to.not.be.a('null');
			});

			it('should the ID be a valid UUID format', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.id')
					.to.have.lengthOf(36);
			});
		});

		describe('dataTypes name', () => {
			beforeEach(() => dog.sync({ force: true }));

			it('should not have a null NAME value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.not.be.a('null');
			});

			it('should the NAME be of type "string"', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.that.is.a('string');
			});

			it('should the NAME have length max 128 and min 1', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.have.lengthOf.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.have.lengthOf.below(128);
			});
		});

		describe('dataTypes height, weight and life span', () => {
			beforeEach(() => dog.sync({ force: true }));

			it('should not have a null WEIGHT value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_weight')
					.to.not.be.a('null');
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_weight')
					.to.not.be.a('null');
			});

			it('should the WEIGHT be of type number', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_weight')
					.that.is.a('number');
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_weight')
					.that.is.a('number');
			});

			it('should the WEIGHT be within a range 1 to 100', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_weight')
					.to.be.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_weight')
					.to.be.below(100);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_weight')
					.to.be.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_weight')
					.to.be.below(100);
			});

			it('should not have a null HEIGHT value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_height')
					.to.not.be.a('null');
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_height')
					.to.not.be.a('null');
			});

			it('should the HEIGHT be of type number', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_height')
					.that.is.a('number');
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_height')
					.that.is.a('number');
			});

			it('should the WEIGHT be within a range 1 to 100', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_height')
					.to.be.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_height')
					.to.be.below(100);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_height')
					.to.be.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_height')
					.to.be.below(100);
			});

			it('should not have a null LIFE SPAN value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_life_span')
					.to.not.be.a('null');
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_life_span')
					.to.not.be.a('null');
			});

			it('should the LIFE SPAN be of type number', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_life_span')
					.that.is.a('number');
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_life_span')
					.that.is.a('number');
			});

			it('should the LIFE SPAN be within a range 1 to 100', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_life_span')
					.to.be.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.lowest_life_span')
					.to.be.below(100);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_life_span')
					.to.be.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.highest_life_span')
					.to.be.below(100);
			});
		});

		describe('dataTypes image', () => {
			beforeEach(() => dog.sync({ force: true }));

			it('should not have a null IMAGE value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.image')
					.to.not.be.a('null');
			});

			it('should the IMAGE be of type "string"', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.image')
					.that.is.a('string');
			});

			it('should the IMAGE have a default value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.image')
					.to.include('https://svgsilh.com/svg/1185460.svg');
			});
		});

		describe('dataTypes created in db', () => {
			beforeEach(() => dog.sync({ force: true }));

			it('should not have a null CREATED IN DB value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.created_in_db')
					.to.not.be.a('null');
			});

			it('should the CREATED IN DB be of type boolean', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.created_in_db')
					.that.is.a('boolean');
			});

			it('should the CREATED IN DB have a default value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.created_in_db')
					.to.equal(true);
			});
		});
	});
});
