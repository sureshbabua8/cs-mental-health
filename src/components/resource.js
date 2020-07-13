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
            allMentalHealthResourcesJson {
              edges {
                node {
                  name
                  url
                  description
                  address
                  contactInformation {
                    contactName
                    email
                    phone
                    title
                  }
                }
              }
            }
          }
          `}
          render={data => (
            <div>{getResources(data)}</div>
          )}
        />
      )
}

function getResources(data) {
  const arr = [];
  data.allMentalHealthResourcesJson.edges.forEach(element => {
    arr.push(<div style={{ font: "Georgia", width: '100%' }}>
    <Box display="grid" p={3} bgcolor="#63a1d0" alignItems='center' textAlign='left'>
    <Link color="white" font='Georgia' href={element.node.url} target="__blank"><h1>{element.node.name}</h1></Link>
    <h2>{element.node.address}</h2>
    <div>
      <p>{element.node.contactInformation.contactName}</p>
      <p>{element.node.contactInformation.email}</p>
      <p>{element.node.contactInformation.phone}</p>
      <p>{element.node.contactInformation.title}</p>
    </div>
    <p>{element.node.description}</p>
    <Divider/>
    </Box>
  </div>)
  });
  return arr;
}