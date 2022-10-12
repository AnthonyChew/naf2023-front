import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ResponsivePlayer from '../Components/ResponsivePlayer';
import CoverFlow from './CoverFlow';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as SVGExhiBack } from './SVG/SVGExhibitions.svg';
import OdyseeRow from './OdyseeRow';
import Hidden from '@material-ui/core/Hidden';


function MainExhibitionss(props){
//
  return (
    <div>
      
      <SVGExhiBack 
      //aos is for animation
        //data-aos="slide-right"
        //data-aos-duration="1000"
        //data-aos-anchor="#performances"
        style={{
          zIndex: -999,
          top: 450,
          left: 0,
          position: 'absolute',
          overflowY: 'hidden',
        }}
      />
    </div>
  );
}

export default MainExhibitionss;