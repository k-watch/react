import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAvr = (list) => {
    if (list.length === 0) return 0

    console.log('평균값 계산중...')
    debugger
    const sum = list.reduce((a, b) => a + b)
    return sum / list.length
}

const Average = () => {
    const [num, setNum] = useState('')
    const [list, setList] = useState([])
    const inputEl = useRef(null)

    const onChange = useCallback((e) => {
        setNum(e.target.value)
    }, [])

    const onClick = useCallback(() => {
        const nextList = list.concat(parseInt(num))
        setList(nextList)
        setNum('')
        inputEl.current.focus()
    }, [list, num])

    const sum = useMemo(() => getAvr(list), [list])

    return (
        <div>
            <input value={num} onChange={onChange} ref={inputEl}></input>
            <button onClick={onClick}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
            <div>
                평균값: {sum}
            </div>
        </div>
    );
};

export default Average;