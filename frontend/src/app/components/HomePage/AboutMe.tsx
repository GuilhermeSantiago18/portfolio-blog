import Image from 'next/image';
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
          src={"/potiraAbout.jpg"}
          alt="Dra. Potira"
          className=""
          width={1500}
          height={1500}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Dra. Potira</h2>
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
