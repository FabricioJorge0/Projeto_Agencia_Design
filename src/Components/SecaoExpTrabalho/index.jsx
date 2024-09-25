import style from './SecaoExpTrabalho.module.css'
import Cards from '@/Components/Cards'


export default function SecaoExpTrabalho(props){
    return(
        <div className={props.ehTemaEscuro ? style.expTrabalhoEscuro : style.expTrabalhoClaro}>
            <section className={style.txtTrabalho}>
                <h2>Experiências De Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
            </section>

            <section className={style.secaoCard}>
                <Cards 
                    data='JUNHO 2012 - 2016'
                    titulo='Web Designer'
                    empresa='Pied Piper StartUp.'
                    paragrafo='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'
                    ehTemaEscuro={props.ehTemaEscuro}
                    />
                <Cards
                    data = "AGOSTO 2016 - 2019"
                    titulo = "Product Designer"
                    empresa = "E Corp."
                    paragrafo = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    ehTemaEscuro={props.ehTemaEscuro}
                    />
                <Cards
                    data = "FEVEREIRO 2019 - 2021"
                    titulo = "Digital Consulting"
                    empresa = "Arasaka Inc."
                    paragrafo = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                    ehTemaEscuro={props.ehTemaEscuro}
                    />
            </section>

        </div>
    )
}