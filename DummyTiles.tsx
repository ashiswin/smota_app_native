export const DummyTiles: { [name: string]: TileData[] } = {
    'Home': [
        {
            title: 'Mass',
            isLink: false,
            target: 'Mass',
            background: 'https://storage.googleapis.com/material-design/publish/material_v_10/share.png',
        },
        {
            title: 'Daily',
            isLink: false,
            target: 'Daily',
            background: 'https://lh3.googleusercontent.com/Nn_kQBFqOjWSIxbPD2RKIW3RxerG1LzSAvV5_rSPk0gdhooI7vaooyKQRIdb_hKWcBLnwQxOYPQ4O7np6hkt8XaMQItMHWslqtGa=w1064-v0',
        },
        {
            title: 'Grow',
            isLink: false,
            target: 'Grow',
            background: 'https://material.io/archive/guidelines/assets/0BybB4JO78tNpWnRtS1RnaVk3Sjg/02-movement.png',
        },
        {
            title: 'Highlights',
            isLink: false,
            target: 'Highlights',
            background: 'https://material.io/archive/guidelines/assets/0BybB4JO78tNpRlY1eHJ4LTh4ZjQ/01-duration-and-easing.png',
        },
        {
            title: 'I Want To',
            isLink: false,
            target: 'I Want To',
            background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH7UujVKOidjbZOkexn-BdaLZbqG9K7kje1fSFApShsmPq5-uEVSeXJ9CAHlQwCih3_E&usqp=CAU',
        },
        {
            title: 'Advent',
            isLink: false,
            target: 'Advent',
            background: 'https://cdn.wallpapersafari.com/51/45/GjnrRC.jpg',
        },
    ],
    'Mass': [
        {
            title: 'Mass Times',
            isLink: true,
            target: 'https://www.stmary.sg/mass',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Mass Registration',
            isLink: true,
            target: 'https://www.mycatholic.sg',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Sunday Mass',
            isLink: true,
            target: 'https://www.stmary.sg/mass-daily-liturgy',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Sunday Readings',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        }
    ],
    'Daily': [
        {
            title: 'Readings',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Liturgy of the Word',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Saint of the Day',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Rosary',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Divine Mercy',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
    ],
    'Grow': [
        {
            title: 'Grow with St Mary\'s',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Grow St Mary\'s',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
    ],
    'Highlights': [
        {
            title: 'Bulletin',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Highlights',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        }
    ],
    'I Want To': [
        {
            title: 'Register for RCIA',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Catechism for Children',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Give and Support',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Volunteer',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Ask for assistance',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Bless my home',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Celebrate the Annointing of the Sick',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Get Married',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        },
        {
            title: 'Celebnrate the Sacrament of Reconciliation',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        }
    ],
    'Advent': [
        {
            title: 'Test',
            isLink: true,
            target: '',
            background: 'https://reactjs.org/logo-og.png',
        }
    ]
}

export type TileData = {
    title: string,
    isLink: boolean,
    target: string,
    background: string,
};