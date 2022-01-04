
// import{TheWitcherSources} from "Sourcers.js";
// get elements by DOM
const panels=document.querySelectorAll('.panel');
const theWitcher=document.getElementById('theWitcher');
const onePiece=document.getElementById('onePiece');
const demonsSlayer=document.getElementById('demonsSlayer');

// Sources
const TheWitcherSources=[
    `https://geraltderivia.net/wp-content/uploads/2019/09/Geralt-de-Rivia-The-Witcher.jpg`,
    `https://areajugones.sport.es/wp-content/uploads/2020/09/ciri-the-witcher-3.jpg`,
    `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-witcher-netflix-serie-reparto-confirmado-1539264053.jpg`,
    `https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/Witcher-3-Triss-Romance-Pros-Cons.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5`,
    `https://as01.epimg.net/meristation/imagenes/2020/02/28/noticias/1582921835_503400_1582921881_noticia_normal.jpg`,
    `https://areajugones.sport.es/wp-content/uploads/2019/12/the-witcher-dandelion-geralt.jpg`
]
const TheWitcherTitles=[
    `Geralt`,
    `Ciri`,
    `Jenifer`,
    `Tris Morgan`,
    `Versemir`,
    `Jaskier`
]

const onePieceSources=[
    `https://elcomercio.pe/resizer/I0M1D6-p-yOimYZO-bSQCxtL25Q=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NG4OXH2E65FZLDFCYTHPSGJT5Q.png`,
    `https://www.cinemascomics.com/wp-content/uploads/2020/09/teoria-one-piece-zoro-ronoa.jpg`,
    `https://areajugones.sport.es/wp-content/uploads/2019/12/sanji-one-piece.jpg`,
    `https://areajugones.sport.es/wp-content/uploads/2020/02/nami-one-piece.jpg`,
    `https://i2.wp.com/www.senpai.com.mx/wp-content/uploads/2021/04/One-Piece_-Asi%CC%81-se-veri%CC%81a-Chopper-de-anciano-segu%CC%81n-el-creador-de-la-serie-1.jpg?fit=1280%2C720&ssl=1`,
    `https://www.teahub.io/photos/full/146-1469239_one-piece-robin-x.jpg`
]
const onePieceTitles=[
    `Luffy`,
    `Zoro`,
    `Sanji`,
    `Nami`,
    `Chopper`,
    `Nico Robin`
]

const demonsSlayerSources=[
    `https://areajugones.sport.es/wp-content/uploads/2020/12/imagen-2020-12-14-161938-1080x609.jpg`,
    `https://9to5fortnite.com/wp-content/uploads/2021/08/Nezuko-Kamado.jpg`,
    `https://www.geekmi.news/__export/1616117518299/sites/debate/img/2021/03/18/inosukeflex_crop1616117430877.jpeg_346014350.jpeg`,
    `https://somoskudasai.com/wp-content/uploads/2020/05/portada_kimetsu-no-yaiba-zenitsu.jpg`,
    `https://ramenparados.com/wp-content/uploads/2021/10/FBWUSk_WEAYSlIP-1000x600.jpg`,
    `https://www.geekmi.news/__export/1633994507432/sites/debate/img/2021/10/11/shinobu3.jpg_1339198940.jpg`
]
const demonsSlayerTitles=[
    `Tanjiro`,
    `Nezuko`,
    `Inosuke`,
    `Zenitsu`,
    `Rengoku`,
    `Shinobu`
]


// Galery Seccion
panels.forEach(panel=>{

    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active')
    })


})


const removeActiveClasses=()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}


// Subject seccion

theWitcher.addEventListener('click',()=>{
    panels.forEach((panel,index)=>{
        panel.style.backgroundImage=`url('${TheWitcherSources[index]}')`;
        panel.firstElementChild.innerHTML=TheWitcherTitles[index];
        if(index!=1){
            panel.firstElementChild.style='color: white;';
        }else{
            panel.firstElementChild.style='color: black;';
        }
        
    })
})

onePiece.addEventListener('click',()=>{
    panels.forEach((panel,index)=>{
        panel.style.backgroundImage=`url('${onePieceSources[index]}')`;
        panel.firstElementChild.innerHTML=onePieceTitles[index];
        panel.firstElementChild.style='color: black;'
    })
})

demonsSlayer.addEventListener('click',()=>{
    panels.forEach((panel,index)=>{
        panel.style.backgroundImage=`url('${demonsSlayerSources[index]}')`;
        panel.firstElementChild.innerHTML=demonsSlayerTitles[index];
        if(index!=5 && index!=4){
            panel.firstElementChild.style='color: black;'
        }else{
            panel.firstElementChild.style='color: white;'
        }
        
    })
})






