import React, { useCallback, useRef, useState } from 'react';

const App = () => {
  const nextId = useRef(1)
  const [form, setForm] = useState({ name: '', username: '' })
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  })

  const onChange = useCallback(e => {
    const target = e.target
    setForm({ ...form, [target.name]: target.value })
  }, [form])

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username,
    }

    setData({ ...data, array: data.array.concat(info) })
    setForm({ name: '', username: '' })
    nextId.current += 1
  }, [data, form.name, form.username])

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="이름" name="name" value={data.name} onChange={onChange} />
      <input placeholder="아이디" name="username" value={data.username} onChange={onChange} />
      <button type="submit">등록</button>
      <ul>
        {data.array.map(info => <li key={info.id}>{info.username}({info.name})</li>)}
      </ul>
    </form>
  );
};

export default App;