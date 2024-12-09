import styles from './Sobre.module.css'
import avatar from './images/foto1.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio} >
                <img src={avatar} alt='avatar' className={styles.avatar} />
                <div>
                    <h2>Um pouco Sobre mim!</h2>
                    <p>Me Chamo Joao Maria<br />
                        Atualmente estou como professor de auto escola é <br />
                        Me formando em Analise e Desenvolvimento</p>
                    <br />
                    <br />
                    <p>Atualmente trabalho como Professor, Gestor e Gamer nos momentos livres!</p>
                    </div>
                </div>
         </section>
    )
}

export default Sobre
