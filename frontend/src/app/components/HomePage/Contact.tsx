import React from 'react';

const Contato: React.FC = () => {
  return (
    <section className="bg-th-secondary text-th-primary py-8 mt-10">
      <div id="contactSection" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
        <p className="text-lg mb-6">Agende sua consulta, entre em contato conosco:</p>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-lg">+55 084 9 8799-0420</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-lg">contato@example.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <h3 className="text-xl font-semibold mb-2">Endereço</h3>
            <p className="text-lg">123 Rua Principal</p>
            <p className="text-lg">Natal, Rio Grande do Norte</p>
            <p className="text-lg">CEP 12345-678</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <h3 className="text-xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/exemplo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/exemplo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com/exemplo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
