import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} InfluMatch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
