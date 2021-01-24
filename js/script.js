// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.
// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.

$(document).ready(function () {
const icons = [
 {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  }
];

const colors = [
  'blue',
  'orange',
  'purple'
];

const types = getTypes(icons);

const iconsColor = icons.map((element) => {
  const indexType = types.indexOf(element.type)
  return {
    ...element,
    color: colors[indexType]
  }
});
// console.log(iconsColor);

const container = $('.icons');
stampaIcons(iconsColor, container);

const select = $('#type');
getOptions(types, select);

select.change(function () {
  const selezionato = $(this).val();

  const filteredIcon = filterValue(iconsColor, selezionato);

  stampaIcons(filteredIcon, container);
});


});


// Function per selezionare le opzioni
function getOptions(array, select) {
array.forEach((element) => {
  select.append(` <option value="${element}">${element}</option> `)
  })
}

// Function per filtrare e stampare le opzioni selezionate
function filterValue(array, type) {
const filteredIcons = array.filter((element) => {
  return element.type == type;
  });
  return filteredIcons;
}

// Function stampa icone
function stampaIcons(array, container) {
container.html('');
array.forEach((element) => {
  const { name, family, prefix, type, color } = element;
  container.append(`
    <div class="icon">
      <i class="${family} ${prefix}${name}" style="color:${color}"></i>
      <div class="titolo">${name.toUpperCase()}</div>
    </div>
  `);
});

}

// function array animal-vegetable-user
function getTypes(array) {

  const types = [];
  array.forEach((Element) => {
    if (!types.includes(Element.type)) {
    types.push(Element.type)
    }
  });
  return types
}
