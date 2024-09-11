import './index.scss'
import { Link } from 'react-router-dom'


export default function Cartao (props) {

    return (

        <section>

            <Link to = {props.link}>
            <div className='card'>
                        <div style={{backgroundColor: props.color}}> </div>
                        
                        <h2>{props.nome}</h2>
                       
                        <h3>{props.ex}</h3>
            </div>
            </Link>
            </section>
    )
}