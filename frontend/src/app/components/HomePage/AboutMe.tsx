import Image from 'next/image';
import React from 'react';


const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-wrap items-start justify-center mr-10" id="aboutSection">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
        <Image
          src="/potiraAbout.jpg"
          alt="Dra. Potira"
          width={1000}
          height={1000}
        />
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mt-32 px-4">
        <h2 className="text-2xl font-bold mb-4">Dra. Potira</h2>
        <p>
          Dra. Potira é uma renomada endocrinologista formada na UFRN. Ela possui vasta experiência e conhecimento na área de endocrinologia, com ênfase em tratamento de distúrbios hormonais e doenças da tireoide.
        </p>
        <p>
          Após concluir sua graduação, Dra. Potira realizou sua residência em endocrinologia na cidade de São Paulo, onde teve a oportunidade de trabalhar com profissionais altamente qualificados e se aprimorar ainda mais na sua especialidade.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
