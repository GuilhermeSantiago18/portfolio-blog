import Image from 'next/image';
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-start lg:justify-center items-center mr-10 h-screen" id="aboutSection">
      <div className="w-full lg:w-1/2 bg-th-secondary rounded-full lg:rounded-none flex justify-center lg:bg-th-background overflow-hidden mt-2 lg:mt-0">
        <Image
          src="/medic.png"
          alt="Dra. Potira"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 px-4 text-center lg:text-left mt-0 lg:mt-32 lg:self-start">
        <h2 className="text-2xl text-th-secondary font-bold mb-4">Dra. Potira</h2>
        <p className='text-th-secondary'>
          Dra. Potira é uma renomada endocrinologista formada na UFRN. Ela possui vasta experiência e conhecimento na área de endocrinologia, com ênfase em tratamento de distúrbios hormonais e doenças da tireoide.
        </p>
        <p className='text-th-secondary'>
          Após concluir sua graduação, Dra. Potira realizou sua residência em endocrinologia na cidade de São Paulo, onde teve a oportunidade de trabalhar com profissionais altamente qualificados e se aprimorar ainda mais na sua especialidade.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
