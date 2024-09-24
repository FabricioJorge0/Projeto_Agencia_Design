import style from './Footer.module.css'
import Logo from '../../../Public/logo.png'
import Fb from '../../../Public/facebook.png'
import Twitter from '../../../Public/twitter.png'
import Lk from '../../../Public/linkedin.png'
import Behance from '../../../Public/behance.png'
import Dribble from '../../../Public/dribble.png'
import Google from '../../../Public/google.png'
import Image from 'next/image'

export default function Footer(props){
    return(
        <div>
            <footer className={props.ehTemaEscuro ? style.footerTemaEscuro : style.footerTemaClaro} >
                <div className={style.containerMensagem}>
                    <Image src={Logo} alt='Logo' className={style.logo}/>

                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                        ferramentas e tecnologias personalizadas.</p>
                </div>

                <div className={style.redesSociais}>
                    
                    <Image src={Fb} alt='Facebook' className={style.imagemRedesSociais}/>
                    <Image src={Twitter} alt='Twitter' className={style.imagemRedesSociais}/>
                    <Image src={Lk} alt='LinkedIn' className={style.imagemRedesSociais}/>
                    <Image src={Behance} alt='Behance' className={style.imagemRedesSociais}/>
                    <Image src={Dribble} alt='Dribble' className={style.imagemRedesSociais}/>
                    <Image src={Google} alt='Google' className={style.imagemRedesSociais}/>
                </div>    
    


            </footer>
            <div className={props.ehTemaEscuro ? style.rodapeEscuro : style.rodapeClaro}>
                    <p>Copyright 2022 © <span>Fabricio Jorge</span></p>
            </div>
        </div>
    )

}