// Family Thanksgiving 2026.
// Date, time, headcount and what the host provides are placeholders to confirm.
window.POTLUCK_EVENTS = window.POTLUCK_EVENTS || {};
window.POTLUCK_EVENTS['thanksgiving-2026'] = {
  pageTitle: 'Family Thanksgiving – Potluck List',
  heroTitle: 'Family Thanksgiving 🦃',
  subtitle: 'Potluck Sign-Up · Tap an item to claim it!',
  when: '🍂 Thursday, Nov 26 · ~3PM · 20 People 🍂',
  heroStrip: '🦃🍂🥧🍁🌽🍂🦃🍂🥧🍁🌽🍂🦃🍂🥧🍁🌽🍂🦃',
  dbPath: 'events/thanksgiving-2026',

  theme: {
    primary: '#7A3412',
    accent: '#B5451B',
    accentSoft: '#fcebdd',
    highlight: '#F2B441',
    background: '#FBF4EA',
    heroText: '#f7dcc4'
  },

  hostProvides: {
    items: [
      { emoji: '🦃', label: 'Turkey' },
      { emoji: '🍗', label: 'Gravy' },
      { emoji: '🍺', label: 'Beer & Wine' }
    ],
    suffix: 'All provided by the host!'
  },

  // Trusted HTML, shown at the bottom of the page.
  footer: [
    '🦃 <strong>Turkey · Gravy · Beer & Wine</strong> provided by your host · Tap any item to claim or release it · Thursday, Nov 26th, ~3PM 🦃',
    'Bringing a family favorite that isn\'t listed? Add it under <strong>Bringing Something Else</strong>! 🥧'
  ],

  features: { rsvp: true, writeIns: true, summary: true, dietaryTags: true },

  sections: [
    {
      key: 'apps', title: 'Appetizers', icon: '🧀', badge: '{items} · for grazing', food: true,
      items: [
        { id: 'apps-0', name: 'Charcuterie Board', note: 'Meats, cheeses, crackers, grapes & nuts', serves: 'Serves 20', tags: ['nuts'] },
        { id: 'apps-1', name: 'Veggie & Dip Platter', note: 'Carrots, celery, peppers + ranch or hummus', serves: 'Serves 20', tags: ['vegetarian'] },
        { id: 'apps-2', name: 'Deviled Eggs', note: 'Two dozen halves', serves: '24 pcs', tags: ['vegetarian', 'gluten-free'] },
        { id: 'apps-3', name: 'Chips & Spinach Dip', note: 'Warm spinach-artichoke or a cold dip + chips', serves: 'Serves 20', tags: ['vegetarian'] }
      ]
    },
    {
      key: 'sides', title: 'Sides', icon: '🥔', badge: '{items} · serves 20', food: true,
      items: [
        { id: 'sides-0', name: 'Mashed Potatoes', note: 'A big pot each — butter & garlic welcome', serves: 'Serves 10', slots: 2, tags: ['vegetarian', 'gluten-free'] },
        { id: 'sides-1', name: 'Stuffing / Dressing', note: 'Classic, cornbread, or sausage — your call', serves: 'Serves 10', slots: 2 },
        { id: 'sides-2', name: 'Mac & Cheese', note: 'Baked, crispy top — a full pan', serves: 'Serves 10', slots: 2, tags: ['vegetarian'] },
        { id: 'sides-3', name: 'Green Bean Casserole', note: 'With the crispy onions on top', serves: 'Serves 15–20' },
        { id: 'sides-4', name: 'Sweet Potato Casserole', note: 'Marshmallow or pecan topping', serves: 'Serves 15–20', tags: ['vegetarian'] },
        { id: 'sides-5', name: 'Cranberry Sauce', note: 'Homemade or the can — both have fans', serves: '2–3 cans', tags: ['vegan', 'gluten-free'] },
        { id: 'sides-6', name: 'Corn / Elote', note: 'Corn casserole, buttered corn, or elote-style', serves: 'Serves 15–20', tags: ['vegetarian'] },
        { id: 'sides-7', name: 'Dinner Rolls & Butter', note: '3–4 dozen rolls + a stick of butter', serves: '3–4 dozen', slots: 2, tags: ['vegetarian'] },
        { id: 'sides-8', name: 'Green Salad', note: 'Something fresh — dressing on the side', serves: 'Serves 20', tags: ['vegan', 'gluten-free'] }
      ]
    },
    {
      key: 'desserts', title: 'Desserts', icon: '🥧', badge: 'Pie, pie & more pie', layout: 'grid', food: true,
      items: [
        { id: 'desserts-0', name: 'Pumpkin Pie', note: 'Store-bought or homemade', slots: 2, tags: ['vegetarian'] },
        { id: 'desserts-1', name: 'Apple Pie', note: 'Bonus points for lattice', tags: ['vegetarian'] },
        { id: 'desserts-2', name: 'Pecan Pie', note: 'The classic', tags: ['vegetarian', 'nuts'] },
        { id: 'desserts-3', name: 'Cookies or Brownies', note: 'A tray for the kids (and adults)', tags: ['vegetarian'] },
        { id: 'desserts-4', name: 'Whipped Cream & Ice Cream', note: '2 cans whip + a half-gallon vanilla', tags: ['vegetarian', 'gluten-free'] },
        { id: 'desserts-5', name: 'Flan or Tres Leches', note: 'A family favorite', tags: ['vegetarian'] }
      ]
    },
    {
      key: 'drinks', title: 'Drinks', icon: '🥤', badge: 'Non-alcoholic', food: true,
      items: [
        { id: 'drinks-0', name: 'Apple Cider', note: 'Hot or cold — a gallon or two', serves: 'Gallon+' },
        { id: 'drinks-1', name: 'Sodas & Sparkling Water', note: 'Coke, Sprite, ginger ale, LaCroix — variety pack', serves: '2–3 cases' },
        { id: 'drinks-2', name: 'Water & Ice', note: 'Cases of water bottles + 2 bags of ice', serves: 'For 20' },
        { id: 'drinks-3', name: 'Juice Boxes / Capri Suns', note: 'For the little ones 🧒🏽', serves: 'Kids' },
        { id: 'drinks-4', name: 'Coffee & Creamer', note: 'For pie time ☕', serves: 'For 20' }
      ]
    },
    {
      key: 'games', title: 'Games & Activities', icon: '🏈', badge: 'Bring if you have it!', optional: true,
      footnote: '🏈 The game will be on — bring your jersey!',
      items: [
        { id: 'games-0', name: '🏈 Backyard Football', note: 'Bring a football for the halftime game' },
        { id: 'games-1', name: '🃏 Card & Board Games', note: 'Spades, Uno, Dominos, Taboo — bring your favorites' },
        { id: 'games-2', name: '🎶 Music / Songburst', note: 'Volunteer to run the speaker & playlist' },
        { id: 'games-3', name: '🏆 Family Trivia', note: 'Who knows the family best? Print questions or run it live' },
        { id: 'games-4', name: '🍁 Thankful Tree', note: 'Paper leaves + markers — everyone writes what they\'re thankful for' },
        { id: 'games-5', name: '🎨 Kids Craft Station', note: 'Handprint turkeys & coloring pages for the little ones' },
        { id: 'games-6', name: '📸 Family Photo', note: 'Someone bring a tripod for the group shot!' }
      ]
    }
  ]
};
