// Two layers: founders (with short bios) and the current working team
// (discipline only, from the original About page). Photos supplied by Pandelis,
// plus Michael Taylor's from the archive.
export interface Member {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  link?: string;
}

export const founders: Member[] = [
  {
    name: 'Pandelis Perakakis',
    role: 'Founder & coordinator',
    bio: 'Researcher in psychophysiology and open science, and managing editor of Psicológica. Has argued for open access and research-assessment reform for two decades.',
    image: '/media/team/pandelis-perakakis.webp',
    link: 'https://www.pandelisperakakis.info',
  },
  {
    name: 'Michael Taylor',
    role: 'Co-founder',
    bio: "Co-author of Open Scholar's founding work on research evaluation, bibliometrics, and open peer review.",
    image: '/media/team/michael-taylor.png',
  },
  {
    name: 'Varvara Trachana',
    role: 'Co-founder',
    bio: "Molecular biologist and co-author of Open Scholar's early work on rankings and the state of science.",
    image: '/media/team/varvara-trachana.webp',
  },
];

export const workingTeam: Member[] = [
  { name: 'Alberto Pascual', role: 'Theoretical Biology', image: '/media/team/alberto-pascual.webp' },
  { name: 'Daniel Sanabria', role: 'Experimental Psychology', image: '/media/team/daniel-sanabria.webp' },
  { name: 'Luis González MacDowell', role: 'Chemical Physics', image: '/media/team/luis-gonzalez-macdowell.webp' },
  { name: 'Vasilis Dakos', role: 'Theoretical Ecology', image: '/media/team/vasilis-dakos.webp' },
];
