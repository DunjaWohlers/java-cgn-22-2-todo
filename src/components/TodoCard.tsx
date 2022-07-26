import {Todo} from "../model/Todo";

type TodoCardProps = {
    todo: Todo,
    advanceTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function TodoCard(props: TodoCardProps) {

    return (
        <div>
            <div>{props.todo.description}</div>
            {props.todo.status !== "DONE" && <button onClick={() => props.advanceTodo(props.todo)}>&gt;</button>}
            {props.todo.status === "DONE" && <button onClick={() => props.deleteTodo(props.todo.id)}>&#10007;</button>}
        </div>
    )
}
