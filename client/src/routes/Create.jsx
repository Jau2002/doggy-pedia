import Nav from '../components/Nav';
import useNew from '../hooks/useNew';
import {
	Button,
	ButtonItem,
	Container,
	DataList,
	Form,
	FormContainer,
	Input,
	Item,
	Label,
	List,
	Message,
	NameItem,
	Options,
	ParameterContainer,
	Title,
} from '../styles/modules/Create';

function Create() {
	const {
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
	} = useNew();
	return (
		<div>
			<Nav />
			<Container>
				<Title>Create Your Dog</Title>
				<Form onSubmit={handleOnSubmit}>
					<FormContainer>
						{parameterTypeText.map(
							({ id, name, type, value, func, example, message, display }) => (
								<ParameterContainer key={id}>
									<Label htmlFor={name}>{display}</Label>
									<Input
										type={type}
										id={name}
										name={name}
										value={value}
										onChange={func}
										placeholder={example}
									/>
									{message && <Message space='pre'>{message}</Message>}
								</ParameterContainer>
							)
						)}
					</FormContainer>
					<FormContainer>
						{parameterTypeNum.map(
							({ id, name, display, value, func, message }) => (
								<ParameterContainer key={id}>
									<Label htmlFor={name}>{display}</Label>
									<Input
										min='0'
										max='100'
										type='range'
										id={name}
										name={name}
										value={value}
										onChange={func}
									/>
									<NameItem>{value}</NameItem>
									{message && <Message>{message}</Message>}
								</ParameterContainer>
							)
						)}
						{parameterTypeArray.map(
							({ name, list, temperament, message, func }, index) => (
								<>
									<ParameterContainer key={index}>
										<Label htmlFor={name}>Temperaments:</Label>
										<Input
											id={name}
											list={list}
											name={name}
											type='text'
											placeholder='Active'
											onChange={func}
											onKeyDown={handleKeyDown}
										/>
										<DataList id={list}>
											{temperaments?.map((d) => (
												<Options
													value={d}
													key={d}
												/>
											))}
										</DataList>
										{message && <Message>{message}</Message>}
									</ParameterContainer>
									<ParameterContainer>
										<List>
											{temperament?.map((t) => (
												<Item key={t}>
													<NameItem>{t}</NameItem>
													<ButtonItem
														type='button'
														onClick={() => handleOnDelete(t)}
													>
														✘
													</ButtonItem>
												</Item>
											))}
										</List>
									</ParameterContainer>
								</>
							)
						)}
					</FormContainer>
					<Button
						type='reset'
						value='Reset'
						disabled={reboot}
						onClick={handleOnReset}
					/>
					<Button
						type='submit'
						disabled={!verify}
						value='Create'
					/>
				</Form>
			</Container>
		</div>
	);
}

export default Create;
