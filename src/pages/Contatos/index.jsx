import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsGithub, BsInstagram,  } from 'react-icons/bs'

function Contatos (){
    return(
        <>
       
            <section className={styles.contatos}>
            <h1>Para conseguir entra em contato temos varios canais</h1>
            <h3>temos diversas foramas escolha a sua clicando </h3>
            <p>para que possamos conversar mais sobre</p>
            <div className={styles.icones}>
            <a href='mailto:joaojunio62@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>
                        <a href='https://www.instagram.com/_joao.junior62/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>
                        <a href='https://github.com/jhons62' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

            </div>
            </section>
       
        </>
     )
}

export default Contatos
