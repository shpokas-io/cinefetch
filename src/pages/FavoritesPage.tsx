import Layout from "../components/Layout";

const Favorites: React.FC = () => {
  return (
    <Layout showFilters={false}>
      <div className="p-4">
        <h2 className="text-xl mb-4">Favorites</h2>
        <p>Your favorited shows will appear here.</p>
      </div>
    </Layout>
  );
};

export default Favorites;
