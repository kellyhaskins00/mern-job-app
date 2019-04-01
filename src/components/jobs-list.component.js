import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Job = props => (
    <tr>
        <td className={props.job.job_completed ? 'completed' : ''}>{props.job.job_description}</td>
        <td className={props.job.job_completed ? 'completed' : ''}>{props.job.job_responsible}</td>
        <td className={props.job.job_completed ? 'completed' : ''}>{props.job.job_priority}</td>
        <td>
            <Link to={"/edit/"+props.job._id}>Edit</Link>
        </td>
    </tr>
)

export default class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = {jobs: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/jobs/')
            .then(response => {
                this.setState({jobs: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/jobs/')
        .then(response => {
            this.setState({jobs: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }


    jobList() {
        return this.state.jobs.map(function(currentJob, i) {
            return <Job job={currentJob} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Jobs List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Company/ Position</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.jobList() }
                    </tbody>
                </table>
            </div>
        )
    }
}