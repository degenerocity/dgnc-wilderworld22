export default {
  github: 'https://github.com/degenerocity/dgnc-wilderworld22',
  docsRepositoryBase: 'https://github.com/degenerocity/dgnc-wilderworld22/blob/master',
  titleSuffix: ' – Degenerocity',
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' },
  ],
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Project Docs</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Degen reference guide 3.0
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Degen Docs: Degen reference guide 3.0" />
      <meta name="og:description" content="Degen Docs: Degen reference guide 3.0" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://wilderworld.degenerocity.io/og.png" />
      <meta name="twitter:site:domain" content="https://wilderworld.degenerocity.io/" />
      <meta name="twitter:url" content="https://twitter.com/degenerocity_io/" />
      <meta name="og:title" content="Degen Docs: Reference Guide 3.0" />
      <meta name="og:image" content="https://wilderworld.degenerocity.io/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>Created in {new Date().getFullYear()} © Degenerocity </>,
  unstable_faviconGlyph: '📜',
}
