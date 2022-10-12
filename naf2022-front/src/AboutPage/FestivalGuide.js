import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ReactComponent as About2 } from './About Festival SVGs/about2.svg';
import Hidden from '@material-ui/core/Hidden';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  content: {
    textAlign: 'center',
    // width: '90%',
    margin: 'auto',
    paddingBottom: theme.spacing(16),
  },
}));

export default function FestivalGuide() {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const PDF_VIEWPORT_FACTOR = 0.5;
  const [pdfWidth, setPDFWidth] = useState(
    window.innerWidth * PDF_VIEWPORT_FACTOR
  );

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  window.addEventListener('resize', function () {
    setPDFWidth(window.innerWidth * PDF_VIEWPORT_FACTOR);
  });

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Typography
          align="center"
          variant="h5"
          style={{ color: '#033F63', fontWeight: 'normal' }}
        >
          Festival Guide - Desktop Edition
        </Typography>
        <Grid
          container
          justify="center"
          xs={12}
          style={{ paddingBottom: '10px', paddingTop: '5px' }}
        >
          <Button
            href="NAF22_FESTIVALGUIDE_Draft22_SPREADS.pdf"
            style={{ backgroundColor: '#FEDC97' }}
          >
            Download the Festival Guide Here
          </Button>
        </Grid>

        <div className={classes.content}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            item
            xs={12}
          >
            <Grid
              container
              direction={isXsScreen ? 'column' : 'row'}
              alignItems="center"
              justify="center"
              item
              xs={12}
              spacing={2}
            >
              <Grid item>
                <Button
                  onClick={previousPage}
                  color="secondary"
                  variant="contained"
                  autoFocus
                  disabled={pageNumber <= 1}
                >
                  Previous
                </Button>
              </Grid>
              <Grid item>
                <Document
                  file="NAF22_FESTIVALGUIDE_Draft22_SPREADS.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={console.error}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(Math.max(pdfWidth, 300), 700)}
                  />
                </Document>
              </Grid>
              <Grid item>
                <Button
                  onClick={nextPage}
                  color="secondary"
                  variant="contained"
                  autoFocus
                  disabled={pageNumber >= numPages}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography paragraph>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <Hidden mdUp>
        <Typography
          align="center"
          variant="h5"
          style={{ color: '#033F63', fontWeight: 'normal' }}
        >
          Festival Guide - Mobile Edition
        </Typography>

        <Grid
          container
          justify="center"
          xs={12}
          style={{ paddingBottom: '10px', paddingTop: '5px' }}
        >
          <Button
            href="NAF22_FESTIVALGUIDE_Draft22_PAGES.pdf"
            style={{ backgroundColor: '#FEDC97' }}
          >
            Download the Festival Guide Here
          </Button>
        </Grid>

        <div className={classes.content}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            item
            xs={12}
          >
            <Grid
              container
              direction={isXsScreen ? 'column' : 'row'}
              alignItems="center"
              justify="center"
              item
              xs={12}
              spacing={2}
            >
              <Grid item>
                <Button
                  onClick={previousPage}
                  color="secondary"
                  variant="contained"
                  autoFocus
                  disabled={pageNumber <= 1}
                >
                  Previous
                </Button>
              </Grid>
              <Grid item>
                <Document
                  file="NAF22_FESTIVALGUIDE_Draft22_PAGES.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={console.error}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(Math.max(pdfWidth, 300), 700)}
                  />
                </Document>
              </Grid>
              <Grid item>
                <Button
                  onClick={nextPage}
                  color="secondary"
                  variant="contained"
                  autoFocus
                  disabled={pageNumber >= numPages}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography paragraph>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Hidden>
    </div>
  );
}
