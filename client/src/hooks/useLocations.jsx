function useLocations() {
	const socialNetworks = [
		{
			anchor: 'https://github.com/Jau2002',
			image: 'icon-github.svg',
		},
		{
			anchor: 'https://www.linkedin.com/in/jaumesuarez',
			image: 'icon-linkedIn.svg',
		},
	];
	const navigation = [
		{
			path: '/',
			icon: 'icon-home.svg',
		},
		{
			path: '/dog',
			icon: 'icon-create.svg',
		},
	];

	const { path, icon } = navigation[0];

	return { socialNetworks, navigation, url: path, img: icon };
}

export default useLocations;
