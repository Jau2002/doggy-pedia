import { Link, useLocation } from 'react-router-dom';
import useLocations from '../hooks/useLocations';
import Icon from '../styles/Icon';
import { NavBar, NavContainer, Title } from '../styles/modules/Nav';
import Search from './Search';

function Nav() {
	const { socialNetworks, navigation, img, url } = useLocations();
	const { pathname } = useLocation();
	return (
		<NavBar width={pathname !== '/home' && '0.5em'}>
			<NavContainer>
				{pathname === '/home' ? (
					navigation.map(({ path, icon }, index) => (
						<Link
							to={path}
							key={index}
						>
							<Icon name={icon} />
						</Link>
					))
				) : (
					<Link to={url}>
						<Icon name={img} />
					</Link>
				)}
			</NavContainer>
			{pathname !== '/home' ? (
				<Link to='/home'>
					<Title>Dog</Title>
				</Link>
			) : (
				<Title>Home</Title>
			)}
			<NavContainer>
				{socialNetworks.map(({ anchor, image }, index) => (
					<a
						href={anchor}
						target='_blank'
						rel='noreferrer'
						key={index}
					>
						<Icon name={image} />
					</a>
				))}
			</NavContainer>
			{pathname === '/home' && <Search />}
		</NavBar>
	);
}

export default Nav;
