import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button} from 'reactstrap';
import { Helmet } from 'react-helmet';


export default class Intro extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isTrigger: false,
            intro: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab"
        };
    }

    render(){
        return(

            <div className="text-center">
                <Helmet bodyAttributes={{style: 'background-color :#414141'}}/>
                <div className="my-2">錢包</div>
                <div className="container py-5">
                    <h1 className="my-5" style={{overflow:'hidden'}}> Memory Bank </h1>
                    <h6 className="py-5">{this.state.intro}</h6>
                </div>
                <Link className="d-flex my-2 mx-auto btn" to="/Create"> 
                    <Button style={{backgroundColor: '#FF6347',border:'none'}} block >
                        <h6>開始使用</h6>
                    </Button>
                </Link>

            </div>
        )
    }
}