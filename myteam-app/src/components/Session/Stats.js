import React from 'react';
import * as V from 'victory';
import {VictoryPie, VictoryChart,VictoryLabel, VictoryArea, VictoryBar, VictoryAxis} from 'victory';
import Teams from './TeamList.json';

export default function Stats(props) {
  const whiteStyle = {
    axis: { stroke: "white" },
    axisLabel: { fontSize: 15, padding: 20, fill: "white" },
    tickLabels: { fontSize: 13, padding: 5, fill: "white" } 
  }
  const pieLabels = {
    labels: { fontSize: 30, fill: "white"},
  };
  const teamInfo = Teams.find(element => element.team.name === props.currTeam);
  const goalsData = teamInfo.stats.response.goals.for.minute;
  const formationData = (teamInfo.stats.response.lineups).map((item,i)=> {return {x:i+1, y:item.played, form:item.formation}});
  const matchesData = (teamInfo.stats.response.fixtures)
  // console.log('logHERE', cardsData)
  const graphsData = {
    goal_distribution: 
      [
        { x:0, y:goalsData['0-15']['total']},
        { x: 15, y:goalsData['16-30']['total']},
        { x: 30, y:goalsData['31-45']['total']},
        { x: 45, y:goalsData['46-60']['total']},
        { x: 60, y:goalsData['61-75']['total']},
        { x: 75, y:goalsData['76-90']['total']},
        { x: 90, y:goalsData['91-105']['total']}
      ],
    formations:formationData,
  
    matches: 
        [
          {x: `${matchesData.wins.total}-W`, y: matchesData.wins.total},
          {x: `${matchesData.loses.total}-D`, y: matchesData.loses.total},
          {x: `${matchesData.draws.total}-L`, y: matchesData.draws.total}
        ],

    homeAway: 
          [
          {x: `${matchesData.played.home}-Home`, y: matchesData.played.home},
          {x: `${matchesData.played.away}-away`, y: matchesData.played.away},
          ],
    Cards: 
      [
        { x: 1, y: 5, label: "5 Red" },
        { x: 2, y: 27, label: "27 Yellow" },
      ],
  }
    console.log(graphsData)

  return (
    <>
        <div className='cards-container'>
          <div className = 'big-graphs'>
            <div className='scatter-container dash-card'>
            <h5 className='card-title'>Goal Distibution</h5>
            <VictoryChart
            domain={{ x: [0, 95], y: [0, 25] }}
              >
                <VictoryArea
                  style={{ data: { fill: 'rgba(255, 255, 255, 0.3)', stroke: "white", strokeWidth: 2, strokeLinecap: "round" } }}
                  interpolation="natural"
                  data={graphsData.goal_distribution}
                />
                <VictoryAxis domain
                  tickValues={[0, 15, 30, 45, 60, 75, 90]}
                  label = "Minute"
                  style = {whiteStyle}/>
                  <VictoryAxis dependentAxis
                  tickFormat={(x) => (`${x}`)}
                  label = "Goals"
                  style = {whiteStyle}/>
                  
              </VictoryChart>
            </div>

            <div className='histogram-container dash-card'>
              <h5 className='card-title'>Formations</h5>
              <VictoryChart
                domainPadding={1}
                >
                <VictoryBar
                  width={1000}
                  data={graphsData.formations}
                  labels={({ datum }) => datum.y}
                  style={{
                    data: {
                      fill: "white" ,
                      stroke: "white",
                      fillOpacity: 0.4,
                      strokeWidth: 1
                    },
                    labels: {
                      fontSize: 15,
                      fill: "white",
                    }
                  }}
                />
                <VictoryAxis domain
                  tickValues={[1, 2, 3, 4, 5, 6, 7]}
                  tickFormat={graphsData.formations.map(item => item.form)}
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
              data={graphsData.matches}
                style={pieLabels}/>
            </div>

            <div className = 'pie-container dash-card'>
              <h5 className='card-title'>Home - Away</h5>
              <VictoryPie
              colorScale={["white", "black"]}
              innerRadius={110}
              data={graphsData.homeAway}
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
