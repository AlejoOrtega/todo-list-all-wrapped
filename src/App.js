import { useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState('')
  const [todoList, setTodoList]= useState([]);
  const [option, setOption] = useState(false);

  const onValueChange = (e) => {
    setNewTask(()=>e.target.value)
  }

  const onAddTask = () => {
    const taskFormatted = option? {id: todoList.length, todo: newTask} : newTask;
    setTodoList(prev => [...prev, taskFormatted])
    setNewTask('')
  }

  const onDeleteTask = (id) =>{
    let newArray = todoList;
    newArray.splice(id,1);
    setTodoList([...newArray])
  }

  const onChangeOption = () => {
    setOption(prev => !prev)
    setNewTask('')
    setTodoList([])
  }

  const optionSelected = option? 'Array of Objects' : 'Array Only'; 

  return (
    <div className="app">
      <h1>TODO</h1>
      <div className='new-task'>
        <input className='new-task__input' placeholder='Add something to do...' value={newTask} onChange={(e)=>onValueChange(e)}/>
        <button className='new-task__button' onClick={()=>onAddTask()}>Add</button>
      </div>
      {todoList.map((task, id)=> {
        return <div className='task' key={id}>
            <span className='task__text'>{option? task.todo : task}</span>
            <button className='task__button' onClick={()=>onDeleteTask(id)}>Delete</button>
        </div>
      })}
      <button className='special-button' onClick={onChangeOption}>{optionSelected}</button>
    </div>
  );
}

export default App;
