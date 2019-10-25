import React, { Component } from 'react';
import * as d3 from 'd3';

type BarChartState = {
  data1: number,
  data2: number
}

class BarChart extends Component<{}, BarChartState> {
  state = {
    data1: 1,
    data2: 2
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [this.state.data1, this.state.data2];
    const h = 100;
    const w = 50 * data.length;

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 30)
      .attr('y', (d) => h - 10 * d)
      .attr('width', 25)
      .attr('height', (d) => d * 10)
      .attr('fill', 'green');

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * 30)
      .attr('y', (d) => h - (10 * d) - 3);
  }

  clearChart() {
    d3
      .select('body')
      .selectAll('svg').remove();
  }

  // handleClick = (event: MouseEvent) => {
  //   this.setState(prevState => {
  //     const name: 'data1' | 'data2' = event.target.name;
  //     const value = event.target.value;
  //     return { [event.target.name]: prevState[name] + parseInt(value) > 0 ? prevState[name] + parseInt(value) : 0 }; 
  //   }, () => {
  //     this.clearChart();
  //     this.drawChart();
  //   });

  // }

  render() {
    return (
      <>
        <h2>Bar 1</h2>
        {/* <button name="data1" value="1" onClick={this.handleClick}>+</button>
        <button name="data1" value="-1" onClick={this.handleClick}>-</button>
        <h2>Bar 2</h2>
        <button name="data2" value="1" onClick={this.handleClick}>+</button>
        <button name="data2" value="-1" onClick={this.handleClick}>-</button> */}
      </>
    );
  }
}

export default BarChart;
