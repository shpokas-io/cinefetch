import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const Home: React.FC = () => (
  <Layout>
    <div
      style={{
        padding: "1rem",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      }}
    >
      <Card
        title="Movie 1"
        image="https://via.placeholder.com/250x150"
        description="Description for movie 1"
      />
      <Card
        title="Movie 2"
        image="https://via.placeholder.com/250x150"
        description="Description for movie 2"
      />
      <Card
        title="Movie 3"
        image="https://via.placeholder.com/250x150"
        description="Description for movie 3"
      />
    </div>
  </Layout>
);

export default Home;
