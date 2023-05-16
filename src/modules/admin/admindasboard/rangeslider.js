import React from "react";
// import './Slider.css';
import "./scss/index.scss";
import { Range } from 'react-range';
class RangeSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            values: [this.props.value]
        }

        this.sliderOnChange = this.sliderOnChange.bind(this);
    }

    componentDidMount(){

    }

    sliderOnChange(e, values){
        this.setState({ values })
        console.log(this);
        //this.props.TileChange(values);
    }

    render(){
        return(
            <div style={{ margin:'20px', display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
                <Range
                    step={1}
                    min={0}
                    max={100}
                    values={this.state.values}
                    onChange={(values) => { this.setState({ values }); this.props.TileChange(values, this.props.Axis) }}
                    renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                        ...props.style,
                        height: '6px',
                        width: '200px',
                        backgroundColor: '#ccc',
                        justifyItems: 'center',
                        margin : '60px'
                        }}
                        className="range-line"
                    >
                        {children}
                    </div>
                    )}
                    renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                        ...props.style,
                        height: '30px',
                        width: '30px',
                        backgroundColor: '#9e9e9e',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}
                    >
                        <h5 style={{ marginTop:'6px', color:'blue', fontWeight: 'bold' }}>{ this.props.Axis }</h5>
                    </div>
                            )}/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ justifyItems:'center', fontWeight: 'bolder', fontSize: '20px', color:'dimgrey' }}>{ this.state.values }</span>
                </div>
            </div>
        )
    }
}

export default RangeSlider;