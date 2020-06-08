import React, { useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {

};


function Search(props) {
    const [key, setKey] = useState('');

    function onChange(event) {
        var value = event.target.value;
        setKey(value);
        console.log(value);
    }
    function onSearch() {
        // console.log(key);
        props.onSearch(key);
    }
    function enterKey(e) {
        if (e.key === 'Enter') {
            onSearch();
        }
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input
                    onKeyDown={enterKey}
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    value={key}
                    onChange={onChange}
                />
                <span className="input-group-btn" onClick={onSearch}>
                    <button className="btn btn-search" type="button">
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                </span>
            </div>
        </div>
    );
}

export default Search;