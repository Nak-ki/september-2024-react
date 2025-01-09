export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ListTodoes {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}