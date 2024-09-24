import style from './Footer.module.css'
import Logo from '../../../Public/logo.png'
import Fb from '../../../Public/facebook.png'
import Twitter from '../../../Public/twitter.png'
import Lk from '../../../Public/linkedin.png'
import Behance from '../../../Public/behance.png'
import Dribble from '../../../Public/dribble.png'
import Google from '../../../Public/google.png'
import Image from 'next/image'
import Link from 'next/link'

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
                    
                    <a href='https://facebook.com' target='_blank' ><Image src={Fb} alt='Facebook' className={style.imagemRedesSociais}/></a>
                    <a href='https://twitter.com' target='_blank' ><Image src={Twitter} alt='Twitter' className={style.imagemRedesSociais}/></a>
                    <a href='https://linkedin.com' target='_blank' ><Image src={Lk} alt='LinkedIn' className={style.imagemRedesSociais}/></a>
                    <a href='https://behance.com' target='_blank' ><Image src={Behance} alt='Behance' className={style.imagemRedesSociais}/></a>
                    <a href='https://dribble.com' target='_blank' ><Image src={Dribble} alt='Dribble' className={style.imagemRedesSociais}/></a>
                    <a href='https://google.com' target='_blank' ><Image src={Google} alt='Google' className={style.imagemRedesSociais}/></a>
                </div>    
    


            </footer>
            <div className={props.ehTemaEscuro ? style.rodapeEscuro : style.rodapeClaro}>
                    <p>Copyright 2022 © <span>Fabricio Jorge</span></p>
            </div>
        </div>
    )

}