import { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.scss';
import Pagination from './components/Pagination/Pagination';
import PostList from './components/PostList/PostList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import PostFilterForm from './components/PostFilterForm/PostFilterForm';
import Clock from './components/Clock/Clock';

function App() {

  const [todoList, settodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ]);

  const [postList , setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 2,
    title_like: 'quis'
  });

  useEffect(() => {
    async function fetchPostList() {
      
      const paramString = queryString.stringify(filter);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      const {data, pagination} = responseJSON;
      setPostList(data);
      setPagination(pagination);
    }

    fetchPostList();
  }, [filter]);

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage
    });
  }
  

  function hanleToDoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return 
    const newToDoList = [...todoList];
    newToDoList.splice(index,1);
    settodoList(newToDoList);
  }

  function handleFormSubmit(formValue) {
    // add new to do to list
    const newToDo = {
      id: todoList.length + 1,
      ...formValue
    }
    const newToDoList = [...todoList];
    newToDoList.push(newToDo);
    settodoList(newToDoList);
  }

  function handleFilterChange(newFilter) {
    console.log(newFilter);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm
    });
  }

  return (
    <div className="app">
      <h1>React Hook TodoList</h1>
      <Clock />
      {/* <ToDoForm onSubmit={handleFormSubmit} />
      <ToDoList todos={todoList} onToDoClick={hanleToDoClick}/> */}
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList}/>
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
        /> */}
    </div>
  );
}

export default App;
