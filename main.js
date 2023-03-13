const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('.container');
const select = document.querySelector('#types');

let types = [icons[0].type];
let currentType = types[0];
//prendo i 'type' dell'array senza duplicati
icons.filter((element, index) => {
    if(currentType != icons[index].type) {
        currentType = icons[index].type;
        types.push(currentType)
    }
});
//aggiungo dinamicamente i type dentro il select
types.forEach(element => {
    select.innerHTML += `<option value="${element}">${element}</option>`
});

select.addEventListener('change', () => {
    container.innerHTML = ''
    displayIcons(icons, select.value);
})

//creo un colore esadecimale casuale
const generateColors = () => {
    const colorValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
    const color = ['#'];
    for (let index = 0; index < 6; index++) {
        const val = Math.floor(Math.random() * colorValues.length);
        color.push(colorValues[val]);
    }
    return color.join('');
}

// aggiungo le icone sulla pagina
const displayIcons = (arr, type = 'all') => {
    let newTypes;
    //se type è 'all' mostro tutte le icone
    //se è diverso filtro 'arr' e creo un nuovo array con elementi che hanno lo stesso type
    if(type != 'all') {
        newTypes = arr.filter(el => el.type == type);
    } else {
        newTypes = arr;
    }
    
    newTypes.forEach(element => {
        container.innerHTML += `<div class="box">
            <i class="fa-solid ${element.prefix}${element.name}" style="color:${generateColors()}"></i>
            <h4>${element.name}</h4>
        </div>
        `
    });
}

displayIcons(icons)