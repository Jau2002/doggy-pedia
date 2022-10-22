import { Link } from 'react-router-dom';
import useLocations from '../hooks/useLocations';
import Icon from '../styles/Icon';
import { NavBar, NavContainer, Title } from '../styles/modules/Nav';
import Search from './Search';

function Nav() {
	const { socialNetworks, navigation } = useLocations();
	return (
		<NavBar>
			<NavContainer>
				{navigation.map(({ path, icon }, index) => (
					<Link
						to={path}
						key={index}
					>
						<Icon name={icon} />
					</Link>
				))}
			</NavContainer>
			<Title>Home</Title>
			<NavContainer>
				{socialNetworks.map(({ anchor, icon }, index) => (
					<a
						href={anchor}
						target='_blank'
						rel='noreferrer'
						key={index}
					>
						<Icon name={icon} />
					</a>
				))}
			</NavContainer>
			<Search />
		</NavBar>
	);
}

export default Nav;
