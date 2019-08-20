import React, { Component } from 'react';
import Slider from './Slider'

class Main extends Component {
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
                <Slider name='hue' min='0' max='100' value={this.state.hue} change={this.changeHue} step="1" />

                <label htmlFor="saturation">Saturation</label>
                <Slider name='saturation' min='0' max='100' value={this.state.saturation} change={this.changeSaturation} step="1" />

                <label htmlFor="lightness">Lightness</label>
                <Slider name='lightness' min='0' max='100' value={this.state.lightness} change={this.changeLightness} step="1" />
                
                <label htmlFor="alpha">Alpha</label>
                <Slider name='alpha' min='0' max='1' value={this.state.alpha} change={this.changeAlpha} step="0.1" />

                <button onClick={this.randomColor}>RANDOM COLOR</button>

                <h1>hsla({this.state.hue}, {this.state.saturation}%, {this.state.lightness}%, {this.state.alpha})</h1>

                <div id="color-box" style={{ backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})` }}></div>
            </div>
        );
    }
}

export default Main;