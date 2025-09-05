export interface StudentDeal {
  id: string;
  name: string;
  website: string;
  category: string;
  description: string;
  verification: string;
  discount: string;
  instructions: string[];
  featured: boolean;
  icon?: string;
}

export const categories = [
  "Aggregators",
  "Tech",
  "Entertainment", 
  "Retail",
  "Travel",
  "Food"
] as const;

export type Category = typeof categories[number];

export const studentDeals: StudentDeal[] = [
  // Aggregators
  {
    id: "unidays",
    name: "UNiDAYS",
    website: "myunidays.com",
    category: "Aggregators",
    description: "Free platform aggregating exclusive student deals across brands; verify with school email or ID.",
    verification: "School email or student ID upload",
    discount: "Various exclusive deals",
    instructions: [
      "Visit myunidays.com",
      "Sign up with your school email address",
      "Verify your student status through their system",
      "Browse and apply discounts at checkout"
    ],
    featured: true
  },
  {
    id: "student-beans",
    name: "Student Beans",
    website: "studentbeans.com",
    category: "Aggregators", 
    description: "Offers exclusive codes for student deals on various brands; verify via school account.",
    verification: "School account verification",
    discount: "Exclusive brand codes",
    instructions: [
      "Visit studentbeans.com",
      "Create an account with your school email",
      "Complete student verification process",
      "Access exclusive discount codes"
    ],
    featured: true
  },
  {
    id: "sheerid",
    name: "SheerID",
    website: "sheerid.com",
    category: "Aggregators",
    description: "Verification service for student deals from partnered brands; upload ID or use email.",
    verification: "Student ID upload or .edu email",
    discount: "Partner brand discounts",
    instructions: [
      "Visit sheerid.com",
      "Select student verification",
      "Upload student ID or use .edu email",
      "Access partner discounts once verified"
    ],
    featured: false
  },
  {
    id: "id-me",
    name: "ID.me",
    website: "id.me",
    category: "Aggregators",
    description: "Shop portal for verified student discounts on tech, retail, etc.; verify with school docs.",
    verification: "School documentation",
    discount: "Tech and retail discounts",
    instructions: [
      "Visit id.me",
      "Create student account",
      "Upload required school documentation", 
      "Shop verified student deals"
    ],
    featured: false
  },

  // Tech
  {
    id: "amazon-prime-student",
    name: "Amazon Prime Student",
    website: "amazon.com",
    category: "Tech",
    description: "Prime Student with free trial and half-off membership; verify with .edu email.",
    verification: ".edu email address",
    discount: "50% off Prime membership",
    instructions: [
      "Visit amazon.com/joinstudent",
      "Sign up with your .edu email address",
      "Start your free 6-month trial",
      "Enjoy half-price Prime after trial"
    ],
    featured: true
  },
  {
    id: "apple-education",
    name: "Apple Education",
    website: "apple.com",
    category: "Tech",
    description: "Education pricing on Macs/iPads with extras like free AirPods; verify via UNiDAYS or email.",
    verification: "UNiDAYS or school email",
    discount: "Up to $200 off + free accessories",
    instructions: [
      "Visit apple.com/us/shop/goto/educationrouting",
      "Verify student status through UNiDAYS",
      "Browse education pricing on devices",
      "Add free accessories during special promotions"
    ],
    featured: true
  },
  {
    id: "microsoft-education",
    name: "Microsoft Education", 
    website: "microsoft.com",
    category: "Tech",
    description: "Up to 10% off devices and free Office 365; verify with school email.",
    verification: "School email address",
    discount: "Up to 10% off + free Office 365",
    instructions: [
      "Visit microsoft.com/en-us/education/students",
      "Sign up with your school email",
      "Verify your student status",
      "Access education pricing and free software"
    ],
    featured: false
  },
  {
    id: "dell-university",
    name: "Dell University",
    website: "dell.com",
    category: "Tech",
    description: "Discounts on laptops/monitors via University program; verify with academic email.",
    verification: "Academic email address",
    discount: "Exclusive education pricing",
    instructions: [
      "Visit dell.com/learn/us/en/19/campaigns/university",
      "Create account with academic email",
      "Browse university program deals",
      "Apply discounts at checkout"
    ],
    featured: false
  },
  {
    id: "hp-education",
    name: "HP Education Store",
    website: "hp.com",
    category: "Tech",
    description: "Up to 40% off in Education Store; verify with .edu email.",
    verification: ".edu email address",
    discount: "Up to 40% off",
    instructions: [
      "Visit hp.com/us-en/shop/slp/hp-education-store",
      "Sign up with your .edu email",
      "Browse education store products",
      "Apply automatic student pricing"
    ],
    featured: false
  },
  {
    id: "lenovo-student",
    name: "Lenovo Student",
    website: "lenovo.com", 
    category: "Tech",
    description: "Extra 5% off storewide; verify via ID.me.",
    verification: "ID.me verification",
    discount: "Extra 5% off storewide",
    instructions: [
      "Visit lenovo.com and create account",
      "Verify student status through ID.me",
      "Browse student-eligible products",
      "Apply additional 5% discount"
    ],
    featured: false
  },
  {
    id: "logitech-student",
    name: "Logitech Student",
    website: "logitech.com",
    category: "Tech", 
    description: "Up to 30% off accessories; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "Up to 30% off",
    instructions: [
      "Visit logitech.com",
      "Click on student discounts",
      "Verify through UNiDAYS portal",
      "Shop with automatic student pricing"
    ],
    featured: false
  },
  {
    id: "samsung-education",
    name: "Samsung Education",
    website: "samsung.com",
    category: "Tech",
    description: "Up to 30% off devices; verify via education program.",
    verification: "Education program verification", 
    discount: "Up to 30% off devices",
    instructions: [
      "Visit samsung.com/us/shop/discount-programs/education",
      "Sign up for education program",
      "Verify your student status", 
      "Access exclusive education pricing"
    ],
    featured: false
  },
  {
    id: "best-buy-student",
    name: "Best Buy Student Deals",
    website: "bestbuy.com",
    category: "Tech",
    description: "Special deals on electronics; verify with student hub signup.",
    verification: "Student hub account",
    discount: "Exclusive electronics deals",
    instructions: [
      "Visit bestbuy.com/site/clp/student-deals",
      "Sign up for student hub account",
      "Verify your student status",
      "Browse exclusive student electronics deals"
    ],
    featured: false
  },
  {
    id: "adobe-student",
    name: "Adobe Creative Cloud Student",
    website: "adobe.com",
    category: "Tech",
    description: "60%+ off Creative Cloud; verify with school email.",
    verification: "School email address",
    discount: "60%+ off Creative Cloud",
    instructions: [
      "Visit adobe.com/creativecloud/buy/students.html",
      "Sign up with your school email",
      "Verify student eligibility",
      "Start discounted Creative Cloud subscription"
    ],
    featured: true
  },

  // Entertainment
  {
    id: "spotify-student",
    name: "Spotify Premium Student",
    website: "spotify.com",
    category: "Entertainment",
    description: "Premium Student for $5.99/month with Hulu; verify via SheerID.",
    verification: "SheerID verification",
    discount: "$5.99/month with Hulu included",
    instructions: [
      "Visit spotify.com/us/student/",
      "Sign up for Premium Student plan",
      "Verify status through SheerID",
      "Enjoy Spotify Premium + Hulu for $5.99/month"
    ],
    featured: true
  },
  {
    id: "hulu-student",
    name: "Hulu Student",
    website: "hulu.com",
    category: "Entertainment",
    description: "Ad-supported plan for $1.99/month; verify with student email.",
    verification: "Student email verification",
    discount: "$1.99/month ad-supported plan",
    instructions: [
      "Visit hulu.com/student",
      "Sign up with student email",
      "Complete student verification",
      "Start $1.99/month subscription"
    ],
    featured: false
  },
  {
    id: "apple-music-student",
    name: "Apple Music Student",
    website: "apple.com/music",
    category: "Entertainment",
    description: "$5.99/month with Apple TV+; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "$5.99/month with Apple TV+ included",
    instructions: [
      "Open Apple Music app or visit apple.com/music", 
      "Select student subscription option",
      "Verify through UNiDAYS",
      "Enjoy music + Apple TV+ for $5.99/month"
    ],
    featured: false
  },
  {
    id: "youtube-premium-student",
    name: "YouTube Premium Student",
    website: "youtube.com/premium",
    category: "Entertainment",
    description: "Premium for $7.99/month; verify with student status.",
    verification: "Student status verification",
    discount: "$7.99/month Premium plan",
    instructions: [
      "Visit youtube.com/premium/student",
      "Sign up for student plan",
      "Verify your student status",
      "Enjoy ad-free YouTube Premium for $7.99/month"
    ],
    featured: false
  },
  {
    id: "peacock-student",
    name: "Peacock Premium Student",
    website: "peacocktv.com",
    category: "Entertainment",
    description: "Premium for $2.99/month; verify via student signup.",
    verification: "Student signup verification",
    discount: "$2.99/month Premium",
    instructions: [
      "Visit peacocktv.com/student",
      "Create account with student plan",
      "Verify student eligibility",
      "Stream Premium content for $2.99/month"
    ],
    featured: false
  },
  {
    id: "paramount-plus-student",
    name: "Paramount+ Student",
    website: "paramountplus.com",
    category: "Entertainment",
    description: "50% off plans; verify with student email.",
    verification: "Student email verification",
    discount: "50% off subscription plans",
    instructions: [
      "Visit paramountplus.com/student",
      "Sign up with student email",
      "Verify student status",
      "Enjoy 50% off Paramount+ subscription"
    ],
    featured: false
  },
  {
    id: "disney-plus-student",
    name: "Disney+ Student Bundle",
    website: "disneyplus.com",
    category: "Entertainment",
    description: "Bundled discounts via Hulu/Spotify; verify with student status.",
    verification: "Student status verification",
    discount: "Bundle discounts available",
    instructions: [
      "Visit disneyplus.com/welcome/student-offer",
      "Check for current student bundles",
      "Verify student status as required",
      "Subscribe to discounted bundle plans"
    ],
    featured: false
  },
  {
    id: "tidal-student",
    name: "Tidal Student",
    website: "tidal.com",
    category: "Entertainment",
    description: "50% off premium; verify via student program.",
    verification: "Student program verification",
    discount: "50% off Premium plan",
    instructions: [
      "Visit tidal.com/student",
      "Sign up for student subscription",
      "Complete student verification process",
      "Enjoy 50% off Tidal Premium"
    ],
    featured: false
  },
  {
    id: "headspace-student",
    name: "Headspace Student",
    website: "headspace.com",
    category: "Entertainment",
    description: "Student plan for $9.99/year; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "$9.99/year student plan",
    instructions: [
      "Visit headspace.com/studentplan",
      "Sign up for student subscription",
      "Verify through UNiDAYS",
      "Access meditation content for $9.99/year"
    ],
    featured: false
  },

  // Retail
  {
    id: "target-student",
    name: "Target Circle Student",
    website: "target.com",
    category: "Retail",
    description: "20% off qualifying purchases via Circle; verify with student ID.",
    verification: "Student ID verification",
    discount: "20% off qualifying purchases",
    instructions: [
      "Download Target Circle app",
      "Sign up for student program",
      "Verify with student ID",
      "Apply 20% discount on eligible items"
    ],
    featured: false
  },
  {
    id: "walmart-plus-student",
    name: "Walmart+ Student",
    website: "walmart.com",
    category: "Retail",
    description: "Half-off Walmart+ membership; verify via SheerID.",
    verification: "SheerID verification", 
    discount: "50% off Walmart+ membership",
    instructions: [
      "Visit walmart.com/plus/student",
      "Sign up for student membership",
      "Verify through SheerID",
      "Enjoy half-price Walmart+ benefits"
    ],
    featured: false
  },
  {
    id: "costco-student",
    name: "Costco Student",
    website: "costco.com",
    category: "Retail",
    description: "Gift cards with membership deals; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "Membership deals + gift cards",
    instructions: [
      "Visit costco.com through UNiDAYS portal",
      "Verify student status via UNiDAYS",
      "Browse student membership offers",
      "Purchase with exclusive student pricing"
    ],
    featured: false
  },
  {
    id: "sams-club-student",
    name: "Sam's Club Student",
    website: "samsclub.com",
    category: "Retail",
    description: "Discounted memberships; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "Discounted membership rates",
    instructions: [
      "Visit samsclub.com/student",
      "Apply for student membership",
      "Verify through UNiDAYS",
      "Activate discounted membership"
    ],
    featured: false
  },
  {
    id: "nike-student",
    name: "Nike Student Discount",
    website: "nike.com",
    category: "Retail",
    description: "10% off online/app; verify via SheerID.",
    verification: "SheerID verification",
    discount: "10% off online and app purchases",
    instructions: [
      "Visit nike.com and sign up",
      "Apply for student discount",
      "Verify through SheerID",
      "Enjoy 10% off Nike products"
    ],
    featured: false
  },
  {
    id: "adidas-student",
    name: "Adidas Student Discount",
    website: "adidas.com",
    category: "Retail",
    description: "15% off; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "15% off site-wide",
    instructions: [
      "Visit adidas.com",
      "Click student discount link",
      "Verify through UNiDAYS",
      "Apply 15% discount to purchases"
    ],
    featured: false
  },
  {
    id: "reebok-student", 
    name: "Reebok Student Discount",
    website: "reebok.com",
    category: "Retail",
    description: "Up to 60% off; verify via Student Beans.",
    verification: "Student Beans verification",
    discount: "Up to 60% off",
    instructions: [
      "Visit reebok.com",
      "Access student discount section",
      "Verify via Student Beans",
      "Shop with up to 60% off pricing"
    ],
    featured: false
  },
  {
    id: "american-eagle-student",
    name: "American Eagle Student",
    website: "ae.com",
    category: "Retail",
    description: "20% off; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "20% off purchases",
    instructions: [
      "Visit ae.com/us/en/c/aeo/student-discount",
      "Sign up for student program",
      "Verify through UNiDAYS",
      "Apply 20% student discount"
    ],
    featured: false
  },
  {
    id: "j-crew-student",
    name: "J.Crew Student Discount",
    website: "jcrew.com",
    category: "Retail", 
    description: "15% off; verify with student ID.",
    verification: "Student ID verification",
    discount: "15% off purchases",
    instructions: [
      "Visit jcrew.com",
      "Sign up for student discount",
      "Verify with student ID upload",
      "Receive 15% off eligible items"
    ],
    featured: false
  },
  {
    id: "madewell-student",
    name: "Madewell Student Discount",
    website: "madewell.com",
    category: "Retail",
    description: "15% off; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "15% off purchases",
    instructions: [
      "Visit madewell.com",
      "Access student discount portal",
      "Verify through UNiDAYS",
      "Shop with 15% student discount"
    ],
    featured: false
  },
  {
    id: "levis-student",
    name: "Levi's Student Discount",
    website: "levi.com",
    category: "Retail",
    description: "15% off online; verify with student status.",
    verification: "Student status verification",
    discount: "15% off online purchases",
    instructions: [
      "Visit levi.com",
      "Sign up for student program",
      "Verify student status",
      "Apply 15% discount to online orders"
    ],
    featured: false
  },
  {
    id: "north-face-student",
    name: "The North Face Student",
    website: "thenorthface.com",
    category: "Retail",
    description: "10% off; verify via ID.me.",
    verification: "ID.me verification",
    discount: "10% off purchases",
    instructions: [
      "Visit thenorthface.com",
      "Access student discount section",
      "Verify through ID.me",
      "Enjoy 10% off North Face gear"
    ],
    featured: false
  },
  {
    id: "tommy-hilfiger-student",
    name: "Tommy Hilfiger Student",
    website: "tommy.com",
    category: "Retail",
    description: "15% off; verify via ID.me.",
    verification: "ID.me verification",
    discount: "15% off purchases",
    instructions: [
      "Visit tommy.com",
      "Sign up for student discount",
      "Verify through ID.me",
      "Apply 15% student discount"
    ],
    featured: false
  },
  {
    id: "hm-student",
    name: "H&M Student Discount",
    website: "hm.com",
    category: "Retail",
    description: "10% off; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "10% off purchases",
    instructions: [
      "Visit hm.com",
      "Access student discount portal",
      "Verify through UNiDAYS",
      "Shop with 10% student savings"
    ],
    featured: false
  },

  // Travel
  {
    id: "amtrak-student",
    name: "Amtrak Student Advantage",
    website: "amtrak.com",
    category: "Travel",
    description: "15% off fares; verify with student ID.",
    verification: "Student ID verification",
    discount: "15% off train fares",
    instructions: [
      "Visit amtrak.com/deals-discounts/student-discount",
      "Sign up for Student Advantage",
      "Verify with student ID",
      "Book trains with 15% discount"
    ],
    featured: false
  },
  {
    id: "united-student",
    name: "United Airlines Student",
    website: "united.com",
    category: "Travel",
    description: "5% off flights; verify via app signup.",
    verification: "Student app signup",
    discount: "5% off flights",
    instructions: [
      "Download United app",
      "Sign up for student program",
      "Verify student status",
      "Book flights with student discount"
    ],
    featured: false
  },
  {
    id: "greyhound-student",
    name: "Greyhound Student",
    website: "greyhound.com",
    category: "Travel",
    description: "10% off fares; verify via Student Advantage.",
    verification: "Student Advantage program",
    discount: "10% off bus fares",
    instructions: [
      "Visit greyhound.com",
      "Join Student Advantage program",
      "Verify student eligibility",
      "Book buses with 10% discount"
    ],
    featured: false
  },
  {
    id: "hotels-com-student",
    name: "Hotels.com Student",
    website: "hotels.com",
    category: "Travel",
    description: "Up to 35% off bookings; verify via UNiDAYS.",
    verification: "UNiDAYS verification",
    discount: "Up to 35% off hotel bookings",
    instructions: [
      "Visit hotels.com through UNiDAYS",
      "Verify student status",
      "Browse student-rate hotels",
      "Book with exclusive student pricing"
    ],
    featured: false
  },
  {
    id: "flixbus-student",
    name: "FlixBus Student",
    website: "flixbus.com",
    category: "Travel",
    description: "15% off tickets; verify via Student Beans.",
    verification: "Student Beans verification",
    discount: "15% off bus tickets",
    instructions: [
      "Visit flixbus.com",
      "Access student discount section",
      "Verify via Student Beans",
      "Book buses with 15% savings"
    ],
    featured: false
  },
  {
    id: "hertz-student",
    name: "Hertz Student Rentals",
    website: "hertz.com",
    category: "Travel",
    description: "15-20% off rentals; verify with student ID/license.",
    verification: "Student ID and driver's license",
    discount: "15-20% off car rentals",
    instructions: [
      "Visit hertz.com/student",
      "Sign up for student program",
      "Verify with student ID and license",
      "Rent cars with student discount"
    ],
    featured: false
  },
  {
    id: "student-universe",
    name: "StudentUniverse",
    website: "studentuniverse.com",
    category: "Travel",
    description: "Discounted flights/hotels; verify with school email.",
    verification: "School email verification",
    discount: "Exclusive student travel rates",
    instructions: [
      "Visit studentuniverse.com",
      "Create account with school email",
      "Verify student status",
      "Book discounted flights and hotels"
    ],
    featured: true
  },

  // Food
  {
    id: "doordash-student",
    name: "DoorDash Student",
    website: "doordash.com",
    category: "Food",
    description: "DashPass for $4.99/month; verify via student plan.",
    verification: "Student plan verification",
    discount: "$4.99/month DashPass",
    instructions: [
      "Download DoorDash app",
      "Sign up for student DashPass",
      "Verify student eligibility",
      "Enjoy free delivery for $4.99/month"
    ],
    featured: false
  },
  {
    id: "hellofresh-student",
    name: "HelloFresh Student",
    website: "hellofresh.com",
    category: "Food",
    description: "55% off first box + ongoing discounts; verify via Student Beans.",
    verification: "Student Beans verification",
    discount: "55% off first box + ongoing discounts",
    instructions: [
      "Visit hellofresh.com through Student Beans",
      "Verify student status",
      "Select meal plan",
      "Apply 55% off first box discount"
    ],
    featured: false
  },
  {
    id: "blue-apron-student",
    name: "Blue Apron Student",
    website: "blueapron.com",
    category: "Food",
    description: "30% off first weeks; verify via Student Beans.",
    verification: "Student Beans verification",
    discount: "30% off first delivery weeks",
    instructions: [
      "Visit blueapron.com",
      "Access student discount section",
      "Verify via Student Beans",
      "Apply 30% off first weeks discount"
    ],
    featured: false
  },
  {
    id: "mcdonalds-student",
    name: "McDonald's Student Deals",
    website: "mcdonalds.com",
    category: "Food",
    description: "Free items with meals; verify with student ID.",
    verification: "Student ID at location",
    discount: "Free items with purchase",
    instructions: [
      "Visit participating McDonald's locations",
      "Show valid student ID",
      "Ask about current student promotions",
      "Receive free items with meal purchase"
    ],
    featured: false
  },
  {
    id: "chick-fil-a-student",
    name: "Chick-fil-A Student",
    website: "chick-fil-a.com",
    category: "Food",
    description: "Free drink with purchase; verify with student ID.",
    verification: "Student ID at location",
    discount: "Free drink with meal purchase",
    instructions: [
      "Visit participating Chick-fil-A locations",
      "Show valid student ID",
      "Purchase any meal",
      "Receive free drink with purchase"
    ],
    featured: false
  },
  {
    id: "dunkin-student",
    name: "Dunkin' Student Discount",
    website: "dunkindonuts.com",
    category: "Food",
    description: "10% off; verify with student ID at locations.",
    verification: "Student ID at location",
    discount: "10% off purchases",
    instructions: [
      "Visit participating Dunkin' locations",
      "Show valid student ID",
      "Place your order",
      "Receive 10% off total purchase"
    ],
    featured: false
  }
];

export const featuredDeals = studentDeals.filter(deal => deal.featured);

export const getDealsByCategory = (category: Category) => {
  return studentDeals.filter(deal => deal.category === category);
};

export const searchDeals = (query: string) => {
  const searchTerm = query.toLowerCase();
  return studentDeals.filter(deal => 
    deal.name.toLowerCase().includes(searchTerm) ||
    deal.description.toLowerCase().includes(searchTerm) ||
    deal.category.toLowerCase().includes(searchTerm) ||
    deal.website.toLowerCase().includes(searchTerm)
  );
};