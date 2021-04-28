import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, TopBar , Footer, Loader } from '../../components/General';
import { MainGrid } from "../../components/Aboutus";
import {Plan} from "../../components/General/services";
class Partners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: { names: 'Partners' },
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
                    title: 'Partners',
                    classicon: '',
                    aria: 'true'
                }
            ]
        }
    }
    render() {
        const { headers } = this.state;
        return (
            <div className="partners bg-body3">
                <div className="boxed">
                    {/*<Loader />*/}
                    {/*<TopBar />*/}
                    <Header data={headers}/>
                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
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
                    <section className="flat-row pd-services-widget">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>The number one issue for local stores trying to compete for business in the e-commerce marketplace, with giants such as Amazon, is inventory size. In many marketplaces, massive inventory can drive traffic. How can local stores reach that large amount of inventory?</p>
                                    <div className="dividers dividers-bc-v3"></div>
                                    <p>Another question for local stores is, what is the right marketing strategy – to be a local retailer or be just another e-commerce site? Last year, 25,000 stores closed. Local stores today are facing a real challenge just to maintain walk-in consumers. If the choice is to be another e-commerce business and compete with the rest of the e-commerce galaxy, then how can the local business spotlight the products they are selling when there are millions of the same products out there</p>
                                    <div className="dividers dividers-bc-v3"></div>
                                    <p>And that leads to the last question, how is that going to draw the online customer to the local store?  As we see it, the online marketing strategy is a conflict with the local retail business model, and most owners struggle with the question – which road is the right one to pick?</p>
                                    <div className="dividers dividers-bc-v3"></div>
                                    <p>Social Shopper App is here to help local businesses have both a better online marketing strategy to serve online customers, while also attracting them to the physical location.</p>
                                    <div className="dividers dividers-bc-v3"></div>
                                    <p>We offer:</p>
                                    <div className="dividers dividers-bc-v3"></div>
                                    <ol>
                                        <li>
                                            <p>A new set of tools for the buyer and seller to communicate…</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                            <p>(Local store employees can use text & LIVE Video to show your products and provide LIVE customer service, which builds loyal consumer relations.)</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                        </li>
                                        <li>
                                            <p>Upload photos & videos of your merchandise to us – each one of your products become ads and attracts customers to your physical store.</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                        </li>
                                        <li>
                                            <p>Group window shopping with friends – which means more consumers seeing your products.</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                        </li>
                                        <li>
                                            <p>Uniting of local retailers’ inventory together creates a more unique, varied and larger inventory for window shopping.</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                        </li>
                                        <li>
                                            <p>Stores can have LIVE sale events or hourly sales promotions.</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                        </li>
                                        <li>
                                            <p>Options for shipping or store pick up. Pick up by customers can increase add-on sales and builds stronger consumer relations.</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                        </li>
                                        <li>
                                            <p>Live sales Rep can earn extra income with tips from shopper’s for a good customer experience.</p>
                                            <div className="dividers dividers-bc-v3"></div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flat-row pd-services-widget">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-3">
                                        <Plan/>
                                    </div>
                                    <div className="col-md-3">
                                        <Plan/>
                                    </div>
                                    <div className="col-md-3">
                                        <Plan/>
                                    </div>
                                    <div className="col-md-3">
                                        <Plan/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Partners;