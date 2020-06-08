import React, { useState } from 'react';
import PropTypes from 'prop-types';

Sort.propTypes = {

};

function Sort(props) {

    const [name, setName] = useState('default');
    const [value, setValue] = useState(0);

    function onClick(byName, byValue) {
        setName(byName);
        setValue(byValue);
        props.onSort(byName, byValue);
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-sort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li
                        className={(name === 'default' && value === 0) ? "dropdown-item sort-selected" : "dropdown-item "}
                        onClick={() => onClick('defalut', 0)}
                    >
                        <a role="button">
                            <span >
                                Mặc Định
                            </span>
                        </a>
                    </li>
                    <li
                        onClick={() => onClick('name', 1)}
                        className={(name === 'name' && value === 1) ? "dropdown-item sort-selected" : "dropdown-item"}>
                        <a role="button">
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                            </span>
                        </a>
                    </li>
                    <li
                        onClick={() => onClick('name', -1)}
                        className={(name === 'name' && value === -1) ? "dropdown-item sort-selected" : "dropdown-item "}>
                        <a role="button">
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                            </span>
                        </a>
                    </li>
                    <li role="separator" className="dropdown-divider"></li>
                    <li
                        onClick={() => onClick('status', 1)}
                        className={(name === 'status' && value === 1) ? "dropdown-item sort-selected" : "dropdown-item"}><a role="button">Trạng Thái Kích Hoạt</a></li>
                    <li
                        onClick={() => onClick('status', -1)}
                        className={(name === 'status' && value === -1) ? "dropdown-item sort-selected" : "dropdown-item"}><a role="button">Trạng Thái Ẩn</a></li>
                </ul>
            </div>
        </div >
    );
}

export default Sort;