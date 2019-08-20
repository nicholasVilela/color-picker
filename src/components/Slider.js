import React, { Component } from 'react';

class Slider extends Component {
    state = {
        hue: Math.ceil(Math.random() * 360),
        saturation: Math.ceil(Math.ceil(Math.random() * 100)),
        lightness: Math.ceil(Math.ceil(Math.random() * 100)),
        alpha: Math.random().toFixed(1)
    }

    changeHue = event => {
        this.setState({
            hue:  event.target.value
        })
    }
    changeSaturation = event => {
        this.setState({
            saturation: event.target.value
        })
    }
    changeLightness = event => {
        this.setState({
            lightness: event.target.value
        })
    }

    changeAlpha = event => {
        this.setState({
            alpha: event.target.value
        })
    }

    randomColor = () => {
        this.setState({
            hue: Math.ceil(Math.random() * 360),
            saturation: Math.ceil(Math.random() * 100),
            lightness: Math.ceil(Math.random() * 100),
            alpha: Math.random().toFixed(1)
        })
    }

    render() {
        return (
            <div id="container">
                <label htmlFor="hue">Hue</label>
                <input type="range"
                    id="hue" 
                    min="0" 
                    max="360" 
                    value={ this.state.hue }
                    onChange={ this.changeHue } />

                <label htmlFor="saturation">Saturation</label>
                <input type="range"
                    id="saturation" 
                    min="0" 
                    max="100" 
                    value={ this.state.saturation }
                    onChange={ this.changeSaturation } />

                <label htmlFor="lightness">Lightness</label>
                <input type="range"
                    id="lightness" 
                    min="0" 
                    max="100" 
                    value={ this.state.lightness }
                    onChange={ this.changeLightness } />
                
                <label htmlFor="alpha">Alpha</label>
                <input type="range"
                    id="alpha" 
                    min="0" 
                    max="1"
                    step="0.1" 
                    value={ this.state.alpha }
                    onChange={ this.changeAlpha } />

                <button onClick={this.randomColor}>RANDOM COLOR</button>

                <h1>hsla({this.state.hue}, {this.state.saturation}%, {this.state.lightness}%, {this.state.alpha})</h1>

                <div id="color-box" style={{ backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})` }}></div>
            </div>
        );
    }
}

export default Slider;