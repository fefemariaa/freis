import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex8() {
    const  [temp,settemp] = useState(0)
    const [resultado,setresultado] = useState('')


    function febre(){
        let ola = ''
        if(temp>=41){
            ola = 'Hipotermia'
        }
        
        else if(temp>=39.6 && temp<41){
            ola = ('Febre Alta')
        }
        else if(temp>=37.6 && temp<39.6){
            ola = ('Febre')
        }
        else if (temp>=36 && temp<37.6){
            ola = ('Normal')
        }
        else if (temp<36){
            ola =('Hipotermina')
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
                        <Link to='/'><img src='/assets/images/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 08 - Febre</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para verificarcores primárias </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe sua Temperatura:</label>
                            <input placeholder='0' value={temp} onChange={e => settemp(e.target.value)} />
                        </div>
                        
                        
                        <a href='#' className='executar' onClick={febre} >Executar</a>
                    </div>
                    <h3 className='resultado'> Você está com {resultado} </h3>
                </div>

            </div>
        </div>
    )
}
