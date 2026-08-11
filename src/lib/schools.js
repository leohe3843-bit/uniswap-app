// Top 50 US Universities — SwapU school database
// Each school has: name, abbr (short label), slug (URL), city, state, stateCode,
// colors [primary, secondary], emoji, and mascot.

const schools = [
  // --- California ---
  { name: 'Stanford University', abbr: 'Stanford', slug: 'stanford', city: 'Stanford', state: 'California', stateCode: 'CA', colors: ['#8C1515', '#F4E6C8'], emoji: '🌲', mascot: 'Cardinal' },
  { name: 'California Institute of Technology', abbr: 'Caltech', slug: 'caltech', city: 'Pasadena', state: 'California', stateCode: 'CA', colors: ['#FF6C0C', '#FFFFFF'], emoji: '🔬', mascot: 'Beavers' },
  { name: 'University of California, Berkeley', abbr: 'UC Berkeley', slug: 'uc-berkeley', city: 'Berkeley', state: 'California', stateCode: 'CA', colors: ['#003262', '#FDB515'], emoji: '🐻', mascot: 'Golden Bears' },
  { name: 'University of California, Los Angeles', abbr: 'UCLA', slug: 'ucla', city: 'Los Angeles', state: 'California', stateCode: 'CA', colors: ['#2774AE', '#FFD100'], emoji: '🐻', mascot: 'Bruins' },
  { name: 'University of Southern California', abbr: 'USC', slug: 'usc', city: 'Los Angeles', state: 'California', stateCode: 'CA', colors: ['#990000', '#FFC72C'], emoji: '✌️', mascot: 'Trojans' },
  { name: 'University of California, San Diego', abbr: 'UCSD', slug: 'ucsd', city: 'La Jolla', state: 'California', stateCode: 'CA', colors: ['#182B49', '#C69214'], emoji: '🔱', mascot: 'Tritons' },

  // --- Massachusetts ---
  { name: 'Massachusetts Institute of Technology', abbr: 'MIT', slug: 'mit', city: 'Cambridge', state: 'Massachusetts', stateCode: 'MA', colors: ['#A31F34', '#8A8B8C'], emoji: '⚙️', mascot: 'Engineers' },
  { name: 'Harvard University', abbr: 'Harvard', slug: 'harvard', city: 'Cambridge', state: 'Massachusetts', stateCode: 'MA', colors: ['#A51C30', '#FFFFFF'], emoji: '📚', mascot: 'Crimson' },
  { name: 'Boston University', abbr: 'BU', slug: 'bu', city: 'Boston', state: 'Massachusetts', stateCode: 'MA', colors: ['#CC0000', '#FFFFFF'], emoji: '🐾', mascot: 'Terriers' },
  { name: 'Boston College', abbr: 'BC', slug: 'bc', city: 'Chestnut Hill', state: 'Massachusetts', stateCode: 'MA', colors: ['#8B2332', '#BEA568'], emoji: '🦅', mascot: 'Eagles' },
  { name: 'Tufts University', abbr: 'Tufts', slug: 'tufts', city: 'Medford', state: 'Massachusetts', stateCode: 'MA', colors: ['#3E8EDE', '#6C4023'], emoji: '🐘', mascot: 'Jumbos' },

  // --- New York ---
  { name: 'Columbia University', abbr: 'Columbia', slug: 'columbia', city: 'New York', state: 'New York', stateCode: 'NY', colors: ['#B9D9EB', '#002B7F'], emoji: '🦁', mascot: 'Lions' },
  { name: 'Cornell University', abbr: 'Cornell', slug: 'cornell', city: 'Ithaca', state: 'New York', stateCode: 'NY', colors: ['#B31B1B', '#FFFFFF'], emoji: '🐻', mascot: 'Big Red' },
  { name: 'New York University', abbr: 'NYU', slug: 'nyu', city: 'New York', state: 'New York', stateCode: 'NY', colors: ['#57068C', '#FFFFFF'], emoji: '🗽', mascot: 'Violets' },
  { name: 'University of Rochester', abbr: 'Rochester', slug: 'rochester', city: 'Rochester', state: 'New York', stateCode: 'NY', colors: ['#FFD100', '#003B71'], emoji: '🐝', mascot: 'Yellowjackets' },

  // --- Connecticut ---
  { name: 'Yale University', abbr: 'Yale', slug: 'yale', city: 'New Haven', state: 'Connecticut', stateCode: 'CT', colors: ['#00356B', '#FFFFFF'], emoji: '🐶', mascot: 'Bulldogs' },

  // --- New Jersey ---
  { name: 'Princeton University', abbr: 'Princeton', slug: 'princeton', city: 'Princeton', state: 'New Jersey', stateCode: 'NJ', colors: ['#FF8F00', '#000000'], emoji: '🐯', mascot: 'Tigers' },

  // --- Pennsylvania ---
  { name: 'University of Pennsylvania', abbr: 'UPenn', slug: 'upenn', city: 'Philadelphia', state: 'Pennsylvania', stateCode: 'PA', colors: ['#011F5B', '#990000'], emoji: '🔔', mascot: 'Quakers' },
  { name: 'Carnegie Mellon University', abbr: 'CMU', slug: 'cmu', city: 'Pittsburgh', state: 'Pennsylvania', stateCode: 'PA', colors: ['#C41230', '#6D6E71'], emoji: '🏛️', mascot: 'Tartans' },

  // --- Maryland ---
  { name: 'Johns Hopkins University', abbr: 'JHU', slug: 'jhu', city: 'Baltimore', state: 'Maryland', stateCode: 'MD', colors: ['#002D72', '#FFFFFF'], emoji: '🏥', mascot: 'Blue Jays' },
  { name: 'University of Maryland', abbr: 'UMD', slug: 'umd', city: 'College Park', state: 'Maryland', stateCode: 'MD', colors: ['#E21833', '#FFD200'], emoji: '🐢', mascot: 'Terrapins' },

  // --- Washington, D.C. ---
  { name: 'Georgetown University', abbr: 'Georgetown', slug: 'georgetown', city: 'Washington', state: 'District of Columbia', stateCode: 'DC', colors: ['#041E42', '#63666A'], emoji: '🐶', mascot: 'Hoyas' },
  { name: 'George Washington University', abbr: 'GWU', slug: 'gwu', city: 'Washington', state: 'District of Columbia', stateCode: 'DC', colors: ['#004065', '#AA9868'], emoji: '🦅', mascot: 'Colonials' },

  // --- Illinois ---
  { name: 'University of Chicago', abbr: 'UChicago', slug: 'uchicago', city: 'Chicago', state: 'Illinois', stateCode: 'IL', colors: ['#800000', '#FFFFFF'], emoji: '🦉', mascot: 'Maroons' },
  { name: 'Northwestern University', abbr: 'Northwestern', slug: 'northwestern', city: 'Evanston', state: 'Illinois', stateCode: 'IL', colors: ['#4E2A84', '#FFFFFF'], emoji: '🐱', mascot: 'Wildcats' },
  { name: 'University of Illinois Urbana-Champaign', abbr: 'UIUC', slug: 'uiuc', city: 'Champaign', state: 'Illinois', stateCode: 'IL', colors: ['#E84A27', '#13294B'], emoji: '🌽', mascot: 'Fighting Illini' },

  // --- North Carolina ---
  { name: 'Duke University', abbr: 'Duke', slug: 'duke', city: 'Durham', state: 'North Carolina', stateCode: 'NC', colors: ['#003087', '#FFFFFF'], emoji: '😈', mascot: 'Blue Devils' },
  { name: 'University of North Carolina at Chapel Hill', abbr: 'UNC', slug: 'unc', city: 'Chapel Hill', state: 'North Carolina', stateCode: 'NC', colors: ['#7BAFD4', '#FFFFFF'], emoji: '🐏', mascot: 'Tar Heels' },
  { name: 'Wake Forest University', abbr: 'Wake Forest', slug: 'wake-forest', city: 'Winston-Salem', state: 'North Carolina', stateCode: 'NC', colors: ['#9E7E38', '#000000'], emoji: '😈', mascot: 'Demon Deacons' },

  // --- Michigan ---
  { name: 'University of Michigan', abbr: 'UMich', slug: 'umich', city: 'Ann Arbor', state: 'Michigan', stateCode: 'MI', colors: ['#00274C', '#FFCB05'], emoji: '〽️', mascot: 'Wolverines' },

  // --- Indiana ---
  { name: 'University of Notre Dame', abbr: 'Notre Dame', slug: 'notre-dame', city: 'Notre Dame', state: 'Indiana', stateCode: 'IN', colors: ['#0C2340', '#C99700'], emoji: '☘️', mascot: 'Fighting Irish' },

  // --- Georgia ---
  { name: 'Emory University', abbr: 'Emory', slug: 'emory', city: 'Atlanta', state: 'Georgia', stateCode: 'GA', colors: ['#012169', '#DAA900'], emoji: '🦅', mascot: 'Eagles' },
  { name: 'Georgia Institute of Technology', abbr: 'Georgia Tech', slug: 'georgia-tech', city: 'Atlanta', state: 'Georgia', stateCode: 'GA', colors: ['#003057', '#B3A369'], emoji: '🐝', mascot: 'Yellow Jackets' },

  // --- Tennessee ---
  { name: 'Vanderbilt University', abbr: 'Vanderbilt', slug: 'vanderbilt', city: 'Nashville', state: 'Tennessee', stateCode: 'TN', colors: ['#866D4B', '#000000'], emoji: '⚓', mascot: 'Commodores' },

  // --- Virginia ---
  { name: 'University of Virginia', abbr: 'UVA', slug: 'uva', city: 'Charlottesville', state: 'Virginia', stateCode: 'VA', colors: ['#232D4B', '#F84C1E'], emoji: '⚔️', mascot: 'Cavaliers' },
  { name: 'William & Mary', abbr: 'W&M', slug: 'william-mary', city: 'Williamsburg', state: 'Virginia', stateCode: 'VA', colors: ['#115740', '#B9A36B'], emoji: '🦁', mascot: 'Tribe' },

  // --- Texas ---
  { name: 'Rice University', abbr: 'Rice', slug: 'rice', city: 'Houston', state: 'Texas', stateCode: 'TX', colors: ['#003366', '#C1C6C8'], emoji: '🦉', mascot: 'Owls' },
  { name: 'University of Texas at Austin', abbr: 'UT Austin', slug: 'ut-austin', city: 'Austin', state: 'Texas', stateCode: 'TX', colors: ['#BF5700', '#FFFFFF'], emoji: '🤘', mascot: 'Longhorns' },

  // --- Missouri ---
  { name: 'Washington University in St. Louis', abbr: 'WashU', slug: 'washu', city: 'St. Louis', state: 'Missouri', stateCode: 'MO', colors: ['#A51417', '#007360'], emoji: '🐻', mascot: 'Bears' },

  // --- Rhode Island ---
  { name: 'Brown University', abbr: 'Brown', slug: 'brown', city: 'Providence', state: 'Rhode Island', stateCode: 'RI', colors: ['#4E3629', '#ED1C24'], emoji: '🐻', mascot: 'Bears' },

  // --- New Hampshire ---
  { name: 'Dartmouth College', abbr: 'Dartmouth', slug: 'dartmouth', city: 'Hanover', state: 'New Hampshire', stateCode: 'NH', colors: ['#00693E', '#FFFFFF'], emoji: '🌲', mascot: 'Big Green' },

  // --- Wisconsin ---
  { name: 'University of Wisconsin-Madison', abbr: 'UW-Madison', slug: 'uw-madison', city: 'Madison', state: 'Wisconsin', stateCode: 'WI', colors: ['#C5050C', '#FFFFFF'], emoji: '🦡', mascot: 'Badgers' },

  // --- Minnesota ---
  { name: 'University of Minnesota', abbr: 'UMN', slug: 'umn', city: 'Minneapolis', state: 'Minnesota', stateCode: 'MN', colors: ['#7A0019', '#FFD75E'], emoji: '🐿️', mascot: 'Golden Gophers' },

  // --- Ohio ---
  { name: 'Case Western Reserve University', abbr: 'CWRU', slug: 'cwru', city: 'Cleveland', state: 'Ohio', stateCode: 'OH', colors: ['#0A304E', '#FFFFFF'], emoji: '🐾', mascot: 'Spartans' },
  { name: 'Ohio State University', abbr: 'Ohio State', slug: 'ohio-state', city: 'Columbus', state: 'Ohio', stateCode: 'OH', colors: ['#BB0000', '#666666'], emoji: '🌰', mascot: 'Buckeyes' },

  // --- Washington ---
  { name: 'University of Washington', abbr: 'UW', slug: 'uw', city: 'Seattle', state: 'Washington', stateCode: 'WA', colors: ['#4B2E83', '#B7A57A'], emoji: '🐺', mascot: 'Huskies' },

  // --- Florida ---
  { name: 'University of Florida', abbr: 'UF', slug: 'uf', city: 'Gainesville', state: 'Florida', stateCode: 'FL', colors: ['#0021A5', '#FA4616'], emoji: '🐊', mascot: 'Gators' },
  { name: 'University of Miami', abbr: 'Miami', slug: 'miami', city: 'Coral Gables', state: 'Florida', stateCode: 'FL', colors: ['#F47321', '#005030'], emoji: '🌴', mascot: 'Hurricanes' },

  // --- Colorado ---
  { name: 'University of Colorado Boulder', abbr: 'CU Boulder', slug: 'cu-boulder', city: 'Boulder', state: 'Colorado', stateCode: 'CO', colors: ['#CFB87C', '#000000'], emoji: '🦬', mascot: 'Buffaloes' },

  // --- Iowa ---
  { name: 'University of Iowa', abbr: 'Iowa', slug: 'iowa', city: 'Iowa City', state: 'Iowa', stateCode: 'IA', colors: ['#FFCD00', '#000000'], emoji: '🦅', mascot: 'Hawkeyes' },
];

// --- Helpers ---

/** Get all unique states, sorted alphabetically */
export function getStates() {
  const stateSet = new Map();
  schools.forEach(s => {
    if (!stateSet.has(s.stateCode)) {
      stateSet.set(s.stateCode, s.state);
    }
  });
  return [...stateSet.entries()]
    .map(([code, name]) => ({ code, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Get schools grouped by state, sorted */
export function getSchoolsByState() {
  const groups = {};
  schools.forEach(s => {
    if (!groups[s.stateCode]) {
      groups[s.stateCode] = { state: s.state, stateCode: s.stateCode, schools: [] };
    }
    groups[s.stateCode].schools.push(s);
  });
  // Sort groups by state name, schools by name within each group
  return Object.values(groups)
    .sort((a, b) => a.state.localeCompare(b.state))
    .map(g => ({ ...g, schools: g.schools.sort((a, b) => a.name.localeCompare(b.name)) }));
}

/** Find a school by slug */
export function getSchoolBySlug(slug) {
  return schools.find(s => s.slug === slug) || null;
}

/** Search schools by query string */
export function searchSchools(query) {
  const q = query.toLowerCase().trim();
  if (!q) return schools;
  return schools.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.abbr.toLowerCase().includes(q) ||
    s.city.toLowerCase().includes(q) ||
    s.state.toLowerCase().includes(q) ||
    s.stateCode.toLowerCase() === q
  );
}

/** Get all schools as a flat sorted array */
export function getAllSchools() {
  return [...schools].sort((a, b) => a.name.localeCompare(b.name));
}

/** Get total school count */
export function getSchoolCount() {
  return schools.length;
}

export default schools;
