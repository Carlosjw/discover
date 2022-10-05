/* importando hook para criação de estados */
import React,  {useState, useEffect} from 'react';

// importando estilos
import './styles.css';

// importando componente
import { Card } from '../../components/Card';

export function Home() {
  /* Utilizando o estado */
  const [studentName, setStudentName] = useState('');
  /* 
    studentName = conteúdo do estado
    setStudentName = função que atualiza o estado
  */

  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      // acessando data e hora atuais e renderizando no padrão brasileiro
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    // adicionando objeto ao estado e mantendo o conteúdo o estado anterior com o spred operator dentro da variável prevState
    setStudents(prevState => [...prevState, newStudent])

  }

  useEffect(() => {
    // corpo do useEffect
    console.log('useEffect foi chamado!')
  }, [])

  return (
    // Embrulhando tudo no fragment
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>Carlos</strong>
          <img src="https://github.com/Carlosjw.png" alt="github perfil" />
        </div>

      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        /* capturando valor o input e atualizando variável studentName */
        onChange={(e)=> setStudentName(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAddStudent}>
          Adicionar
      </button>

      {/* Passando propriedades pro componente */}
      {/* Envolver por chaves indica que vamos usar conteúdo de uma variável */}
      {
        students.map((student) => (
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />
        ))
        // Para cada estudante será renderizado um cartão
      }
{/*       <Card name="Solange" time="11:00:10"/>
      <Card name="Saymon" time="16:15:25"/> */}
    </div>
    // Também poderíamos embrulhar tudo em uma DIV
  )
}
