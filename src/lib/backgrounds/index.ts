import Particles from './Particles.svelte';
import Constellation from './Constellation.svelte';
import PulseGrid from './PulseGrid.svelte';

// 0 = Particles, 1 = Constellation, 2 = PulseGrid
export const backgrounds = [Particles, Constellation, PulseGrid];

export const Background = backgrounds[1];
