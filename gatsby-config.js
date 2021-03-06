module.exports = {
  siteMetadata: {
    title: `CS@Illinois Community`,
    description: `Welcome to the UIUC Community!`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `Amirtha Sureshbabu, Nikhil Garg`,
    siteUrl: `https://gatsby-starter-catalyst.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
            type: `internal`, //internal or anchor
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
            type: `internal`, //internal or anchor
          },
        ],
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    // { resolve: `gatsby-transformer-json`,
    //   options: {
    //     name: `data`,
    //     path: `/src/data`
    //   }
    // },
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        contentPath: `content/pages`,
        assetPath: `content/assets`,
        // displaySiteLogo: false,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        useSocialLinks: false,
        // useColorMode: false,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `src/data`
      }
    },
    `gatsby-theme-catalyst-header-top`, // Try `gatsby-theme-catalyst-header-side`
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}