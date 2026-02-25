"use client";

import { useState } from "react";

export default function Admin() {
  const [aba,setAba]=useState("dashboard");

  return (
    <main style={{padding:20,fontFamily:"sans-serif"}}>
      <h1>Painel Arena Master</h1>

      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:20}}>
        <button onClick={()=>setAba("dashboard")}>Dashboard</button>
        <button onClick={()=>setAba("reservas")}>Reservas</button>
        <button onClick={()=>setAba("campeonatos")}>Campeonatos</button>
        <button onClick={()=>setAba("times")}>Times</button>
        <button onClick={()=>setAba("anuncios")}>Anúncios</button>
        <button onClick={()=>setAba("dono")}>Dono da Quadra</button>
        <button onClick={()=>setAba("usuarios")}>Usuários</button>
      </div>

      {aba==="dashboard" && <div>Visão geral</div>}
      {aba==="reservas" && <div>Gerenciar reservas</div>}
      {aba==="campeonatos" && <div>Campeonatos completos</div>}
      {aba==="times" && <div>Times e escudos</div>}
      {aba==="anuncios" && <div>Upload anúncios</div>}
      {aba==="dono" && <div>Dono da quadra</div>}
      {aba==="usuarios" && <div>Usuários</div>}
    </main>
  );
}
