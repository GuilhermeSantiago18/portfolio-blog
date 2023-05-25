import React from 'react';

export default function StaticDepoiments() {
  const depoiments = [
    { name: 'João Oliveira', message: 'Recomendo totalmente a Dra. Potira. Excelente profissional!' },
    { name: 'Maria Clara', message: 'A Dra. Potira é incrível! Sempre atenciosa e cuidadosa.' },
    { name: 'Andre Kummer', message: 'Não poderia ter escolhido uma médica melhor. A Dra. Potira é top!' },
    { name: 'Ana Julia', message: 'Agradeço imensamente o trabalho da Dra. Potira. Recomendo a todos!' },
    { name: 'Maria Julia', message: 'Agradeço imensamente o trabalho da Dra. Potira. Recomendo a todos!' }
  ];

  return (
    <div className='box-content mt-4 mr-10' >
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-4">
      {depoiments.map((depoiment, index) => (
        <div key={index} className="bg-th-secondary p-4 rounded-lg">
          <p className="text-lg text-th-background font-bold mb-2">{depoiment.name}</p>
          <p className='text-th-background '>{depoiment.message}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
