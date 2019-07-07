import React, { Component } from 'react';
import Axios from 'axios';
import SliderTemplate from './slider_templates';

class NewsSlider extends Component {
    state = {
        news: []
    }

    componentWillMount() {
        Axios.get(`http://localhost:3004/articles`).then(
            response => {
                this.setState(
                    {
                        news: response.data
                    }
                )
            }
        )
    }

    render() {
        return (
            <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings} />
        );
    }
}

export default NewsSlider;