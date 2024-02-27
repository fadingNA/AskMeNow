function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
//<Header />
