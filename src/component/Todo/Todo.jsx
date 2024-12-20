import { useState } from 'react';

const TodoData = [
    {
      id: 1,
      content: "Công việc 1",
      status: "initial",
    },
    {
      id: 2,
      content: "Công việc 2",
      status: "initial",
    },
    {
      id: 3,
      content: "Công việc 3",
      status: "doing",
    },
    {
      id: 4,
      content: "Công việc 4",
      status: "completed",
    },
    {
      id: 5,
      content: "Công việc 5",
      status: "rejected",
    },
];

export const Todo = () => {
    const [todo, setTodo] = useState(TodoData); // sử dụng useState

    // tạo mới công việc (lưu ý không có database nên khi thoát dự án vào lại cũng y chang cái mảng có sẵn)
    const handleCreateTodo = (event) => {
        event.preventDefault(); // ngăn chặn submit form

        const content = event.target.content.value;

        // thêm mới công việc vào mảng
        if(content) {
            setTodo([
                ...todo, // spread syntax
                {
                    id: Date.now(),
                    content: content,
                    status: 'initial'
                }
            ]);

            console.log(todo);
        }
        // xóa nội dung đã điền trong thẻ input
        event.target.content.value = "";
    }

    // xóa công việc
    const handleDeleteTodo = (todoID) => {
        const newTodo = todo.filter(item => item.id !== todoID);
        setTodo(newTodo);
    }

    // thay đổi trạng thái công việc
    const handleChangeStatusTodo = (event, todoID) => {
        const status = event.target.value;

        const newTodo = todo.map(item => {
            if(item.id === todoID) item.status = status;
            return item;
        });

        setTodo(newTodo);

    }

    return (
        <>
            <div className="todo">
                <form 
                    className="todo__create"
                    onSubmit={handleCreateTodo}
                >
                    <input name="content" placeholder="Nhập nội dung..." />
                    <button>Tạo</button>
                </form>

                <div className="todo__list">
                    {
                        todo.map(item => 
                            <div 
                                key={item.id}
                                className={`todo__item todo__item--${item.status}`}
                            >
                                <span>
                                    {item.content}
                                </span>
                                
                                <span>
                                    <select 
                                        defaultValue={item.status}
                                        onChange={(event) => handleChangeStatusTodo(event, item.id)}
                                    >
                                    <option value={"initial"}>Khởi tạo</option>
                                    <option value={"doing"}>Đang làm</option>
                                    <option value={"completed"}>Hoàn thành</option>
                                    <option value={"rejected"}>Không hoàn thành</option>
                                    </select>

                                    <button onClick={() => handleDeleteTodo(item.id)}>Xóa</button>
                                </span>
                            </div>
                        )   
                    }
                </div>
            </div>
        </>
    );
}
