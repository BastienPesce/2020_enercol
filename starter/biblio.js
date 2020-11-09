/* $(n)             : raccourci pour atteindre un noeud HTML                                           */
$ = (n)=>{return document.getElementById(n)};

//pour afficher/cacher une div au clic, avec une classe off dans le css en display none
$('burger').onclick=function(){
    $('menu').classList.toggle("off");
}