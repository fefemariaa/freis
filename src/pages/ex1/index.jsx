import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex1() {
    const  [numero1,setnumero1] = useState(0)
    const [numero2,setnumero2] = useState(0)
    const [resultado,setresultado] = useState(0)


    function alterar(){
        let total = numero1-numero2
        setresultado(total)
    }





    return (
        <div className='pagina-ex1'>
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
                        <Link to='/'><img className='voltar' src='/assets/images/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 01 - Cupom de desconto</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor do pedido</label>
                            <input placeholder='0' value={numero1} onChange={e => setnumero1(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o valor do cupom</label>
                            <input placeholder='0' value={numero2} onChange={e => setnumero2(e.target.value)} />
                        </div>
                        <a href='#' className='executar' onClick={alterar} >Executar</a>
                    </div>
                    <h3 className='resultado'> Total: R$ {resultado} </h3>
                </div>

            </div>
        </div>
    )
}
