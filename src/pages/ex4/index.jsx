import { Link } from 'react-router-dom'
import './index.scss'
import  {useState}  from 'react'

export default function Ex4() {
    const  [nome,setnome] = useState('')
    const [paginas,setpaginas] = useState(0)
    const [tempo,settempo] = useState(0)
    const [resultado,setresultado] = useState(0)


    function livro(){
        let total = (paginas*tempo)/3600



        setresultado(total)
    }





    return (
        <div className='pagina-ex4'>
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
                        <h2>Exercício 04 - Livro</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular as horas lidas um livro </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o nome do livro:</label>
                            <input placeholder='nome do livro' value={nome} onChange={e => setnome(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe a quantiade de páginas:</label>
                            <input placeholder='0' value={paginas} onChange={e => setpaginas(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o tempo que leva para ler cada página:</label>
                            <input placeholder='0' value={tempo} onChange={e => settempo(e.target.value)} />
                        </div>
                        <a href='#' className='executar' onClick={livro} >Executar</a>
                    </div>
                    <h3 className='resultado'> O livro "{nome}"" levará  {resultado} horas para ser terminado. </h3>
                </div>

            </div>
        </div>
    )
}
