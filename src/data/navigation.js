import { HeartIcon } from '@heroicons/react/24/outline'

const navigations = {
  main: [
    {
      name: 'Home',
      link: '/',
      type: 'link',
      sub: [],
    },
    {
      name: 'Videos',
      link: '',
      type: 'simple',
      sub: [
        {
          name: 'Video Series',
          link: 'https://www.youtube.com/channel/UCDiSj1nIsOnMHo3IASiN-3w/playlists',
          description: "Checkout some of Chief's best games or crazy games played!",
        },
        {
          name: 'Gaming Clips',
          link: 'https://medal.tv/users/439981',
          description: "Checkout some of Chief's crazy clips!",
        },
      ],
    },
    {
      name: 'Development',
      link: 'https://chiefpansancolt.dev',
      type: 'link',
      sub: [],
    },
    {
      name: 'Blog',
      link: 'https://blog.chiefpansancolt.live',
      type: 'link',
      sub: [],
    },
    {
      name: 'Merch',
      link: 'https://merch.streamelements.com/chiefpansancolt',
      type: 'link',
      sub: [],
    },
    {
      name: 'Contact',
      link: '/#contact',
      type: 'link',
      sub: [],
    },
  ],
  footer: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'External Links',
      href: '/links',
    },
    {
      name: 'Blog',
      href: 'https://blog.chiefpansancolt.live',
    },
    {
      name: 'Merch',
      href: 'https://merch.streamelements.com/chiefpansancolt',
    },
    {
      name: 'Contact',
      href: '/#contact',
    },
  ],
}

export default navigations
