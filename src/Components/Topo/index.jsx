import Logo from '../../../Public/logo.png'
import Sun from '../../../Public/sun.png'
import Moon from '../../../Public/moon.png'
import style from './Topo.module.css'

import Image from 'next/image'


export default function Topo(props){
    return(
        <header className={props.ehTemaEscuro ? style.containerHeaderEscuro : style.containerHeaderClaro}>
            <div className={style.cabecalho}>
                <Image className={style.imgLogo} src={Logo} alt='Logo'/>

                <div>
                    <button onClick={props.acao_onclick} className={props.ehTemaEscuro ? style.btnTemaEscuro : style.btnTemaClaro}>
                        <Image className={style.iconesBtn} src={props.ehTemaEscuro ? Sun : Moon} alt='Icone'/>
                    </button>
                </div>
            </div>
        </header>
    )
}