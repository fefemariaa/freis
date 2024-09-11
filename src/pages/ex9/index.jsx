import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex9() {
    const [valorgrama, setvalorgrama] = useState(0)
    const[resultado,setresultado] = useState(0)

    function sorveteria(){
        let ola = 0
        if(valorgrama<=900){
            ola = (valorgrama*3.50)/100
        }
        else if (valorgrama>=1000){
            ola = (valorgrama*3.00)/100
        }

       
        setresultado(ola)
       
    }                               
    return (
        <div className='pagina-ex8'>
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
                        <h2>Exercício 09 - Sorveteria</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular valor de uma sorveteria </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe as gramas:</label>
                            <input placeholder='0' value={valorgrama} onChange={e => setvalorgrama(e.target.value)} />
                        </div>
                        
                        
                        <a href='#' className='executar' onClick={sorveteria} >Executar</a>
                    </div>
                    <h3 className='resultado'> O valor a ser pago é : R$ {resultado} </h3>
                </div>

            </div>
        </div>
    )
}
