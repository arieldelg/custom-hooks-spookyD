import { useEffect, useReducer } from "react";
import { Todo, TodoActionKind, todoReducer } from "./todoReducer";

const initialState: Todo[] = [];

const init = () => JSON.parse(localStorage.getItem("todo")!) || [];

const useReducerHook = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  const handleNewTodo = (todo: Todo) => {
    dispatch({
      type: TodoActionKind.ADDTODO,
      payload: todo,
    });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: TodoActionKind.DELETETODO,
      payload: { id: id },
    });
  };

  const onToggleTodo = ({
    done,
    id,
  }: {
    id: number;
    done: boolean | undefined;
  }) => {
    dispatch({
      type: TodoActionKind.UPDATETODO,
      payload: {
        id: id,
        done: done,
      },
    });
  };

  return {
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    state,
  };
};

export { useReducerHook };
