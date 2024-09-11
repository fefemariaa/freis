import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex7() {
    const  [cor1,setcor1] = useState('')
    const [cor2,setcor2 ]= useState('')
    const [resultado,setresultado] = useState(false)


    function cores(){
        let ola = true
        if((cor1==='azul' || cor1 === 'amarelo' || cor1 ==='vermelho ') && (cor2==='azul' || cor2 ==='vermelho' || cor2 === 'amarelo')){
            ola = ('true')
        }
        else{
            ola = ('false')
        }

        setresultado(ola)
       
    }                               
    return (
        <div className='pagina-ex7'>
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
                        <h2>Exercício 07 - Salário</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para verificarcores primárias </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe a primeira cor:</label>
                            <input placeholder='cor' value={cor1} onChange={e => setcor1(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe a segunda cor:</label>
                            <input placeholder='cor' value={cor2} onChange={e => setcor2(e.target.value)} />
                        </div>
                        
                        <a href='#' className='executar' onClick={cores} >Executar</a>
                    </div>
                    <h3 className='resultado'> São primárias?{resultado}  </h3>
                </div>

            </div>
        </div>
    )
}
