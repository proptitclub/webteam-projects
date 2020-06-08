import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';
function App() {
  const [isDisplay, setIsDisPlay] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterStatus, setFilterStatus] = useState(-1);
  const [key, setKey] = useState('');
  const [sortByName, setSortByName] = useState('default');
  const [sortByValue, setSortByValue] = useState(0);
  const [taskEdit, setTaskEdit] = useState(null);
  const [isFinishedForm, setIsFinishedForm] = useState(false);
  useEffect(() => {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      setTasks(tasks);
    }
  }, []);

  function openForm() {
    setIsDisPlay(true);
    setIsFinishedForm(false);
    setTaskEdit(null);
  }
  function closeForm() {
    setIsDisPlay(false);
  }
  function openFinishedForm() {
    setIsFinishedForm(true);
    setIsDisPlay(false);
  }
  function closeFinishedForm() {
    setIsFinishedForm(false);
  }
  function submit(data) {
    var __tasks = [...tasks];
    var __taskEdit = { ...taskEdit };
    if (data.id === '') {
      console.log('ok');
      data.id = generateID();
      var __task = data;
      __tasks.push(__task);
      setTasks(__tasks);
    }
    else {
      var index = findIndex(data.id);
      if (index !== -1) {
        __tasks[index] = data;
        setTasks(__tasks);
      }
    }
    closeForm();
    localStorage.setItem('tasks', JSON.stringify(__tasks));

  }
  function updateStatus(id) {
    var __tasks = [...tasks];
    var index = findIndex(id);
    if (index !== -1) {
      __tasks[index].status = !__tasks[index].status;
      localStorage.setItem('tasks', JSON.stringify(__tasks));
      setTasks(__tasks);
    }

  }
  function deleteItem(id) {
    var index = findIndex(id);
    if (index !== -1) {
      console.log(index);
      var __tasks = [...tasks];
      __tasks.splice(index, 1);
      setTasks(__tasks);
      localStorage.setItem('tasks', JSON.stringify(__tasks));
    }
    if (taskEdit !== null) {
      if (taskEdit.id === id) {
        closeForm();
      }
    }
  }
  function updateItem(id) {
    openForm();
    var index = findIndex(id);
    if (index !== -1) {
      var __tasks = [...tasks];
      setTaskEdit(__tasks[index]);
    }

  }
  function onFilter(__name, __status) {
    __status = parseInt(__status);
    setFilterName(__name);
    setFilterStatus(__status);
  }
  function findIndex(id) {
    var res = -1;
    const __tasks = tasks;
    for (var i = 0; i < __tasks.length; i++) {
      if (__tasks[i].id === id) {
        res = i;
        break;
      }
    }
    return res;
  }
  function onSearch(key) {
    setKey(key);
  }
  function onSort(name, value) {
    setSortByName(name);
    setSortByValue(value);
  }


  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('item_id');
    console.log(card_id, "haha");
    const card = document.getElementById(card_id);
    console.log(card);
    card.style.display = 'block';
    card.style.textAlign = 'center';
    card.style.height = '48px';
    card.style.marginBottom = '20px';
    card.style.paddingTop = '10px';
    card.style.backgroundColor = 'rgb(230,174,19)';
    card.style.background = 'linear-gradient(90deg, rgba(230,174,19,1) 0%, rgba(252,168,10,1) 35%, rgba(255,252,0,0.8886905103838411) 100%)';
    card.style.borderRadius = '10px';
    card.style.fontFamily = 'tahoma';
    card.style.cursor = 'pointer';
    card.setAttribute('draggable', 'false');
    var index = findIndex(card_id);
    var __tasks = [...tasks];
    __tasks.splice(index, 1);
    setTasks(__tasks);
    e.target.appendChild(card);
  }
  const dragOver = e => {
    e.preventDefault();
    // console.log('over');
  }

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  function generateID() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  var __taskEdit = taskEdit;

  var elmTaskForm = isDisplay ? <TaskForm
    closeForm={closeForm}
    onSubmit={submit}
    task={__taskEdit}

  /> : '';
  var __tasks = [...tasks];
  if (key) {
    __tasks = __tasks.filter(function (task) {
      return task.name.toLowerCase().indexOf(key.toLowerCase()) > -1;
    });
  }
  if (filterName) {
    __tasks = __tasks.filter(function (task) {
      return task.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1;
    });
  }
  if (filterStatus === -1) {
    __tasks = __tasks;
  }
  else {
    __tasks = __tasks.filter(function (task) {
      return task.status === (filterStatus === 1 ? true : false);
    });
  }
  if (sortByName === 'default ') {
    __tasks = __tasks;
  }
  else {
    if (sortByName === 'name') {
      __tasks.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -sortByValue;
        else if (a.name.toLowerCase() > b.name.toLowerCase()) return sortByValue;
        else return 0;
      });
    }
    else {
      __tasks.sort(function (a, b) {
        if (a.status < b.status) return sortByValue;
        else if (a.status > b.status) return -sortByValue;
        else return 0;
      });
    }
  }
  return (
    <div className="container">

      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>

      <div className="row">
        <div className={isDisplay === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
          {elmTaskForm}
        </div>

        <div className={(isDisplay === true || isFinishedForm === true) ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
          <button type="button" className="btn btn-open" onClick={openForm}>
            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
          </button>&nbsp;
          <button type="button" className="btn btn-finished" onClick={openFinishedForm}>
            <span className="fa fa-check-square-o mr-5"></span> Finished
          </button>&nbsp;
          <br />
          <br />

          <Control
            onSearch={onSearch}
            onSort={onSort}
          />

          <br />
          <br />

          <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <TaskList
                tasks={__tasks}
                updateStatus={updateStatus}
                deleteItem={deleteItem}
                updateItem={updateItem}
                onFilter={onFilter}
              />
            </div>
          </div>
        </div>
        <div className={isFinishedForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "none"}>
          <div className="row mt-15">
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center  mh-500 "
              onDrop={drop}
              onDragOver={dragOver}
            >
              <i class="fa fa-times icon" onClick={closeFinishedForm} ></i>
              <h3 className="done-header">Done Item</h3>

              {/* <DoneList /> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
