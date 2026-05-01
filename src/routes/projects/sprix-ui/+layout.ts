import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	return {
		color: '#2563eb',
		accent: '#2563eb',
		theme: 'light'
	};
};
