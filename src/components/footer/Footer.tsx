import styled from 'styled-components';

import { GithubLogo, LinkedinLogo, Mailbox, LinktreeLogo } from '@phosphor-icons/react'

function Footer() {
    const githubLink = 'https://github.com/Jornada-Limpa';
    const linkedinLink = 'https://www.linkedin.com/in/Jornada-limpa-170435313';
    const linktreeLink = 'https://linktr.ee/jornadalimpa';

    const openEmailClient = () => {
        const emailAddress = 'jornadalimpa123@gmail.com';
        window.location.href = `mailto:${emailAddress}`;
      };

      const StyledParagraph = styled.p`
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
    `;


  return (
    <>
        <div className="navbar flex column justify-between text-white">
          <div className="container flex flex-col items-start py-4 ml-10">
            <h2 className='text-xl font-bold'>Sobre Nós</h2>
            <StyledParagraph>
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
            </StyledParagraph>
          </div>

          <div className="justify-center container flex flex-col items-center py-4">
            <h2 className='text-sm font-bold mb-4'>Meios de Pagamento</h2>
            <div className="flex justify-center gap-4">
              <img src="/src/assets/bradesco@2x.png" alt="" className='img1' width={38} height={20}/>
              <img src="/src/assets/elo@2x.png" alt="" className='img1' width={38} height={20}/>
              <img src="/src/assets/visa@2x.png" alt="" className='img1' width={38} height={20}/>
              <img src="/src/assets/mastercard@2x.png" alt="" className='img1' width={38} height={20}/>
              <img src="/src/assets/pix@2x.png" alt="" className='img1' width={38} height={20}/>
            </div>
            <div className="flex column flex-col justify-center items-center py-8">
            <p className='text-sm font-bold'>Um projeto realizado na Generation</p>
            <p className='text-sm font-bold'>Copyright©️: Jornada Limpa </p>
            <p className='text-sm'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <GithubLogo size={48} weight='bold' />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={48} weight='bold' />
                </a>
                <button onClick={openEmailClient} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Mailbox size={48} weight='bold' />
                        </button>
                <a href={linktreeLink} target="_blank" rel="noopener noreferrer">
                    <LinktreeLogo size={48} weight='bold' />
                </a>
            </div>
          </div>
          </div>



          <div className="container flex flex-col items-end py-4 mr-10">
            <h2 className='text-xl font-bold'>Endereço</h2>
            <p className='text-sm'>Rua Maria, 0000</p>
            <p className='text-sm'>Bela Vista - São Paulo, SP</p>
            <p className='text-sm'>(11)99999-9999</p>
          </div>
          </div>


      </>
  )
}

export default Footer