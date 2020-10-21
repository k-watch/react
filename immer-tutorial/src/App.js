import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer'

const App = () => {
  const nextId = useRef(1)
  const [form, setForm] = useState({ name: '', username: '' })
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  })

  const onChange = useCallback(e => {
    const { name, value } = e.target
    // setForm({ ...form, [name]: [value] })
    // setForm(produce(form, draft => { draft[name] = value }))
    setForm(produce(draft => { draft[name] = value }))
  }, []/*[form]*/)

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username,
    }

    // setData({ ...data, array: data.array.concat(info) })
    // setData(produce(data, draft => { draft.array.push(info) }))
    setData(produce(draft => { draft.array.push(info) }))
    setForm({ name: '', username: '' })
    nextId.current += 1
  }, [form.name, form.username]/*[data, form.name, form.username]*/)

  const onRemove = useCallback(
    id => {
      // setData({
      // ...data,
      // array: data.array.filter(info => info.id !== id)
      // })
      // setData(produce(data, draft => { draft.array.splice(draft.array.findIndex(info => info.id === id), 1) }))
      setData(produce(draft => { draft.array.splice(draft.array.findIndex(info => info.id === id), 1) }))
    }, []/*[data]*/)

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="이름" name="name" value={data.name} onChange={onChange} />
      <input placeholder="아이디" name="username" value={data.username} onChange={onChange} />
      <button type="submit">등록</button>
      <ul>
        {data.array.map(info => <li key={info.id} onClick={() => onRemove(info.id)}>{info.username}({info.name})</li>)}
      </ul>
    </form>
  );
};

export default App;