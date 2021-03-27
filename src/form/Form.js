import React, { Component } from 'react';
import '../App.css'


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            mota: '',
            gender: '0',
            language: 'en',
            checkStt: true,
        }
    }

    onHandleChange = (event) => {
        //var target = event.target;
        var name = event.target.name;
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container mt-50">

                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='username'
                                            onChange={this.onHandleChange}
                                            value={this.state.username}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name='password'
                                            onChange={this.onHandleChange}
                                            value={this.state.password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Mô tả:</label>

                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            name='mota'
                                            onChange={this.onHandleChange}
                                            value={this.state.mota}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            name='gender'
                                            value={this.state.gender}
                                            onChange={this.onHandleChange}
                                        >
                                            <option value={0}>Nữ</option>
                                            <option value={1}>Nam</option>
                                        </select>
                                    </div>


                                    <div className="radio" >
                                        <label>
                                            <input
                                                type="radio"
                                                name='language'
                                                value='en'
                                                onChange={this.onHandleChange}
                                                checked={this.state.language === 'en'}
                                            />
                                            English
                                        </label><br />
                                        <label>
                                            <input
                                                type="radio"
                                                name='language'
                                                value='vi'
                                                onChange={this.onHandleChange}
                                                checked={this.state.language === 'vi'}
                                            />
                                            Vietnam
                                        </label>
                                    </div>


                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name='checkStt'
                                                value={true}
                                                onChange={this.onHandleChange}
                                                checked={this.state.checkStt === true}
                                            />
                                            Trạng thái
                                        </label>
                                    </div>


                                    <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                    <button type="reset" className="btn btn-default">Delete</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Form;