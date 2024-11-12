'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';

// components
import RotatingShape from './RotatingShape';
import Header from './Header';

const Hero = () => {
  return (
    <section className='h-[800px] relative bg-accent/10 xl:bg-white' id='ínicio'>
        {/* header */}
        <Header />
        <div className='container mx-auto h-full'>
            <div className='relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10'>
                <h1 className='h1'>
                    <span className='text-accent'>A Psicoterapia</span> para 
                    <TypeAnimation 
                        preRenderFirstString={true} 
                        sequence={["buscar autoconhecimento", 2000, "buscar seu bem estar emocional", 2000, "buscar uma vida mais autêntica", 2000,]}
                        speed={60}
                        repeat={Infinity}
                        wrapper='span'
                        cursor={false}
                        className='ml-2 xl:ml-4'
                    />
                </h1>
                <p className="lead max-w-[476px] mb-7">
                    Te ajudo a buscar o caminho da autenticidade, sua jornada de autoconhecimento começa aqui.
                </p>
                <ScrollLink to='contact' smooth>
                    <button className='btn btn-accent mb-8'>
                        Agendar sua sessão
                    </button>
                </ScrollLink>
                {/* stats */}
                <div className="">stats</div>
            </div>
            {/* image */}
            <div className='hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent'>
                <div className='absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]'>
                    <Image 
                        src="/assets/hero/dev.png"
                        fill 
                        quality="100" 
                        priority 
                        className='object-contain'
                    />
                </div>
                {/* arrow shape */}
                <div className='hidden xl:flex absolute top-48 left-[4vw]'>
                    <Image
                        src='/assets/hero/arrow.svg'
                        width={160}
                        height={160}
                        alt='arrow shape'
                    />
                </div>
                {/* shape 1 */}
                <div className='absolute top-[600px] left-[3vw]'>
                    <RotatingShape 
                        content={
                            <Image 
                                src='/assets/hero/shape-1.svg' 
                                width={38} 
                                height={38} 
                                alt='shape 1' 
                            />
                        }
                        direction='left'
                        duration={6}
                    />
                </div>
                {/* shape 2 */}
                <div className='absolute top-[240px] xl:left-[30vw]'>
                    <RotatingShape 
                        content={
                            <Image 
                                src='/assets/hero/shape-2.svg' 
                                width={34} 
                                height={34} 
                                alt='shape 2' 
                            />
                        }
                        direction='right'
                        duration={5}
                    />
                </div>
                {/* shape 3 */}
                <div className='absolute top-[480px] xl:left-[40vw]'>
                    <RotatingShape 
                        content={
                            <Image 
                                src='/assets/hero/shape-3.svg' 
                                width={36} 
                                height={36} 
                                alt='shape 3' 
                            />
                        }
                        direction='left'
                        duration={7}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;