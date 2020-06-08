import React from 'react';
import PropTypes from 'prop-types';

DoneList.propTypes = {

};
// const drop = e => {
//     e.preventDefault();
//     const card_id = e.dataTransfer.getData('item_id');
//     console.log(card_id);
//     const card = document.getElementById(card_id);
//     console.log(card);
//     card.style.display = 'block';
//     console.log(e.target);
//     e.target.appendChild(card);
// }
// const dragOver = e => {
//     e.preventDefault();
//     // console.log('over');
// }
function DoneList(props) {
    return (
        <table
            className="table table-bordered table-hover "
        // onDrop={drop}
        // onDragOver={dragOver}
        >
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    );
}

export default DoneList;