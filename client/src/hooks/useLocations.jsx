function useLocations() {
	const socialNetworks = [
		{
			anchor: 'https://github.com/Jau2002',
			icon: 'icon-github.svg',
		},
		{
			anchor: 'https://www.linkedin.com/in/jaumesuarez',
			icon: 'icon-linkedIn.svg',
		},
	];
	const navigation = [
		{
			path: '/',
			icon: 'icon-home.svg',
		},
	];
	return { socialNetworks, navigation };
}

export default useLocations;
