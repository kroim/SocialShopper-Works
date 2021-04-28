import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Footer,Header,Slider,  Loader,CarouselClient,  TopBar } from '../components/General';
import { Featured } from '../components/General/featured';
import { Services } from '../components/General/services';
import { Project } from '../components/General/projects';
import { Callback } from '../components/General/callback';
import { Blog } from '../components/General/blog';

class Home01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Home'
                }
            ],

        }
    }
    render() {
        console.log('render Home');
        return (
            <div className="bg-body3">
                <div className="boxed">
                    {/*<Loader />*/}
                    {/*<TopBar />*/}
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }
                    <Slider />
                    <Featured />
                    <Services />
                    <Project />
                    <Callback />

                    <Blog />

                    <CarouselClient />

                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(Home01);