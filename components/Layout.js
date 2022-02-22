import React from 'react'
import Head from 'next/head'
import Header from './Header'
import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({ children, menu, doc, meta }) => {
  const title = doc.data.meta_title
  const description = doc.data.meta_description
  return (
    <div>
      <Head>
        <title>{title ? title : 'Page title'}</title>
        <meta
          name="description"
          content={description ? description : 'Page Description'}
        />
      </Head>
      <Header menu={menu} />
      <main>{children}</main>
      <ExitPreviewButton />
    </div>
  )
}

export default Layout
