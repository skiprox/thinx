// The modules
import Head from 'next/head';
export default function Layout({
  className = '',
  children
}) {
  return (
    <>
      <Head>
        <title>Thinx Coding Challenge</title>
        <meta name="description" content="" />
        {/* Facebook */}
        <meta name="og:title" content="Thinx Coding Challenge" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content=""/>
        <meta property="og:image:height" content="" />
        <meta property="og:image:alt" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:alt" content="" />
      </Head>
      <div className={`Body ${className}`}>
        <main className="Main">
          {children}
        </main>
      </div>
    </>
  )
}
