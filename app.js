let UI=(function(){

selectors={
    polje:document.querySelector('#polje'),
    poljeVrijednosti:document.querySelector('.poljeVrijednosti'),
    inner:document.querySelectorAll('.inner')
}

dobitneKombinacije=[{"prvi":1,
                     "drugi":2,
                     "treci":3
                    },
                    {"prvi":1,
                     "drugi":3,
                     "treci":2
                    },
                    {"prvi":2,
                     "drugi":3,
                     "treci":1
                    },
                    {"prvi":2,
                     "drugi":1,
                     "treci":3
                    },
                    {"prvi":3,
                     "drugi":1,
                     "treci":2
                    },
                    {"prvi":3,
                     "drugi":2,
                     "treci":1
                    },
                    {"prvi":4,
                     "drugi":5,
                     "treci":6
                    },
                    {"prvi":4,
                     "drugi":6,
                     "treci":5
                    },
                    {"prvi":5,
                     "drugi":6,
                     "treci":4
                    },
                    {"prvi":5,
                     "drugi":4,
                     "treci":6
                    },
                    {"prvi":6,
                     "drugi":4,
                     "treci":5
                    },
                    {"prvi":6,
                     "drugi":5,
                     "treci":4
                    },
                    {"prvi":7,
                    "drugi":8,
                    "treci":9
                   },
                   {"prvi":7,
                     "drugi":9,
                     "treci":8
                    },
                   {"prvi":8,
                    "drugi":9,
                    "treci":7
                   },
                   {"prvi":8,
                     "drugi":7,
                     "treci":9
                    },
                   {"prvi":9,
                    "drugi":7,
                    "treci":8
                   },
                   {"prvi":9,
                     "drugi":8,
                     "treci":7
                    },
                   {"prvi":1,
                   "drugi":4,
                   "treci":7
                  },
                  {"prvi":1,
                     "drugi":7,
                     "treci":4
                    },
                  {"prvi":4,
                   "drugi":7,
                   "treci":1
                  },
                  {"prvi":4,
                     "drugi":1,
                     "treci":7
                    },
                  {"prvi":7,
                   "drugi":1,
                   "treci":4
                  },
                  {"prvi":7,
                     "drugi":4,
                     "treci":1
                    },
                  {"prvi":2,
                  "drugi":5,
                  "treci":8
                 },
                 {"prvi":2,
                     "drugi":8,
                     "treci":5
                    },
                 {"prvi":5,
                  "drugi":8,
                  "treci":2
                 },
                 {"prvi":5,
                     "drugi":2,
                     "treci":8
                    },
                 {"prvi":8,
                  "drugi":2,
                  "treci":5
                 },
                 {"prvi":8,
                  "drugi":5,
                  "treci":2
                 },
                 {"prvi":3,
                 "drugi":6,
                 "treci":9
                },
                {"prvi":3,
                  "drugi":9,
                  "treci":6
                 },
                {"prvi":9,
                 "drugi":3,
                 "treci":6
                },
                {"prvi":9,
                  "drugi":6,
                  "treci":3
                 },
                {"prvi":6,
                 "drugi":9,
                 "treci":3
                },
                {"prvi":6,
                  "drugi":3,
                  "treci":9
                 },    
                {"prvi":1,
                "drugi":5,
                "treci":9
               },
               {"prvi":1,
                "drugi":9,
                "treci":5
               },
               {"prvi":5,
                "drugi":9,
                "treci":1
               },
               {"prvi":5,
                "drugi":1,
                "treci":9
               },
               {"prvi":9,
                "drugi":1,
                "treci":5
               },
               {"prvi":9,
                "drugi":5,
                "treci":1
               },
               {"prvi":3,
               "drugi":5,
               "treci":7
              },
              {"prvi":3,
                "drugi":7,
                "treci":5
               },
              {"prvi":7,
               "drugi":3,
               "treci":5
              },
              {"prvi":7,
                "drugi":5,
                "treci":3
               },
              {"prvi":5,
               "drugi":7,
               "treci":3
              },
              {"prvi":5,
                "drugi":3,
                "treci":7
               },
               {"prvi":1,
                "drugi":3,
                "treci":5,
                "cetvrti":7
               },
               {"prvi":3,
                "drugi":5,
                "treci":7,
                "cetvrti":1
               },
               {"prvi":5,
                "drugi":7,
                "treci":1,
                "cetvrti":3
               },
               {"prvi":7,
                "drugi":1,
                "treci":3,
                "cetvrti":5
               },
               {"prvi":1,
                "drugi":3,
                "treci":5,
                "cetvrti":9
               },
               {"prvi":3,
                "drugi":5,
                "treci":9,
                "cetvrti":1
               },
               {"prvi":5,
                "drugi":9,
                "treci":1,
                "cetvrti":3
               },
               {"prvi":9,
                "drugi":1,
                "treci":3,
                "cetvrti":5
               },
               {"prvi":1,
                "drugi":3,
                "treci":5,
                "cetvrti":7
               },
               {"prvi":3,
                "drugi":5,
                "treci":7,
                "cetvrti":1
               },
               {"prvi":5,
                "drugi":7,
                "treci":1,
                "cetvrti":3
               },
               {"prvi":7,
                "drugi":1,
                "treci":3,
                "cetvrti":5
               },
               {"prvi":1,
                "drugi":5,
                "treci":7,
                "cetvrti":9
               },
               {"prvi":5,
                "drugi":7,
                "treci":9,
                "cetvrti":1
               },
               {"prvi":7,
                "drugi":9,
                "treci":1,
                "cetvrti":5
               },
               {"prvi":9,
                "drugi":1,
                "treci":5,
                "cetvrti":7
               },
               {"prvi":1,
                "drugi":5,
                "treci":7,
                "cetvrti":9
               },
               {"prvi":5,
                "drugi":7,
                "treci":9,
                "cetvrti":1
               },
               {"prvi":7,
                "drugi":9,
                "treci":1,
                "cetvrti":5
               },
               {"prvi":9,
                "drugi":1,
                "treci":5,
                "cetvrti":7
               },
               {"prvi":3,
                "drugi":5,
                "treci":7,
                "cetvrti":9
               },
               {"prvi":5,
                "drugi":7,
                "treci":9,
                "cetvrti":3
               },
               {"prvi":7,
                "drugi":9,
                "treci":3,
                "cetvrti":5
               },
               {"prvi":9,
                "drugi":3,
                "treci":5,
                "cetvrti":7
               },
               {"prvi":1,
                "drugi":3,
                "treci":5,
                "cetvrti":9
               },
               {"prvi":3,
                "drugi":5,
                "treci":9,
                "cetvrti":1
               },
               {"prvi":5,
                "drugi":9,
                "treci":1,
                "cetvrti":3
               },
               {"prvi":9,
                "drugi":1,
                "treci":3,
                "cetvrti":5
               },
               {"prvi":3,
                "drugi":5,
                "treci":7,
                "cetvrti":9
               },
               {"prvi":5,
                "drugi":7,
                "treci":9,
                "cetvrti":3
               },
               {"prvi":7,
                "drugi":9,
                "treci":3,
                "cetvrti":5
               },
               {"prvi":9,
                "drugi":3,
                "treci":5,
                "cetvrti":7
               },
               {"prvi":1,
               "drugi":2,
               "treci":3,
               "cetvrti":9
              },
              {"prvi":2,
               "drugi":3,
               "treci":9,
               "cetvrti":1
              },
              {"prvi":3,
               "drugi":9,
               "treci":1,
               "cetvrti":2
              },
              {"prvi":9,
               "drugi":1,
               "treci":2,
               "cetvrti":3
              },
              {"prvi":1,
               "drugi":2,
               "treci":3,
               "cetvrti":7
              },
              {"prvi":2,
               "drugi":3,
               "treci":7,
               "cetvrti":1
              },
              {"prvi":3,
               "drugi":7,
               "treci":1,
               "cetvrti":2
              },
              {"prvi":7,
               "drugi":1,
               "treci":2,
               "cetvrti":3
              },
              {"prvi":1,
               "drugi":3,
               "treci":4,
               "cetvrti":7
              },
              {"prvi":3,
               "drugi":4,
               "treci":7,
               "cetvrti":1
              },
              {"prvi":4,
               "drugi":7,
               "treci":1,
               "cetvrti":3
              },
              {"prvi":7,
               "drugi":1,
               "treci":3,
               "cetvrti":4
              },
              {"prvi":1,
               "drugi":4,
               "treci":7,
               "cetvrti":9
              },
              {"prvi":4,
               "drugi":7,
               "treci":9,
               "cetvrti":1
              },
              {"prvi":7,
               "drugi":9,
               "treci":1,
               "cetvrti":4
              },
              {"prvi":9,
               "drugi":1,
               "treci":4,
               "cetvrti":7
              },
              {"prvi":1,
               "drugi":7,
               "treci":8,
               "cetvrti":9
              },
              {"prvi":7,
               "drugi":8,
               "treci":9,
               "cetvrti":1
              },
              {"prvi":8,
               "drugi":9,
               "treci":1,
               "cetvrti":7
              },
              {"prvi":9,
               "drugi":1,
               "treci":7,
               "cetvrti":8
              },
              {"prvi":3,
               "drugi":7,
               "treci":8,
               "cetvrti":9
              },
              {"prvi":7,
               "drugi":8,
               "treci":9,
               "cetvrti":3
              },
              {"prvi":8,
               "drugi":9,
               "treci":3,
               "cetvrti":7
              },
              {"prvi":9,
               "drugi":3,
               "treci":7,
               "cetvrti":8
              },
              {"prvi":1,
               "drugi":3,
               "treci":6,
               "cetvrti":9
              },
              {"prvi":3,
               "drugi":6,
               "treci":9,
               "cetvrti":1
              },
              {"prvi":6,
               "drugi":9,
               "treci":1,
               "cetvrti":3
              },
              {"prvi":9,
               "drugi":1,
               "treci":3,
               "cetvrti":6
              },
              {"prvi":3,
               "drugi":6,
               "treci":7,
               "cetvrti":9
              },
              {"prvi":6,
               "drugi":7,
               "treci":9,
               "cetvrti":3
              },
              {"prvi":7,
               "drugi":9,
               "treci":3,
               "cetvrti":6
              },
              {"prvi":9,
               "drugi":3,
               "treci":6,
               "cetvrti":7
              },
              {
                "prvi":1,
                "drugi":2,
                "treci":3,
                "cetvrti":5
              },
              {
                "prvi":2,
                "drugi":3,
                "treci":5,
                "cetvrti":1
              },
              {
                "prvi":3,
                "drugi":5,
                "treci":1,
                "cetvrti":2
              },
              {
                "prvi":5,
                "drugi":1,
                "treci":2,
                "cetvrti":3
              },
              {
                "prvi":1,
                "drugi":4,
                "treci":5,
                "cetvrti":7
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":7,
                "cetvrti":1
              },
              {
                "prvi":5,
                "drugi":7,
                "treci":1,
                "cetvrti":4
              },
              {
                "prvi":7,
                "drugi":1,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":5,
                "drugi":7,
                "treci":8,
                "cetvrti":9
              },
              {
                "prvi":7,
                "drugi":8,
                "treci":9,
                "cetvrti":5
              },
              {
                "prvi":8,
                "drugi":9,
                "treci":5,
                "cetvrti":7
              },
              {
                "prvi":9,
                "drugi":5,
                "treci":7,
                "cetvrti":8
              },
              {
                "prvi":3,
                "drugi":5,
                "treci":6,
                "cetvrti":9
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":9,
                "cetvrti":3
              },
              {
                "prvi":6,
                "drugi":9,
                "treci":3,
                "cetvrti":5
              },
              {
                "prvi":9,
                "drugi":3,
                "treci":5,
                "cetvrti":6
              },
              {
                "prvi":3,
                "drugi":4,
                "treci":5,
                "cetvrti":6
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":6,
                "cetvrti":3
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":3,
                "cetvrti":4
              },
              {
                "prvi":6,
                "drugi":3,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":6,
                "cetvrti":9
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":9,
                "cetvrti":4
              },
              {
                "prvi":6,
                "drugi":9,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":9,
                "drugi":4,
                "treci":5,
                "cetvrti":6
              },
              {
                "prvi":1,
                "drugi":4,
                "treci":5,
                "cetvrti":6
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":6,
                "cetvrti":1
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":1,
                "cetvrti":4
              },
              {
                "prvi":6,
                "drugi":1,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":7,
                "drugi":4,
                "treci":5,
                "cetvrti":6
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":6,
                "cetvrti":7
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":7,
                "cetvrti":4
              },
              {
                "prvi":6,
                "drugi":7,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":1,
                "drugi":2,
                "treci":5,
                "cetvrti":8
              },
              {
                "prvi":2,
                "drugi":5,
                "treci":8,
                "cetvrti":1
              },
              {
                "prvi":5,
                "drugi":8,
                "treci":1,
                "cetvrti":2
              },
              {
                "prvi":8,
                "drugi":1,
                "treci":2,
                "cetvrti":5
              },
              {
                "prvi":2,
                "drugi":3,
                "treci":5,
                "cetvrti":8
              },
              {
                "prvi":3,
                "drugi":5,
                "treci":8,
                "cetvrti":2
              },
              {
                "prvi":5,
                "drugi":8,
                "treci":2,
                "cetvrti":3
              },
              {
                "prvi":8,
                "drugi":2,
                "treci":3,
                "cetvrti":5
              },
              {
                "prvi":2,
                "drugi":5,
                "treci":7,
                "cetvrti":8
              },
              {
                "prvi":5,
                "drugi":7,
                "treci":8,
                "cetvrti":2
              },
              {
                "prvi":7,
                "drugi":8,
                "treci":2,
                "cetvrti":5
              },
              {
                "prvi":8,
                "drugi":2,
                "treci":5,
                "cetvrti":7
              },
              {
                "prvi":2,
                "drugi":5,
                "treci":8,
                "cetvrti":9
              },
              {
                "prvi":5,
                "drugi":8,
                "treci":9,
                "cetvrti":2
              },
              {
                "prvi":8,
                "drugi":9,
                "treci":2,
                "cetvrti":5
              },
              {
                "prvi":9,
                "drugi":2,
                "treci":5,
                "cetvrti":8
              },
              {
                "prvi":1,
                "drugi":2,
                "treci":4,
                "cetvrti":7
              },
              {
                "prvi":2,
                "drugi":4,
                "treci":7,
                "cetvrti":1
              },
              {
                "prvi":4,
                "drugi":7,
                "treci":1,
                "cetvrti":2
              },
              {
                "prvi":7,
                "drugi":1,
                "treci":2,
                "cetvrti":4
              },
              {
                "prvi":1,
                "drugi":4,
                "treci":7,
                "cetvrti":8
              },
              {
                "prvi":4,
                "drugi":7,
                "treci":8,
                "cetvrti":1
              },
              {
                "prvi":7,
                "drugi":8,
                "treci":1,
                "cetvrti":4
              },
              {
                "prvi":8,
                "drugi":1,
                "treci":4,
                "cetvrti":7
              },
              {
                "prvi":2,
                "drugi":3,
                "treci":6,
                "cetvrti":9
              },
              {
                "prvi":3,
                "drugi":6,
                "treci":9,
                "cetvrti":2
              },
              {
                "prvi":6,
                "drugi":9,
                "treci":2,
                "cetvrti":3
              },
              {
                "prvi":9,
                "drugi":2,
                "treci":3,
                "cetvrti":6
              },
              {
                "prvi":3,
                "drugi":6,
                "treci":8,
                "cetvrti":9
              },
              {
                "prvi":6,
                "drugi":8,
                "treci":9,
                "cetvrti":3
              },
              {
                "prvi":8,
                "drugi":9,
                "treci":3,
                "cetvrti":6
              },
              {
                "prvi":9,
                "drugi":3,
                "treci":6,
                "cetvrti":8
              },
              {
                "prvi":2,
                "drugi":4,
                "treci":5,
                "cetvrti":8
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":8,
                "cetvrti":2
              },
              {
                "prvi":5,
                "drugi":8,
                "treci":2,
                "cetvrti":4
              },
              {
                "prvi":8,
                "drugi":2,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":2,
                "drugi":5,
                "treci":6,
                "cetvrti":8
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":8,
                "cetvrti":2
              },
              {
                "prvi":6,
                "drugi":8,
                "treci":2,
                "cetvrti":5
              },
              {
                "prvi":8,
                "drugi":2,
                "treci":5,
                "cetvrti":6
              },
              {
                "prvi":2,
                "drugi":4,
                "treci":5,
                "cetvrti":6
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":6,
                "cetvrti":2
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":2,
                "cetvrti":4
              },
              {
                "prvi":6,
                "drugi":2,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":4,
                "drugi":5,
                "treci":6,
                "cetvrti":8
              },
              {
                "prvi":5,
                "drugi":6,
                "treci":8,
                "cetvrti":4
              },
              {
                "prvi":6,
                "drugi":8,
                "treci":4,
                "cetvrti":5
              },
              {
                "prvi":8,
                "drugi":4,
                "treci":5,
                "cetvrti":6
              },

                    ];
                


mojaKombinacija=[];

racunaloKombinacija=[];

noviStariArray=[];

return{

  playerPick:function(vrijednost){
    if(mojaKombinacija.length<5){
      mojaKombinacija.push(vrijednost);
      console.log(mojaKombinacija);
    } 
  },
  computerPick:function(){
    if(mojaKombinacija.length==1){
      let ostatak=dobitneKombinacije.filter((elem)=>elem.prvi!=mojaKombinacija[0] && elem.drugi!=mojaKombinacija[0] && elem.treci!=mojaKombinacija[0]);
      let randomBrojPrvi=Math.floor(Math.random()*ostatak.length);
      let randomOdabirPrvi=ostatak[randomBrojPrvi].prvi;
      racunaloKombinacija.push(randomOdabirPrvi);
      randomOdabirPrvi=randomOdabirPrvi.toString();
      let polje=document.querySelectorAll(`.player`);
      polje.forEach((item)=>{
        if(item.id==randomOdabirPrvi){
          item.classList.remove("player");
          item.innerHTML=`<span class="racunalo">O</span>`;
        }
      })
      console.log(racunaloKombinacija);

    }else if(mojaKombinacija.length==2){

      let opcijePrvo=dobitneKombinacije.filter((opcija)=>opcija.prvi==mojaKombinacija[0] || opcija.drugi==mojaKombinacija[0] || opcija.treci== mojaKombinacija[0]);
      let opcijeDrugo=opcijePrvo.filter((opc)=>opc.prvi==mojaKombinacija[1] || opc.drugi==mojaKombinacija[1] || opc.treci==mojaKombinacija[1]);
      
      if(opcijeDrugo.length==0){
        let ostatak=dobitneKombinacije.filter((elem)=>elem.prvi!=mojaKombinacija[0] && elem.drugi!=mojaKombinacija[0] && elem.treci!=mojaKombinacija[0] && elem.prvi!=mojaKombinacija[1] && elem.drugi!=mojaKombinacija[1] && elem.treci!=mojaKombinacija[1]);
        let moguciNastavak=ostatak.filter((ostalo)=>ostalo.prvi==racunaloKombinacija[0] || ostalo.drugi==racunaloKombinacija[0] || ostalo.treci==racunaloKombinacija[0]);
        let nastavak=moguciNastavak.filter((nastavi)=>nastavi.drugi!=racunaloKombinacija[0]);
        console.log(nastavak);
        let randomBrojDrugi=Math.floor(Math.random()*nastavak.length);
        let randomOdabirDrugi=nastavak[randomBrojDrugi].drugi;
        racunaloKombinacija.push(randomOdabirDrugi);
        randomOdabirDrugi=randomOdabirDrugi.toString();
        let polje=document.querySelectorAll(`.player`);
        polje.forEach((item)=>{
        if(item.id==randomOdabirDrugi){
          item.classList.remove("player");
          item.innerHTML=`<span class="racunalo">O</span>`;
        }
      })
        console.log(racunaloKombinacija);
      }else{
        let ostatak=opcijeDrugo.filter((elem)=>elem.prvi==mojaKombinacija[0] && elem.drugi==mojaKombinacija[1] );
        ostatak=ostatak.filter((elem)=>racunaloKombinacija[0]!=racunaloKombinacija[1]);
        let drugiOdabir=ostatak[0].treci;
        let zajednickaKombinacija=mojaKombinacija.concat(racunaloKombinacija);
        console.log(zajednickaKombinacija);
        let splitaniArray=dobitneKombinacije.splice(0,48);
        noviStariArray=splitaniArray;
        let provjera=splitaniArray.filter((elem)=>elem.prvi==zajednickaKombinacija[0] && elem.drugi==zajednickaKombinacija[1] && elem.treci==zajednickaKombinacija[2] );
        if(provjera.length==0){
          racunaloKombinacija.push(drugiOdabir);
          drugiOdabir=drugiOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==drugiOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        })
        
        }else {
          let ostaliOdabir=splitaniArray.filter((elem)=>elem.prvi!=zajednickaKombinacija[0] && elem.drugi!=zajednickaKombinacija[0] && elem.treci!=zajednickaKombinacija[0] &&
                                                        elem.prvi!=zajednickaKombinacija[1] && elem.drugi!=zajednickaKombinacija[1] && elem.treci!=zajednickaKombinacija[1]);
          let racunalniOdabir=zajednickaKombinacija.pop();
          let mogucnosti=ostaliOdabir.filter((elem)=>elem.prvi==racunalniOdabir || elem.drugi==racunalniOdabir || elem.treci==racunalniOdabir);
          let ostatak=mogucnosti.filter((elem)=>elem.treci!=racunalniOdabir);
          let randomBroj=Math.floor(Math.random()*ostatak.length);
          let drugiOdabir=ostatak[randomBroj].treci;
          racunaloKombinacija.push(drugiOdabir);
          drugiOdabir=drugiOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==drugiOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        })
        console.log(racunaloKombinacija);
        }
        
      }
      
    }else if(mojaKombinacija.length==3){

      let opcijePrvo=dobitneKombinacije.filter((opcija)=>opcija.prvi==mojaKombinacija[0] || opcija.drugi==mojaKombinacija[0] || opcija.treci== mojaKombinacija[0]);
      let opcijeDrugo=opcijePrvo.filter((opc)=>opc.prvi==mojaKombinacija[1] || opc.drugi==mojaKombinacija[1] || opc.treci==mojaKombinacija[1]);
      let opcijeTrece=opcijeDrugo.filter((opc)=>opc.prvi==mojaKombinacija[2] || opc.drugi==mojaKombinacija[2] || opc.treci==mojaKombinacija[2]);
      let moguciNastavak=opcijeTrece.filter((opc)=>opc.prvi!=racunaloKombinacija[0] && opc.prvi !=racunaloKombinacija[1] && opc.drugi!=racunaloKombinacija[0] && opc.drugi!=racunaloKombinacija[1] && opc.treci!=racunaloKombinacija[0] && opc.treci!=racunaloKombinacija[1] && opc.cetvrti!=racunaloKombinacija[0] && opc.cetvrti!=racunaloKombinacija[1]);
      
      

      let racunaloPrvo=noviStariArray.filter((opcija)=>opcija.prvi==racunaloKombinacija[0] || opcija.drugi==racunaloKombinacija[0]);
      let racunaloDrugo=racunaloPrvo.filter((opcija)=>opcija.prvi==racunaloKombinacija[1] || opcija.drugi==racunaloKombinacija[1]);
      let racunaloTrece=racunaloDrugo.filter((opcija)=>delete opcija.cetvrti);
      

    
      
      let provjeri=racunaloKombinacija.concat(mojaKombinacija);
     
      let novo=provjeri.filter((elem)=>elem==racunaloTrece[0].treci);

      if(racunaloTrece.length!=0 && moguciNastavak.length!=0){
        if(mojaKombinacija[2]==novo[0]){
          let treciOdabir=moguciNastavak[0].cetvrti;
          racunaloKombinacija.push(treciOdabir);
          treciOdabir=treciOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==treciOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        });
        console.log(racunaloKombinacija);
        }else{
          let dohvatiPraviBroj=noviStariArray.filter((elem)=>elem.prvi==racunaloKombinacija[0] || elem.drugi==racunaloKombinacija[0] || elem.treci==racunaloKombinacija[0] );
          let dohvatiPraviPraviBroj=dohvatiPraviBroj.filter((elem)=>elem.prvi==racunaloKombinacija[1] || elem.drugi==racunaloKombinacija[1] || elem.treci==racunaloKombinacija[1]);
          let brojka=dohvatiPraviPraviBroj.filter((elem)=>elem.treci!=racunaloKombinacija[0] && elem.treci !=racunaloKombinacija[1]);
          console.log(dohvatiPraviPraviBroj);
          console.log(brojka);
          let treciOdabir=brojka[0].treci;
          console.log(treciOdabir);
          racunaloKombinacija.push(treciOdabir);
          console.log(treciOdabir);
          treciOdabir=treciOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==treciOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        });
        console.log(racunaloKombinacija);
        let promise=new Promise((resolve,reject)=>{
          setTimeout(()=>{
            window.location.reload();
            resolve();
          },1000)
        })
        
        };
        
      }else if(racunaloTrece.length==0 && moguciNastavak.length!=0){
        let randomBroj=Math.floor(Math.random()*moguciNastavak.length);
        let treciOdabir=moguciNastavak[randomBroj].cetvrti;
        racunaloKombinacija.push(treciOdabir);
        treciOdabir=treciOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==treciOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        });
        console.log(racunaloKombinacija);
      }else if(novo.length!=0){
        let provjeraOpet=dobitneKombinacije.filter((elem)=>elem.treci==racunaloKombinacija[0] || elem.drugi ==racunaloKombinacija[0] || elem.prvi==racunaloKombinacija[0]);                                
        let provjeraOpetOpet=provjeraOpet.filter((elem)=>elem.prvi==racunaloKombinacija[1] || elem.drugi==racunaloKombinacija[1] || elem.treci==racunaloKombinacija[1]);
        let najnovijiFilter=provjeraOpetOpet.filter((elem)=>elem.prvi!=provjeri[2] && elem.drugi!=provjeri[2] && elem.treci!=provjeri[2] && elem.cetvrti!=provjeri[2] &&
                                                            elem.prvi!=provjeri[3] && elem.drugi!=provjeri[3] && elem.treci!=provjeri[3] && elem.cetvrti!=provjeri[3] &&
                                                            elem.prvi!=provjeri[4] && elem.drugi!=provjeri[4] && elem.treci!=provjeri[4] && elem.cetvrti!=provjeri[4]);
        let randomBroj=Math.floor(Math.random()*najnovijiFilter.length);
        let treciOdabir=najnovijiFilter[randomBroj].cetvrti;
        racunaloKombinacija.push(treciOdabir);
        treciOdabir=treciOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==treciOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        });
        console.log(racunaloKombinacija);
        
      }
    
    
      
    


      
        
        
    
 
  }else if (mojaKombinacija.length==4){

    

    let preostaloArray=[];

   
    let sviOstali=document.querySelectorAll('.player');
    sviOstali.forEach((item)=>{
      preostaloArray.push(Number(item.id));
    });


    let dobitnoRjesenje=noviStariArray.filter((elem)=>elem.prvi==mojaKombinacija[0] || elem.prvi==mojaKombinacija[1] || elem.prvi==mojaKombinacija[2] || elem.prvi==mojaKombinacija[3]);
    let dobitnoNovoRjesenje=dobitnoRjesenje.filter((elem)=>elem.drugi==mojaKombinacija[0] || elem.drugi==mojaKombinacija[1] || elem.drugi==mojaKombinacija[2] || elem.drugi==mojaKombinacija[3]);
    let dobitnoNovoNovoRjesenje=dobitnoNovoRjesenje.filter((elem)=>elem.treci==mojaKombinacija[0] || elem.treci==mojaKombinacija[1] || elem.treci==mojaKombinacija[2] || elem.treci==mojaKombinacija[3]);
    console.log(dobitnoNovoNovoRjesenje);




    let provjeriPrvi=noviStariArray.filter((elem)=>elem.prvi==preostaloArray[0] || elem.drugi==preostaloArray[0] || elem.treci==preostaloArray[0]);
    let opcijePrvi=provjeriPrvi.filter((elem)=>elem.prvi==mojaKombinacija[0] || elem.drugi==mojaKombinacija[0] || elem.treci==mojaKombinacija[0]);

    //Treba provjeriti racunaloKombinacija[1,2,3] za opcijePrvi jel se pojavljuje, a ako da onda uzimas drugi array i trazis isto;
    let provjeraPrvi=opcijePrvi.filter((elem)=>elem.prvi==mojaKombinacija[0] || elem.prvi==mojaKombinacija[1] || elem.prvi==mojaKombinacija[2] || elem.prvi==mojaKombinacija[3]);
    let provjeraOpetPrvi=provjeraPrvi.filter((elem)=>elem.drugi==mojaKombinacija[0] || elem.drugi==mojaKombinacija[1] || elem.drugi==mojaKombinacija[2] || elem.drugi==mojaKombinacija[3]);
    



    let provjeriDrugi=noviStariArray.filter((elem)=>elem.prvi==preostaloArray[1] || elem.drugi==preostaloArray[1] || elem.treci==preostaloArray[1]);
    let opcijeDrugi=provjeriDrugi.filter((elem)=>elem.prvi==mojaKombinacija[1] || elem.drugi==mojaKombinacija[1] || elem.treci==mojaKombinacija[1]);

    let provjeraDrugi=opcijeDrugi.filter((elem)=>elem.prvi==mojaKombinacija[0] || elem.prvi==mojaKombinacija[1] || elem.prvi==mojaKombinacija[2] || elem.prvi==mojaKombinacija[3]);
    let provjeraOpetDrugi=provjeraDrugi.filter((elem)=>elem.drugi==mojaKombinacija[0] || elem.drugi==mojaKombinacija[1] || elem.drugi==mojaKombinacija[2] || elem.drugi==mojaKombinacija[3]);
    


    if(provjeraOpetPrvi.length==0 && provjeraOpetDrugi.length!=0 && dobitnoNovoNovoRjesenje.length==0){
      let cetvrtiOdabir=provjeraOpetDrugi[0].treci;
      racunaloKombinacija.push(cetvrtiOdabir);
      cetvrtiOdabir=cetvrtiOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==cetvrtiOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        });
        console.log(racunaloKombinacija);
    }else if(provjeraOpetPrvi.length!=0 && provjeraOpetDrugi.length==0 && dobitnoNovoNovoRjesenje.length==0){
      let cetvrtiOdabir=provjeraOpetPrvi[0].treci;
      racunaloKombinacija.push(cetvrtiOdabir);
      cetvrtiOdabir=cetvrtiOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==cetvrtiOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        });
        console.log(racunaloKombinacija);
    }else if(provjeraOpetDrugi.length==0 && provjeraOpetPrvi.length==0 && preostaloArray.length!=0 && dobitnoNovoNovoRjesenje.length==0){
      let randomOdabir=Math.floor(Math.random()*preostaloArray.length);
      console.log(randomOdabir);
      let cetvrtiOdabir=preostaloArray[randomOdabir];
      console.log(cetvrtiOdabir);
      racunaloKombinacija.push(cetvrtiOdabir);
      cetvrtiOdabir=cetvrtiOdabir.toString();
          let polje=document.querySelectorAll(`.player`);
          polje.forEach((item)=>{
          if(item.id==cetvrtiOdabir){
            item.classList.remove("player");
            item.innerHTML=`<span class="racunalo">O</span>`;
          }
        });
        console.log(racunaloKombinacija);
    }else if(dobitnoNovoNovoRjesenje.length!=0){
      console.log("Pobjeda");

    }



}else if(mojaKombinacija.length==5){
  window.location.reload();
}
    
    
  },
  checkCombination:function(){
    if(mojaKombinacija.length==3){

    }
  }
  

}

})();



let Main=(function(UI){


  document.body.addEventListener('click',promjeniKlasuuOuter);

  function promjeniKlasuuOuter(e){

    if(e.target.classList.contains('player')){
      e.target.innerHTML=`<span class="igrac">X</span>`;
      let broj=e.target.id;
      broj=Number(broj);
      let element=e.target;
      element.classList.remove('player');
      let promise=new Promise((resolve,reject)=>{
        UI.playerPick(broj);
        resolve(); 
      })

      promise.then(()=>{
        setTimeout(()=>{
          UI.computerPick();
        },100)
      })


    }

   


    e.preventDefault();
  }






   return{
    init:function(){
      let poljeVrijednosti=document.querySelector('#polje');
      let polje=poljeVrijednosti.getContext('2d');
      polje.moveTo(100,0);
      polje.lineTo(100,300);
      polje.stroke();
      polje.moveTo(200,0);
      polje.lineTo(200,300);
      polje.stroke();
      polje.moveTo(0,100);
      polje.lineTo(300,100);
      polje.stroke();
      polje.moveTo(0,200);
      polje.lineTo(300,200);
      polje.stroke();
    }
   } 
    
})(UI);


Main.init();
