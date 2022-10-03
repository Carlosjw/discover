import './styles.css';

// importando componente
import { Card } from '../../components/Card';

export function Home() {

  function handleNameChange(name){
    console.log(name);
  }


  return (
    // Embrulhando tudo no fragment
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => handleNameChange(e.target.value)}
      />
      <button type="button">Adicionar</button>

      {/* Passando propriedades pro componente */}
      <Card name="Carlos" time="10:55:25"/>
      <Card name="Solange" time="11:00:10"/>
      <Card name="Saymon" time="16:15:25"/>
    </div>
    // Também poderíamos embrulhar tudo em uma DIV
  )
}
