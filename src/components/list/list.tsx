import './list.css'

export interface ElemList  {
    id: number;
    name: string;
  }

export type Handler = (a: ElemList) => void

export default function List({userList, handler}:{userList: ElemList[], handler: Handler}) {

    const onClickHandler = (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      handler({id: Number(e.target.id), name: e.target.textContent});  
      
    }
    
    return (<ol className='list'> 
              {userList.map(user => <li key={user.id} id={user.id.toString()} className='list-elem' onClick={onClickHandler}>{user.name}</li>)} 
            </ol>);

}