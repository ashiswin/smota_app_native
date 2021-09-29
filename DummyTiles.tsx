export const DummyTiles: {[name: string]: TileData[]} = {
  Home: [
    {
      title: 'Mass',
      isLink: false,
      target: 'Mass',
      background: require('./assets/images/1_mass.png'),
      description: undefined,
    },
    {
      title: 'Daily',
      isLink: false,
      target: 'Daily',
      background: require('./assets/images/6_daily.png'),
      description: undefined,
    },
    {
      title: 'Grow',
      isLink: false,
      target: 'Grow',
      background: require('./assets/images/13_giveandgrow.png'),
      description: undefined,
    },
    {
      title: 'Highlights',
      isLink: false,
      target: 'Highlights',
      background: require('./assets/images/6_daily.png'),
      description: undefined,
    },
    {
      title: 'I Want To',
      isLink: false,
      target: 'I Want To',
      background: require('./assets/images/8_LOTWonline.png'),
      description: undefined,
    },
    {
      title: 'Advent',
      isLink: false,
      target: 'Advent',
      background: require('./assets/images/6_daily.png'),
      description: undefined,
    },
  ],
  Mass: [
    {
      title: 'Mass Times',
      isLink: true,
      target: 'https://www.stmary.sg/mass',
      background: require('./assets/images/2_masstimings.png'),
      description: 'Get the latest mass timings.',
    },
    {
      title: 'Mass Registration',
      isLink: true,
      target: 'https://www.mycatholic.sg',
      background: require('./assets/images/3_massregistration.png'),
      description: 'Head over to MyCatholicSG to register for mass.',
    },
    {
      title: 'Sunday Mass',
      isLink: true,
      target: 'https://www.stmary.sg/mass-daily-liturgy',
      background: require('./assets/images/4_sundaymassonline.png'),
      description: "Watch this Sunday's Mass online.",
    },
    {
      title: 'Sunday Readings',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
  ],
  Daily: [
    {
      title: 'Readings',
      isLink: true,
      target: 'https://universalis.com/-700/mass.htm',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Liturgy of the Word',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Saint of the Day',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Rosary',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Divine Mercy',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
  ],
  Grow: [
    {
      title: "Grow with St Mary's",
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: "Grow St Mary's",
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
  ],
  Highlights: [
    {
      title: 'Bulletin',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Highlights',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
  ],
  'I Want To': [
    {
      title: 'Register for RCIA',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Catechism for Children',
      isLink: true,
      target: 'https://www.stmary.sg/faith-and-evangelisation/#catechism',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Give and Support',
      isLink: true,
      target: 'https://www.stmary.sg/give',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Volunteer',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Ask for assistance',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Bless my home',
      isLink: true,
      target: 'https://www.stmary.sg/house-blessing',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Celebrate the Annointing of the Sick',
      isLink: true,
      target: 'https://www.stmary.sg/pastoral-care/#home-communion',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Get Married',
      isLink: true,
      target: 'https://www.stmary.sg/weddings',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
    {
      title: 'Celebrate the Sacrament of Reconciliation',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
  ],
  Advent: [
    {
      title: 'Test',
      isLink: true,
      target: '',
      background: 'https://reactjs.org/logo-og.png',
      description: undefined,
    },
  ],
};

export type TileData = {
  title: string;
  isLink: boolean;
  target: string;
  background: any;
  description?: string;
};
