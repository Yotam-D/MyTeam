import React from 'react';
import * as V from 'victory';
import {VictoryPie, VictoryLabel, VictoryChart, VictoryTheme, VictoryScatter, VictoryHistogram} from 'victory';

export default function Stats(props) {
  return (
    <>
        <div className='cards-container'>

        <div className = 'pie-container dash-card'>
          <h5 className='card-title'>Matches</h5>
            <VictoryPie
            colorScale={["green", "gray", "red"]}
            innerRadius={90}
            data={[
              {x: "w", y: 33},
              {x: "D", y: 12},
              {x: "L", y: 8}
              ]}
              style={{ labels: { fontSize: 25, fill: "white"}}}
            />

          {/* <VictoryPie
                  colorScale={["green", "gray", "red"]}
                  standalone={false}
                  // width={400} height={400}
                  data={[
                    {x: "w", y: 33},
                    {x: "D", y: 12},
                    {x: "L", y: 8}
                    ]}
                  innerRadius={90} labelRadius={110}
                  style={{ labels: { fontSize: 25 , fill: "white"}}}
          /> */}
          </div>

          <div className = 'pie-container dash-card'>
            <h5 className='card-title'>Home - Away</h5>
            <VictoryPie
            colorScale={["white", "black"]}
            innerRadius={90}
            data={[
              {x: "Home", y: 33},
              {x: "Away", y: 12},
              ]}
              style={{ labels: { fontSize: 25, fill: "white"}}}
            />
          </div>

          <div className = 'pie-container dash-card'>
            <h5 className='card-title'>Cards</h5>
            <VictoryPie
              colorScale={["red", "yellow"]}
              padAngle={({ datum }) => datum.y}
              innerRadius={90}
              data={[
                { x: 1, y: 2, label: "Red" },
                { x: 2, y: 3, label: "Yellow" },
              ]}
              style={{ labels: { fontSize: 20, fill: "white"}}}
            />
          </div>

          <div className='scatter-container dash-card'>
          <h5 className='card-title'>Goal Distibution</h5>
          <VictoryChart
          theme={VictoryTheme.material}
          domain={{ x: [0, 5], y: [0, 7] }}
            >
              <VictoryScatter
                style={{ data: { fill: "#c43a31" } }, { labels: { fill: "white"}}}
                size={7}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                ]}
              />
            </VictoryChart>
          </div>

          <div className='histogram-container dash-card'>
            <h5 className='card-title'>Formations</h5>
            <VictoryChart
              domainPadding={10}
            >
              <VictoryHistogram
                style={{ data: { fill: "#c43a31" } }}
                data={[
                  { x: 1 },
                  { x: 2 },
                  { x: 2 },
                  { x: 4 },
                  { x: 4 },
                  { x: 5 }
                ]}
              />
            </VictoryChart>
          </div>

        </div>
    </>
  )
}
