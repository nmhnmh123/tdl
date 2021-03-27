import React, { Component } from 'react';
import '../App.css'
import TaskForm from './TaskForm'
import Control from './Control'
import TaskList from './TaskList'
import toast, { Toaster } from 'react-hot-toast';
import _ from 'lodash';

class MainTDL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEdit: null,
            isAddCV: false,
            isUpdateCV: false,
            filter: {
                name: '',
                status: -1,
            },
            keyword: '',
            sort: {
                by: 'name',
                value: 1,
            }
        }
    }

    componentDidMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks,
            })
        };
    }

    // Hứa trả nợ


    testSetState = async () => {
        await this.setState({
            isDisplayForm: true,
            isAddCV: true,
            isUpdateCV: false,
        });
        // await new Promise((a,b) => {
        //     setTimeout(() => {
        //         console.log("ádasdasdasdasd");
        //         a();
        //     }, 5000);
        // })
    }

    onOpenForm = () => {
        let promise = new Promise((a,b) => {
            this.setState({
                isDisplayForm: true,
                isAddCV: true,
                isUpdateCV: false,
            });
            a();
        })
        toast.promise(promise, {
            loading: 'Loading...',
            success: 'Got the data',
            error: 'Error when fetching',
        });
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm,
            isAddCV: false,
            isUpdateCV: false,
            taskEdit: null,
        })
        toast.error('Đóng form thành công');
    }

    onSubmit = (data) => {
        var { tasks } = this.state;
        if (data.id === '') {
            data.id = this.generateID(); //tao id cho task moi them
            tasks.push(data);
        } else {
            //edit
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }

        this.setState({
            tasks: tasks,
            taskEdit: null,
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdate = (id) => {
        this.setState({
            isDisplayForm: true,
            isAddCV: false,
            isUpdateCV: true,
        });
        var { tasks } = this.state;
        var index = this.findIndex(id);
        var taskEdit = tasks[index];
        this.setState({
            taskEdit: taskEdit,
        });
    }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            })
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.setState({
            isDisplayForm: false,
            isAddCV: false,
            isUpdateCV: false,
        })
    }

    onUpdateStt = (id) => {
        var { tasks } = this.state;
        //var index = this.findIndex(id); //
        var index = _.findIndex(tasks, function(o) { return o.id === id; });
        console.log(index); 
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            })
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    onFilter = (filterName, filterStt) => {
        filterStt = parseInt(filterStt, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStt,
            }
        });
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }

    onSort = async (by, value) => {
        await this.setState({
            sort : {
                by: by,
                value: value
            }
        })
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4() + this.s4();
    }

    render() {
        var { tasks, isDisplayForm, taskEdit, keyword, filter, sort } = this.state;
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((x) => {
                    return x.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            tasks = tasks.filter((x) => {
                if (filter.status === 1) {
                    return x.status === true;
                }
                if (filter.status === 0) {
                    return x.status === false;
                }
                if (filter.status === -1) {
                    return x;
                }
            });
        }
        if (keyword) {
            tasks = tasks.filter((x) => {
                return x.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }
        if(sort.by === 'name'){
            tasks.sort((a,b) => {
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            });
        }else{
            tasks.sort((a,b) => {
                if(a.status > b.status) return sort.value;
                else if(a.status < b.status) return -sort.value;
                else return 0;
            });
        }
        var elmButtonAdd = (!isDisplayForm) ? (<button
            type="button"
            className="btn btn-primary"
            onClick={this.onOpenForm}
            style={{ marginBlockEnd: 10 }}
        >
            <i className="fas fa-plus mr-5"></i>Thêm công việc
        </button>
        ) : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý công việc</h1>
                    
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        {isDisplayForm ? <TaskForm
                            onSubmit={this.onSubmit}
                            onCloseForm={this.onCloseForm}
                            taskEdit={taskEdit}
                            isAddCV={this.state.isAddCV}
                        /> : ''}
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        {/* <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onOpenForm}
                        >
                            <i className="fas fa-plus mr-5"></i>Thêm công việc</button> */}
                        {elmButtonAdd}
                        <Toaster
                            position="top-right"
                            reverseOrder={false}
                            toastOptions={{
                                //Define default options
                                className: '',
                                style: {
                                    margin: '40px',
                                    background: '#00e676',
                                    color: 'white',
                                    zIndex: 1,
                                },
                                duration: 5000,
                                // Default options for specific types
                                success: {
                                    duration: 3000,
                                    // theme: {
                                    //     primary: 'yellow',
                                    //     secondary: 'yellow',
                                    // },
                                    style: {
                                        margin: '100px',
                                        background: '#00e676',
                                        color: 'white',
                                        zIndex: 1,
                                    },
                                },
                                error: {
                                    duration: 3000,
                                    style: {
                                        margin: '100px',
                                        background: 'red',
                                        color: 'white',
                                        zIndex: 1,
                                    },
                                },
                            }} />
                        <Control
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                        />
                        <TaskList
                            tasks={tasks}
                            onUpdateStt={this.onUpdateStt}
                            onDelete={this.onDelete}
                            onUpdate={this.onUpdate}
                            onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainTDL;