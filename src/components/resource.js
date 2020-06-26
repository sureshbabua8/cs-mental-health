import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import { Link } from 'theme-ui'
import { jsx } from 'theme-ui'


const boxStyle = {
  bgcolor: '#cc83eb'
};

export default function Resource() {
    return (
        <StaticQuery
          query={graphql`
          query MyQuery {
            dataJson {
              name
              url
              contactInformation {
                email
              }
            }
          }
          `}
          render={data => (
            <div style={{ width: '100%' }}>
              <Box display="grid" p={4} bgcolor="#cc83eb" alignItems='center'>
              <Link href={data.dataJson.url}><h1>{data.dataJson.name}</h1></Link>
              </Box>
            </div>
          )}
        />
      )
}