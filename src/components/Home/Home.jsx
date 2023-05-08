import style from "./Home.module.css";
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";
export function Home() {

  return (
    <div className={style.container}> 
    
      <CardPerson
        cover="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50"
        avatar="https://github.com/AmiltoJ.png"
        name="Amilto J S"
        office="Vendedor da Oboticario"
      
      />
      <div className={style.contatos}>
      <div  className={style.controles}>
      <form >
      
            <div className={style.headerContatos}>
            <h1 className={style.title}>Contatos</h1>
              <div  className={style.buttons}>
              <button  className={style.buttom}> <IoAdd /> </button>
              <button  className={style.buttom}> <IoPencil /> </button>
              <button  className={style.buttom}> <BsFillTrash3Fill /> </button>
            </div>
            </div>
            
            <div className={style.pesquisa}>
            <button  className={style.buttomPesquisa}> <IoSearchOutline /> </button>
            <input type='text' name='pesquisa' className={style.inputPesquisa}/>
            </div>
            
            </form>
        </div>

          <div className={style.listaContatos}>

          <div className={style.listaCatalogo}>
        <h1 className={style.letraCatalogo}>C</h1>
          <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://randomuser.me/api/portraits/men/40.jpg"
    name="Christina Campbell"
    numero= "(55) 7433-1539" />
    <CardContato


    avatar="https://avatars.githubusercontent.com/u/106719508?v=4"
    name="Cillian Cchreiner"
    numero= "(55) 99453-7259"/>
  </div> 

</div>

    <div className={style.listaCatalogo}>
     <h1 className={style.letraCatalogo}>J</h1>
    <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://randomuser.me/api/portraits/men/1.jpg"
    name="Jonas Gabriel"
    numero= "(55) 99994-3270"/>
  </div>
    </div>

    <div className={style.listaCatalogo}>
        <h1 className={style.letraCatalogo}>W</h1>
          <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://avatars.githubusercontent.com/u/106719508?v=4"
    name="Willian Schreiner"
    numero= "(55) 99453-7259"/>
  </div> 

</div>

      </div>
        </div>
          </div>    
  );
}
    

