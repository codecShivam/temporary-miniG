'use client'

import Image from 'next/image'
import electron from '@/assets/electron.png'
import GPULogo from '@/assets/GPULogo.png'
import mainBG from '@/assets/mainBg.png'

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${mainBG.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex flex-col justify-evenly bg-gradient-to-b from-black via-black to-orange-900 max-w-screen sm:max-w-sm mx-auto text-white relative">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="relative w-64 h-64">
          <Image
            src={electron}
            alt="Electron Atom"
            layout="fill"
            objectFit="contain"
            className='mix-blend-difference'
          />
        </div>
      </div>
      <div className='flex relative flex-col items-center'>
        <div className="absolute top-0 bottom-0 left-4 w-[0.0625rem]" style={{ background: 'linear-gradient(180deg, #F85712 0%, rgba(153, 153, 153, 0.00) 100%)' }}></div>
        <div className="absolute top-0 bottom-0 right-4 w-[0.0625rem]" style={{ background: 'linear-gradient(0deg, #F85712 0%, rgba(153, 153, 153, 0.00) 100%)' }}></div>
        <div className="w-full h-[0.0625rem] my-4" style={{ background: 'linear-gradient(90deg, #F85712 0%, rgba(153, 153, 153, 0.00) 100%)' }}></div>
        <div className="flex items-center pt-9">
          <h1 className="text-[5.50075rem] leading-[1rem] font-normal" style={{ fontFamily: 'Space Age' }}>
            Mini
          </h1>
          <Image
            src={GPULogo}
            width={70}
            height={70}
            alt="GPU Logo"
            className="ml-1"
          />
        </div>
        <div className='mb-4 mt-4 flex items-center gap-1' style={{ fontFamily: 'LINE Seed Sans' }}>
          <p className="text-center text-xs">
            Powered by
          </p>
          <span className="font-bold text-lg tracking-tighter"> GPU.NET</span>
        </div>
        <p className="text-center text-[#6F6A6A] font-mono text-xs font-medium pb-12">You are an electron,<br /> with the mission to <span className='text-white'>maximize intelligence</span></p>
        <div className="w-full h-[0.0625rem] my-4" style={{ background: 'linear-gradient(270deg, #F85712 0%, rgba(153, 153, 153, 0.00) 100%)' }}></div>
      </div>
      <div className="flex justify-center mb-10 bg-[#090920] mx-auto rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 font-normal">
        <button className="px-8 py-3 text-lg font-normal text-white transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none "
          style={{ fontFamily: 'LINE Seed Sans' }}>
          Earn MiniG
        </button>
      </div>
    </div>
  )
}

export default Home
