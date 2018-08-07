import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Requirements from '../components/Requirements'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <div>
    <Helmet>
      <title>Maze Digital - Requirements</title>
      <meta name="description" content="Website Requirements" />
    </Helmet>

    <div id="main" className="alt">
      <Requirements />
    </div>
  </div>
)

export default Generic
