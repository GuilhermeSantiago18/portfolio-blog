import CustomImage from '@/components/CustomImage';

export default function Subscribe() {
  return (
      <div className="rounded flex md:shadow mt-12 bg-th-secondary py-4 px-2">
      <CustomImage alt ='ssrs' src="/mockblog.jpg"  className="w-0 md:w-1/4 relative rounded-l"/>
      <div className="px-4 py-2">
      <p className='text-red-500'>Função sugerida, não inclusa no pacote inicial.</p>
        <h3 className="text-3xl text-th-background font-bold">Se inscreva em nossa newsletter</h3>
        <p className="text-xl text-th-background">Vamos te enviar semanalmente notícias e novos posts</p>
        <form className="mt-4 mb-10">
          <input type="email" className="rounded bg-gray-100 px-4 py-2 border focus:border-th-primary" placeholder="john@gmail.com"/>
          <button className="px-4 py-2 rounded bg-th-background text-th-secondary hover:bg-th-primary hover:text-white">
            Inscrever
            <i className='bx bx-right-arrow-alt' ></i>
          </button>
          <p className="text-th-background opacity-50 text-sm mt-1">Sem spam, nós prometemos.</p>
        </form>
      </div>
    </div>
  )
}
