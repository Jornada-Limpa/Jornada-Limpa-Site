import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Home.css';
import { ShoppingCart, ArrowFatLeft, ArrowFatRight, CreditCard, Lock, Package, CigaretteSlash } from '@phosphor-icons/react';
import Img1 from "../../assets/camisa1.png";
import Img2 from "../../assets/rename2.png";
import ImgMain from "../../assets/imagemmain.jpg";
import Img3 from "../../assets/xicara1.png";
import Img4 from "../../assets/xicara2.png";
import { motion } from 'framer-motion';
import ModalProduto from '../../components/produto/modalProduto/ModalProduto';
import ListaProdutos from '../../components/produto/listaProduto/ListaProdutos';

const images = [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4];

function Home() {
    const carrousel = useRef();
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth);
    }, []);

    const showSlide = (index) => {
        if (index >= images.length + 2) {
            setCurrentIndex(0);
        } else if (index < 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(index);
        }
    };

    const nextSlide = () => {
        showSlide(currentIndex + (images.length / 2));
    };

    const prevSlide = () => {
        showSlide(currentIndex - (images.length / 2));
    };

    return (
        <>
            <div className="bg-indigo-900 ">
                <div className='principal grid grid-cols-1 md:grid-cols-2 text-white bg-blue-900 h-96 '>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 bg-indigo-950 w-full">
                        <h2 className='text-5xl font-title font-bold flex'>HOME<CigaretteSlash size={32} /></h2>
                        <p className='text-xl indent-0.5'>4 por 99R$</p>
                        <div className="flex justify-around gap-4">
                            <button className='shop rounded bg-white text-indigo-800 py-2 px-4 flex gap-2 justify-center'>
                                <ShoppingCart size={32} />
                                <h1 className='text-xl '>Shopping</h1>
                            </button>
                        </div>
                        <div className='mt-3'>
                            <ModalProduto />
                        </div>
                    </div>
                    <div className="bg-indigo-950 overflow-hidden object-right">
                        <img src={ImgMain} alt="" className='img' />
                    </div>
                </div>

                <div className='flex gap-6 justify-center py-8'>
                    <div className='gap-1 inline-flex text-white m-5'>
                        <div className='p-1 border-2 border-white border-dashed rounded-full'>
                            <CreditCard size={32} />
                        </div>
                        <div>
                            <h3 className='font-bold mb-0'>Facilidade</h3>
                            <p>parcele sem juros</p>
                        </div>
                    </div>
                    <div className='gap-1 inline-flex text-white m-5'>
                        <div className='p-1 border-2 border-white border-dashed rounded-full '>
                            <Lock size={32} />
                        </div>
                        <div>
                            <h3 className='font-bold mb-0 '>Segurança</h3>
                            <p>seus dados seguros</p>
                        </div>
                    </div>
                    <div className='gap-1 inline-flex text-white m-5'>
                        <div className='p-1 border-2 border-white border-dashed rounded-full'>
                            <Package size={32} />
                        </div>
                        <div>
                            <h3 className='font-bold mb-0'>Agilidade</h3>
                            <p>entrega rápida</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className='categoria w-full items-center flex flex-col'>
                        <div className='border-b-2 border-indigo-300'>
                            <h2 className='text-4xl font-bold font-title text-white mt-11 mb-2'>CATEGORIAS</h2>
                        </div>
                        <div className='carrossel'>
                            <div>
                                <button className="botaoSeta rounded p-2" onClick={prevSlide}><ArrowFatLeft size={32} /></button>
                            </div>
                            <motion.div ref={carrousel} className="carrousel">
                                <motion.div className="inner" animate={{ x: -currentIndex * (width / images.length) }}
                                    transition={{ duration: 0.5 }}>
                                    {images.map(image => (
                                        <motion.div className='item' key={image}>
                                            <img src={image} alt="produto" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                            <div>
                                <button className="botaoSeta rounded p-2" onClick={nextSlide}><ArrowFatRight size={32} /></button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 px-4'>
                        <div className='bg-white rounded-lg shadow-lg p-6'>
                            <ListaProdutos />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
