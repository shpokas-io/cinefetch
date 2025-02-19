import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  showFilters?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] theme-transition overflow-x-hidden">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
