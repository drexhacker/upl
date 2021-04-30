import bcrypt from 'bcryptjs';

const data = {
  users: [
    // {
    //   name: 'Joshua Franklin',
    //   email: 'admin@drexsoft.xyz',
    //   password: bcrypt.hashSync('Password2020', 8),
    //   isAdmin: true,
    //   isSeller: true,
    //   seller: {
    //     name: 'XiFair',
    //     logo: '/images/j.jpg',
    //     description: 'Admin Officer',
    //     rating: 4.5,
    //     numReviews: 120,
    //   },
    // },
    {
      name: 'UPL Sales',
      email: 'sales@uniqueplumbersug.com',
      password: bcrypt.hashSync('password', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Unique Plumbers',
        logo: '/images/logo.png',
        description: 'Official Sellers',
        rating: 4.0,
        numReviews: 120,
      },
    },
  ],
  services: [
    {
      name: 'Plumbing Engineering',
      image: '/img/services/plumber.webp',
      description: "UNIQUE PLUMBERS' IS A UGANDAN LICENSED PLUMBING CONTRACTOR SPECIALIZING IN NEW COMMERCIAL SERVICE, CUSTOM RESIDENTIAL, ELEGANT REMODELING, DESIGN / BUILD AND UNIQUE SPECIAL PROJECTS. WE PRIDE OURSELVES WITH HONESTY, DEPENDABILITY, QUALITY WORKMANSHIP AND REASONABLE PRICING. OUR CONCERN FOR THE CUSTOMER IS THE KEY TO OUR SUCCESS."
    },
    {
      name: 'Sanitary Engineering',
      image: '/img/services/sanitary.webp',
      description: "AS UNIQUE PLUMBERS, WE ARE DEDICATED TO IMPROVING PUBLIC HEALTH THROUGH SANITARY & WASTEWATER ENGINEERING. REVAMPING SANITATION OF HUMAN COMMUNITIES BY PROVIDING THE REMOVAL AND DISPOSAL OF HUMAN WASTE, AND IN ADDITION TO THE SUPPLY OF SAFE POTABLE WATER."
    },
    {
      name: 'Swimming pools, waterfalls & fountains',
      image: '/img/services/swimming.webp',
      description: "WE CAN TAKE YOUR IDEAS AND CREATE A TANGIBLE DESIGN THAT ADDS TO THE COMFORT AND RELAXATION OF YOUR HOME. WHETHER YOU WANT A CUSTOM SWIMMING POOL, FOUNTAIN TO A SMALL WATERFALL AT THE FRONT DOOR TO A KOI POND OR AN AQUATIC FLOWER GARDEN, WE CAN BUILD IT TO BE BEAUTIFUL AND LONG-LASTING."
    },
    {
      name: 'Rain water harvesting',
      image: '/img/services/rain.webp',
      description: 'WATER IS PROBABLY ONE OF THE MOST VALUABLE RESOURCES AND IT IS IN SHORT SUPPLY. YET WE CONTINUOUSLY WASTE THOUSANDS OF LITRES OF RAINWATER EACH TIME IT RAINS. UNIQUE PLUMBING SERVICES OFFERS AN EASY, AND AFFORDABLE SOLUTION FOR INDIVIDUAL HOME OWNERS, INDUSTRIAL OR COMMERCIAL PROPERTY OWNERS TO TAKE ADVANTAGE OF THIS FREE SUPPLY OF WATER.'
    },
    {
      name: 'Modern irrigation',
      image: '/img/services/irrigation.webp',
      description: 'UNIQUE PLUMBERS PROVIDES IRRIGATION SYSTEMS AND SERVICES LIKE CONDUCTING NEW SPRINKLER SYSTEMS AND REPAIRS FOR BOTH RESIDENTIAL, COMMERCIAL, AND PROPERTY MANAGEMENT CUSTOMERS. WE OFFER YOU THE BEST SERVICES IN ALL ASPECTS OF THE IRRIGATION. OUR IRRIGATION SERVICES INCLUDE: SURFACE IRRIGATION,LOCALIZED IRRIGATION, DRIP IRRIGATION, SPRINKLER IRRIGATION, CENTER PIVOT IRRIGATION, LATERAL MOVE IRRIGATION, SUB-IRRIGATION.'
    },
    {
      name: 'fire fighting',
      image: '/img/services/fire.webp',
      description: 'WE ARE WELL EQUIPPED WITH FULLY TRAINED PERSONNEL CAPABLE OF DESIGNING AND INSTALLING FIRE FIGHTING SYSTEMS UP TO THE REQUISITE STANDARDS, IN MULTISTORY BUILDINGS, INDUSTRIAL BUILDINGS, FACTORIES, BANKS, SCHOOLS, INSTITUTIONAL BUILDINGS, COMMERCIAL COMPLEXES, GROUP HOUSING SOCIETIES, HOTELS ETC.'
    },
    {
      name: 'heating & gas',
      image: '/img/services/heating.webp',
      description: 'ENSURING YOUR HEATING IS WORKING AT ITS’ OPTIMAL LEVEL IS CRUCIAL FOR BOTH COMFORT AND SAVING ON THOSE ALL-IMPORTANT BILLS. WE INSTALL BOTH CENTRAL AND DISTRIBUTED HEATING SYSTEMS.'
    }
  ],
  categories: [
    {
      name: 'PPR PIPES & FITTINGS',
      image: '/images/icons/pipe.svg',
    },
    {
      name: 'PVC PIPES & FITTINGS',
      image: '/images/icons/pipe.svg',
    },
    {
      name: 'GI PIPES & FITTINGS',
      image: '/images/icons/pipe.svg',
    },
    {
      name: 'HDPE PIPES & FITTINGS',
      image: '/images/icons/pipe.svg',
    },
    {
      name: 'BRASS VALVES & FITTINGS',
      image: '/images/icons/pipe.svg',
    },
    {
      name: 'SEPTIC & WATER TANKS',
      image: '/images/icons/pipe.svg',
    }
  ],
  projects: [
    {
      name: 'Proposed alternation and additions to existing Toilets at Aga Khan foundation school',
      client: 'Aga Khan Education services',
      images: ['/img/noimage.jpg'],
      remarks: 'School with 72 Rest Rooms',
      location: 'Old Kampala',
      thumbnail: '/img/noimage.jpg',
      contractor: 'Reliable engineering and decor/UNIQUE PLUMBERS',
      description: 'Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Hera hotel',
      client: 'Ndege Estates',
      images: ['/img/DSC_0248.JPG'],
      remarks: 'Hotel Block with 7No. Floors & 98 Suites(Double/Single), Gym, Spa, Sauna & Steam outlets.',
      location: 'Lubaga road, Kabaka\'s Roundabout',
      thumbnail: '/img/DSC_O248.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing, Firefighting and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Yomi Building',
      client: 'Ndege Estates',
      images: ['/img/noimage.jpg'],
      remarks: '21No. Residencies and Supermarket',
      location: 'Busabala road, Kampala',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Sophie\'s Restaurant',
      client: 'Mr. Ondong James',
      images: ['/img/noimage.jpg'],
      remarks: 'Restaurant and Spa',
      location: 'Kamwokya',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Apartment block',
      client: 'Ndege Estates',
      images: ['/img/DSC_0203.JPG'],
      remarks: '3No. Floors and 15No. Suites',
      location: 'Namirembe, Nabulaga road',
      thumbnail: '/img/DSC_0203.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Judicial service commission offices',
      client: 'Judicial service commision',
      images: ['/img/noimage.jpg'],
      remarks: '3No. Floors Offices',
      location: 'Lotis Tower, Nakasero',
      thumbnail: '/img/noimage.jpg',
      contractor: 'Reliable Engineering and Decor/UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Myvanga Unisex Salon',
      client: '',
      images: ['/img/MYVANGA.jpg'],
      remarks: '2No. Floors with Massage Machines and Head Sinks',
      location: 'Uganda',
      thumbnail: '/img/MYVANGA.jpg',
      contractor: 'Reliable Engineering and Decor/UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Shoprite Acacia Mall',
      client: 'Shoprite Uganda',
      images: ['/img/noimage.jpg'],
      remarks: '21No. Residencies and Supermarket',
      location: 'Kamwokya',
      thumbnail: '/img/noimage.jpg',
      contractor: 'Soleco construction co. Limited/UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Humura Hotel',
      client: 'Humura Hotel',
      images: ['/img/humura.jpg'],
      remarks: 'Luxury bar, Water falls and offices',
      location: 'Yusuf Lule road',
      thumbnail: '/img/humura.jpg',
      contractor: 'Roko construction/Reliable Engineering and Decor/UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Endiro cafe',
      client: 'Madam Gloria',
      images: ['/img/noimage.jpg'],
      remarks: 'Coffee cafe',
      location: 'Muyenga tank hill road',
      thumbnail: '/img/noimage.jpg',
      contractor: 'Reliable engineering and decor/UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'NBH Building',
      client: 'Ndege Estates',
      images: ['/img/noimage.jpg'],
      remarks: '4No. Floors with Commercial Shops, Health Club and 14No. Residences',
      location: 'Busabala road, Kampala',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Private residential',
      client: 'Mr. Ssetongo Charles',
      images: ['/img/noimage.jpg'],
      remarks: '2No. Floors, Lounge and 4 Bedrooms',
      location: 'Kisugu',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Appartment Block',
      client: 'Mr. John Magezi',
      images: ['/img/DSC_0222.JPG'],
      remarks: '3No. Floors and 14No. Suites',
      location: 'Bulange, Sentema road',
      thumbnail: '/img/DSC_0222.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'GNS Plaza',
      client: 'GNS',
      images: ['/img/noimage.jpg'],
      remarks: 'Multi storied Building with Hotel rooms, gym and cinema halls',
      location: 'Old Kampala',
      thumbnail: '/img/noimage.jpg',
      contractor: 'Reliable engineering and decor/UNIQUE PLUMBERS',
      description: 'Complete Installation of 5x36cubic meter grass panel water tanks for firefighting and water supply',
      isCompleted: true
    },
    {
      name: 'Headmaster Hair and Makeup studio',
      client: 'Mr. Shafiq R.',
      images: ['/img/HEADMASTER.jpg'],
      remarks: 'Massage, Steam Machines and Head Sinks',
      location: 'Uganda',
      thumbnail: '/img/HEADMASTER.jpg',
      contractor: 'Reliable engineering and decor/UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Rock Christian Nursery and primary school',
      client: 'Rock Christian School',
      images: ['/img/noimage.jpg'],
      remarks: '2No. Floors with 7No. Classrooms.',
      location: 'Kitemu, Rabai Estate',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Serviced Residential',
      client: 'Mr Luganda George',
      images: ['/img/DSC_0039.JPG'],
      remarks: '2No. Floors, Louge, 5No. bedrooms and Swimming Pool.',
      location: 'Najeera',
      thumbnail: '/img/DSC_0039.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Private Residential House',
      client: 'Mr. Lubwama Geoffrey',
      images: ['/img/noimage.jpg'],
      remarks: '2No. Floors, Swimming Pool, Water Fountains, Lounge and 7No.Bedrooms.',
      location: 'Kampala',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Apartment Block',
      client: 'Mrs. Christine Namutanda',
      images: ['/img/noimage.jpg'],
      remarks: '4No.Floors and 16 Suites.',
      location: 'Bweyogere, Kirinya',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing, Firefighting and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Residential Houses',
      client: 'Afande Mungereza',
      images: ['/img/noimage.jpg'],
      remarks: '4No. Block(each with 2No. Floors & 4 Suites)',
      location: 'Bweyogerere, Butto',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed Serviced Apartment Block',
      client: 'Mr. Kamyuka Julius',
      images: ['/img/DSC_0033.JPG'],
      remarks: '3No. Floors & 6 Suites, Water Fountain & Swimming Pool',
      location: 'Kyanja',
      thumbnail: '/img/DSC_0033.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: true
    },
    {
      name: 'Proposed serviced residential Houses',
      client: 'Mr. Luganda George',
      images: ['/img/noimage.jpg'],
      remarks: '5No. Blocks each with Louge and 4 bedrooms, Swimming Pool.',
      location: 'Kiwatule, Kampala',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed Annex Apartment Block',
      client: 'Mr. John Magezi',
      images: ['/img/DSC_0241.JPG'],
      remarks: '1No. Block, 3No. floors and 14No. Suites.',
      location: 'Bulange, Sentamu road',
      thumbnail: '/img/DSC_0241.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed Apartment Block',
      client: 'Ndege Estates',
      images: ['/img/DSC_0179.JPG'],
      remarks: '1No. block, 3No. floors and 18No. apartments',
      location: 'Namirembe, Nabulagala road',
      thumbnail: '/img/DSC_0179.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed residential',
      client: 'Ms. Tino Harriet',
      images: ['/img/noimage.jpg'],
      remarks: '2No. Floors with Lounge and 7No. bedrooms',
      location: 'Gayaza Manyangwa, Plot 147-148',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Bukoto Private Residence',
      client: 'Mr. Ssegujja Deo',
      images: ['/img/DSC_0072.JPG'],
      remarks: '2No. floors with lounge and 5No. bedrooms.',
      location: 'Bukoto',
      thumbnail: '/img/DSC_0072.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Sseguku Apartment block',
      client: 'Mr. Julius/DK Kibaya Construction limited',
      images: ['/img/Seguku.jpg'],
      remarks: '2No. Apartment Blocks',
      location: 'Entebbe road',
      thumbnail: '/img/Seguku.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Kyanja Mall',
      client: 'B&L Development limited',
      images: ['/img/20201218_190253.jpg'],
      remarks: '3No. Floor, 2No. basements with Commercial Shops, Supermarket and Banks.',
      location: 'Plot 5144, Kyanja Kampala',
      thumbnail: '/img/20201218_190253.jpg',
      contractor: 'Reliable engineering and decor/UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed Serviced Bini Boni Residences (Extension)',
      client: 'Bini Boni Residences',
      images: ['/img/noimage.jpg'],
      remarks: '1No. block, 4No. floors, swimming pool and 24 suites.',
      location: 'Bukasa Muyenga',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing, Irrigation, Firefighting and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed apartment block',
      client: 'Mr. John Magezi',
      images: ['/img/noimage.jpg'],
      remarks: '1No. block, 3No. floors and 14No. Apartments',
      location: 'Bulange, Ssentamu road annex 2',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed residential',
      client: 'Ms. Linda',
      images: ['/img/DSC_0013.JPG'],
      remarks: '2No. Floors with louge and 6No. Bedrooms',
      location: 'Kira Town',
      thumbnail: '/img/DSC_0013.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed serviced apartment',
      client: 'Mr. Moses',
      images: ['/img/DSC_0120.JPG'],
      remarks: '3No. Floors and 6No. Suites',
      location: 'Kisaasi Apartment',
      thumbnail: '/img/DSC_0120.JPG',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed Bini Boni Residences Extension Block',
      client: 'Ms. Sarah',
      images: ['/img/noimage.jpg'],
      remarks: '4No. Floors and 24No. Service Apartments',
      location: 'Bukasa, Muyenga-Kampala',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed Development Residential House',
      client: 'Mr. Ssengendo Sulaiman',
      images: ['/img/noimage.jpg'],
      remarks: '1No. Floor, Swimming Pool, Lounge and 5 Bedrooms',
      location: 'Nakirebe, Masaka Road',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed Development Residential House',
      client: 'Mr. Ssendawula Andrew',
      images: ['/img/noimage.jpg'],
      remarks: '1No. Floor, Swimming Pool, Lounge and 5 Bedrooms',
      location: 'Nakirebe, Masaka road',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    },
    {
      name: 'Proposed Serviced Residential Block',
      client: 'Ndege Estates',
      images: ['/img/noimage.jpg'],
      remarks: '1No. Floor with 6 Suites',
      location: 'Naguru (Opp. Skyz Hotel)',
      thumbnail: '/img/noimage.jpg',
      contractor: 'UNIQUE PLUMBERS',
      description: 'Complete Plumbing and Sanitary Installation',
      isCompleted: false
    }
  ],
  products: [
    {
      "name": "BRASS ANGLE VALVE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-angle-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 13900
        }
      ],
      "countInStock": 9,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS BIB TAP",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-bib-tap.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 14400
        },
        {
          "size": "3/4 inch",
          "price": 21700
        },
        {
          "size": "1 inch",
          "price": 31200
        },
      ],
      "countInStock": 37,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS DP FLOAT VALVE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-dp-float-valve.jpg",
      "sizes": [
        {
          "size": "1-1/2 inch",
          "price": 110000
        },
        {
          "size": "2 inch",
          "price": 123800
        },
        {
          "size": "2-1/2 inch",
          "price": 214000
        },
        {
          "size": "4 inch",
          "price": 705100
        },
        {
          "size": "3 inch (FLANGE)",
          "price": 674400
        },
        {
          "size": "4 inch (FLANGE)",
          "price": 945300
        },
      ],
      "countInStock": 48,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS EXHAUST VALVES",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-exhaust-valves.png",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 20000
        },
        {
          "size": "3/4 inch",
          "price": 35000
        },
        {
          "size": "1 inch",
          "price": 40000
        },
      ],
      "countInStock": 92,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS FERRULE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-ferrule.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 36000
        },
        {
          "size": "3/4 inch",
          "price": 41500
        },
      ],
      "countInStock": 0,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS FLEXIBLE TUBE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-flexible-tube.jpg",
      "sizes": [
        {
          "size": "1/2 inchX1FT",
          "price": 4200
        },
        {
          "size": "1/2 inchX1.5FT",
          "price": 6200
        },
        {
          "size": "1/2 inchX2FT",
          "price": 8500
        },
        {
          "size": "3/4 inchX1",
          "price": 12100
        },
      ],
      "countInStock": 5,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS FLOAT / BALL VALVE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-float_ball-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 20100
        },
        {
          "size": "3/4 inch",
          "price": 30300
        },
        {
          "size": "1 inch",
          "price": 49800
        },
        {
          "size": "1-1/4 inch",
          "price": 88400
        },
        {
          "size": "1-1/2 inch",
          "price": 92500
        },
        {
          "size": "2 inch",
          "price": 205000
        }
      ],
      "countInStock": 65,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS FOOT VALVE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-foot-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 9600
        },
        {
          "size": "3/4 inch",
          "price": 21700
        },
        {
          "size": "1 inch",
          "price": 22400
        },
        {
          "size": "1-1/4 inch",
          "price": 29700
        },
        {
          "size": "1-1/2 inch",
          "price": 46500
        },
        {
          "size": "2 inch",
          "price": 139900
        },
        {
          "size": "2-1/2 inch",
          "price": 201400
        },
        {
          "size": "4 inch",
          "price": 345200
        },
      ],
      "countInStock": 77,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS GATE VALVE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-gate-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 15100
        },
        {
          "size": "3/4 inch",
          "price": 24300
        },
        {
          "size": "1 inch",
          "price": 36600
        },
        {
          "size": "1-1/4 inch",
          "price": 56300
        },
        {
          "size": "1-1/2 inch",
          "price": 70200
        },
        {
          "size": "2 inch",
          "price": 102900
        },
        {
          "size": "2-1/2 inch",
          "price": 194200
        },
        {
          "size": "3 inch",
          "price": 258900
        },
        {
          "size": "4 inch",
          "price": 435000
        }
      ],
      "countInStock": 86,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS GLOBE VALVE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-globe-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 15800
        },
        {
          "size": "3/4 inch",
          "price": 24300
        },
        {
          "size": "1 inch",
          "price": 31200
        },
        {
          "size": "1-1/4 inch",
          "price": 54100
        },
        {
          "size": "1-1/2 inch",
          "price": 80300
        },
        {
          "size": "2 inch",
          "price": 135000
        },
        {
          "size": "2-1/2 inch",
          "price": 280000
        },
        {
          "size": "3 inch",
          "price": 411500
        },
        {
          "size": "4 inch",
          "price": 622900
        }
      ],
      "countInStock": 40,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS LOCKABLE TAP",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-lockable-tap.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 18
        },
        {
          "size": "3/4 inch",
          "price": 24300
        }
      ],
      "countInStock": 22,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS NON RETURN / CHECK VALVES FLOP",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-non-return_check-valves-flop.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 14400
      },
      {
          "size": "3/4 inch",
          "price": 22700
      },
      {
          "size": "1 inch",
          "price": 35500
      },
      {
          "size": "1-1/4 inch",
          "price": 53300
      },
      {
          "size": "1-1/2 inch",
          "price": 68900
      },
      {
          "size": "2 inch",
          "price": 111900
      },
      {
          "size": "2-1/2 inch",
          "price": 181900
      },
      {
          "size": "3 inch",
          "price": 251700
      },
      {
          "size": "4 inch",
          "price": 454200
      }
      ],
      "countInStock": 46,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS NON RETURN / CHECK VALVES SPRING",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-non-return_check-valves-spring.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 12100
      },
      {
          "size": "3/4 inch",
          "price": 23800
      },
      {
          "size": "1 inch",
          "price": 40000
      },
      {
          "size": "1-1/4 inch",
          "price": 53300
      },
      {
          "size": "1-1/2 inch",
          "price": 70700
      },
      {
          "size": "2 inch",
          "price": 86600
      },
      {
          "size": "2-1/2 inch",
          "price": 181900
      },
      {
          "size": "3 inch",
          "price": 251700
      },
      {
          "size": "4 inch",
          "price": 454200
      }
      ],
      "countInStock": 3,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS PRESSURE REDUCER VALVE",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-pressure-red-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 45000
      },
      {
          "size": "3/4 inch",
          "price": 52000
      },
      {
          "size": "1 inch",
          "price": 85000
      },
      {
          "size": "1-1/4 inch",
          "price": 110000
      },
      {
          "size": "1-1/2 inch",
          "price": 175000
      },
      {
          "size": "2 inch",
          "price": 210000
      }
      ],
      "countInStock": 62,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS STRAINER",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-strainer.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 15000
      },
      {
          "size": "3/4 inch",
          "price": 26000
      },
      {
          "size": "1 inch",
          "price": 0
      },
      {
          "size": "1-1/4 inch",
          "price": 58000
      },
      {
          "size": "1-1/2 inch",
          "price": 70000
      },
      {
          "size": "2 inch",
          "price": 110000
      },
      {
          "size": "2-1/2 inch",
          "price": 220000
      },
      {
          "size": "3 inch",
          "price": 330000
      },
      {
          "size": "4 inch",
          "price": 500000
      }
      ],
      "countInStock": 43,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "BRASS WATER METER",
      "category": "607ab65eff64564c9f9c90c6",
      "image": "/img/prod/brass-water-meter.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 53300
      },
      {
          "size": "3/4 inch",
          "price": 70400
      },
      {
          "size": "1 inch",
          "price": 100400
      },
      {
          "size": "1-1/4 inch",
          "price": 194700
      },
      {
          "size": "1-1/2 inch",
          "price": 270400
      },
      {
          "size": "2 inch",
          "price": 411500
      },
      {
          "size": "3 inch",
          "price": 594900
      },
      {
          "size": "4 inch",
          "price": 757100
      },
      {
          "size": "6 inch",
          "price": 1757100
      }
      ],
      "countInStock": 55,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GENTEX SEPTIC TANK",
      "category": "607ab65eff64564c9f9c90c7",
      "image": "/img/prod/gentex-septic-tank.jpg",
      "sizes": [
        {
          "size": "2000LTR",
          "price": 977000
        },
        {
          "size": "3000LTR",
          "price": 1388000
        }
      ],
      "countInStock": 0,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GENTEX WATER TANK",
      "category": "607ab65eff64564c9f9c90c7",
      "image": "/img/prod/gentex-water-tank.png",
      "sizes": [
        {
          "size": "250LTR",
          "price": 70000
        },
        {
          "size": "500LTR",
          "price": 120000
        },
        {
          "size": "1000LTR",
          "price": 200000
        },
        {
          "size": "1500LTR",
          "price": 310000
        },
        {
          "size": "2000LTR",
          "price": 370000
        },
        {
          "size": "2500LTR",
          "price": 497000
        },
        {
          "size": "3000LTR",
          "price": 554000
        },
        {
          "size": "4000LTR",
          "price": 835000
        },
        {
          "size": "5000LTR",
          "price": 897000
        },
        {
          "size": "8000LTR",
          "price": 1632000
        },
        {
          "size": "1000LTR",
          "price": 2017000
        }
      ],
      "countInStock": 87,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI 90 DEGREE ELBOW",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-90-degree-elbow.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1500
        },
        {
          "size": "3/4 inch",
          "price": 2000
        },
        {
          "size": "1 inch",
          "price": 3200
        },
        {
          "size": "1-1/4 inch",
          "price": 6000
        },
        {
          "size": "1-1/2 inch",
          "price": 0
        },
        {
          "size": "2 inch",
          "price": 11000
        },
        {
          "size": "2-1/2 inch",
          "price": 22800
        },
        {
          "size": "3 inch",
          "price": 35300
        },
        {
          "size": "4 inch",
          "price": 60600
        },
        {
          "size": "5 inch",
          "price": 158700
        },
        {
          "size": "6 inch",
          "price": 275900
        }
      ],
      "countInStock": 52,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI BACK NUT",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-back-nut.jpg",
      "sizes": [{
        "size": "1/2 inch",
        "price": 1400
      },
      {
        "size": "3/4 inch",
        "price": 1400
      },
      {
        "size": "1 inch",
        "price": 1800
      },
      {
        "size": "1-1/4 inch",
        "price": 2200
      },
      {
        "size": "1-1/2 inch",
        "price": 2800
      },
      {
        "size": "2 inch",
        "price": 4100
      },
      {
        "size": "2-1/2 inch",
        "price": 8200
      },
      {
        "size": "3 inch",
        "price": 19500
      },
      {
        "size": "4 inch",
        "price": 30300
      }
      ],
      "countInStock": 54,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI CROSS TEE",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-cross-tee.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 4300
        },
        {
          "size": "3/4 inch",
          "price": 6000
        },
        {
          "size": "1 inch",
          "price": 8700
        },
        {
          "size": "1-1/4 inch",
          "price": 12000
        },
        {
          "size": "1-1/2 inch",
          "price": 17400
        },
        {
          "size": "2 inch",
          "price": 24600
        },
        {
          "size": "2-1/2 inch",
          "price": 54100
        },
        {
          "size": "3 inch",
          "price": 77100
        },
        {
          "size": "4 inch",
          "price": 140600
        }
      ],
      "countInStock": 98,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI ELBOW 45 DEGREE",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-elbow-45-degree.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1800
        },
        {
          "size": "3/4 inch",
          "price": 2100
        },
        {
          "size": "1 inch",
          "price": 2900
        },
        {
          "size": "1-1/4 inch",
          "price": 6200
        },
        {
          "size": "1-1/2 inch",
          "price": 8200
        },
        {
          "size": "2 inch",
          "price": 9800
        },
        {
          "size": "2-1/2 inch",
          "price": 27900
        },
        {
          "size": "3 inch",
          "price": 45800
        },
        {
          "size": "4 inch",
          "price": 47900
        },
        {
          "size": "6 inch",
          "price": 241600
        }
      ],
      "countInStock": 41,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI END CAP",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-end-cap.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1400
        },
        {
          "size": "3/4 inch",
          "price": 1700
        },
        {
          "size": "1 inch",
          "price": 2600
        },
        {
          "size": "1-1/4 inch",
          "price": 4000
        },
        {
          "size": "1-1/2 inch",
          "price": 5000
        },
        {
          "size": "2 inch",
          "price": 6700
        },
        {
          "size": "2-1/2 inch",
          "price": 14200
        },
        {
          "size": "3 inch",
          "price": 20900
        },
        {
          "size": "4 inch",
          "price": 33200
        }
      ],
      "countInStock": 64,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI HEX NIPPLE",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-hex-nipple.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1300
        },
        {
          "size": "3/4 inch",
          "price": 1700
        },
        {
          "size": "1 inch",
          "price": 2400
        },
        {
          "size": "1-1/4 inch",
          "price": 3600
        },
        {
          "size": "1-1/2 inch",
          "price": 5000
        },
        {
          "size": "2 inch",
          "price": 7200
        },
        {
          "size": "2-1/2 inch",
          "price": 14700
        },
        {
          "size": "3 inch",
          "price": 24600
        },
        {
          "size": "4 inch",
          "price": 38000
        },
        {
          "size": "5 inch",
          "price": 58500
        },
        {
          "size": "6 inch",
          "price": 95400
        }
      ],
      "countInStock": 13,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI JUBILLE CLIPS",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-jubille-clips.jpg",
      "sizes": [
        {
          "size": "1/2 inchX8mm",
          "price": 1000
        },
        {
          "size": "3/4 inchX8mm",
          "price": 1000
        },
        {
          "size": "1 inchX8mm",
          "price": 1500
        }
      ],
      "countInStock": 94,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI LONG SCREW",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-long-screw.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 5900
        },
        {
          "size": "3/4 inch",
          "price": 7700
        },
        {
          "size": "1 inch",
          "price": 10900
        },
        {
          "size": "1-1/4 inch",
          "price": 14400
        },
        {
          "size": "1-1/2 inch",
          "price": 19500
        },
        {
          "size": "2 inch",
          "price": 21700
        },
        {
          "size": "2-1/2 inch",
          "price": 39000
        },
        {
          "size": "3 inch",
          "price": 66300
        },
        {
          "size": "4 inch",
          "price": 112500
        }
      ],
      "countInStock": 74,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI MALE AND FEMALE BEND",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-male-and-female-bend.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 3100
        },
        {
          "size": "3/4 inch",
          "price": 3900
        },
        {
          "size": "1 inch",
          "price": 6000
        },
        {
          "size": "1-1/4 inch",
          "price": 9800
        },
        {
          "size": "1-1/2 inch",
          "price": 13300
        },
        {
          "size": "2 inch",
          "price": 21700
        },
        {
          "size": "2-1/2 inch",
          "price": 48800
        },
        {
          "size": "3 inch",
          "price": 75800
        },
        {
          "size": "4 inch",
          "price": 146100
        },
        {
          "size": "5 inch",
          "price": 316900
        },
        {
          "size": "6 inch",
          "price": 189100
        }
      ],
      "countInStock": 92,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI MALE AND FEMALE SOCKET",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-male-and-female-socket.jpg.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 2000
        },
        {
          "size": "3/4 inch",
          "price": 2500
        }
      ],
      "countInStock": 64,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI OVER JUMP",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-over-jump.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 5000
        },
        {
          "size": "3/4 inch",
          "price": 7700
        },
        {
          "size": "1 inch",
          "price": 9600
        },
        {
          "size": "1-1/4 inch",
          "price": 9000
        },
        {
          "size": "1-1/2 inch",
          "price": 13300
        },
        {
          "size": "2 inch",
          "price": 14900
        }
      ],
      "countInStock": 39,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI PIPE REDUCING TEE",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-pipe-reducing-tee.jpg",
      "sizes": [
        {
          "size": "1/2 X 3/4 inch",
          "price": 4200
        },
        {
          "size": "1 X 1/2 inch",
          "price": 5000
        },
        {
          "size": "1X3/4 inch",
          "price": 5000
        },
        {
          "size": "1-1/4X1/2 inch",
          "price": 9400
        },
        {
          "size": "1-1/4X3/4 inch",
          "price": 10100
        },
        {
          "size": "1-1/4X1 inch",
          "price": 10100
        },
        {
          "size": "1-1/2X1/2 inch",
          "price": 11800
        },
        {
          "size": "1-1/2X3/4 inch",
          "price": 11800
        },
        {
          "size": "1-1/2X1 inch",
          "price": 11800
        },
        {
          "size": "2X1/2 inch",
          "price": 13300
        },
        {
          "size": "2X3/4 inch",
          "price": 13300
        },
        {
          "size": "2X1 inch",
          "price": 15200
        },
        {
          "size": "2-1/2X1 inch",
          "price": 16300
        },
        {
          "size": "2-1/2X2 inch",
          "price": 28200
        },
        {
          "size": "3X2 inch",
          "price": 47900
        },
        {
          "size": "4X1 inch",
          "price": 56600
        },
        {
          "size": "4X2 inch",
          "price": 56600
        }
      ],
      "countInStock": 22,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI PIPE",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-pipe.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 42000
        },
        {
          "size": "3/4 inch",
          "price": 58500
        },
        {
          "size": "1 inch",
          "price": 71400
        },
        {
          "size": "1-1/4 inch",
          "price": 105000
        },
        {
          "size": "1-1/2 inch",
          "price": 120000
        },
        {
          "size": "2 inch",
          "price": 162300
        },
        {
          "size": "2-1/2 inch",
          "price": 250000
        },
        {
          "size": "3 inch",
          "price": 300000
        },
        {
          "size": "4 inch",
          "price": 520700
        },
        {
          "size": "6 inch",
          "price": 799800
        }
      ],
      "countInStock": 63,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI PLUG",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-plug.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1200
        },
        {
          "size": "3/4 inch",
          "price": 1300
        },
        {
          "size": "1 inch",
          "price": 1700
        },
        {
          "size": "1-1/4 inch",
          "price": 2600
        },
        {
          "size": "1-1/2 inch",
          "price": 3000
        },
        {
          "size": "2 inch",
          "price": 4300
        },
        {
          "size": "2-1/2 inch",
          "price": 8700
        },
        {
          "size": "3 inch",
          "price": 21700
        },
        {
          "size": "4 inch",
          "price": 26600
        },
        {
          "size": "5 inch",
          "price": 79600
        }
      ],
      "countInStock": 55,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI REDUCE BUSH",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-reduce-bush.jpg",
      "sizes": [
        {
          "size": "1/2 X 3/4 inch",
          "price": 1500
        },
        {
          "size": "1 X 1/2 inch",
          "price": 2200
        },
        {
          "size": "1X3/4 inch",
          "price": 2500
        },
        {
          "size": "1-1/4X1/2 inch",
          "price": 4000
        },
        {
          "size": "1-1/4X3/4 inch",
          "price": 3900
        },
        {
          "size": "1-1/4X1 inch",
          "price": 3900
        },
        {
          "size": "1-1/2X1/2 inch",
          "price": 6400
        },
        {
          "size": "1-1/2X3/4 inch",
          "price": 5100
        },
        {
          "size": "1-1/2X1 inch",
          "price": 5300
        },
        {
          "size": "1-1/2X1-1/4 inch",
          "price": 5100
        },
        {
          "size": "2X1/2 inch",
          "price": 6500
        },
        {
          "size": "2X3/4 inch",
          "price": 6500
        },
        {
          "size": "2X1 inch",
          "price": 6500
        },
        {
          "size": "2X1/4 inch",
          "price": 6500
        },
        {
          "size": "2X1/2 inch",
          "price": 6500
        },
        {
          "size": "2-1/2X1/2 inch",
          "price": 11500
        },
        {
          "size": "2-1/2X3/4 inch",
          "price": 11800
        },
        {
          "size": "2-1/2X1 inch",
          "price": 11500
        },
        {
          "size": "2-1/2X1-1/4 inch",
          "price": 11500
        },
        {
          "size": "2-1/2X1-1/2 inch",
          "price": 11800
        },
        {
          "size": "2-1/2X2 inch",
          "price": 11500
        },
        {
          "size": "3X1 inch",
          "price": 17400
        },
        {
          "size": "3X2 inch",
          "price": 17400
        },
        {
          "size": "4X1 inch",
          "price": 31500
        },
        {
          "size": "4X2 inch",
          "price": 31500
        },
        {
          "size": "4X3 inch",
          "price": 31500
        },
        {
          "size": "6X3 inch",
          "price": 63700
        },
        {
          "size": "6X4 inch",
          "price": 81200
        }
      ],
      "countInStock": 56,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI REDUCER ELBOW",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-reducer-elbow.jpg",
      "sizes": [
        {
          "size": "1/2 X 3/4 inch",
          "price": 2100
        },
        {
          "size": "1 X 1/2 inch",
          "price": 2700
        },
        {
          "size": "1X3/4 inch",
          "price": 2700
        }
      ],
      "countInStock": 77,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI REDUCER HEX NIPPLE",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-reducer-hex-nipple.jpg",
      "sizes": [
        
        {
          "size": "1/2 X 3/4 inch",
          "price": 2700
        },
        {
          "size": "1 X 1/2 inch",
          "price": 3400
        },
        {
          "size": "1X3/4 inch",
          "price": 3400
        }
      ],
      "countInStock": 75,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI REDUCER SOCKET",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-reducer-socket.jpg",
      "sizes": [
        {
          "size": "1/2 X 3/4 inch",
          "price": 2000
        },
        {
          "size": "1 X 1/2 inch",
          "price": 2800
        },
        {
          "size": "1X3/4 inch",
          "price": 2900
        },
        {
          "size": "1-1/4X1/2 inch",
          "price": 4200
        },
        {
          "size": "1-1/4X3/4 inch",
          "price": 5000
        },
        {
          "size": "1-1/4X1 inch",
          "price": 4400
        },
        {
          "size": "1-1/2X1/2 inch",
          "price": 5300
        },
        {
          "size": "1-1/2X3/4 inch",
          "price": 5000
        },
        {
          "size": "1-1/2X1 inch",
          "price": 5500
        },
        {
          "size": "1-1/2X1-1/4 inch",
          "price": 5000
        },
        {
          "size": "2X1/2 inch",
          "price": 8700
        },
        {
          "size": "2X3/4 inch",
          "price": 8700
        },
        {
          "size": "2X1 inch",
          "price": 8700
        },
        {
          "size": "2X1/4 inch",
          "price": 8700
        },
        {
          "size": "2X1/2 inch",
          "price": 8700
        },
        {
          "size": "2-1/2X1/2 inch",
          "price": 17400
        },
        {
          "size": "2-1/2X3/4 inch",
          "price": 17400
        },
        {
          "size": "2-1/2X1 inch",
          "price": 17400
        },
        {
          "size": "3X3/4 inch",
          "price": 24600
        },
        {
          "size": "3X2 inch",
          "price": 26000
        },
        {
          "size": "4X2 inch",
          "price": 48800
        }
      ],
      "countInStock": 8,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI SOCKET",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-socket.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1400
        },
        {
          "size": "3/4 inch",
          "price": 1700
        },
        {
          "size": "1 inch",
          "price": 2700
        },
        {
          "size": "1-1/4 inch",
          "price": 3900
        },
        {
          "size": "1-1/2 inch",
          "price": 4700
        },
        {
          "size": "2 inch",
          "price": 7200
        },
        {
          "size": "2-1/2 inch",
          "price": 13600
        },
        {
          "size": "3 inch",
          "price": 23800
        },
        {
          "size": "4 inch",
          "price": 36800
        },
        {
          "size": "5 inch",
          "price": 104100
        },
        {
          "size": "6 inch",
          "price": 92000
        }
      ],
      "countInStock": 16,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI TEE",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-tee.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1900
        },
        {
          "size": "3/4 inch",
          "price": 2700
        },
        {
          "size": "1 inch",
          "price": 4000
        },
        {
          "size": "1-1/4 inch",
          "price": 7200
        },
        {
          "size": "1-1/2 inch",
          "price": 8700
        },
        {
          "size": "2 inch",
          "price": 15200
        },
        {
          "size": "2-1/2 inch",
          "price": 36800
        },
        {
          "size": "3 inch",
          "price": 44400
        },
        {
          "size": "4 inch",
          "price": 80100
        },
        {
          "size": "5 inch",
          "price": 199000
        },
        {
          "size": "6 inch",
          "price": 281200
        }
      ],
      "countInStock": 25,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "GI UNION",
      "category": "607ab65eff64564c9f9c90c4",
      "image": "/img/prod/gi-union.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 4400
        },
        {
          "size": "3/4 inch",
          "price": 6400
        },
        {
          "size": "1 inch",
          "price": 7200
        },
        {
          "size": "1-1/4 inch",
          "price": 9600
        },
        {
          "size": "1-1/2 inch",
          "price": 13600
        },
        {
          "size": "2 inch",
          "price": 21200
        },
        {
          "size": "2-1/2 inch",
          "price": 36800
        },
        {
          "size": "3 inch",
          "price": 68300
        },
        {
          "size": "4 inch",
          "price": 129800
        },
        {
          "size": "5 inch",
          "price": 279900
        },
        {
          "size": "6 inch",
          "price": 316900
        }
      ],
      "countInStock": 91,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE COUPLER PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-coupler-pn16.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 2000
        },
        {
          "size": "25mm",
          "price": 2500
        },
        {
          "size": "32mm",
          "price": 3500
        },
        {
          "size": "40mm",
          "price": 6000
        },
        {
          "size": "50mm",
          "price": 12000
        },
        {
          "size": "63mm",
          "price": 17500
        },
        {
          "size": "75mm",
          "price": 48000
        },
        {
          "size": "90mm",
          "price": 82000
        },
        {
          "size": "110mm",
          "price": 138500
        }
      ],
      "countInStock": 97,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE ELBOW PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-elbow-pn16.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 2000
        },
        {
          "size": "25mm",
          "price": 2500
        },
        {
          "size": "32mm",
          "price": 3500
        },
        {
          "size": "40mm",
          "price": 6000
        },
        {
          "size": "50mm",
          "price": 12000
        },
        {
          "size": "63mm",
          "price": 19000
        },
        {
          "size": "75mm",
          "price": 67000
        },
        {
          "size": "90mm",
          "price": 80000
        },
        {
          "size": "110mm",
          "price": 160000
        }
      ],
      "countInStock": 13,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE ENDCAP PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-endcap-pn16.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 7500
        },
        {
          "size": "25mm",
          "price": 5000
        },
        {
          "size": "32mm",
          "price": 6000
        },
        {
          "size": "40mm",
          "price": 8000
        },
        {
          "size": "50mm",
          "price": 12000
        },
        {
          "size": "63mm",
          "price": 23000
        },
        {
          "size": "75mm",
          "price": 30000
        },
        {
          "size": "90mm",
          "price": 53300
        },
        {
          "size": "110mm",
          "price": 80500
        }
      ],
      "countInStock": 6,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE FEMALE ADAPTOR PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-female-adaptor-pn16.png",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 1300
        },
        {
          "size": "25X3/4 inch",
          "price": 1800
        },
        {
          "size": "32X1 inch",
          "price": 2500
        },
        {
          "size": "40X1-1/4 inch",
          "price": 5500
        },
        {
          "size": "50X1-1/2 inch",
          "price": 9700
        },
        {
          "size": "63X2 inch",
          "price": 15000
        },
        {
          "size": "75X2-1/2 inch",
          "price": 40000
        },
        {
          "size": "90X3 inch",
          "price": 53000
        },
        {
          "size": "110X4 inch",
          "price": 96000
        }
      ],
      "countInStock": 41,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE FEMALE ELBOW PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-female-elbow-pn16.jpg",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 1500
        },
        {
          "size": "25X3/4 inch",
          "price": 2000
        },
        {
          "size": "32X1 inch",
          "price": 3300
        },
        {
          "size": "40X1-1/4 inch",
          "price": 6500
        },
        {
          "size": "50X1-1/2 inch",
          "price": 11000
        },
        {
          "size": "63X2 inch",
          "price": 18500
        },
        {
          "size": "75X2-1/2 inch",
          "price": 70000
        },
        {
          "size": "90X3 inch",
          "price": 135000
        },
        {
          "size": "110X4 inch",
          "price": 200000
        }
      ],
      "countInStock": 89,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE FEMALE TEE PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-female-tee-pn16.png",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 2200
        },
        {
          "size": "25X3/4 inch",
          "price": 3400
        },
        {
          "size": "32X1 inch",
          "price": 4500
        },
        {
          "size": "40X1-1/4 inch",
          "price": 7500
        },
        {
          "size": "50X1-1/2 inch",
          "price": 12000
        },
        {
          "size": "63X2 inch",
          "price": 19000
        },
        {
          "size": "75X2-1/2 inch",
          "price": 65500
        },
        {
          "size": "90X3 inch",
          "price": 98500
        },
        {
          "size": "110X4 inch",
          "price": 215000
        },
        {
          "size": "25X1/2 inch",
          "price": 5600
        },
        {
          "size": "32X1/2 inch",
          "price": 7200
        },
        {
          "size": "32X3/4 inch",
          "price": 8500
        },
        {
          "size": "32/1",
          "price": 14500
        }
      ],
      "countInStock": 95,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE MALE ADAPTER PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-male-adapter-pn16.png",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 1300
        },
        {
          "size": "25X1/2 inch",
          "price": 1800
        },
        {
          "size": "32X1 inch",
          "price": 2500
        },
        {
          "size": "40X1-1/4 inch",
          "price": 3700
        },
        {
          "size": "50X1-1/2 inch",
          "price": 6000
        },
        {
          "size": "63X2 inch",
          "price": 9500
        },
        {
          "size": "75X2-1/2 inch",
          "price": 24000
        },
        {
          "size": "90X3 inch",
          "price": 42000
        },
        {
          "size": "110X4 inch",
          "price": 73000
        }
      ],
      "countInStock": 70,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE MALE ELBOW PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-male-elbow-pn16.png",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 1500
        },
        {
          "size": "25X3/4 inch",
          "price": 2500
        },
        {
          "size": "32X1 inch",
          "price": 3500
        },
        {
          "size": "40X1-1/4 inch",
          "price": 5000
        },
        {
          "size": "50X1-1/2 inch",
          "price": 9500
        },
        {
          "size": "63X2 inch",
          "price": 15000
        },
        {
          "size": "75X2-1/2 inch",
          "price": 48500
        },
        {
          "size": "90X3 inch",
          "price": 57000
        }
      ],
      "countInStock": 62,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE PIPE FLANGE ADAPTOR",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-pipe-flange-adaptor.jpg",
      "sizes": [
        {
          "size": "50X2 inch",
          "price": 50000
        },
        {
          "size": "63X2 inch",
          "price": 63000
        },
        {
          "size": "75X2-1/2 inch",
          "price": 72000
        },
        {
          "size": "90X3 inch",
          "price": 98000
        },
        {
          "size": "110X4 inch",
          "price": 142000
        }
      ],
      "countInStock": 37,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE PIPE PN 10",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-pipe-pn-10.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 1300
        },
        {
          "size": "25mm",
          "price": 1500
        },
        {
          "size": "32mm",
          "price": 2500
        },
        {
          "size": "40mm",
          "price": 3500
        },
        {
          "size": "50mm",
          "price": 5500
        },
        {
          "size": "63mm",
          "price": 8400
        },
        {
          "size": "75mm",
          "price": 11000
        },
        {
          "size": "90mm",
          "price": 15500
        },
        {
          "size": "110mm",
          "price": 23500
        }
      ],
      "countInStock": 95,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE PIPE PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-pipe-pn16.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 1500
        },
        {
          "size": "25mm",
          "price": 2500
        },
        {
          "size": "32mm",
          "price": 4000
        },
        {
          "size": "40mm",
          "price": 5400
        },
        {
          "size": "50mm",
          "price": 8000
        },
        {
          "size": "63mm",
          "price": 13000
        },
        {
          "size": "75mm",
          "price": 17500
        },
        {
          "size": "90mm",
          "price": 24500
        },
        {
          "size": "110mm",
          "price": 37500
        }
      ],
      "countInStock": 15,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE PIPE PN6",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-pipe-pn6.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 1000
        },
        {
          "size": "25mm",
          "price": 1250
        },
        {
          "size": "32mm",
          "price": 1690
        },
        {
          "size": "40mm",
          "price": 2550
        },
        {
          "size": "50mm",
          "price": 4200
        },
        {
          "size": "63mm",
          "price": 6400
        },
        {
          "size": "75mm",
          "price": 9780
        },
        {
          "size": "90mm",
          "price": 13000
        },
        {
          "size": "110mm",
          "price": 19200
        }
      ],
      "countInStock": 0,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE REDUCER COUPLER PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-reducer-coupler-pn16.png",
      "sizes": [
        {
          "size": "20X25mm",
          "price": 2500
        },
        {
          "size": "32X20mm",
          "price": 5800
        },
        {
          "size": "32X25mm",
          "price": 3200
        },
        {
          "size": "40X25mm",
          "price": 9000
        },
        {
          "size": "40X32mm",
          "price": 5000
        },
        {
          "size": "50X32mm",
          "price": 13500
        },
        {
          "size": "50X40mm",
          "price": 17500
        },
        {
          "size": "63X32mm",
          "price": 20000
        },
        {
          "size": "63X40mm",
          "price": 22000
        },
        {
          "size": "63X50mm",
          "price": 27500
        },
        {
          "size": "75X50mm",
          "price": 43500
        },
        {
          "size": "75X63mm",
          "price": 40000
        },
        {
          "size": "90X63mm",
          "price": 60000
        },
        {
          "size": "90X75mm",
          "price": 75000
        },
        {
          "size": "110X90mm",
          "price": 125000
        }
      ],
      "countInStock": 59,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE REDUCER TEE PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-reducer-tee-pn16.png",
      "sizes": [
        {
          "size": "20X25mm",
          "price": 6000
        },
        {
          "size": "32X20mm",
          "price": 8200
        },
        {
          "size": "32X25mm",
          "price": 9300
        },
        {
          "size": "40X32mm",
          "price": 15700
        },
        {
          "size": "50X40mm",
          "price": 26500
        },
        {
          "size": "63X32mm",
          "price": 43000
        },
        {
          "size": "63X50mm",
          "price": 57000
        },
        {
          "size": "90X63mm",
          "price": 120000
        }
      ],
      "countInStock": 0,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE SADDLE CLAMP",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-saddle-clamp.jpg",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 8500
        },
        {
          "size": "25X1/2 inch",
          "price": 9500
        },
        {
          "size": "32X1/2 inch",
          "price": 8000
        },
        {
          "size": "32X3/4 inch",
          "price": 10000
        },
        {
          "size": "40X1/2 inch",
          "price": 9200
        },
        {
          "size": "40X3/4 inch",
          "price": 11000
        },
        {
          "size": "40X1 inch",
          "price": 12000
        },
        {
          "size": "50X1/2 inch",
          "price": 10000
        },
        {
          "size": "50X3/4 inch",
          "price": 11000
        },
        {
          "size": "50X1/2 inch",
          "price": 11500
        },
        {
          "size": "63X1/2 inch",
          "price": 14000
        },
        {
          "size": "63X3/4 inch",
          "price": 14000
        },
        {
          "size": "63X1 inch",
          "price": 14000
        },
        {
          "size": "63X1-1/4 inch",
          "price": 20000
        },
        {
          "size": "63X1-1/2 inch",
          "price": 14000
        },
        {
          "size": "75X1/2 inch",
          "price": 15000
        },
        {
          "size": "75X3/4 inch",
          "price": 16500
        },
        {
          "size": "75X1 inch",
          "price": 18500
        },
        {
          "size": "75X1-1/2 inch",
          "price": 18500
        },
        {
          "size": "75X2 inch",
          "price": 18500
        },
        {
          "size": "90X1/2 inch",
          "price": 18500
        },
        {
          "size": "90X3/4 inch",
          "price": 18500
        },
        {
          "size": "90X1 inch",
          "price": 24000
        },
        {
          "size": "90X2 inch",
          "price": 25500
        },
        {
          "size": "110X1/2 inch",
          "price": 28000
        },
        {
          "size": "110X3/4 inch",
          "price": 28000
        },
        {
          "size": "110X1 inch",
          "price": 29000
        },
        {
          "size": "110X2 inch",
          "price": 31000
        },
        {
          "size": "110X3 inch",
          "price": 35000
        },
        {
          "size": "110X63 mm",
          "price": 140000
        },
        {
          "size": "160X63 mm",
          "price": 275000
        },
      ],
      "countInStock": 71,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE TEE PN16",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-tee-pn16.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 2500
        },
        {
          "size": "25mm",
          "price": 3500
        },
        {
          "size": "32mm",
          "price": 5300
        },
        {
          "size": "40mm",
          "price": 8800
        },
        {
          "size": "50mm",
          "price": 18500
        },
        {
          "size": "63mm",
          "price": 28500
        },
        {
          "size": "75mm",
          "price": 105000
        },
        {
          "size": "90mm",
          "price": 168000
        },
        {
          "size": "110mm",
          "price": 330000
        }
      ],
      "countInStock": 81,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "HDPE UNION BALL VALVE",
      "category": "607ab65eff64564c9f9c90c5",
      "image": "/img/prod/hdpe-union-ball-valve.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 8500
        },
        {
          "size": "25mm",
          "price": 13000
        },
        {
          "size": "32mm",
          "price": 18000
        },
        {
          "size": "40mm",
          "price": 28500
        },
        {
          "size": "50mm",
          "price": 44500
        },
        {
          "size": "63mm",
          "price": 68000
        }
      ],
      "countInStock": 84,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR 45 DEGREE ELBOW",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-45-degree-elbow.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 1000
        },
        {
          "size": "25mm",
          "price": 1000
        },
        {
          "size": "32mm",
          "price": 2000
        },
        {
          "size": "40mm",
          "price": 3000
        },
        {
          "size": "50mm",
          "price": 6000
        },
        {
          "size": "63mm",
          "price": 10000
        },
        {
          "size": "75mm",
          "price": 17000
        },
        {
          "size": "90mm",
          "price": 27500
        },
        {
          "size": "110mm",
          "price": 49500
        }
      ],
      "countInStock": 54,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR COMPACT / GLOBE VALVE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-compact_globe-valve.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 3500
        },
        {
          "size": "25mm",
          "price": 7500
        },
        {
          "size": "32mm",
          "price": 10000
        },
        {
          "size": "40mm",
          "price": 12500
        },
        {
          "size": "50mm",
          "price": 17000
        },
        {
          "size": "63mm",
          "price": 26500
        }
      ],
      "countInStock": 17,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR CUTTER",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-cutter.jpg",
      "sizes": [
        {
          "size": "20 - 42mm",
          "price": 38000
        },
        {
          "size": "20 - 63mm",
          "price": 41100
        }
      ],
      "countInStock": 47,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR ELBOW 90 DEGREE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-elbow-90-degree.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 500
        },
        {
          "size": "25mm",
          "price": 700
        },
        {
          "size": "32mm",
          "price": 1200
        },
        {
          "size": "40mm",
          "price": 3500
        },
        {
          "size": "50mm",
          "price": 6000
        },
        {
          "size": "63mm",
          "price": 10500
        },
        {
          "size": "75mm",
          "price": 21000
        },
        {
          "size": "90mm",
          "price": 34000
        },
        {
          "size": "110mm",
          "price": 70000
        }
      ],
      "countInStock": 94,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR ENDCAP",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-endcap.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 700
        },
        {
          "size": "25mm",
          "price": 800
        },
        {
          "size": "32mm",
          "price": 1000
        },
        {
          "size": "40mm",
          "price": 1400
        },
        {
          "size": "50mm",
          "price": 2300
        },
        {
          "size": "63mm",
          "price": 3500
        },
        {
          "size": "75mm",
          "price": 8300
        },
        {
          "size": "90mm",
          "price": 13300
        },
        {
          "size": "110mm",
          "price": 21400
        }
      ],
      "countInStock": 80,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR FEMALE THREAD ADAPTOR",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-female-thread-adaptor.jpg",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 4000
        },
        {
          "size": "25X1/2 inch",
          "price": 3700
        },
        {
          "size": "25X3/4 inch",
          "price": 5000
        },
        {
          "size": "32X1/2 inch",
          "price": 8350
        },
        {
          "size": "32X3/4 inch",
          "price": 8350
        },
        {
          "size": "32X1 inch",
          "price": 12000
        },
        {
          "size": "40X1-1/4 inch",
          "price": 19000
        },
        {
          "size": "50X1-1/2 inch",
          "price": 30000
        },
        {
          "size": "63X2 inch",
          "price": 52000
        },
        {
          "size": "75X2-1/2 inch",
          "price": 81000
        },
        {
          "size": "90X3 inch",
          "price": 138000
        },
        {
          "size": "110X4 inch",
          "price": 250000
        }
      ],
      "countInStock": 34,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR FEMALE THREAD ELBOW",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-female-thread-elbow.png",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 3500
        },
        {
          "size": "20X3/4 inch",
          "price": 4000
        },
        {
          "size": "25X1/2 inch",
          "price": 4000
        },
        {
          "size": "25X3/4 inch",
          "price": 5000
        },
        {
          "size": "32X1/2 inch",
          "price": 8000
        },
        {
          "size": "32X3/4 inch",
          "price": 8000
        },
        {
          "size": "32X1 inch",
          "price": 12000
        },
        {
          "size": "40X1-1/4 inch",
          "price": 32000
        },
        {
          "size": "50X1-1/2 inch",
          "price": 45000
        },
        {
          "size": "63X2 inch",
          "price": 65000
        }
      ],
      "countInStock": 8,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR FEMALE THREAD TEE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-female-thread-tee.jpg",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 3800
        },
        {
          "size": "20X3/4 inch",
          "price": 4600
        },
        {
          "size": "25X1/2 inch",
          "price": 3800
        },
        {
          "size": "25X3/4 inch",
          "price": 5000
        },
        {
          "size": "32X1/2 inch",
          "price": 6000
        },
        {
          "size": "32X3/4 inch",
          "price": 9000
        },
        {
          "size": "32X1 inch",
          "price": 13500
        }
      ],
      "countInStock": 80,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR GATE / STOP VALVE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-gate_stop-valve.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 20000
        },
        {
          "size": "25mm",
          "price": 25000
        },
        {
          "size": "32mm",
          "price": 27000
        },
        {
          "size": "40mm",
          "price": 41500
        },
        {
          "size": "50mm",
          "price": 61600
        },
        {
          "size": "63mm",
          "price": 78000
        },
        {
          "size": "75mm",
          "price": 140000
        },
        {
          "size": "90mm",
          "price": 200000
        },
        {
          "size": "110mm",
          "price": 400000
        }
      ],
      "countInStock": 44,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR HEAT MACHINE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-heat-machine.jpg",
      "sizes": [
        {
          "size": "20-63mm",
          "price": 450000
        },
        {
          "size": "75-110mm",
          "price": 616100
        },
        {
          "size": "20-32mm",
          "price": 100000
        },
        {
          "size": "20-50mm",
          "price": 225000
        }
      ],
      "countInStock": 72,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR MALE THREAD ADAPTOR",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-male-thread-adaptor.jpg",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 6500
        },
        {
          "size": "25X1/2 inch",
          "price": 5300
        },
        {
          "size": "25X3/4 inch",
          "price": 6500
        },
        {
          "size": "32X1/2 inch",
          "price": 8800
        },
        {
          "size": "32X3/4 inch",
          "price": 9600
        },
        {
          "size": "32X1 inch",
          "price": 12000
        },
        {
          "size": "40X1-1/4 inch",
          "price": 31000
        },
        {
          "size": "50X1-1/2 inch",
          "price": 48800
        },
        {
          "size": "63X2 inch",
          "price": 56300
        },
        {
          "size": "75X2-1/2 inch",
          "price": 84300
        },
        {
          "size": "90X3 inch",
          "price": 153600
        },
        {
          "size": "110X4 inch",
          "price": 259400
        }
      ],
      "countInStock": 49,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR MALE THREAD ELBOW",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-male-thread-elbow.png",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 6000
        },
        {
          "size": "25X1/2 inch",
          "price": 6000
        },
        {
          "size": "25X3/4 inch",
          "price": 8000
        },
        {
          "size": "32X1/2 inch",
          "price": 11000
        },
        {
          "size": "32X3/4 inch",
          "price": 12500
        },
        {
          "size": "32X1 inch",
          "price": 23000
        }
      ],
      "countInStock": 4,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR MALE THREAD TEE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-male-thread-tee.jpg",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 6500
        },
        {
          "size": "25X1/2 inch",
          "price": 6500
        },
        {
          "size": "25X3/4 inch",
          "price": 6000
        },
        {
          "size": "32X1/2 inch",
          "price": 8500
        },
        {
          "size": "32X1 inch",
          "price": 8500
        },
        {
          "size": "32X3/4 inch",
          "price": 28600
        }
      ],
      "countInStock": 64,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR PIPE CLIP",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-pipe-clip.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 500
        },
        {
          "size": "25mm",
          "price": 650
        },
        {
          "size": "32mm",
          "price": 800
        },
        {
          "size": "40mm",
          "price": 1300
        },
        {
          "size": "50mm",
          "price": 2300
        },
        {
          "size": "63mm",
          "price": 3000
        }
      ],
      "countInStock": 51,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR PIPE PN16 4MTR",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-pipe-pn16-4mtr.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 6500
        },
        {
          "size": "25mm",
          "price": 9500
        },
        {
          "size": "32mm",
          "price": 17000
        },
        {
          "size": "40mm",
          "price": 29000
        },
        {
          "size": "50mm",
          "price": 48000
        },
        {
          "size": "63mm",
          "price": 69000
        },
        {
          "size": "75mm",
          "price": 108900
        },
        {
          "size": "90mm",
          "price": 144000
        },
        {
          "size": "110mm",
          "price": 226400
        }
      ],
      "countInStock": 96,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR PIPE PN20 4MTR",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-pipe-pn20-4mtr.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 11000
        },
        {
          "size": "25mm",
          "price": 13000
        },
        {
          "size": "32mm",
          "price": 24000
        },
        {
          "size": "40mm",
          "price": 36000
        },
        {
          "size": "50mm",
          "price": 55000
        },
        {
          "size": "63mm",
          "price": 90000
        },
        {
          "size": "75mm",
          "price": 130000
        },
        {
          "size": "90mm",
          "price": 180000
        },
        {
          "size": "110mm",
          "price": 265000
        }
      ],
      "countInStock": 3,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR REDUCED TEE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-reduced-tee.png",
      "sizes": [
        {
          "size": "20X25mm",
          "price": 1500
        },
        {
          "size": "32X20mm",
          "price": 2000
        },
        {
          "size": "32X25mm",
          "price": 1500
        },
        {
          "size": "40X20mm",
          "price": 3500
        },
        {
          "size": "40X25mm",
          "price": 3800
        },
        {
          "size": "40X32mm",
          "price": 4500
        },
        {
          "size": "50X20mm",
          "price": 4100
        },
        {
          "size": "50X25mm",
          "price": 6300
        },
        {
          "size": "50X32mm",
          "price": 6300
        },
        {
          "size": "50X40mm",
          "price": 7300
        },
        {
          "size": "63X25mm",
          "price": 9500
        },
        {
          "size": "63X32mm",
          "price": 10000
        },
        {
          "size": "63X40mm",
          "price": 11400
        },
        {
          "size": "63X50mm",
          "price": 13000
        },
        {
          "size": "75X63mm",
          "price": 24500
        }
      ],
      "countInStock": 1,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR REDUCING SOCKET",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-reducing-socket.jpg",
      "sizes": [
        {
          "size": "20X25mm",
          "price": 650
        },
        {
          "size": "32X20mm",
          "price": 800
        },
        {
          "size": "32X25mm",
          "price": 1000
        },
        {
          "size": "40X20mm",
          "price": 2000
        },
        {
          "size": "40X25mm",
          "price": 2000
        },
        {
          "size": "40X32mm",
          "price": 2000
        },
        {
          "size": "50X20mm",
          "price": 2500
        },
        {
          "size": "50X25mm",
          "price": 2700
        },
        {
          "size": "50X32mm",
          "price": 2700
        },
        {
          "size": "50X40mm",
          "price": 2700
        },
        {
          "size": "63X25mm",
          "price": 4200
        },
        {
          "size": "63X32mm",
          "price": 4200
        },
        {
          "size": "63X40mm",
          "price": 4200
        },
        {
          "size": "63X50mm",
          "price": 4500
        },
        {
          "size": "75X63mm",
          "price": 8800
        },
        {
          "size": "90X75mm",
          "price": 14500
        },
        {
          "size": "110X90mm",
          "price": 24000
        },
      ],
      "countInStock": 16,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR SHORT CROSSOVER",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-short-crossover.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 2000
        },
        {
          "size": "25mm",
          "price": 2000
        },
        {
          "size": "32mm",
          "price": 3400
        }
      ],
      "countInStock": 89,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR SHOWER VALVE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-shower-valve.png",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 24000
        },
        {
          "size": "3/4 inch",
          "price": 26000
        }
      ],
      "countInStock": 3,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR SOCKET",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-socket.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 550
        },
        {
          "size": "25mm",
          "price": 600
        },
        {
          "size": "32mm",
          "price": 1000
        },
        {
          "size": "40mm",
          "price": 2000
        },
        {
          "size": "50mm",
          "price": 3300
        },
        {
          "size": "63mm",
          "price": 4800
        },
        {
          "size": "75mm",
          "price": 8700
        },
        {
          "size": "90mm",
          "price": 15200
        },
        {
          "size": "110mm",
          "price": 27100
        }
      ],
      "countInStock": 20,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR STEP OVER BEND",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-step-over-bend.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 2000
        },
        {
          "size": "25mm",
          "price": 2900
        },
        {
          "size": "32mm",
          "price": 6300
        }
      ],
      "countInStock": 44,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR STRAIGHT TEE",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-straight-tee.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 700
        },
        {
          "size": "25mm",
          "price": 900
        },
        {
          "size": "32mm",
          "price": 1500
        },
        {
          "size": "40mm",
          "price": 3800
        },
        {
          "size": "50mm",
          "price": 6000
        },
        {
          "size": "63mm",
          "price": 11000
        },
        {
          "size": "75mm",
          "price": 22000
        },
        {
          "size": "90mm",
          "price": 35000
        },
        {
          "size": "110mm",
          "price": 77000
        }
      ],
      "countInStock": 88,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR THREAD PLUG",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-thread-plug.png",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 650
        },
        {
          "size": "3/4 inch",
          "price": 1000
        },
        {
          "size": "1 inch",
          "price": 1500
        }
      ],
      "countInStock": 26,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR UNION VALVES",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-union-valves.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 11000
        },
        {
          "size": "25mm",
          "price": 13000
        },
        {
          "size": "32mm",
          "price": 17000
        },
        {
          "size": "40mm",
          "price": 25000
        },
        {
          "size": "50mm",
          "price": 40000
        },
        {
          "size": "63mm",
          "price": 51500
        }
      ],
      "countInStock": 50,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PPR UNION",
      "category": "607ab65eff64564c9f9c90c2",
      "image": "/img/prod/ppr-union.png",
      "sizes": [
        {
          "size": "20mm",
          "price": 3000
        },
        {
          "size": "25mm",
          "price": 4000
        },
        {
          "size": "32mm",
          "price": 4500
        },
        {
          "size": "40mm",
          "price": 9000
        },
        {
          "size": "50mm",
          "price": 15000
        },
        {
          "size": "63mm",
          "price": 24300
        }
      ],
      "countInStock": 63,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC 45 DEGREE BEND",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-45-Degree-Bend.jpg",
      "sizes": [
        {
          "size": "1-1/4 inch",
          "price": 2000
        },
        {
          "size": "1-1/2 inch",
          "price": 1500
        },
        {
          "size": "2 inch",
          "price": 2000
        },
        {
          "size": "3 inch",
          "price": 6500
        },
        {
          "size": "4 inch",
          "price": 4500
        },
        {
          "size": "6 inch",
          "price": 11500
        },
        {
          "size": "8 inch",
          "price": 45000
        }
      ],
      "countInStock": 8,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC 45 DEGREE ELBOW",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-45-degree-elbow.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 1000
        },
        {
          "size": "25mm",
          "price": 1300
        },
        {
          "size": "32mm",
          "price": 2500
        },
        {
          "size": "40mm",
          "price": 4000
        },
        {
          "size": "50mm",
          "price": 6000
        },
        {
          "size": "63mm",
          "price": 8000
        },
        {
          "size": "75mm",
          "price": 12500
        },
        {
          "size": "90mm",
          "price": 20000
        },
        {
          "size": "110mm",
          "price": 25000
        }
      ],
      "countInStock": 64,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC 90 DEGREE ELBOW",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-90-degree-elbow.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 1000
        },
        {
          "size": "25mm",
          "price": 1300
        },
        {
          "size": "32mm",
          "price": 2000
        },
        {
          "size": "40mm",
          "price": 3500
        },
        {
          "size": "50mm",
          "price": 5500
        },
        {
          "size": "63mm",
          "price": 7700
        },
        {
          "size": "75mm",
          "price": 12000
        },
        {
          "size": "90mm",
          "price": 22000
        },
        {
          "size": "110mm",
          "price": 34000
        }
      ],
      "countInStock": 17,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC BRANCH SADDLE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-Branch-Saddle.jpg",
      "sizes": [
        {
          "size": "110X1-1/4 inch",
          "price": 5000
        },
        {
          "size": "110X1-1/2 inch",
          "price": 4500
        },
        {
          "size": "110X2 inch",
          "price": 4500
        }
      ],
      "countInStock": 41,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC ACCESS PLUG",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-access-plug.jpg",
      "sizes": [
        {
          "size": "1-1/4 inch",
          "price": 1700
        },
        {
          "size": "1-1/2 inch",
          "price": 2000
        },
        {
          "size": "2 inch",
          "price": 2500
        },
        {
          "size": "3 inch",
          "price": 4000
        },
        {
          "size": "4 inch",
          "price": 4500
        },
        {
          "size": "6 inch",
          "price": 20000
        },
        {
          "size": "8 inch",
          "price": 25000
        },
      ],
      "countInStock": 21,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC BOTTLE TRAP",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-bottle-trap.jpg",
      "sizes": [
        {
          "size": "1-1/4 inch",
          "price": 15000
        },
        {
          "size": "1-1/2 inch",
          "price": 15000
        }
      ],
      "countInStock": 17,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC BUTTERFLY VALVE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-butterfly-valve.jpg",
      "sizes": [
        {
          "size": "75mm",
          "price": 200000
        },
        {
          "size": "90mm",
          "price": 220000
        },
        {
          "size": "110mm",
          "price": 245000
        }
      ],
      "countInStock": 62,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC COMPACT BALL VALVE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-compact-ball-valve.jpg",
      "sizes": [
        {
          "size": "20X1/2 inch",
          "price": 7800
        },
        {
          "size": "25X3/4 inch",
          "price": 10800
        },
        {
          "size": "32X1 inch",
          "price": 16400
        },
        {
          "size": "40X1-1/4 inch",
          "price": 18000
        },
        {
          "size": "50X1-1/2 inch",
          "price": 19000
        },
        {
          "size": "63X2 inch",
          "price": 35500
        }
      ],
      "countInStock": 29,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC COUPLER PN16",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-coupler-pn16.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 1000
        },
        {
          "size": "25mm",
          "price": 1200
        },
        {
          "size": "32mm",
          "price": 2000
        },
        {
          "size": "40mm",
          "price": 2500
        },
        {
          "size": "50mm",
          "price": 4500
        },
        {
          "size": "63mm",
          "price": 6000
        },
        {
          "size": "75mm",
          "price": 9000
        },
        {
          "size": "90mm",
          "price": 13000
        },
        {
          "size": "110mm",
          "price": 18000
        }
      ],
      "countInStock": 73,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC CROSS TEE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-cross-tee.jpg",
      "sizes": [
        {
          "size": "1-1/2 inch",
          "price": 5000
        },
        {
          "size": "2 inch",
          "price": 7500
        },
        {
          "size": "110 mm",
          "price": 22000
        },
        {
          "size": "160 mm",
          "price": 42300
        },
      ],
      "countInStock": 37,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC DOUBLE SINK BOTTLE TRAP",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-double-sink-bottle-trap.jpg",
      "sizes": [
        {
          "size": "1-1/2",
          "price": 40000
        }
      ],
      "countInStock": 20,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC DOUBLE Y TEE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-double-y-tee.jpg",
      "sizes": [
        {
          "size": "110mm",
          "price": 25000
        }
      ],
      "countInStock": 42,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC DRAINAGE PIPES",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-drainage-pipes.jpg",
      "sizes": [
        {
          "size": "1-1/4 inch",
          "price": 12800
        },
        {
          "size": "1-1/2 inch",
          "price": 13700
        },
        {
          "size": "2 inch",
          "price": 20000
        }
      ],
      "countInStock": 8,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC END CAP",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-end-cap.jpg",
      "sizes": [
        {
          "size": "32mm",
          "price": 1000
        },
        {
          "size": "40mm",
          "price": 1600
        },
        {
          "size": "50mm",
          "price": 4000
        },
        {
          "size": "63mm",
          "price": 5000
        },
        {
          "size": "75mm",
          "price": 8000
        },
        {
          "size": "90mm",
          "price": 12000
        },
        {
          "size": "110mm",
          "price": 15000
        }
      ],
      "countInStock": 3,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC FEMALE ADAPTER PN16",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-female-adapter-pn16.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 1200
        },
        {
          "size": "25mm",
          "price": 1800
        },
        {
          "size": "32mm",
          "price": 2700
        },
        {
          "size": "40mm",
          "price": 2900
        },
        {
          "size": "50mm",
          "price": 5000
        },
        {
          "size": "63mm",
          "price": 8500
        },
        {
          "size": "75mm",
          "price": 9500
        },
        {
          "size": "90mm",
          "price": 15000
        },
        {
          "size": "110mm",
          "price": 28500
        }
      ],
      "countInStock": 33,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC FLANGE ADAPTOR",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-flange-adaptor.jpg",
      "sizes": [
        {
          "size": "63mm",
          "price": 17000
        },
        {
          "size": "75mm",
          "price": 23000
        },
        {
          "size": "90mm",
          "price": 28000
        },
        {
          "size": "110mm",
          "price": 39500
        }
      ],
      "countInStock": 74,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC FLEXIBLE WASTE PIPE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-flexible-waste-pipe.jpg",
      "sizes": [
        {
          "size": "1-1/4 inch",
          "price": 10000
        },
        {
          "size": "1-1/2 inch",
          "price": 10000
        }
      ],
      "countInStock": 45,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC FLOAT VALVE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-float-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 22000
        },
        {
          "size": "3/4 inch",
          "price": 25000
        },
        {
          "size": "1 inch",
          "price": 27000
        }
      ],
      "countInStock": 12,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC FOOT VALVE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-foot-valve.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 5700
        },
        {
          "size": "3/4 inch",
          "price": 6200
        },
        {
          "size": "1 inch",
          "price": 6700
        },
        {
          "size": "1-1/4 inch",
          "price": 22900
        },
        {
          "size": "1-1/2 inch",
          "price": 25000
        },
        {
          "size": "2 inch",
          "price": 29600
        },
        {
          "size": "2-1/2 inch",
          "price": 120400
        },
        {
          "size": "3 inch",
          "price": 132400
        },
        {
          "size": "4 inch",
          "price": 224300
        },
        {
          "size": "6 inch",
          "price": 901300
        }
      ],
      "countInStock": 1,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC INSPECTION PORT",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-inspection-port.jpg",
      "sizes": [
        {
          "size": "110 mm",
          "price": 16000
        },
        {
          "size": "160 mm",
          "price": 28500
        },
        {
          "size": "200 mm",
          "price": 43500
        },
        {
          "size": "2 inch",
          "price": 3500
        },
        {
          "size": "3 inch",
          "price": 9000
        }
      ],
      "countInStock": 83,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC LIGHT GAUGE PIPES",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-light-gauge-pipes.jpg",
      "sizes": [
        {
          "size": "82 mm",
          "price": 23500
        },
        {
          "size": "110 mm",
          "price": 26000
        },
        {
          "size": "160 mm",
          "price": 76000
        },
      ],
      "countInStock": 92,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC LONG SCREW / TANK CONNECTOR",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-long-screw_tank-connector.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 6000
        },
        {
          "size": "3/4 inch",
          "price": 8200
        },
        {
          "size": "1 inch",
          "price": 11000
        },
        {
          "size": "1-1/4 inch",
          "price": 12500
        },
        {
          "size": "1-1/2 inch",
          "price": 17000
        },
        {
          "size": "2 inch",
          "price": 29000
        }
      ],
      "countInStock": 83,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC NONE RETURN VALVE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-none-return-valve.jpg",
      "sizes": [
        {
          "size": "50mm",
          "price": 20000
        },
        {
          "size": "63mm",
          "price": 30000
        },
        {
          "size": "75mm",
          "price": 110000
        },
        {
          "size": "90mm",
          "price": 130000
        },
        {
          "size": "110mm",
          "price": 215000
        },
      ],
      "countInStock": 17,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PIPE CLAMP",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pipe-clamp.jpeg",
      "sizes": [
        {
          "size": "50mm",
          "price": 2500
        },
        {
          "size": "75mm",
          "price": 3500
        },
        {
          "size": "110mm",
          "price": 4500
        },
        {
          "size": "160mm",
          "price": 7500
        },
      ],
      "countInStock": 91,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PIPE NIPPLE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pipe-nipple.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1000
        },
        {
          "size": "3/4 inch",
          "price": 1200
        },
        {
          "size": "1 inch",
          "price": 1600
        },
        {
          "size": "1-1/4 inch",
          "price": 3300
        },
        {
          "size": "1-1/2 inch",
          "price": 5000
        },
        {
          "size": "2 inch",
          "price": 6500
        }
      ],
      "countInStock": 39,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PIPE SOLVENT CEMENT",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pipe-solvent-cement.jpg",
      "sizes": [
        {
          "size": "200ml",
          "price": 8000
        },
        {
          "size": "500ml",
          "price": 16000
        }
      ],
      "countInStock": 30,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PIPES PN10",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pipes-pn10.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 7000
        },
        {
          "size": "25mm",
          "price": 9000
        },
        {
          "size": "32mm",
          "price": 14300
        },
        {
          "size": "40mm",
          "price": 18500
        },
        {
          "size": "50mm",
          "price": 25000
        },
        {
          "size": "63mm",
          "price": 39000
        },
        {
          "size": "75mm",
          "price": 56000
        },
        {
          "size": "90mm",
          "price": 82000
        },
        {
          "size": "110mm",
          "price": 120000
        },
        {
          "size": "160mm",
          "price": 255000
        },
        {
          "size": "200mm",
          "price": 431000
        }
      ],
      "countInStock": 81,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PIPES PN16",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pipes-pn16.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 7000
        },
        {
          "size": "25mm",
          "price": 11000
        },
        {
          "size": "32mm",
          "price": 18400
        },
        {
          "size": "40mm",
          "price": 24000
        },
        {
          "size": "50mm",
          "price": 38000
        },
        {
          "size": "63mm",
          "price": 60000
        },
        {
          "size": "75mm",
          "price": 82000
        },
        {
          "size": "90mm",
          "price": 118000
        },
        {
          "size": "110mm",
          "price": 180000
        },
        {
          "size": "160mm",
          "price": 390000
        },
        {
          "size": "200mm",
          "price": 670000
        }
      ],
      "countInStock": 99,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PIPES PN4",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pipes-pn4.jpg",
      "sizes": [
        {
          "size": "90mm",
          "price": 33000
        },
        {
          "size": "160mm",
          "price": 103000
        },
        {
          "size": "200mm",
          "price": 162700
        }
      ],
      "countInStock": 28,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PIPES PN6",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pipes-pn6.jpeg",
      "sizes": [
        {
          "size": "50mm",
          "price": 19000
        },
        {
          "size": "63mm",
          "price": 24500
        },
        {
          "size": "75mm",
          "price": 39000
        },
        {
          "size": "90mm",
          "price": 48800
        },
        {
          "size": "110mm",
          "price": 69000
        },
        {
          "size": "160mm",
          "price": 160000
        },
        {
          "size": "200mm",
          "price": 245000
        }
      ],
      "countInStock": 69,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC PRESSURE PIPES",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-pressure-pipes.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 12000
        },
        {
          "size": "3/4 inch",
          "price": 16500
        },
        {
          "size": "1 inch",
          "price": 23500
        },
        {
          "size": "1-1/4 inch",
          "price": 37000
        },
        {
          "size": "1-1/2 inch",
          "price": 45500
        },
        {
          "size": "2 inch",
          "price": 58500
        }
      ],
      "countInStock": 52,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC REDUCING BUSH",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-reducing-bush.jpg",
      "sizes": [
        {
          "size": "20X25mm",
          "price": 1000
        },
        {
          "size": "32X20mm",
          "price": 1500
        },
        {
          "size": "32X25mm",
          "price": 1500
        },
        {
          "size": "40X32mm",
          "price": 2000
        },
        {
          "size": "50X32mm",
          "price": 2500
        },
        {
          "size": "50X40mm",
          "price": 3000
        },
        {
          "size": "63X32mm",
          "price": 4500
        },
        {
          "size": "63X50mm",
          "price": 4000
        },
        {
          "size": "75X50mm",
          "price": 5000
        },
        {
          "size": "75X63mm",
          "price": 6500
        },
        {
          "size": "90X63mm",
          "price": 8500
        },
        {
          "size": "90X75mm",
          "price": 8500
        },
        {
          "size": "110X63mm",
          "price": 13000
        },
        {
          "size": "110X75mm",
          "price": 13000
        },
        {
          "size": "110X90mm",
          "price": 15000
        }
      ],
      "countInStock": 86,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC REDUCING SOCKET",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-reducing-socket.jpg",
      "sizes": [
        {
          "size": "20X25mm",
          "price": 1300
        },
        {
          "size": "32X20mm",
          "price": 1600
        },
        {
          "size": "32X25mm",
          "price": 2000
        },
        {
          "size": "40X25mm",
          "price": 2500
        },
        {
          "size": "40X32mm",
          "price": 2500
        },
        {
          "size": "50X32mm",
          "price": 3500
        },
        {
          "size": "50X40mm",
          "price": 4000
        },
        {
          "size": "63X32mm",
          "price": 4500
        },
        {
          "size": "63X40mm",
          "price": 5500
        },
        {
          "size": "63X50mm",
          "price": 6000
        },
        {
          "size": "75X63mm",
          "price": 8000
        },
        {
          "size": "90X75mm",
          "price": 13000
        },
        {
          "size": "110X90mm",
          "price": 19300
        }
      ],
      "countInStock": 90,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC REDUCING TEE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-reducing-tee.jpg",
      "sizes": [
        {
          "size": "110mmX2 inch",
          "price": 6200
        },
        {
          "size": "160X110mm inch",
          "price": 31600
        }
      ],
      "countInStock": 33,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC SILICONE TUBE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-silicone-tube.jpg",
      "sizes": [
        {
          "size": "WHITE",
          "price": 8000
        },
        {
          "size": "BLACK",
          "price": 8000
        },
        {
          "size": "GREY",
          "price": 8000
        },
        {
          "size": "CLEAR",
          "price": 8000
        },
      ],
      "countInStock": 81,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC SINGLE Y TEE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-single-y-tee.png",
      "sizes": [
        {
          "size": "1-1/2 inch",
          "price": 5000
        },
        {
          "size": "2 inch",
          "price": 8000
        },
        {
          "size": "110mm",
          "price": 18000
        },
        {
          "size": "160mm",
          "price": 47000
        },
      ],
      "countInStock": 0,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC SWEPT BEND DRAINAGE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-swept-bend-drainage.jpeg",
      "sizes": [
        {
          "size": "1-1/4 inch",
          "price": 1500
        },
        {
          "size": "1-1/2 inch",
          "price": 1500
        },
        {
          "size": "2 inch",
          "price": 2000
        },
        {
          "size": "3 inch",
          "price": 5000
        },
        {
          "size": "4 inch",
          "price": 5000
        },
        {
          "size": "6 inch",
          "price": 13000
        },
        {
          "size": "8 inch",
          "price": 50000
        }
      ],
      "countInStock": 26,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC SWEPT TEE WITH DOOR",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-swept-tee-with-door.jpg",
      "sizes": [
        {
          "size": "1-1/2 inch",
          "price": 6000
        },
        {
          "size": "2 inch",
          "price": 6500
        },
        {
          "size": "110mm",
          "price": 12000
        },
        {
          "size": "160mm",
          "price": 45000
        }
      ],
      "countInStock": 47,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC SWEPT TEE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-swept-tee.png",
      "sizes": [
        {
          "size": "1-1/4 inch",
          "price": 1500
        },
        {
          "size": "1-1/2 inch",
          "price": 2000
        },
        {
          "size": "2 inch",
          "price": 2500
        },
        {
          "size": "3 inch",
          "price": 9000
        },
        {
          "size": "4 inch",
          "price": 7000
        },
        {
          "size": "6 inch",
          "price": 19500
        },
        {
          "size": "8 inch",
          "price": 85000
        }
      ],
      "countInStock": 82,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC TANGIT SPECIAL ADHENSIVE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-tangit-special-adhensive.jpeg",
      "sizes": [
        {
          "size": "200ml",
          "price": 15000
        },
        {
          "size": "500ml",
          "price": 22000
        }
      ],
      "countInStock": 6,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC TEE PN16",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-tee-pn16.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 1500
        },
        {
          "size": "25mm",
          "price": 2000
        },
        {
          "size": "32mm",
          "price": 3000
        },
        {
          "size": "40mm",
          "price": 5500
        },
        {
          "size": "50mm",
          "price": 8500
        },
        {
          "size": "63mm",
          "price": 12500
        },
        {
          "size": "75mm",
          "price": 18500
        },
        {
          "size": "90mm",
          "price": 25000
        },
        {
          "size": "110mm",
          "price": 41500
        }
      ],
      "countInStock": 74,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC TEE THREADED",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-tee-threaded.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 2000
        },
        {
          "size": "3/4 inch",
          "price": 2500
        },
        {
          "size": "1 inch",
          "price": 4300
        },
        {
          "size": "1-1/4 inch",
          "price": 5300
        },
        {
          "size": "1-1/2 inch",
          "price": 15000
        },
        {
          "size": "2 inch",
          "price": 19500
        }
      ],
      "countInStock": 87,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC THREAD SEAL TAPE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-thread-seal-tape.jpg",
      "sizes": [
        {
          "size": "SMALL",
          "price": 1000
        },
        {
          "size": "BIG",
          "price": 2500
        }
      ],
      "countInStock": 99,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC THREADED ELBOW",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-threaded-elbow.jpeg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 1000
        },
        {
          "size": "3/4 inch",
          "price": 1800
        },
        {
          "size": "1 inch",
          "price": 2100
        },
        {
          "size": "1-1/4 inch",
          "price": 3300
        },
        {
          "size": "1-1/2 inch",
          "price": 4700
        },
        {
          "size": "2 inch",
          "price": 6700
        }
      ],
      "countInStock": 71,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC THREADED REDUCER BUSH",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-threaded-reducer-bush.jpg",
      "sizes": [
        {
          "size": "3/4X1/2 inch",
          "price": 800
        },
        {
          "size": "1X1/2 inch",
          "price": 1500
        },
        {
          "size": "1X3/4 inch",
          "price": 1500
        },
        {
          "size": "1-1/41X3/4 inch",
          "price": 2300
        },
        {
          "size": "1-1/4X1 inch",
          "price": 2300
        },
        {
          "size": "1-1/2X3/4 inch",
          "price": 3000
        },
        {
          "size": "1-1/2X1 inch",
          "price": 3000
        },
        {
          "size": "1-1/2X1-1/4 inch",
          "price": 3000
        },
        {
          "size": "2X1 inch",
          "price": 4000
        },
        {
          "size": "2X1-1/4 inch",
          "price": 4000
        },
        {
          "size": "2X1-1/2 inch",
          "price": 4000
        }
      ],
      "countInStock": 71,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC THREADED REDUCER SOCKET",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-threaded-reducer-socket.jpeg",
      "sizes": [
        {
          "size": "3/4X1/2 inch",
          "price": 800
        },
        {
          "size": "1X1/2 inch",
          "price": 1500
        },
        {
          "size": "1X3/4 inch",
          "price": 1500
        },
        {
          "size": "1-1/41X3/4 inch",
          "price": 2300
        },
        {
          "size": "1-1/4X1 inch",
          "price": 2300
        },
        {
          "size": "1-1/2X3/4 inch",
          "price": 3000
        },
        {
          "size": "1-1/2X1 inch",
          "price": 3000
        },
        {
          "size": "1-1/2X1-1/4 inch",
          "price": 3000
        },
        {
          "size": "2X1 inch",
          "price": 4000
        },
        {
          "size": "2X1-1/4 inch",
          "price": 4000
        },
        {
          "size": "2X1-1/2 inch",
          "price": 4000
        }
      ],
      "countInStock": 27,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC THREADED SOCKET",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-threaded-socket.jpg",
      "sizes": [
        {
          "size": "3/4X1/2 inch",
          "price": 2500
        },
        {
          "size": "1X1/2 inch",
          "price": 3300
        },
        {
          "size": "1X3/4 inch",
          "price": 3300
        },
        {
          "size": "1-1/4X1 inch",
          "price": 3500
        },
        {
          "size": "1-1/2X1 inch",
          "price": 4000
        },
        {
          "size": "1-1/2X1-1/4 inch",
          "price": 8000
        }
      ],
      "countInStock": 90,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC THREADED UNION",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-threaded-union.jpg",
      "sizes": [
        {
          "size": "1/2 inch",
          "price": 3000
        },
        {
          "size": "3/4 inch",
          "price": 4000
        },
        {
          "size": "1 inch",
          "price": 6000
        },
        {
          "size": "1-1/4 inch",
          "price": 7000
        },
        {
          "size": "1-1/2 inch",
          "price": 17500
        },
        {
          "size": "2 inch",
          "price": 21500
        }
      ],
      "countInStock": 15,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC UNION BALL VALVE",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-union-ball-valve.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 16400
        },
        {
          "size": "25mm",
          "price": 18600
        },
        {
          "size": "32mm",
          "price": 24600
        },
        {
          "size": "40mm",
          "price": 39700
        },
        {
          "size": "50mm",
          "price": 50000
        },
        {
          "size": "63mm",
          "price": 84300
        },
        {
          "size": "75mm",
          "price": 105600
        },
        {
          "size": "90mm",
          "price": 264700
        },
        {
          "size": "110mm",
          "price": 364700
        }
      ],
      "countInStock": 52,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC UNION",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-union.jpg",
      "sizes": [
        {
          "size": "20mm",
          "price": 5500
        },
        {
          "size": "25mm",
          "price": 7000
        },
        {
          "size": "32mm",
          "price": 9500
        },
        {
          "size": "40mm",
          "price": 15500
        },
        {
          "size": "50mm",
          "price": 16500
        },
        {
          "size": "63mm",
          "price": 17500
        },
        {
          "size": "75mm",
          "price": 37000
        },
        {
          "size": "90mm",
          "price": 53000
        },
        {
          "size": "110mm",
          "price": 92000
        }
      ],
      "countInStock": 47,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC VENT COWL",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-vent-cowl.jpg",
      "sizes": [
        {
          "size": "1-12/2 inch",
          "price": 5000
        },
        {
          "size": "2 inch",
          "price": 8000
        },
        {
          "size": "110mm",
          "price": 18000
        },
        {
          "size": "160mm",
          "price": 47000
        }
      ],
      "countInStock": 91,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    },
    {
      "name": "PVC VIEGA BOTTLE TRAP",
      "category": "607ab65eff64564c9f9c90c3",
      "image": "/img/prod/pvc-viega-bottle-trap.jpg",
      "sizes": [
        {
          "size": "1-12/2 inch",
          "price": 18000
        },
        {
          "size": "1-1/4 inch",
          "price": 18000
        }
      ],
      "countInStock": 43,
      "rating": 4.5,
      "numReviews": 102,
      "description": "..."
    }
  ],
};
export default data;