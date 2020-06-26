import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
  colors: {
    modes: {
      dark: {
        background: "#98c3fa",
        header: {
          background: "#98c3fa",
          backgroundOpen: "#98c3fa",
          text: "white",
          textOpen: "white",
          icons: "gray",
          iconsOpen: "gray",
        },
        footer: {
          background: "#010101",
          text: "white",
          links: "white",
          icons: "gray",
        },
      },
    light: {
      background: "#98c3fa",
      header: {
        background: "#98c3fa",
        backgroundOpen: "#98c3fa",
        text: "white",
        textOpen: "white",
        icons: "gray",
        iconsOpen: "gray",
      },
      footer: {
        background: "#010101",
        text: "white",
        links: "white",
        icons: "gray",
      },
    },
  },
    text: "white",
    background: "#69779b",
    
  },
  links: {
      bold: {
        fontWeight: 'bold',
      },
      nav: {
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
      }
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    header: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
  },
})
