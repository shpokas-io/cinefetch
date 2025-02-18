import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";

interface LayoutProps {
  children: React.ReactNode;
  showFilters?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showFilters = false }) => (
  <div className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] theme-transition overflow-x-hidden">
    <Header />
    {showFilters && <Filters />}
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
