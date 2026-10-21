// Christmas in July 2026 — the original family reunion potluck.
// Claims for this event live at the database root ("claims/…"), where the
// first version of the page saved them, so the July sign-ups still show.
window.POTLUCK_EVENTS = window.POTLUCK_EVENTS || {};
window.POTLUCK_EVENTS['christmas-in-july-2026'] = {
  pageTitle: 'Christmas in July – Family Potluck List',
  heroTitle: 'Christmas in July 🎄',
  subtitle: 'Family Reunion Potluck Sign-Up · Tap an item to claim it!',
  when: '🎅🏽 June 27 · ~4PM · 20 People 🎅🏽',
  heroStrip: '🎄☀️🎄☀️🎄☀️🎄☀️🎄☀️🎄☀️🎄☀️🎄☀️🎄☀️🎄',
  dbPath: '',

  theme: {
    primary: '#1A6B3C',
    accent: '#C8102E',
    accentSoft: '#fff0f2',
    highlight: '#F5A800',
    background: '#FFF8F0',
    heroText: '#c8f0d8'
  },

  hostProvides: {
    items: [
      { emoji: '🍕', label: 'Pizza' },
      { emoji: '🎂', label: 'Cake' },
      { emoji: '🍺', label: 'Beer' }
    ],
    suffix: 'All provided by the host!'
  },

  // Trusted HTML, shown at the bottom of the page.
  footer: [
    '🎄 <strong>Pizza · Cake · Beer</strong> provided by your host · Tap any item to claim or release it · June 27th, ~4PM 🎄',
    'Have an activity idea? Drop it in the group chat! 💬'
  ],

  features: { rsvp: false, writeIns: false, summary: false, dietaryTags: false },

  sections: [
    {
      key: 'snacks', title: 'Snacks & Sides', icon: '🥗', badge: '{items} · serves 20', food: true,
      items: [
        { id: 'snacks-0', name: 'Chips & Dips Trio', note: 'Salsa, guacamole & queso — bring a big bag of tortilla chips', serves: 'Serves 20' },
        { id: 'snacks-1', name: 'Veggie & Hummus Platter', note: 'Carrots, celery, cucumbers, bell peppers + 2 tubs hummus', serves: 'Serves 20' },
        { id: 'snacks-2', name: 'Fruit Salad', note: 'Watermelon, berries, grapes — keep it refreshing & summer-ready', serves: 'Serves 20' },
        { id: 'snacks-3', name: 'Pasta Salad', note: 'Cold Italian or BLT style — enough for 20 as a side', serves: 'Serves 20' },
        { id: 'snacks-4', name: 'Charcuterie Board', note: 'Meats, cheeses, crackers, olives — festive holiday vibes 🎄', serves: 'Serves 15–20' },
        { id: 'snacks-5', name: 'Macaroni & Cheese', note: 'A crowd-pleasing pan — baked or stovetop, both work!', serves: 'Serves 15–20' }
      ]
    },
    {
      key: 'sundae', title: 'Sundae Bar', icon: '🍨', badge: 'Build-your-own station', layout: 'grid', food: true,
      items: [
        { id: 'sundae-0', name: 'Vanilla Ice Cream', note: '2–3 half-gallons' },
        { id: 'sundae-1', name: 'Chocolate Ice Cream', note: '2 half-gallons' },
        { id: 'sundae-2', name: 'Strawberry Ice Cream', note: '1–2 half-gallons' },
        { id: 'sundae-3', name: 'Hot Fudge & Caramel', note: '2 jars each, warming crockpot optional' },
        { id: 'sundae-4', name: 'Whipped Cream', note: '3–4 cans of spray whip' },
        { id: 'sundae-5', name: 'Sprinkles & Nuts', note: 'Rainbow sprinkles, chopped walnuts & pecans' },
        { id: 'sundae-6', name: 'Cherries & Bananas', note: 'Maraschino cherries + fresh banana slices' },
        { id: 'sundae-7', name: 'Crushed Oreos & Brownies', note: 'Mix-in toppings — homemade or store-bought' },
        { id: 'sundae-8', name: 'Bowls, Spoons & Scooper', note: 'Disposable cups or bowls for 25+' },
        { id: 'sundae-9', name: 'Strawberry Sauce', note: 'Fresh or jarred strawberry topping' }
      ]
    },
    {
      key: 'drinks', title: 'Drinks', icon: '🥤', badge: 'Non-alcoholic + mixers', food: true,
      items: [
        { id: 'drinks-0', name: 'Lemonade / Punch', note: 'Big batch — pink lemonade or a Christmas-themed red punch 🎄', serves: 'Gallon+' },
        { id: 'drinks-1', name: 'Sodas & Sparkling Water', note: 'Coke, Sprite, ginger ale, LaCroix — variety pack', serves: '2–3 cases' },
        { id: 'drinks-2', name: 'Water & Ice', note: 'Cases of water bottles + 2 bags of ice for coolers', serves: 'For 20' },
        { id: 'drinks-3', name: 'Juice Boxes / Capri Suns', note: 'For the little ones 🧒🏽', serves: 'Kids' }
      ]
    },
    {
      key: 'games', title: 'Games & Activities', icon: '🎮', badge: 'Bring if you have it!', optional: true,
      footnote: '🪅 Piñata provided by host — bring extra candy to stuff it if you\'d like to add more!',
      items: [
        { id: 'games-1', name: '🪅 Piñata Station', note: 'Bring extra candy stuffing if you can — kids & adults love it!' },
        { id: 'games-2', name: '🃏 Card & Board Games', note: 'Spades, Uno, Dominos, Taboo — bring your favorites' },
        { id: 'games-3', name: '🎶 Music / Songburst', note: 'Volunteer to run the speaker & holiday + summer playlist' },
        { id: 'games-4', name: '🏆 Family Trivia', note: 'Who knows the family best? Print questions or run it live' },
        { id: 'games-5', name: '🎯 Cornhole / Ladder Toss', note: 'Outdoor yard games — bring a set if you own one' },
        { id: 'games-6', name: '💃🏽 Dance-Off / Karaoke', note: 'Friendly competition — phone + speaker setup works fine' },
        { id: 'games-7', name: '📸 Photo Booth Corner', note: 'Christmas props + a ring light — someone bring a tripod!' },
        { id: 'games-8', name: '🎨 Kids Craft Station', note: 'Christmas ornament decorating for the little ones' }
      ]
    },
    {
      key: 'supplies', title: 'Supplies Needed', icon: '🧻', badge: 'Essentials',
      items: [
        { id: 'supplies-0', name: 'Paper Plates & Napkins', note: 'Holiday-themed if possible — red, green, or Christmas prints 🎄' },
        { id: 'supplies-1', name: 'Plastic Utensils', note: 'Forks, knives, spoons for 25+' },
        { id: 'supplies-2', name: 'Serving Spoons & Tongs', note: 'For the potluck dishes — bring with your dish!' },
        { id: 'supplies-3', name: 'Aluminum Foil & Plastic Wrap', note: 'For covering dishes & leftovers' }
      ]
    }
  ]
};
