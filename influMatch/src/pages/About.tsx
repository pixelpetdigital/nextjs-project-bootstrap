import React from 'react';

const About: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About InfluMatch</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        InfluMatch is a platform designed to help brands discover and connect with the best influencers for their marketing campaigns.
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Our mission is to simplify influencer marketing by providing accurate match scores, detailed influencer profiles, and powerful search capabilities.
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Whether you are looking for top-tier influencers or micro-influencers, InfluMatch has you covered.
      </p>
    </section>
  );
};

export default About;
