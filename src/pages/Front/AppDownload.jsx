import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, TopBar , Footer, Loader } from '../../components/General';
import { MainGrid } from "../../components/Aboutus";
class AppDownload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: { names: 'App Download' },
            titleHeader: 'App Download',
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
        const { headers, titleHeader } = this.state;
        return (
            <div className="app-download bg-body3">
                <div className="boxed">
                    {/*<Loader />*/}
                    {/*<TopBar />*/}

                    <Header data={headers}/>

                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        <h1 className="h1-title">{titleHeader}</h1>
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

                    <section className="flat-row pd-about-team">
                        <div className="page-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-5">
                                            <div className="app-image">
                                                <img src={require('../../assets/images/app-image.png')} className="attachment-full size-full" alt="" loading="lazy"/>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="app-description">
                                                <div className="app-des-title">
                                                    <h1>A fun way to bond with your loved ones</h1>
                                                </div>
                                                <div className="app-des-content">
                                                    <span>Should Join if you:</span>
                                                    <ol>
                                                        <li>Support local business</li>
                                                        <li>Love to shop with friends as a group shopper</li>
                                                        <li>Want to spend more time with your loved ones</li>
                                                        <li>Tired of eCommerce customer service</li>
                                                        <li>Love window shopping</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="store-images">
                                                    <div className="app-store-image">
                                                        <img src={require('../../assets/images/app-store.png')}
                                                             className="attachment-app-store" alt="" loading="lazy"/>
                                                    </div>
                                                    <div className="app-store-image">
                                                        <img src={require('../../assets/images/google-play-store.png')}
                                                             className="attachment-google-store" alt="" loading="lazy"/>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        );
    }
}

export default AppDownload;