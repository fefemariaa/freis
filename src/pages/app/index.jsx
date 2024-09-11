import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Nomee from '../../components/nome'
import Texto from '../../components/texto'
import Cartao from '../../components/cartao'


export default function App() {

    return (
        <div className='pagina inicio'>
           <Cabecalho/>
            <section>
                <h1>Escolha um treino...</h1>

                <div className='exercicios'>
                
                    <Cartao
                    
                    link = '/ex1'
                    color = '#FFCE37'
                    nome = 'Cupom de desconto'
                    ex = 'Exercício 1'
                    
                    />

                    <Cartao
                    
                    link = '/ex2'
                    color = '#B3FF37'
                    nome = 'Converter kg/gramas'
                    ex = 'Exercício 2'
                    
                    />
                    
                    <Cartao
                    
                    link = '/ex3'
                    color = '#37FFF3'
                    nome = 'Valor total por quantidade'
                    ex = 'Exercício 3'
                    
                    />

                    <Cartao
                    
                    link = '/ex4'
                    color = '#37B7FF'
                    nome = 'Leitura de livro'
                    ex = 'Exercício 4'
                    
                    />
                    <Cartao
                    
                    link = '/ex5'
                    color = '#CB37FF'
                    nome = 'Média de notas'
                    ex = 'Exercício 5'
                    
                    />

                    

                    <Cartao
                    
                    link = '/ex6'
                    color = '#FF5B37'
                    nome = 'Sálario líquido'
                    ex = 'Exercício 6'
                    
                    />

                    <Cartao
                    
                    link = '/ex7'
                    color = '#37FFAB'
                    nome = 'Cores primárias'
                    ex = 'Exercício 7'
                    
                    />

                    <Cartao
                    
                    link = '/ex8'
                    color = '#000'
                    nome = 'Temperatura'
                    ex = 'Exercício 8'
                    
                    />


                    <Cartao
                    
                    link = '/ex9'
                    color = '#D0D0D0'
                    nome = 'Sorveteria'
                    ex = 'Exercício 9'
                    
                    />

                    <Cartao
                    
                    link = '/ex10'
                    color = '#B75333'
                    nome = 'Calculo de IMC'
                    ex = 'Exercício 10'
                    
                    />

                    <Cartao
                    
                    link = '/ex11'
                    color = '#6533B7'
                    nome = 'Tabuada'
                    ex = 'Exercício 11'
                    
                    />

                    <Cartao
                    
                    link = '/ex12'
                    color = '#FFCE37'
                    nome = 'Comparador de pessoas'
                    ex = 'Exercício 12'
                    
                    />
                
                </div>

              
            </section>
        </div>
    )
}