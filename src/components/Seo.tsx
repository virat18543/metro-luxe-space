export default function Seo({title, description, canonical, ogImage}:{title:string; description:string; canonical:string; ogImage?:string}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={canonical}/>
      {ogImage && <>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={ogImage}/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </>}
    </>
  );
}
