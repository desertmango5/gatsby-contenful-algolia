import React from 'react'
import Link from 'gatsby-link'
import style from './index.module.scss'

const Header = () => (
  <div>
    <div>
      <h1>
        <Link to="/">
          Gatsby + Contentful + Algolia
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
