import style from './Banner.module.css'

export default function SecaoBanner(){
    return(
        <section className={style.containerBanner}>
            <div className={style.bannerFundo}>
            </div>
            <div className={style.bannerTitulo}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding </h2>
                <span>e Design digital</span>
            </div>
        </section>
    )
}