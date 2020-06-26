import React from 'react'
import { StaticQuery, graphql } from "gatsby"

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
            <div style={divStyle}>
              <span>{data.dataJson.name}</span>
            </div>
          )}
        />
      )
}