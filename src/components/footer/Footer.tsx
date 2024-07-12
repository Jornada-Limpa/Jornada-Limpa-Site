import { GithubLogo, LinkedinLogo, Mailbox, LinktreeLogo } from '@phosphor-icons/react'
import bradesco from "../../assets/bradesco@2x.png"
import elo from "../../assets/elo@2x.png"
import visa from "../../assets/visa@2x.png"
import mastercard from "../../assets/mastercard@2x.png"
import pix from "../../assets/pix@2x.png"


function Footer() {
    const githubLink = 'https://github.com/Jornada-Limpa';
    const linkedinLink = 'https://www.linkedin.com/in/Jornada-limpa-170435313';
    const linktreeLink = 'https://linktr.ee/jornadalimpa';

    const openEmailClient = () => {
        const emailAddress = 'jornadalimpa123@gmail.com';
        window.location.href = `mailto:${emailAddress}`;
      };

  return (
    <>
        <div className="font-sans flex column justify-between bg-[#292828] text-white">
          <div className="container flex flex-col items-start py-4 ml-10">
            <p className='text-sm'>
            <a href="/sobre">Quem Somos</a>
            </p>
            <p className='text-sm'>
            <a href="/Contato">Contato</a>
            </p>
            <p className='text-sm'>
            <a href="/Entrega">Entregas</a>
            </p>
            <p className='text-sm'>
            <a href="/Compra">Como comprar</a>
            </p>
            <p className='text-sm'>
            <a href="/Trocas">Trocas e Devoluções</a>
            </p>
            <p className='text-sm'>
            <a href="/Seguranca">Segurança de dados</a>
            </p>
          </div>

          <div className="justify-center container flex flex-col items-center pt-2.5">
            <h2 className='text-sm font-bold mb-4'>MEIOS DE PAGAMENTO</h2>
            <div className="flex justify-center gap-4">
              <img src={bradesco} alt="" className='img1' width={38} height={20}/>
              <img src={elo} alt="" className='img1' width={38} height={20}/>
              <img src={visa} alt="" className='img1' width={38} height={20}/>
              <img src={mastercard}alt="" className='img1' width={38} height={20}/>
              <img src={pix} alt="" className='img1' width={38} height={20}/>
            </div>
            <div className="flex column flex-col justify-center items-center py-4">
            <p className='font-sans text-sm'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <GithubLogo size={30} weight='bold' />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={30} weight='bold' />
                </a>
                <button onClick={openEmailClient} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Mailbox size={30} weight='bold' />
                        </button>
                <a href={linktreeLink} target="_blank" rel="noopener noreferrer">
                    <LinktreeLogo size={30} weight='bold' />
                </a>
                <br/>
            </div>
            
          <div className="justify-center container flex flex-col items-center pt-8">
          <p className='font-title text-xs'>Um projeto realizado na Generation | Copyright©️: Jornada Limpa</p>
          </div>

          </div>
          </div>

          <div className="container flex flex-col items-end py-4 mr-10">
            <h2 className='text-sm font-bold'>ENDEREÇO</h2>
            <p className='font-sans text-sm'>Rua Maria, 0000</p>
            <p className='font-sans text-sm'>Bela Vista - São Paulo, SP</p>
            <p className='font-sans text-sm'>(11)99999-9999</p>
          </div>
          </div>

      </>
  )
}

export default Footer