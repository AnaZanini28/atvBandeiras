var selectUf = document.getElementById('uf'); 
var img = document.getElementById('bandeira'); 

selectUf.addEventListener('change', mostra);

function mostra(){

    var estado = selectUf.options[selectUf.selectedIndex].text;    
    
    if(estado == 'PR'){             
        img.src = "pr.png";
        mostraBandeira.appendChild(img); 
    }else if(estado == 'SC'){
        img.src = "sc.png";
        mostraBandeira.appendChild(img); 
    }else if(estado == 'RS'){
        img.src = "rs.jpg";
        mostraBandeira.appendChild(img); 
    }

}
