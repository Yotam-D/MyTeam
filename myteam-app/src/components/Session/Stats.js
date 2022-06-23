import React from 'react';
import * as V from 'victory';
import {VictoryPie, VictoryChart,VictoryLabel, VictoryArea, VictoryBar, VictoryAxis} from 'victory';

export default function Stats(props) {
  const whiteStyle = {
    axis: { stroke: "white" },
    axisLabel: { fontSize: 15, padding: 20, fill: "white" },
    tickLabels: { fontSize: 13, padding: 5, fill: "white" } 
  }
  const pieLabels = {
    labels: { fontSize: 30, fill: "white"},
  }

  return (
    <>
        <div className='cards-container'>
          <div className = 'big-graphs'>
            <div className='scatter-container dash-card'>
            <h5 className='card-title'>Goal Distibution</h5>
            <VictoryChart
            domain={{ x: [0, 95], y: [0, 5] }}
              >
                <VictoryArea
                  style={{ data: { fill: 'rgba(255, 255, 255, 0.3)', stroke: "white", strokeWidth: 2, strokeLinecap: "round" } }}
                  interpolation="natural"
                  data={[
                    { x:0, y:1},
                    { x: 16, y: 2 },
                    { x: 25, y: 3 },
                    { x: 35, y: 1.2 },
                    { x: 45, y: 4.7 },
                    { x: 55, y: 2.5 },
                    { x: 65, y: 2 },
                    { x: 75, y: 3 },
                    { x: 85, y: 1 },
                    { x: 95, y: 2 },
                  ]}
                />
                <VictoryAxis domain
                  tickValues={[0, 15, 30, 45, 60, 75, 90]}
                  label = "Minute"
                  style = {whiteStyle}/>
                  <VictoryAxis dependentAxis
                  tickFormat={(x) => (`${x}`)}
                  label = "Avg. Goals"
                  style = {whiteStyle}/>
                  
              </VictoryChart>
            </div>

            <div className='histogram-container dash-card'>
              <h5 className='card-title'>Formations</h5>
              <VictoryChart
                domainPadding={10}
                >
                <VictoryBar
                  data={[
                    { x: 1, y: 2},
                    { x: 2, y: 3},
                    { x: 3, y: 5},
                    { x: 4, y: 4},
                    { x: 5, y: 6 }
                  ]}
                  labels={({ datum }) => datum.y}
                  style={{ labels: { fill: "white" } }}
                  labelComponent={<VictoryLabel dy={30}/>}
                />
                <VictoryAxis domain
                  tickValues={[1, 2, 3, 4, 5, 6, 7]}
                  tickFormat={["4-4-2", "4-4-3", "3-4-3", "4-5-1", "3-5-2", "4-3-1-2", "4-3-2-1"]}
                  style = {whiteStyle}/>
              </VictoryChart>
            </div>

          </div>
          <div className ='small-graphs'>
            <div className = 'pie-container dash-card'>
            <h5 className='card-title'>Matches</h5>
              <VictoryPie
              colorScale={["green", "gray", "red"]}
              innerRadius={110}
              data={[
                {x: "29-W", y: 29},
                {x: "6-D", y: 6},
                {x: "3-L", y: 3}
                ]}
                style={pieLabels}/>
            </div>

            <div className = 'pie-container dash-card'>
              <h5 className='card-title'>Home - Away</h5>
              <VictoryPie
              colorScale={["white", "black"]}
              innerRadius={110}
              data={[
                {x: "18 Home", y: 18},
                {x: "18 Away", y: 18},
                ]}
                style={pieLabels}/>
            </div>

            <div className = 'pie-container dash-card'>
              <h5 className='card-title'>Cards</h5>
              <VictoryPie
                colorScale={["red", "yellow"]}
                padAngle={({ datum }) => datum.y}
                innerRadius={110}
                data={[
                  { x: 1, y: 5, label: "5 Red" },
                  { x: 2, y: 27, label: "27 Yellow" },
                ]}
                style={pieLabels}
              />
            </div>
          </div>
        

          

        </div>
    </>
  )
}
