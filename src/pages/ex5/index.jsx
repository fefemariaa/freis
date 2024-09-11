import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex5() {
    const  [nota1,setnota1] = useState(0)
    const [nota2,setnota2] = useState(0)
    const [nota3,setnota3] = useState(0)
    const [media,setmedia] = useState(0)



    function calculo(){
     
        let total= Number ( (nota1+nota2+nota3)/3)
        


        setmedia((total))
    
    }
   
       
    
    




    return (
        <div className='pagina-ex5'>
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
                        <h2>Exercício 05 - Média</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular a média de um aluno <b> e a situação</b> </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe a primeira nota:</label>
                            <input placeholder='0' value={nota1} onChange={e => setnota1(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe a segunda nota:</label>
                            <input placeholder='0' value={nota2} onChange={e => setnota2(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe a terceira nota:</label>
                            <input placeholder='0' value={nota3} onChange={e => setnota3(e.target.value)} />
                        </div>
                        <a href='#' className='executar' onClick={calculo}  >Executar</a>

                    </div>
                    <h3 className='resultado'> Média:{media} </h3>
                </div>

            </div>
        </div>
    )
}
