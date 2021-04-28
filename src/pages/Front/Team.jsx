import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, TopBar , Footer, Loader } from '../../components/General';
import { MainGrid } from "../../components/Aboutus";
class TeamPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: {names: 'Team'},
            titleheading: [
                {
                    id: '1',
                    title: 'Team Grid'
                }
            ],
            breadcrumbs: [
                {
                    id: 1,
                    title: 'Home',
                    classicon: 'fa fa-angle-right',
                    aria: 'true'
                },
                {
                    id: 2,
                    title: 'Team',
                    classicon: '',
                    aria: 'true'
                }
            ]
        }
    }
    render() {
        const { headers } = this.state;
        return (
            <div className="bg-body3">
                <div className="boxed">
                    {/*<Loader />*/}
                    {/*<TopBar />*/}
                    <Header data={headers}/>

                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        {
                                            this.state.titleheading.map(data =>(
                                                <h1 key={data.id} className="h1-title">{data.title}</h1>
                                            ))
                                        }       
                                    </div>
                                    <ul className="breadcrumbs">
                                        {
                                            this.state.breadcrumbs.map(data =>(
                                                <li key={data.id} ><Link to="#" title="">{data.title}<i className={data.classicon} aria-hidden={data.aria}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MainGrid />                    

                    <Footer />
                </div>
            </div>
        );
    }
}

export default TeamPage;