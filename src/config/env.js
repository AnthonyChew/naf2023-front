
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
    PoetrySuperbowl : 'PoetrySuperbowl' ,
    StyleIt: 'StyleIt' ,
    SilkscreenPainting : 'SilkscreenPainting' ,
    JaguaInkTattoos: 'JaguaInkTattoos' ,
    ArtJamming: 'ArtJamming' ,
    WaxStamping: 'WaxStamping' ,
    JewelleryMaking: 'JewelleryMaking' ,
    JapaneseBookBinding: 'JapaneseBookBinding' ,
    Poetry: 'Poetry' ,
    ContemporaryDance: 'ContemporaryDance' ,
    KpopDance: 'KpopDance' ,
    MalayDance: 'MalayDance' ,
    DancesportAcademy: 'DancesportAcademy' ,
    MiniaturePainting: 'MiniaturePainting' ,
    JazzAndBluesMusic: 'JazzAndBlues' ,
    PopularMusicArrangement: 'PopularMusicArrangementWithTechnology' ,
    TheatreGames: 'TheatreGames' ,
    Collide: 'Collide',
  }

};

module.exports = envConfig;
