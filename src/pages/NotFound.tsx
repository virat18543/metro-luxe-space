import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Metro Surfaces"
        description="This page does not exist. Return home or explore our decorative surface collections."
        canonical="https://voli.co.in/404"
        ogImage="https://voli.co.in/og.jpg"
      />
      <h1>404 – Page Not Found</h1>
      <p>Sorry, we couldn't find that page. <a href="/">Go Home</a></p>
    </>
  );
}
