import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PerformanceRow from './PerformanceRow';
import ResponsivePlayer from '../Components/ResponsivePlayer';
import Hidden from '@material-ui/core/Hidden';

import { ReactComponent as StarBlueLeft } from './SVG/StarBlueLeft.svg';
import { ReactComponent as Vector295 } from './SVG/Vector 295.svg';
import { ReactComponent as Vector292 } from './SVG/Vector 292.svg';
import { ReactComponent as Ellipse96 } from './SVG/Ellipse 96.svg';

const replayData = [
    {
      
      image: 'Jazz and Blues.jpg',
      title: 'SESSION ONE',
      datetime: '15 February 6-8pm',
      desc:
        'Are you longing for some sick beats to end off a dreary day at school? Look no further! In our virtual busking sessions, we’ll be bringing you some of the best musical talents that NTU has to offer. ',
    },
  ];

export default function Replay() {
    return (
        <div>

            <Hidden smDown>
                {/* <StarBlueLeft style={{ zIndex:1, position:'absolute', left:"100px", top:"1010px"}} /> 
                <Ellipse96 style={{ zIndex:1, position:'absolute', left:"400px", top:"1620px"}} />*/}
                <Vector295 style={{ zIndex:1, position:'absolute', right:"0px", top:"1410px"}} />
                <Vector292 style={{ zIndex:1, position:'absolute', right:"0px", top:"1460px"}} />
            </Hidden>

            
            
            

            <Grid container xs={12} 
              style={{backgroundColor:"#28666E",
                      paddingTop: "70px",
                      paddingBottom:"70px",
                      color:"white",
                      }} >
          <Typography
            xs={12}
            data-aos="fade"
            data-aos-duration="1000"
            align="center"
            variant="h3"
            style = {{margin:"auto",
                      paddingBottom:"50px"}}
          >
            Replay
          </Typography>
          
          {replayData.map((item, index) => (
            <PerformanceRow
              key={'perf' + index}
              image={item.image}
              title={item.title}
              desc={item.desc}
            ></PerformanceRow>
          ))}
        </Grid>
        </div>
    );
}     