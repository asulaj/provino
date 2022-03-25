/*
    https://cataas.com/#/
 * Scrivere uno script che recupera i tags dall'api, di questi ne prende dal quinto al decimo e 
    dal quindicesimo al ventesimo
 *  creare un menù dropdown con i 10 tag recuperati e alla selezione di un elemento del menù 
 *  effettua una chiamata all'api recuperando un elemento con il tag selezionato
 *  di questo elemento, bisogna mostrare nella pagina html la foto del gatto e i tags di quell'elemento
 *  formattati in questo modo "tag1 - tag2 - tag3"
*/

const select = document.querySelector('select');
async function getTags(){
    const tags = await fetch("https://cataas.com/api/tags");
    const tagsJson = await tags.json();
    let tags1 = tagsJson.slice(4,9)
    let tags2 = tagsJson.slice(14,19)
    let fullTags = tags1.concat(tags2)
    fullTags.forEach(a=>{
        const option = document.createElement('option');
        option.value = a;
        option.textContent = a;
        select.appendChild(option);
    })
    select.addEventListener('change',async ()=>{
        container.removeChild(img);
        const catUrl = await fetch(`https://cataas.com/cat/${select.value}?json=true`);
        const url = await catUrl.json();
        console.log(url);
        console.log(select.value);
        const img = document.createElement('img');
        const container = document.querySelector('#container')
        img.src=`https://cataas.com${url.url}`
        container.appendChild(img)

    })
}
getTags();



