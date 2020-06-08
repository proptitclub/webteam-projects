import React from 'react';

function TaskItem(props) {
    var { index, task } = props;
    function updateStatus() {
        props.updateStatus(task.id);
    }
    function deleteItem() {
        props.deleteItem(task.id);
    }
    function updateItem() {
        props.updateItem(task.id);
    }
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('item_id', task.id);
        //console.log(t.id)
        // const card_id = e.dataTransfer.getData('card_id');
        // const card = document.getElementById(card_id);
        // localStorage.setItem('cardId', target.id);
        //      console.log(target.id);

    }
    return (
        <tr >
            <td>{index + 1}</td>
            <td onDragStart={dragStart} draggable='true' id={task.id}>{task.name}</td>
            <td className="text-center">
                <span className={
                    task.status === true ? "badge badge-success" : "badge badge-danger"
                }
                    onClick={updateStatus}
                >
                    {task.status === true ? "Kích Hoạt" : "Ẩn"}
                </span>
            </td>
            <td className="text-center">
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={updateItem}
                >
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={deleteItem} >
                    <span className="fa fa-trash mr-5"></span>Xóa
               </button>
            </td>
        </tr >
    );
}

export default TaskItem;