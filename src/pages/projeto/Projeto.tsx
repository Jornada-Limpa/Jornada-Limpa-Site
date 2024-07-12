import terceriraods from '../../assets/terceiraods.jpg'

import React from 'react'

function Projeto() {
  return (
    <section className="quinta">
<div className="ods flex justify-center items-center">
<img src={terceriraods} alt="generation logo" />
</div>
  <div className="texto">
  <h3>
    Saúde e Bem-Estar
  </h3>
  <p> A <span>terceira ODS</span> (Objetivo de Desenvolvimento Sustentável) da ONU é "Saúde e Bem-Estar". Este objetivo busca garantir a vida saudável e promover o bem-estar para todas as pessoas, em todas as idades. A saúde é um direito fundamental, e o ODS 3 destaca a importância de melhorar a saúde global, reduzir a mortalidade materna e infantil, e combater doenças transmissíveis e não transmissíveis. <br />
    Além disso, o ODS 3 enfatiza a importância da saúde mental e do bem-estar emocional, reconhecendo que esses aspectos são essenciais para uma vida plena. A meta é garantir que todos tenham acesso a serviços de saúde de qualidade, promover a pesquisa em saúde e aumentar a cobertura de saúde universal.
  </p>
  </div>
</section>
  )
}

export default Projeto

