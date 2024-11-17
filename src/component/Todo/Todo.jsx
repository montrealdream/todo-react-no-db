export const Todo = () => {
    return (
        <>
            <div className="todo">
                <form className="todo__create">
                    <input name="content" placeholder="Nhập nội dung..." />
                    <button>Tạo</button>
                </form>
        
                <div className="todo__list">
                    <div className={`todo__item todo__item--initial`}>
                        Công việc 1
                    </div>
                    <div className={`todo__item todo__item--initial`}>
                        Công việc 2
                    </div>
                    <div className={`todo__item todo__item--doing`}>
                        Công việc 3
                    </div>
                    <div className={`todo__item todo__item--completed`}>
                        Công việc 4
                    </div>
                    <div className={`todo__item todo__item--rejected`}>
                        Công việc 5
                    </div>
                </div>
            </div>
        </>
    );
}
