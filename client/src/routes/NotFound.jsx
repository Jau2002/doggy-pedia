import { Link, useRouteError } from 'react-router-dom';
import ButtonOpacity from '../styles/ButtonOpacity';
import { Error404, Message, Status, Text } from '../styles/modules/NotFound';

function NotFound() {
	const { status, statusText } = useRouteError();

	return (
		<Error404>
			<Status
				weight='700'
				size='12em'
			>
				{status}
			</Status>
			<Text>{statusText}</Text>
			<Message>The page you´re looking for does not exist</Message>
			<Link to='/'>
				<ButtonOpacity>Go to Welcome</ButtonOpacity>
			</Link>
		</Error404>
	);
}

export default NotFound;
