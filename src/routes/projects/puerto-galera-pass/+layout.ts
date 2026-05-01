import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	return {
		color: '#4f46e5',
		accent: '#4f46e5',
		theme: 'light'
	};
};
