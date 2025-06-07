const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  
  {
    title: "Heritage Haveli in Udaipur",
    description:
      "Experience royal living in this restored haveli overlooking Lake Pichola in the heart of Udaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1715405155995-61757307e065?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2500,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Tea Estate Bungalow in Munnar",
    description:
      "Unwind in the lush green hills of Munnar with this serene bungalow in a working tea estate.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1682258635402-9d88e8d1d6a9?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Beach Shack in Goa",
    description:
      "Stay just steps away from the Arabian Sea in this cozy beach shack along the golden beaches of Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1700306471692-470d53cc46d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300,
    location: "Goa",
    country: "India",
  },
  {
    title: "Cottage in Himachal Apple Orchards",
    description:
      "Breathe in fresh mountain air in this wooden cottage tucked away in Himachal’s apple orchards.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1724409832241-44aefa67f262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dGFnZSUyMGluJTIwaGltYWNoYWwlMjBhcHBsZSUyMG9yY2hpZHN8ZW58MHx8MHx8fDA%3D",
    },
    price: 1700,
    location: "Manali",
    country: "India",
  },
  {
    title: "Luxury Houseboat in Alleppey",
    description:
      "Cruise through the serene backwaters of Kerala in this fully-equipped luxury houseboat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1646487448562-9c98c2651549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG91c2Vib2F0JTIwaW4lMjBhbGxlcHBleXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 3000,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Experience the magic of the Thar Desert in this traditional desert camp with cultural performances.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1642528928073-99c77e2f323b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2VydCUyMGNhbXAlMjBqYWlzYWxtZXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 2200,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Treehouse Stay in Wayanad",
    description:
      "Stay amidst the treetops in this eco-friendly treehouse offering panoramic views of Wayanad's forests.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1685305380695-90e58a33d4e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyZWVob3VzZSUyMHN0YXklMjBpbiUyMHdheWFuYWR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1800,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Ooty",
    description:
      "Relive the colonial era in this charming bungalow surrounded by Ooty's lush gardens and hills.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1724818361335-291394c25925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1bmdhbG93JTIwaW4lMjBvb3R5fGVufDB8fDB8fHww",
    },
    price: 2000,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Mountain Cabin in Dharamshala",
    description:
      "Find peace in this secluded mountain cabin with breathtaking views of the Dhauladhar range.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1664745894358-9d69702ab86c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjBjYWJpbiUyMGluJTIwZGhhcm1hc2hhbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 1900,
    location: "Dharamshala",
    country: "India",
  },
  {
    title: "Beachfront Villa in Pondicherry",
    description:
      "Enjoy the serene beauty of the Bay of Bengal from this elegant beachfront villa in Pondicherry.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584792328885-8e19695a74b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2hmcm9udCUyMHZpbGxhJTIwaW4lMjBwb2RpY2hlcnJ5fGVufDB8fDB8fHww",
    },
    price: 2700,
    location: "Pondicherry",
    country: "India",
  },
  
  {
    title: "Houseboat Stay in Alleppey",
    description: "Experience the tranquil backwaters of Kerala aboard a traditional houseboat in Alleppey.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Beachfront Cottage in Goa",
    description: "Relax in a charming beachfront cottage with stunning views of the Arabian Sea in Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description: "Stay in a restored heritage haveli showcasing Rajasthani architecture in the Pink City.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVyaXRhZ2UlMjBoYXZlbGklMjBpbiUyMGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 4000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Tea Estate Bungalow in Munnar",
    description: "Unwind in a serene bungalow nestled within lush tea plantations in Munnar.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1682258635402-9d88e8d1d6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhJTIwZXN0YXRlJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
    },
    price: 2800,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Mountain Cabin in Manali",
    description: "Enjoy breathtaking views of the Himalayas from a cozy mountain cabin in Manali.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Manali",
    country: "India",
  },
  {
    title: "Desert Camp in Jaisalmer",
    description: "Experience the magic of the Thar Desert with a stay in a traditional desert camp.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527419105721-af1f23c86dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzZXJ0JTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2500,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Treehouse in Wayanad",
    description: "Stay amidst the treetops in an eco-friendly treehouse overlooking Wayanad's forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Ooty",
    description: "Relive the colonial era in a charming bungalow surrounded by Ooty's lush gardens.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1685133855379-711aa008f7ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVuZ2Fsb3clMjBpbiUyMG9vdHl8ZW58MHx8MHx8fDA%3D",
    },
    price: 2900,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Lakeview Villa in Udaipur",
    description: "Enjoy panoramic views of Lake Pichola from a luxurious villa in Udaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Beach House in Varkala",
    description: "Stay in a serene beach house perched on the cliffs overlooking the Arabian Sea in Varkala.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Cottage in Coorg",
    description: "Relax in a cozy cottage amidst the coffee plantations and misty hills of Coorg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1715766998279-0752e7e5f7db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZSUyMGluJTIwY29vcmd8ZW58MHx8MHx8fDA%3D",
    },
    price: 2600,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Luxury Tent in Pushkar",
    description: "Experience glamping in a luxurious tent set against the backdrop of Pushkar's dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1671485358542-10e6ad107eaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHRlbnQlMjBpbiUyMHB1c2hrYXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 2800,
    location: "Pushkar",
    country: "India",
  },
  {
    title: "Himalayan Retreat in Dharamshala",
    description: "Find peace in a secluded retreat with breathtaking views of the Dhauladhar range.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Dharamshala",
    country: "India",
  },
  {
    title: "Backwater Villa in Kumarakom",
    description: "Stay in a tranquil villa overlooking the serene backwaters of Kumarakom.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Kumarakom",
    country: "India",
  },
  {
    title: "Hilltop Cottage in Kodaikanal",
    description: "Enjoy panoramic views from a hilltop cottage nestled in the lush landscapes of Kodaikanal.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1724685936874-04193d71bc44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlsbHRvcCUyMGNvdHRhZ2UlMjBpbiUyMGtvZGFpa2FuYWx8ZW58MHx8MHx8fDA%3D",
    },
    price: 2700,
    location: "Kodaikanal",
    country: "India",
  },
  {
    title: "Forest Cabin in Jim Corbett",
    description: "Stay amidst the wilderness in a rustic cabin near Jim Corbett National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1688362379260-7ab7a4cdb6c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0JTIwY2FiaW4lMjBpbiUyMGppbSUyMGNvcnRlZ2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 3200,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Riverside Cottage in Rishikesh",
    description: "Experience tranquility in a riverside cottage overlooking the Ganges in Rishikesh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Beachfront Villa in Pondicherry",
    description: "Enjoy the serene beauty of the Bay of Bengal from a beachfront villa in Pondicherry.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Jungle Lodge in Bandipur",
    description: "Stay close to nature in a jungle lodge near Bandipur National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1709951272924-f388985b2b30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8anVuZ2xlJTIwbG9kZ2UlMjBpbiUyMGJhbmRpcHVyfGVufDB8fDB8fHww",
    },
    price: 3100,
    location: "Bandipur",
    country: "India",
  },
  {
    title: "Heritage Homestay in Mysore",
    description: "Experience royal hospitality in a heritage homestay reflecting Mysore's rich culture.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG15c29yZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2800,
    location: "Mysore",
    country: "India",
  },
];

module.exports = { data: sampleListings };