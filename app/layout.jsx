import "@styles/styles.sass";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
