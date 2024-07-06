import React from "react";
import ComicComponent from "../components/Comic";
import Layout from "../components/Layout";

const ComicPage: React.FC = () => {
  const email = "o.grediushko@innopolis.university";

  return (
    <Layout>
      <main className="comic-container">
        <ComicComponent email={email} />
      </main>
    </Layout>
  );
};

export default ComicPage;
