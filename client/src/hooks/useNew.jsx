import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTemperaments, postDog } from '../actions';
import { selectorTemperaments } from '../selectors';

function useNew() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTemperaments());
	}, [dispatch]);

	const [input, setInput] = useState({
		name: '',
		image: '',
		lowest_height: 0,
		highest_height: 0,
		lowest_weight: 0,
		highest_weight: 0,
		lowest_life_span: 0,
		highest_life_span: 0,
		temperament: [],
	});

	const Validator = ({
		name,
		image,
		lowest_height,
		highest_height,
		lowest_weight,
		highest_weight,
		lowest_life_span,
		highest_life_span,
		temperament,
	} = input) => {
		const message = {};

		if (!name) {
			message.name = 'Name is required';
		} else if (name >= 1 && name <= 127) {
			message.name = 'The name is too long';
		}

		if (image && !/\.(jpe?g|png|gif|bmp)$/i.test(image)) {
			message.image = 'this isn´t image allowed';
		}

		if (lowest_height < 1) {
			message.lowest_height = 'Must be at least greater than or equal to one';
		}

		if (highest_height && highest_height < lowest_height) {
			message.highest_height =
				'Approximation must be higher than it´s minimum value';
		}

		if (lowest_weight < 1) {
			message.lowest_weight = 'Must be at least greater than or equal to one';
		}

		if (highest_weight && highest_weight < lowest_weight) {
			message.highest_weight =
				'Approximation must be higher than it´s minimum value';
		}

		if (lowest_life_span < 1) {
			message.lowest_life_span =
				'Must be at least greater than or equal to one';
		}

		if (highest_life_span && highest_life_span < lowest_life_span) {
			message.highest_life_span =
				'Approximation must be higher than it´s minimum value';
		}

		if (!temperament.length) {
			message.temperament = 'You should add at last one temperament';
		}
		return message;
	};

	const [errors, setErrors] = useState({
		name: '',
		image: '',
		lowest_height: '',
		highest_height: '',
		lowest_weight: '',
		highest_weight: '',
		lowest_life_span: '',
		highest_life_span: '',
		temperament: [],
	});

	const verify =
		!errors.name &&
		!errors.image &&
		!errors.lowest_height &&
		!errors.highest_height &&
		!errors.lowest_weight &&
		!errors.highest_weight &&
		!errors.highest_height &&
		!errors.lowest_life_span &&
		!errors.highest_life_span &&
		Boolean(input.temperament.length);

	const navigate = useNavigate();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (verify) {
			dispatch(postDog(input));
			alert('Dog created successfully');
			navigate('/home');
		}
	};

	const handleInputChange = (event) => {
		setInput((prevState) => {
			const newState = {
				...prevState,
				[event.target.name]: event.target.value,
			};
			setErrors(Validator(newState));
			return newState;
		});
	};

	const handleOnInputSelect = (event) => {
		setInput({
			...input,
			[input.temperament]: event.target.value,
		});
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && event.target.value !== '') {
			setInput({
				...input,
				temperament: input.temperament.some((t) =>
					t.includes(event.target.value)
				)
					? [...input.temperament]
					: [...input.temperament, event.target.value],
			});
			event.target.value = '';
		}
	};

	const handleOnDelete = (temp) =>
		setInput({
			...input,
			temperament: input.temperament.filter((t) => t !== temp),
		});

	const handleOnReset = () =>
		setInput({
			name: '',
			image: '',
			lowest_height: 0,
			highest_height: 0,
			lowest_weight: 0,
			highest_weight: 0,
			lowest_life_span: 0,
			highest_life_span: 0,
			temperament: [],
		});

	const parameterTypeText = [
		{
			id: 1,
			display: 'Name',
			name: 'name',
			type: 'text',
			value: input.name,
			func: handleInputChange,
			example: 'Affenpinscher',
			message: errors?.name,
		},
		{
			id: 2,
			display: 'Image',
			name: 'image',
			type: 'url',
			value: input.image,
			func: handleInputChange,
			example: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
			message: input.image && errors?.image,
		},
	];

	const parameterTypeNum = [
		{
			id: 3,
			name: 'lowest_height',
			display: 'Minimum height',
			value: input.lowest_height,
			func: handleInputChange,
			example: 'Affenpinscher',
			message: errors?.lowest_height,
		},
		{
			id: 4,
			name: 'highest_height',
			display: 'Approximate maximum height',
			value: input.highest_height,
			func: handleInputChange,
			message: input.highest_height && errors?.highest_height,
		},
		{
			id: 5,
			name: 'lowest_weight',
			display: 'Minimum weight',
			value: input.lowest_weight,
			func: handleInputChange,
			message: errors?.lowest_weight,
		},
		{
			id: 6,
			name: 'highest_weight',
			display: 'Approximate maximum weight',
			value: input.highest_weight,
			func: handleInputChange,
			message: input.highest_weight && errors?.highest_weight,
		},
		{
			id: 7,
			name: 'lowest_life_span',
			display: 'Minimum life span',
			value: input.lowest_life_span,
			func: handleInputChange,
			message: errors?.lowest_life_span,
		},
		{
			id: 8,
			name: 'highest_life_span',
			display: 'Approximate maximum life span',
			value: input.highest_life_span,
			func: handleInputChange,
			message: input.highest_life_span && errors?.highest_life_span,
		},
	];

	const temperaments = useSelector(selectorTemperaments);

	const parameterTypeArray = [
		{
			name: 'temperament',
			list: 'temperaments',
			temperament: input.temperament,
			func: handleOnInputSelect,
			message: errors?.temperament,
		},
	];

	const reboot = !(
		input?.name ||
		input?.image ||
		input?.lowest_height ||
		input?.highest_height ||
		input?.lowest_weight ||
		input?.highest_weight ||
		input?.highest_height ||
		input?.lowest_life_span ||
		input?.highest_life_span ||
		input?.temperament.length
	);

	return {
		handleOnSubmit,
		handleOnDelete,
		handleOnReset,
		handleKeyDown,
		parameterTypeText,
		parameterTypeNum,
		parameterTypeArray,
		temperaments,
		reboot,
		verify,
	};
}

export default useNew;
