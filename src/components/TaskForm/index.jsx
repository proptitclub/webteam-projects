import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

TaskForm.propTypes = {

};

function TaskForm(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState(false);
    useEffect(() => {
        console.log(props.task);
        if (props.task === null) {
            setId('');
            setName('');
            setStatus(false);
            console.log('haha');
        }
        else {
            setId(props.task.id);
            setName(props.task.name);
            setStatus(props.task.status);
        }

    }, [props.task])
    function closeForm() {
        props.closeForm();
    }
    function onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        var cloneId = id;
        if (name === 'name') {
            setName(value);
        }
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
            setStatus(value);
            console.log(value);
        }
    }
    function submit(event) {
        event.preventDefault();
        var __state = {
            id: id,
            name: name,
            status: status
        }
        setStatus(false);
        setId('');
        setName('');
        props.onSubmit(__state);
    }
    function clear() {
        setStatus(false);
        setId('');
        setName('');
    }
    return (
        <div className="card">
            <div className="card-header bg-warning">
                <h3 className="card-title contain-span">{props.task === null ? 'Thêm công việc' : 'Update'}
                    <span
                        className="fa fa-times-circle text-right pos-span d-inline-block"
                        onClick={closeForm}

                    ></span>
                </h3>
            </div>
            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            required="required"
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        required="required"
                        name="status"
                        value={status}
                        onChange={onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-warning">{props.task === null ? 'Thêm ' : 'Sửa'}</button>&nbsp;
                         <button
                            onClick={clear}
                            type="submit"
                            className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;