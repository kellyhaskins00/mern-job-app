import React, {Component} from 'react';
import axios from 'axios';

export default class CreateJob extends Component {

    constructor(props) {
        super(props);

        this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
        this.onChangeJobResponsible = this.onChangeJobResponsible.bind(this);
        this.onChangeJobPriority = this.onChangeJobPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            job_description: '',
            job_responsible: '',
            job_priority: '',
            job_completed: false
        }
    }

    onChangeJobDescription(e) {
        this.setState({
            job_description: e.target.value
        });
    }

    onChangeJobResponsible(e) {
        this.setState({
            job_responsible: e.target.value
        });
    }

    onChangeJobPriority(e) {
        this.setState({
            job_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Job Description: ${this.state.job_description}`);
        console.log(`Job Responsible: ${this.state.job_responsible}`);
        console.log(`Job Priority: ${this.state.job_priority}`);
        console.log(`Job Completed: ${this.state.job_completed}`);

        const newJob = {
            job_description: this.state.job_description,
            job_responsible: this.state.job_responsible,
            job_priority: this.state.job_priority,
            job_completed: this.state.job_completed
        }

        axios.post('http://localhost:4000/jobs/add', newJob)
            .then(res => console.log(res.data));

        this.setState({
            job_description: '',
            job_responsible: '',
            job_priority: '',
            job_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3 class="create_job">APPLICATION STATUS</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Company/ Position: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.job_description}
                                onChange={this.onChangeJobDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Date Applied: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.job_responsible}
                                onChange={this.onChangeJobResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityApplied"
                                    value="Applied"
                                    checked={this.state.job_priority==='Applied'}
                                    onChange={this.onChangeJobPriority}
                                    />
                            <label className="form-check-label">Applied</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityInterview"
                                    value="Interview"
                                    checked={this.state.job_priority==='Interview'}
                                    onChange={this.onChangeJobPriority}
                                    />
                            <label className="form-check-label">Interview</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityPending"
                                    value="Pending"
                                    checked={this.state.job_priority==='Pending'}
                                    onChange={this.onChangeJobPriority}
                                    />
                            <label className="form-check-label">Pending</label>
                        </div>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Job" className="btn btn-secondary" />
                    </div>
                </form>
            </div>
        )
    }
}