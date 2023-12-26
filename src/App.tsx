import { useEffect, useState } from 'react'
import './App.css'
import { ElemList } from './components/list/list';
import List from './components/list/list';
import Details from './components/details/details';

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

function App() {
  const [userList, setList] = useState<ElemList[]>([]);
  const [currUser, setUser] = useState<ElemList>(); 

  useEffect(() => {

    (async () => {
      const response = await fetch(url);
      if (response.ok) {
        const lst = await response.json();
        setList([...lst]);
      }
    })();

  },[])

  const setUserHandler = (userInfo: ElemList) => setUser(userInfo);

  return (
    <>
     <List userList={userList} handler={setUserHandler} />
     {currUser ? <Details userInfo={currUser}/> : ''}
    </>
  )
}

export default App
