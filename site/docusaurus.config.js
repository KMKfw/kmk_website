// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KMK',
  tagline: 'Clackety Keyboards Powered by Python',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/kmk_website/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KMKfw', // Usually your GitHub org/user name.
  projectName: 'kmk_firmware', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KMKfw/kmk_firmware/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Kmk Logo',
          src: 'img/kmk_logo_nav.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/KMKfw/kmk_firmware',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Facebook Open Source Logo',
          src: 'img/kmk_logo.svg',
          width: 160,
          height: 51,
        },
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Matrix server',
                href: 'https://matrix.to/#/#kmkfw:klar.sh',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/QBHUUpeGUd',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KMKfw/kmk_firmware',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KMKfw`,
      },
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
