import { EssentialLinkProps } from "src/components/EssentialLink.vue";

export const pages: EssentialLinkProps[] = [
  {
    title: 'Members',
    caption: 'Who we are',
    icon: 'group',
    link: '/about',
  },
  {
    title: 'Details',
    caption: 'What we do',
    icon: 'list',
    link: '/details',
  },
  {
    title: 'Projects',
    caption: 'Resulting projects',
    icon: 'code',
    link: '/projects',
  },
];
