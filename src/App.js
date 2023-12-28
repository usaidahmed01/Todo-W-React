import logo from './logo.svg';
import addIcon from './Assets/plus-circle.svg';
import deleteIcon from './Assets/trash-2.svg';
import editIcon from './Assets/pencil.svg';
import updateIcon from './Assets/copy-check.svg';
// import background from './Assets/background.jpg';


import './App.css';
import { useState } from 'react';

function App() {


  const [list, setList] = useState([])
  const [inputValue, setInputvalue] = useState()
  const [editMode, setEditMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState()




  function addItem() {

    if (inputValue === '') {
      return <h1>Please Enter Your Task</h1>


    }
    else {


      const copyList = [...list]
      copyList.push(inputValue)
      setList(copyList)
      setInputvalue('')
    }
  }

  function deleteItem(index) {
    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)

  }
  function editItem(index) {
    const itemValue = list[index]
    setInputvalue(itemValue)


    setEditMode(true)
    setCurrentIndex(index)


  }
  function updateItem() {
    const copyList = [...list]
    copyList[currentIndex] = inputValue
    setList(copyList)
    setEditMode(false)
    setInputvalue('')
  }
  function deleteAll() {
    setList([])

    // const copyList = [...list]
    // copyList.splice(0, list.length)
    // setList(copyList)
  }


  function updateText(e) {
    const value = e.target.value
    setInputvalue(value)

  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className='heading'>Todo With React</h1>
        <p>

          <div className='div1'> <input className='inp-field' value={inputValue} onChange={updateText} placeholder='Enter Any Text' />
            {editMode
              ?
              <img src={updateIcon} onClick={updateItem} className='add-delete-icon' />
              :
              <img src={addIcon} onClick={addItem} className='add-delete-icon' />}
            <img src={deleteIcon} onClick={deleteAll} className='add-delete-icon' />
          </div>

          <ul className='ul'>
            {list.map(function (item, index) {
              return <li className={editMode && currentIndex === index ? 'li' : ''}>{item}
                <img src={deleteIcon} onClick={() => deleteItem(index)} className='edit-delete-icon' />
                <img src={editIcon} onClick={() => editItem(index)} className='edit-delete-icon' /></li>

            })}
          </ul>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;