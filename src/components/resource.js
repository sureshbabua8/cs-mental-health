import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import { Link } from 'theme-ui'
import Divider from '@material-ui/core/Divider'


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
            <div style={{ font: "Georgia", width: '100%' }}>
              <Box display="grid" p={3} bgcolor="#63a1d0" alignItems='center' textAlign='left'>
              <Link color="white" font='Georgia' href={data.dataJson.url}><h1>{data.dataJson.name}</h1></Link>
              <Divider/>
              </Box>
            </div>
          )}
        />
      )
}

function getResources(data) {
  const arr = [];
}