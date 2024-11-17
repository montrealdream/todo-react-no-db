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
    return (
        <>
            <div className="todo">
                <form className="todo__create">
                    <input name="content" placeholder="Nhập nội dung..." />
                    <button>Tạo</button>
                </form>
        
                <div className="todo__list">
                    {
                        TodoData.map(item => 
                            <div className={`todo__item todo__item--${item.status}`}>
                                {item.content}
                            </div>
                        )   
                    }
                </div>
            </div>
        </>
    );
}
