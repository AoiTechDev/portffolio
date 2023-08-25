import "@styles/styles.sass";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
