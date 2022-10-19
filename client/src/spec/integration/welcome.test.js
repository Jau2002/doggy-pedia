import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';
import Welcome from '../../components/Welcome';

describe('<Welcome />', () => {
	// beforeEach(render(<Welcome />));

	afterEach(cleanup);

	it('should render', () => {
		render(<Welcome />);
	});

	it('should clicked the button call event', () => {
		// const home = screen.getByRole('button', { name: /Home/i });
		// fireEvent.click(home).toHaveBeenCalledTimes(1);
	});
});
