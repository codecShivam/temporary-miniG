'use client';

import Image from 'next/image';
import GPULogo from '@/assets/GPULogo.png';
import mainBG from '@/assets/mainBg.png';
import Link from 'next/link';

const EarnMiniG = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${mainBG.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="min-h-screen flex flex-col justify-evenly bg-gradient-to-b from-black via-black to-orange-900 max-w-screen sm:max-w-sm mx-auto text-white relative"
        >
            <div className="flex flex-col items-center justify-center mt-10">
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
            </div>
            <div className='text-center mx-8 font-mono font-normal'>
                <h2 className="text-2xl font-normal mb-4" >You are Early!</h2>
                <h3 className="text-[2.12rem] font-medium mb-8" >Claim Bonus</h3>
                <div className="flex flex-col gap-4">
                    <button className="px-6 py-3 flex justify-between items-center rounded-[0.625rem] border border-[#CFA150] bg-gradient-to-b from-[rgba(205,144,59,0.20)] to-[rgba(52,45,38,0.20)] bg-[#342D26] shadow-lg">
                        <span>Connect your X</span> <span>100K+</span>
                    </button>
                    <button className="px-6 py-3 flex justify-between items-center rounded-[0.625rem] border border-[#CFA150] bg-gradient-to-b from-[rgba(205,144,59,0.20)] to-[rgba(52,45,38,0.20)] bg-[#342D26] shadow-lg">
                        <span>Connect your Telegram</span> <span>100K+</span>
                    </button>
                    <button className="px-6 py-3 flex justify-between items-center rounded-[0.625rem] border border-[#CFA150] bg-gradient-to-b from-[rgba(205,144,59,0.20)] to-[rgba(52,45,38,0.20)] bg-[#342D26] shadow-lg">
                        <span>Join Telegram Ann</span> <span>100K+</span>
                    </button>
                    <button className="px-6 py-3 flex justify-between items-center rounded-[0.625rem] border border-[#CFA150] bg-gradient-to-b from-[rgba(205,144,59,0.20)] to-[rgba(52,45,38,0.20)] bg-[#342D26] shadow-lg">
                        <span>Join Discord</span> <span>100K+</span>
                    </button>
                </div>
            </div>
            <div className="flex justify-center w-fit mt-8 bg-[#090920] mx-auto rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 font-normal">
                <button
                    className="px-8 py-3 text-lg font-normal text-white transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none"
                    style={{ fontFamily: 'LINE Seed Sans' }}
                >
                    Claim MiniG
                </button>
            </div>
            <Link href="/">
                <div className="absolute top-4 right-4 mt-4 text-white text-lg">SKIP</div>
            </Link>
        </div>
    );
};

export default EarnMiniG;
