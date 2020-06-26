import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Box } from 'theme-ui'

const divStyle = {
  backgroundColor: '#c277ed'
};

export default function Resource() {
    return (
        <StaticQuery
          query={graphql`
          query MyQuery {
            dataJson {
              name
            }
          }
          `}
          render={data => (
            <Box
              p={4}
              color='white'
              bg='primary'>
              {data.dataJson.name}
          </Box>
          )}
        />
      )
}