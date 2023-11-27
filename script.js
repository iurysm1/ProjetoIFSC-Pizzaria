

var portP=0;
var portM=0;
var portG=0;

var precoP=20
var precoM=30
var precoG=50

var queijoP=0
var queijoM=0
var queijoG=0

var italianaP=0
var italianaM=0
var italianaG=0

var totalConta=(precoP*portP)+(portM*precoM)+(portG*precoG)

function atualizarTotal() {
    totalConta=(precoP*portP)+(portM*precoM)+(portG*precoG)
    document.getElementById("totalPreco").innerText = totalConta; 
    console.log(totalConta);
}


function toggleCart() {
    var cart = document.getElementById("cart");
    cart.classList.toggle("show");
    
}


function adicionar(pizza){
    switch (pizza){
        case 'pp':
            portP++;
            document.getElementById('quantidadePP').innerHTML=portP;
            document.getElementById('CartQuantidadePP').innerHTML=portP;
            if (portP > 0) {
                
                document.getElementById("cartPP").style.display = "block";
            }
        
            break;
        case 'pm':
            portM++;
            document.getElementById('quantidadePM').innerHTML=portM;
            document.getElementById('CartQuantidadePM').innerHTML=portM;
            if (portM > 0) {
                
                document.getElementById("cartPM").style.display = "block";
            }
            break;
        case 'pg':
            portG++;
            document.getElementById('quantidadePG').innerHTML=portG;
            document.getElementById('CartQuantidadePG').innerHTML=portG;
            if (portG > 0) {
                
                document.getElementById("cartPG").style.display = "block";
            }
            break;
    }
    atualizarTotal();
}

function remover(pizza){
    switch (pizza){
        case 'pp':
            
            
                portP--;
                document.getElementById('quantidadePP').innerHTML=portP;
                innerHTML=portP;
                document.getElementById('CartQuantidadePP').innerHTML=portP;
                if (portP <=0) {
                    
                    document.getElementById("cartPP").style.display = "none";
                }
            
            break;
        case 'pm':
            
                portM--;
                document.getElementById('quantidadePM').innerHTML=portM;

                document.getElementById('CartQuantidadePM').innerHTML=portM;
                if (portM <= 0) {
                    
                    document.getElementById("cartPM").style.display = "none";
                }
            
            break;
        case 'pg':
            portG--;
            document.getElementById('quantidadePG').innerHTML=portG;
            document.getElementById('CartQuantidadePG').innerHTML=portG;
            if (portG <= 0) {
                
                document.getElementById("cartPG").style.display = "none";
            }
                
            break;
    }
    atualizarTotal();

}