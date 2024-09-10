import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex6() {
    const  [base,setbase] = useState(0)
    const [bonus,setbonus] = useState(0)
    const [desconto,setdesconto] = useState(0)
    const [resultado,setresultado] = useState(0)


    function salario(){
        let oi = Number((base * bonus)/100)
        let ola = Number((base-desconto) +(oi))
      


        setresultado(ola)
    }





    return (
        <div className='pagina-ex6'>
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/assets/images/logofrei.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/assets/images/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 06 - Salário</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular salário </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o salário base:</label>
                            <input placeholder='0' value={base} onChange={e => setbase(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o bonus mensal em %:</label>
                            <input placeholder='0' value={bonus} onChange={e => setbonus(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o total de descontos em R$:</label>
                            <input placeholder='0' value={desconto} onChange={e => setdesconto(e.target.value)} />
                        </div>
                        <a href='#' className='executar' onClick={salario} >Executar</a>
                    </div>
                    <h3 className='resultado'> Salário: R${resultado}  </h3>
                </div>

            </div>
        </div>
    )
}
