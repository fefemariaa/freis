import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex3() {
    const  [pequeno,setpequeno] = useState(0)
    const [medio,setmedio] = useState(0)
    const [grande,setgrande] = useState(0)
    const [resultado,setresultado] = useState(0)


    function total(){
        let total = (pequeno*13.50)+(medio*15.00)+(grande*17.50)
        setresultado(total)
    }





    return (
        <div className='pagina-ex3'>
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
                        <h2>Exercício 03 - Açaí</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra de açaí <b>a partit da quantidade</b> </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe a quantidade de pequeno:</label>
                            <input placeholder='0' value={pequeno} onChange={e => setpequeno(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe a quantiade de médio:</label>
                            <input placeholder='0' value={medio} onChange={e => setmedio(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe a quantiade de grande:</label>
                            <input placeholder='0' value={grande} onChange={e => setgrande(e.target.value)} />
                        </div>
                        <a href='#' className='executar' onClick={total} >Executar</a>
                    </div>
                    <h3 className='resultado'> Total: R$ {resultado} </h3>
                </div>

            </div>
        </div>
    )
}
