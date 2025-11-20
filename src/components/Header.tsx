const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Acrycore™ Digital Library
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Technical references and 3D tools for architects and designers.
          </p>
          <p className="text-sm text-muted-foreground">
            Use the product names or numbers from your Acrycore™ folder to locate details below.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
