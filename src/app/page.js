'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Topo from '@/Components/Topo'
import React, { useState } from 'react'
import Footer from '@/Components/Footer'

export default function Home() {
  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  function alterarTema(){
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <div className={styles.page}>
      <Topo acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <main>
        
      </main>
      <Footer ehTemaEscuro={ehTemaEscuro}/>
    </div>
  );
}
