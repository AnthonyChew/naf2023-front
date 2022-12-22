import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from '../HomePage/Home';
import About from '../AboutPage/About';
import Programmes from '../ProgrammesPage/Programmes';
import Workshops from '../ProgrammesPage/Workshops';
import Events from '../ProgrammesPage/Events';
import MarketPlace from '../MarketPlacePage/MarketPlace';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Payment from '../ShoppingCart/Payment';
import PaymentSuccess from '../ShoppingCart/PaymentSuccess';
import VendorPage from '../MarketPlacePage/VendorPage';
import VendorLogin from '../MarketPlacePage/VendorLogin';
import UserLogin from '../Authentication/UserLogin';
import Profile from '../ProfilePage/Profile';
import Exhibitions from '../ExhibitionsPage/Exhibitions';
import Contests from '../ContestsPage/Contests';
import Performances from '../PerformancesPage/Performances';
import LuckyDrawProggie from '../ContestsPage/LuckyDrawProggie';
import MenuButton from './MenuButton';
import SideDrawerList from './SideDrawerList';
import PublicityDrive from '../PublicityDrive/PublicityDrive';

import Footer from './Footer';
import logo from '../img/EbbAndFlowLogo.png';
import logoText from '../img/FinalLogo_NAF2021MMText-04.png';
import ScrollToTop from './ScrollToTop';
import Committee from '../Committee/Committee';
import Partners from '../Partners/Partners';
import NAFxJDC from '../NAFXCAC/NAFXJDC/NAFxJDC';
import NAFxAFTH from '../NAFXCAC/NAFXAFTH/NAFxAFTH';
import NAFxCS from '../NAFXCAC/NAFXCS/NAFxCS';
import NAFxTOP from '../NAFXCAC/NAFXTOP/NAFxTOP';
import AdminManage from '../AdminInterface/AdminManage';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PrivacyPolicy from './PrivacyPolicy';
import FAQ from './FAQ';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    //...theme.mixins.toolbar,
    // necessary for content to be below app bar used minheight instead because of logo image
    minHeight: '135px',
    justifyContent: 'flex-start',
  },
  drawerHeader2: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    //...theme.mixins.toolbar,
    // necessary for content to be below app bar used minheight instead because of logo image
    minHeight: '50px',
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  logo: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    maxHeight: '90px',
  },
  logoText: {
    maxHeight: 65,
  },
  appBarHeader: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PersistentDrawerRight() {
  const navItems = [
    {
      text: 'HOME',
      nested: false,
      route: '/',
    },
    {
      text: 'ABOUT',
      nested: true,
      items: [
        { text: 'About The Festival', route: '/about' },
        { text: "NAF'22 Main Committee", route: '/maincomm' },
        { text: 'Partners', route: '/partners' },
      ],
    },
    {
      text: 'PROGRAMMES',
      nested: true,
      items: [
        { text: 'Ripple', route: '/Ripple' },
        { text: 'Crest: Exhibitions', route: '/Crest/Cascade' },
        { text: 'Crest: Contests', route: '/contests/stickerOlympia' },
        { text: 'Oasis', route: '/Oasis' },
        { text: 'Surge', route: '/Surge' },
      ],
    },
    {
      text: 'MARKETPLACE',
      nested: false,
      route: '/marketplace',
    },
    {
      text: 'NAF X CAC',
      nested: true,
      items: [
        { text: 'NAF X AFTH', route: '/NAFxAFTH' },
        { text: 'NAF X CS', route: '/NAFxCS' },
        { text: 'NAF X JDC', route: '/NAFxJDC' },
        { text: 'NAF X TOP', route: '/NAFxTOP' },
      ],
    },
    {
      text: 'FAQ',
      nested: false,
      route: '/FAQ',
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const handleDrawerOpen = () => {
    // console.log('open');
    setOpen(true);
    setOpen2(true);
  };

  const handleDrawerClose = () => {
    // console.log('close');
    setOpen(false);
    setOpen2(false);
  };
  const handleClickOutDrawerClose = () => {
    // console.log('close');
    if (open2 === false) {
      setOpen(false);
    } else {
      setOpen2(false);
    }
  };
  const handleOpenContact = () => {
    setOpenContact(!openContact);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          elevation={0}
          style={{ background: '#FDFBE1' }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Link to={'/'}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>

            <Typography variant="h6" noWrap className={classes.title}>
              {/* add title */}
            </Typography>
            <Hidden smDown>
              <div className={classes.appBarHeader}>
                {navItems.map((item, index) =>
                  item.nested ? (
                    <MenuButton
                      key={'i' + index}
                      name={item.text}
                      items={item.items}
                    />
                  ) : (
                    <Button key={'i' + index} component={Link} to={item.route}>
                      {item.text}
                    </Button>
                  )
                )}
              </div>
            </Hidden>
            <IconButton component={Link} to="/Shop">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton component={Link} to="/Profile">
              <PersonIcon />
            </IconButton>

            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Programmes" component={Programmes} />
            <Route path="/Oasis" component={Workshops} />
            <Route path="/MarketPlace" component={MarketPlace} />
            <Route path="/Shop" component={ShoppingCart} />
            <Route path="/Payment" component={Payment} />
            <Route path="/PaymentSuccess" component={PaymentSuccess} />
            <Route path="/VendorPage/:id" component={VendorPage} />
            <Route path="/VendorLogin" component={VendorLogin} />
            <Route path="/UserLogin" component={UserLogin} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Crest/:exhibitionsTab" component={Exhibitions} />
            <Route path="/Ripple" component={PublicityDrive} />
            <Route path="/Surge" component={Performances} />
            <Route path="/Contests/:contestsTab" component={Contests} />
            <Route path="/LuckyDrawProggie" component={LuckyDrawProggie} />
            <Route path="/maincomm" component={Committee} />
            <Route path="/partners" component={Partners} />
            <Route path="/NAFxJDC" component={NAFxJDC} />
            <Route path="/NAFxAFTH" component={NAFxAFTH} />
            <Route path="/NAFxCS" component={NAFxCS} />
            <Route path="/NAFxTOP" component={NAFxTOP} />
            <Route path="/AdminManage" component={AdminManage} />
            <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/FAQ" component={FAQ} />
          </Switch>
        </main>
        <ClickAwayListener onClickAway={handleClickOutDrawerClose}>
          <Drawer
            ModalProps={{ onBackdropClick: handleDrawerClose }}
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader2}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            {/* <Divider /> */}
            <List>
              {navItems.map((item, index) =>
                item.nested ? (
                  <SideDrawerList
                    key={index}
                    name={item.text}
                    items={item.items}
                  />
                ) : (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.route}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                )
              )}
            </List>
          </Drawer>
        </ClickAwayListener>
      </div>
      <Footer />
    </HashRouter>
  );
}
