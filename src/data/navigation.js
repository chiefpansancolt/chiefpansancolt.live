import { HeartIcon } from '@heroicons/react/outline'

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
      name: 'Blog',
      link: 'https://blog.chiefpansancolt.live',
      type: 'link',
      sub: [],
    },
    {
      name: 'Documentation',
      link: '',
      type: 'full-width-two-column',
      sub: [
        {
          side: 'left',
          columns: [
            {
              name: 'Ruby Gems',
              links: [
                {
                  name: 'Simplecov Tailwind',
                  href: '/documentation/gems/simplecov-tailwind',
                },
                {
                  name: 'Simplecov Material',
                  href: '/documentation/gems/simplecov-material',
                },
                {
                  name: 'SimpleForm Materialize',
                  href: '/documentation/gems/simpleform-materialize',
                },
                {
                  name: 'Devise Materialize',
                  href: '/documentation/gems/devise-materialize',
                },
              ],
            },
            {
              name: 'Salesforce Packages',
              links: [
                {
                  name: 'Package Builder',
                  href: '/documentation/sf/package-builder',
                },
              ],
            },
          ],
        },
        {
          side: 'right',
          name: 'How To Support',
          description:
            'If you wish to support any of my development projects there are many ways to help, by contributng to help maintain the repos through pull requests or by becoming a sponsor on github.',
          button: {
            label: 'Sponsor',
            icon: HeartIcon,
            iconColor: 'text-pink-400',
            href: 'https://github.com/sponsors/chiefpansancolt?o=esc',
          },
        },
      ],
    },
    {
      name: 'Pop! Collection',
      link: '/pops',
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
      name: 'Pop! Collection',
      href: '/pops',
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
