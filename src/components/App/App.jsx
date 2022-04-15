
import React,{ useState } from 'react';

import SearchPanel from '../SearchPanel';
import NavBar from '../NavBar';
import Email from '../Email/Email';
import EmailList from '../EmailList';

import emails from '../../data/email-data';
import style from './App.module.scss';

const App = () => {

  const [data, setData] = useState(emails)
  const [id, setId] = useState(null)
  const [tag, setTag] = useState('inbox')
  const [value, setValue] = useState('')

  const selectedEmail = (id) => {
    return data.filter(item => item.id === id)[0]
  }

  const setImportant = (id) => {
    const i = data.findIndex((item) => item.id === id)
    const newData = {...data[i], 'important': !data[i].important}

    setData([...data.slice(0,i), newData, ...data.slice(i+1)])
  }

  const getEmailsByValue = (value, data) => {
    if (value) {
      const regExp = new RegExp(value, 'gi')
      return data
              .filter(item => item.email.match(regExp) || item.body.match(regExp))
              .map((item) => {
                return {
                  ...item,
                  body: item.body.replace(regExp,(str) =>  `**${str}**`).replace(/\*\*\*\*/g, '')
                }
              })
    }
    return data
  }

  const getEmailsByImportant = (data) => {
    return tag === 'important'
      ? data.filter(item => item.important === true)
      : data
  }

  return (
    <div className={style.App}>
      <NavBar tag={tag} setTag={setTag} setId={setId}/>
      <div className={style['content-container']}>
        {
          id ?
          <Email email={selectedEmail(id)} setId={setId} setImportant={setImportant}/>:
          <>
            <SearchPanel value={value} setValue={setValue}/>
            <EmailList emails={getEmailsByValue(value, getEmailsByImportant(data))} setId={setId} value={value}/>
          </>
        }
      </div>
    </div>
  );
}

export default App;
