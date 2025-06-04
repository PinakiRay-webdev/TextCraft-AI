import cta_asset from '../../../../assets/cta_asset.jpg'
const CTA = () => {
  return (
    <section className="relative w-full mx-auto border flex flex-col items-center text-center py-26 mt-[7rem]" >
        <h3 className='font-semibold text-white text-4xl' >Let's begin your text to <br /> innovative journey</h3>
        <p className='text-zinc-400 my-3' >Join my ever-healing community and embrace vitality.</p>
        <form className='flex flex-col gap-3' >
            <input className='border border-zinc-400 w-[24rem] py-2 px-3 rounded-2xl placeholder-gray-300' type="email" placeholder='Enter your email address...' />
            <button className='bg-blue-700 py-2 px-3 rounded-2xl text-white'>Generate your ideas today</button>
        </form>
        <footer className='flex text-gray-500 gap-5 mt-6'>
            <p className='text-sm font-semibold'>Learn the basics</p>
            <p className='text-sm font-semibold'>First implement</p>
            <p className='text-sm font-semibold'>start today</p>
        </footer>
        <img className='absolute top-0 w-full h-full object-cover brightness-[60%] z-[-1]' src={cta_asset} alt="" />
    </section>
  )
}

export default CTA
