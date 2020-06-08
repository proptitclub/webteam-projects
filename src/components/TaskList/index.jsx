import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';
TaskList.propTypes = {

};

function TaskList(props) {
    var { tasks } = props;
    var elmTasks = tasks.map((task, index) => {
        return <TaskItem
            id={task.id}
            index={index}
            task={task}
            key={task.id}
            updateStatus={props.updateStatus}
            deleteItem={props.deleteItem}
            updateItem={props.updateItem}
        />
    });
    const [filterName, setFilterName] = useState('');
    const [filterStatus, setFilterStatus] = useState(-1);
    function onchange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var __filterName, __filterStatus;
        if (name === 'filterName') {
            setFilterName(value);
            __filterName = value;
            __filterStatus = filterStatus;
        }
        else {
            setFilterStatus(value);
            __filterStatus = value;
            __filterName = filterName;
        }
        props.onFilter(__filterName, __filterStatus);
    }
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name='filterName'
                            value={filterName}
                            onChange={onchange}
                        />
                    </td>
                    <td>
                        <select className="form-control"
                            name='filterStatus'
                            onChange={onchange}
                        >
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {elmTasks}
            </tbody>
        </table>
    );
}

export default TaskList;