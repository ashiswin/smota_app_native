export const DummyTiles: { [name: string]: TileData[] } = {
    'Home': [
        {
            title: 'Mass',
            isLink: false,
            target: 'Mass',
        },
        {
            title: 'Daily',
            isLink: false,
            target: 'Daily',
        },
        {
            title: 'Grow',
            isLink: false,
            target: 'Grow',
        },
        {
            title: 'Highlights',
            isLink: false,
            target: 'Highlights',
        },
        {
            title: 'I Want To',
            isLink: false,
            target: 'I Want To',
        },
        {
            title: 'Advent',
            isLink: false,
            target: 'Advent',
        },
    ],
    'Mass': [
        {
            title: 'Mass Times',
            isLink: true,
            target: 'https://www.stmary.sg/mass',
        },
        {
            title: 'Mass Registration',
            isLink: true,
            target: 'https://www.mycatholic.sg',
        },
        {
            title: 'Sunday Mass',
            isLink: true,
            target: 'https://www.stmary.sg/mass-daily-liturgy',
        },
        {
            title: 'Sunday Readings',
            isLink: true,
            target: '',
        }
    ],
    'Daily': [
        {
            title: 'Readings',
            isLink: true,
            target: '',
        },
        {
            title: 'Liturgy of the Word',
            isLink: true,
            target: '',
        },
        {
            title: 'Saint of the Day',
            isLink: true,
            target: '',
        },
        {
            title: 'Rosary',
            isLink: true,
            target: '',
        },
        {
            title: 'Divine Mercy',
            isLink: true,
            target: '',
        },
    ],
    'Grow': [
        {
            title: 'Grow with St Mary\'s',
            isLink: true,
            target: '',
        },
        {
            title: 'Grow St Mary\'s',
            isLink: true,
            target: '',
        },
    ],
    'Highlights': [
        {
            title: 'Bulletin',
            isLink: true,
            target: '',
        },
        {
            title: 'Highlights',
            isLink: true,
            target: '',
        }
    ],
    'I Want To': [
        {
            title: 'Register for RCIA',
            isLink: true,
            target: '',
        },
        {
            title: 'Catechism for Children',
            isLink: true,
            target: '',
        },
        {
            title: 'Give and Support',
            isLink: true,
            target: '',
        },
        {
            title: 'Volunteer',
            isLink: true,
            target: '',
        },
        {
            title: 'Ask for assistance',
            isLink: true,
            target: '',
        },
        {
            title: 'Bless my home',
            isLink: true,
            target: '',
        },
        {
            title: 'Celebrate the Annointing of the Sick',
            isLink: true,
            target: '',
        },
        {
            title: 'Get Married',
            isLink: true,
            target: '',
        },
        {
            title: 'Celebnrate the Sacrament of Reconciliation',
            isLink: true,
            target: '',
        }
    ],
    'Advent': [
        {
            title: 'Test',
            isLink: true,
            target: '',
        }
    ]
}

export type TileData = {
    title: string,
    isLink: boolean,
    target: string,
};