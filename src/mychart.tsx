import React, { Component } from 'react';
import FLowChart from './flowchart';

export default class Chart extends Component {
    private divRef: React.RefObject<HTMLInputElement>;
    chart: FLowChart | undefined;

    constructor(props: {}) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        if (this.divRef.current != null) {

            this.chart = new FLowChart(this.divRef.current, {
            });

            this.chart.load(
                {
                    nodes: [
                        { id: 1, templateId: 'startEnd', x: 400, y: 150, text: "Start"},
                    ]
                }
            );
        }
        
    }

    render() {
        return (
            <div id="chart" ref={this.divRef}></div>
        )
    }
}