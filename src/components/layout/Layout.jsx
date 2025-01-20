export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Restaurant registry</h1>
      </header>
      <main>{children}</main>
      <footer>Footer information</footer>
    </>
  );
};
