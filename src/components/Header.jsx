const Header = () => {
  return (
    <header
      className="container"
      style={{
        minHeight: '5rem',
      }}
    >
      <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1
          className="py-3"
          style={{ fontSize: 'calc(2rem + 1.5vw)', fontWeight: '900' }}
        >
          Blog Admin.
        </h1>
      </a>
      <p>
        This is a blog created as a full-stack app, part of the TOP projects to
        learn MERN stack. This s the CMS.
      </p>
    </header>
  );
};

export default Header;
