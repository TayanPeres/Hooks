import React, { useState, useEffect, useMemo, useCallback} from 'react';

function App () {
  const [tarefas, setTarefas] = useState ([ ]) 
  const [input, setInput] = useState('') 

   //buscando tarefas 
  useEffect(() => {
    const tarefaStorage = localStorage.getItem('tarefas')
    //
    if(tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage))
    }
 
  }, [])
//toda vez que a tarefas sofrer auteraçoes,
    //vai chamar a funçao , adicionar todos os arrays
    //salvando
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

 const handleAdd = useCallback(() =>  {
   setTarefas([...tarefas, input ])
   setInput('')
 }, [input, tarefas])

 const totalFrase = useMemo(() => tarefas.length, [tarefas])
    

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>voce tem {totalFrase} tarefas</strong><br />
      <input type="text" value={input} 
      onChange={ (e) => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  )
}


export default App