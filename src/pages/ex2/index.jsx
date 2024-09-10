import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex2() {
    const  [Kg,setKg] = useState(0)
    const [resultado,setresultado] = useState(0)


    function calculo(){
        let total = Kg*1000
        setresultado(total)
    }





    return (
        <div className='pagina-ex2'>
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
                        <h2>Exercício 02 - Converter Kg/Gramas</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para converter Kg para Gramas</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor em Kg</label>
                            <input placeholder='0' value={Kg} onChange={e => setKg(e.target.value)} />
                        </div>
                      
                        <a href='#' className='executar' onClick={calculo} >Executar</a>
                    </div>
                    <h3 className='resultado'> Gramas: {resultado} </h3>
                </div>

            </div>
        </div>
    )
}
