import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
export const HeroSection = () => {
  return <div className='py-32'>
    <div className="container">
    <div className='flex flex-col items-center'>
    <Image src={memojiImage} className='size-[100px]' alt="Me behind the laptop that I don't have"/>
          <div className='bg-gray-950 border broder-gray-800 px-4 py-1.5 inline-flex items-center gap-3'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-small font-sm font-medium'>Available for new Projects</div>
          </div>
    </div>
          <h1 className='font-serif text-3xl text-center mt-8 tracking-wide'>Bulding Exceptional User Experiences</h1>
          <p className='mt-4 text text-center text-white/60'>
            I specialize in transforming designs into functional . high-performing web applications. Let's discuss your next project.
          </p>
          <div className='flex flex-col items-center mt-8 gap-4'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
              <span className='font-semibold'>Explore my work</span>
              <ArrowDown className="size-4"/>
            </button>
            <button className='inline-flex items-center gap-2 border border-white text-gray-900 h-12 px-6 rounded-xl'>
              <span>🤌🏼</span>
              <span className='font-semibold'>Let's connect</span>
            </button>
          </div>
    </div>

  </div>;
};
