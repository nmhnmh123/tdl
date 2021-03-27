import React, { Component } from 'react';
import '../App.css'

class TaskItem extends Component {

    onUpdateStt = () => {
        this.props.onUpdateStt(this.props.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.id);
    }

    render() {
        var { index, id, name, status } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td className="text-center">
                    <span
                        class={status ? 'label label-danger' : "label label-success"}
                        onClick={this.onUpdateStt}
                    >
                        {status ? 'Kích Hoạt' : "Ẩn"}
                    </span>
                    {/* {status ? <span class="label label-danger " >Kích Hoạt</span> : <span class="label label-primary " >Ẩn</span>} */}
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        class="btn btn-warning"
                        onClick={this.onUpdate}
                    >
                        <i class="fas fa-pen mr-5"></i>Sửa
                    </button>&nbsp;
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <i class="fas fa-trash-alt mr-5"></i>Xoá
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;