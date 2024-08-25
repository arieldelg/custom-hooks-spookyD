export enum TodoActionKind {
  ADDTODO = "ADDTODO",
  DELETETODO = "DELETETODO",
  UPDATETODO = "UPDATETODO",
  SHOWTODO = "SHOWTODO",
}

export interface TodoAction {
  type: TodoActionKind;
  payload: Todo;
}

export type Todo = {
  id: number;
  todo?: string;
  done?: boolean;
};

// interface TodoProps {
//   initialState: Todo[];
//   action?: TodoAction;
// }

const todoReducer = (initialState: Todo[], action: TodoAction) => {
  switch (action.type) {
    case TodoActionKind.ADDTODO:
      return [...initialState, action.payload];

    case TodoActionKind.DELETETODO:
      return initialState.filter((element) => element.id !== action.payload.id);

    case TodoActionKind.UPDATETODO: {
      //! sin metodo map
      // const newArray = [...initialState];
      // const index = newArray.findIndex(
      //   (element) => element.id === action.payload.id
      // );
      // newArray[index].done = !action.payload.done;

      //! con metodo map
      return initialState.map((todo) => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            done: !action.payload.done,
            todo: action.payload.todo,
          };
        return todo;
      });
    }

    case TodoActionKind.SHOWTODO:
      return initialState;
    default:
      return initialState;
  }
};

export { todoReducer };
