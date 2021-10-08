var tenton,twentyton,thirtyton,fourtyton,fiftyton,weigth,output;
var fty = document.getElementById('fty');
var fort = document.getElementById('fort');
var thi = document.getElementById('thi');
var tw = document.getElementById('tw');
var te = document.getElementById('te');

    var fifton1 = 0;
    var forton1 = 0;
    var thirton1 = 0;
    var tewton1 = 0;
    var tenton1 = 0;

checkdata = () =>{

    tenton = document.getElementById('10_ton').value;
    twentyton = document.getElementById('20_ton').value;
    thirtyton = document.getElementById('30_ton').value;
   fourtyton = document.getElementById('40_ton').value;
   fiftyton = document.getElementById('50_ton').value;
   weigth  = document.getElementById('weigth').value;
    
   var output=document.querySelector('.output');
 output.innerHTML= " ";
 function weigthlessthantwenty(){
     if(weigth>=0){
         while(weigth>=0){
            weigth =weigth-10;
             console.log("what"+weigth)
            ++tenton1;
             if(tenton1<=tenton){
                 te.innerHTML = `${tenton1}trucks are used of 10TON`;
                //  alert("output");
                 output.innerHTML =  `we don't have truck for ${weigth}`;
                 if(weigth<0){
                    output.innerHTML =  `we don't have truck for 0`;
                 }
                
             }   
            
         }
     }
 }
 function weigthlessthanthirty(){
     if(weigth>=20){
         while(weigth>=20){
             if(twentyton==0){
                weigthlessthantwenty();
                 break;
             }
             weigth=weigth-20;
             tewton1+=1;
             if(tewton1<=twentyton){
                 console.log('are'+weigth);
                 tw.innerHTML = `${tewton1}trucks are used of 20TON`;
                 output.innerHTML = `we don't have truck for ${weigth}`;
                 if(weigth<20){
                    output.innerHTML = `we don't have truck for 0`;
                 }
                 if(tewton1==twentyton){
                    weigthlessthantwenty();
                 }
             }

         }
     }else{
         weigthlessthantwenty();
     }
 }
function weigthlessthanforty(){
    if(weigth>=30){
        while(weigth>=30){
            if(thirtyton==0){
                weigthlessthanthirty();
                break;
            }
            weigth=weigth-30;
            thirton1+=1;
            if(thirton1<=thirtyton){
                console.log("you"+weigth);
                thi.innerHTML = `${thirton1}trucks are used of 30TON`;
                output.innerHTML = `we don't have truck for ${weigth}`;
                if(weigth<30){
                    output.innerHTML = `we don't have truck for 0`;
                 }
                if(thirton1==thirtyton){
                    weigthlessthanthirty();
                }
            }

        }
    }else{
        weigthlessthanthirty();
    }
}

 function weigthlessthanfifty(){
    if(weigth>=40){
     
        while(weigth>=40){
            if(fourtyton==0){
                weigthlessthanforty();
                break;
            }
           weigth=weigth-40;
           forton1+=1;
           if(forton1<=fourtyton){
               console.log("doing"+weigth)
             fort.innerHTML =  `${forton1}trucks are used of 40TON`;
             output.innerHTML = `we don't have truck for ${weigth}`;
             if(weigth<40){
                output.innerHTML = `we don't have truck for 0`;
             }
             if(forton1==fourtyton){
                weigthlessthanforty();
             }
           }
        }
    }else{
        weigthlessthanforty();
    }
}

      if(weigth>=50){
         while(weigth>=50){
             if(fiftyton==0){
                 weigthlessthanfifty();
                 break;
             }
             weigth = weigth-50;
             fifton1++;
             if(fifton1 <= fiftyton){             
                 console.log(weigth);
                 fty.innerHTML = `${fifton1} truck are used for 50TON`;
                 output.innerHTML= `we don't have truck for ${weigth}`;
                 if(weigth<50){
                    output.innerHTML = `we don't have truck for 0`;
                 }
             if(fifton1==fiftyton){
                weigthlessthanfifty();
             }
                } 
         }
      }else{
        weigthlessthanfifty();
      }
 }

