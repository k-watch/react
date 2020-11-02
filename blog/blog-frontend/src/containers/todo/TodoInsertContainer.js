import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInsertForm from '../../components/todo/TodoInsertForm';
import { changeField, initForm, insert } from '../../modules/todo';

const TodoInsertContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ todo }) => ({
    form: todo,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { todo, username, rank } = form;
    const type = 1;

    if ([todo, username].includes('') || rank === 0) {
      alert('빈 칸을 모두 입력해주세요.');
      return;
    }

    dispatch(insert({ todo, username, rank, type }));
  };

  const onSelect = useCallback(
    (rank) => {
      dispatch(changeField({ key: 'rank', value: rank }));
    },
    [dispatch],
  );

  const onReset = () => {
    dispatch(initForm());
  };

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      dispatch(changeField({ key: name, value }));
    },
    [dispatch],
  );

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화
  useEffect(() => {
    dispatch(initForm());
  }, [dispatch]);

  return (
    <TodoInsertForm
      form={form}
      onSelect={onSelect}
      onChange={onChange}
      onReset={onReset}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(TodoInsertContainer);
