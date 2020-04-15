const data = [
  {
    title: "The Legend of Zelda: Majora's Mask 3D",
    id: 1,
    category: "Nintendo 3DS",
  },
  {
    title: "Super Smash Bros.",
    id: 2,
    category: "Nintendo 3DS",
  },
  {
    title: "Super Smash Bros.",
    id: 3,
    category: "Nintendo WiiU",
  },
  {
    title: "LEGO Batman 3: Beyond Gotham",
    id: 4,
    category: "Nintendo WiiU",
  },
  {
    title: "LEGO Batman 3: Beyond Gotham",
    id: 5,
    category: "Xbox One",
  },
  {
    title: "LEGO Batman 3: Beyond Gotham",
    id: 6,
    category: "PlayStation 4",
  },
  {
    title: "Far Cry 4",
    id: 7,
    category: "PlayStation 4",
  },
  {
    title: "Far Cry 4",
    id: 8,
    category: "Xbox One",
  },
  {
    title: "Call of Duty: Advanced Warfare",
    id: 9,
    category: "PlayStation 4",
  },
  {
    title: "Call of Duty: Advanced Warfare",
    id: 10,
    category: "Xbox One",
  },
];

$(() => {
  const $checkboxes = $('input[type=checkbox]');
  const $games = $('main ul li');
  const $form = $('form#search');
  const $input = $('input[type=search]');

  let searchIds = data.map(({ id }) => id);
  let checkboxIds = data.map(({ id }) => id);

  const filterFunc = (_, elem) => {
    const id = parseInt(elem.dataset.id, 10);
    return searchIds.includes(id) && checkboxIds.includes(id);
  };

  $checkboxes.on('change', () => {
    const values = Array.from($checkboxes.filter(':checked')
                                         .map((_, elem) => elem.value));

    checkboxIds = data.filter(({ category }) => (
      values.includes(category)
    )).map(({ id }) => id);

    $games.hide();
    $games.filter(filterFunc).show();
  });

  $form.on('submit', (e) => {
    e.preventDefault();

    const terms = $input.val();

    searchIds = data.filter(({ title }) => (
      title.toLowerCase().includes(terms.toLowerCase())
    )).map(({ id }) => id);

    $games.hide();
    $games.filter(filterFunc).show();
  });
});
