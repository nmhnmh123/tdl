import React, { Component } from 'react';
import '../App.css'
import TaskItem from './TaskItem'

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //-1 là all, kichhoat là 1, ẩn là 0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus)
        this.setState({
            [name]: value
        })
    }

    render() {
        var { tasks } = this.props;
        var { filterName, filterStatus } = this.state;
        var elmTasks = tasks.map((task, index) => {
            return <TaskItem
                key={index}
                index={index}
                id={task.id}
                name={task.name}
                status={task.status}
                onUpdateStt={this.props.onUpdateStt}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
            />
        });
        return (
            <div class="row mt-15">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i class="fas fa-filter mt-10"></i></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                        value={filterName}
                                        onChange={this.onChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        value={filterStatus}
                                        onChange={this.onChange}
                                    >
                                        <option value="-1">Tất cả</option>
                                        <option value="0">Ẩn</option>
                                        <option value="1">Kích hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {elmTasks}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default TaskList;