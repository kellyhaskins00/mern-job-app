
import React, { Component } from 'react';

export default class SearchJob extends Component {
    render() {
        return (
            <div>
                <h3 class="search-list">EXPLORE NEW JOBS</h3>
                <br />


                <div class="card text-center" id="indeed">
                    <div class="card-body">
                        <h5 class="card-title">SEARCH JOBS AT</h5>
                        <a href="https://www.indeed.com/" target="_blank" class="btn"><img src="https://www.shipbob.com/wp-content/uploads/2018/09/indeed_whitie.png" width="125px" height="auto"></img></a>
                    </div>
                </div>

                <br />


                <div class="card text-center" id="monster">
                    <div class="card-body">
                        <h5 class="card-title">SEARCH JOBS AT</h5>
                        <a href="https://www.monster.com/" target="_blank" class="btn"><img src="https://securemedia.newjobs.com/id/lpf20/CORE/icon-50-m.png" width="175px" height="auto"></img></a>
                    </div>
                </div>
                <br />

                <div class="card text-center" id="glassdoor">
                    <div class="card-body">
                        <h5 class="card-title">SEARCH JOBS AT</h5>
                        <a href="https://www.glassdoor.com/index.htm" target="_blank" class="btn"><img src="https://www.mercurynews.com/wp-content/uploads/2018/05/glassdoor-logo.jpg" width="195px" height="auto"></img></a>
                    </div>
                </div>

                <br />

            </div>

        )
    }
}