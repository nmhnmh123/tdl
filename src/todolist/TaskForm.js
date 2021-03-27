import React, { Component } from 'react';
import '../App.css'

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false,
        }
    }


    componentDidMount() {
        if (this.props.taskEdit) {
            this.setState({
                id: this.props.taskEdit.id,
                name: this.props.taskEdit.name,
                status: this.props.taskEdit.status,
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nProps){
        if (nProps && nProps.taskEdit) {
            this.setState({
                id: nProps.taskEdit.id,
                name: nProps.taskEdit.name,
                status: nProps.taskEdit.status,
            });
        }
    }

    onCloseForm = () => {
        this.onClear();
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value,
        })
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        //clear and close form:
        this.onClear();
        this.onCloseForm();
    }

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.isAddCV === true ? 'Thêm công việc' : 'Cập nhật công việc'}
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label>Tên: </label>
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div class="form-group">
                            <label>Trạng thái: </label>
                            <select
                                className="form-control"
                                name='status'
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <div className="button-from-add">
                            <button type="submit" className="btn btn-primary btn-block">
                                <i className="fas fa-plus mr-5"></i>Lưu lại
                            </button>&nbsp;<br />
                            <button
                                type="button"
                                className="btn btn-danger btn-block"
                                onClick={this.onClear}
                            >
                                <i className="fas fa-times-circle mr-5"></i>Huỷ bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;