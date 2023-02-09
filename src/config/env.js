
// Good practice for passing environment variables into the code
// Instead of calling process.env everywhere, import from this file
const envConfig = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  endpoints: {
    workshops: 'workshops',
    products: 'products',
    vendors: 'vendors',
    auth: 'auth',
    students: 'students',
    search: 'search',
    orders: 'orders',
    events: 'events',
    photos: 'photos',
    admin: 'admin',
    home: 'home',
    donations: 'donations',
    image: 'images',
  },
  events : {
    PoetrySuperbowl : 'Poetry Superbowl' ,
    StyleIt: 'Style it in your style' ,
    SilkscreenPainting : 'Silkscreen painting' ,
    JaguaInkTattoos: 'Jagua Ink Tattoos' ,
    ArtJamming: 'Art jamming' ,
    WaxStamping: 'Wax stamping' ,
    JewelleryMaking: 'Jewellery making' ,
    JapaneseBookBinding: 'Japanese book binding' ,
    Poetry: 'Poetry' ,
    ContemporaryDance: 'Contemporary dance' ,
    KpopDance: 'Kpop dance' ,
    MalayDance: 'Malay Dance' ,
    DancesportAcademy: 'Dancesport Academy' ,
    MiniaturePainting: 'Miniature painting' ,
    JazzAndBluesMusic: 'Jazz and Blues music' ,
    PopularMusicArrangement: 'Popular music arrangement with technology' ,
    TheatreGames: 'Theatre games: Engagement through play' ,
    Collide: 'Collide',
  }

};

module.exports = envConfig;
