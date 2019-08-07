import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
    }

    handleFileChage =(e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config ={
            headers:{
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h1>고객 추가</h1>
                    프로필 이미지: <input placeholder="image" type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChage}/><br/>
                    이름: <input placeholder="name" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                    생년월일: <input placeholder="birthday" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                    성별: <input placeholder="gender" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                    직업: <input placeholder="job" type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                    <button type="submit">등록하기</button>
                </form>
            </div>
        )
    }


}

export default CustomerAdd;