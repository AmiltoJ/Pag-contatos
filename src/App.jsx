import style from "./App.module.css";
import { CardContato } from "./components/Contato/CardContatos";

import { CardPerson } from "./components/user/CardPerson";

export function App() {


  return (
    <div className={style.container}> 
    
      <CardPerson
        cover="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50"
        avatar="https://github.com/AmiltoJ.png"
        name="Amilto J S"
        numero="(55) 99684-3938"
      
      />

<div className={style.contatos}>
<div className={style.cadastro}>
<h1 className={style.title}>Cadastro Costatos</h1>
        <form>

        <label> Nome </label>
        <input type='text' name='nome' />

        <label> Avatar (imagem) </label>
        <input type='text' name='imagem' />

        <button > Salvar </button>

        </form>
    </div> 

      <CardContato
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
        name="Lynn Simmons"
        numero="(55) 95367-8340"
      />
       <CardContato
        avatar="https://avatars.githubusercontent.com/u/106719508?v=4"
        name="William Schreiner"
        numero="(55) 99934-2526"
      /></div>
    </div>
  );
}
