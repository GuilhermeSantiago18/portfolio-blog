import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <p className="text-md">
            &copy; {currentYear} Todos os direitos reservados
          </p>
          <p className="text-md">Developed by JG Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
