
//table 3 calculation and storage
for (let i = 3; (i+1)<t3.rows.length; i++) {
    for (let j = 0; (j+1)<t3.rows[i].cells.length; j++) {
        t3.rows[i].cells[j].addEventListener("keyup", function() { //calculation onkeyup
            localStorage.setItem('er'+i+'c'+j,t3.rows[i].cells[j].innerText);
            if((j-1)%5===0){ //part 1
                var divt=0; var tolt =0;
                for (let h = 0; h<6; h++) { var divt = (Number(t3.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t3.rows[i].cells[h*5+1].innerText);}
                t3.rows[i].cells[31].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                t3.rows[i].cells[32].innerText = Number(t3.rows[i].cells[31].innerText)>0 ?(Number(t3.rows[i].cells[31].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[34].innerText = (Number(t3.rows[i].cells[31].innerText)>0) && (Number(t3.rows[i].cells[33].innerText)>0) ? Number(t3.rows[i].cells[33].innerText)-Number(t3.rows[i].cells[31].innerText) : '';
                var divt=0; var tolt =0;
                for (let h = 7; h<9; h++) { var divt = (Number(t3.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t3.rows[i].cells[h*5+1].innerText);}
                t3.rows[i].cells[46].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                t3.rows[i].cells[47].innerText = Number(t3.rows[i].cells[46].innerText)>0 ?(Number(t3.rows[i].cells[46].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[49].innerText = (Number(t3.rows[i].cells[46].innerText)>0) && (Number(t3.rows[i].cells[48].innerText)>0) ? Number(t3.rows[i].cells[48].innerText)-Number(t3.rows[i].cells[46].innerText) : '';

                var divt=0; var tolt =0;
                for (let h = 0; h<9; h++) { var divt = (Number(t3.rows[i].cells[h*5+1].innerText)>0)&&!(h==6) ? divt+1:divt; tolt= !(h==6) ? tolt+Number(t3.rows[i].cells[h*5+1].innerText): tolt;}
                t3.rows[i].cells[51].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                t3.rows[i].cells[52].innerText = Number(t3.rows[i].cells[51].innerText)>0 ?(Number(t3.rows[i].cells[51].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[54].innerText = (Number(t3.rows[i].cells[51].innerText)>0) && (Number(t3.rows[i].cells[53].innerText)>0) ? Number(t3.rows[i].cells[53].innerText)-Number(t3.rows[i].cells[51].innerText) : '';
                if(i<11){
                    for (let h = 0; h<4; h++) { var divt = (Number(t2.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t2.rows[i].cells[h*5+1].innerText);}
                    t2.rows[i].cells[26].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                } else if(i<15&&i>=11){
                    for (let h = 0; h<4; h++) { var divt = (Number(t2.rows[i+7].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t2.rows[i+7].cells[h*5+1].innerText);}
                    t2.rows[i+7].cells[26].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                }
                t3.rows[i].cells[j+1].innerText = (Number(t3.rows[i].cells[j].innerText)>0) ? (Number(t3.rows[i].cells[j].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[j+3].innerText = (Number(t3.rows[i].cells[j+2].innerText)>0)&&(Number(t3.rows[i].cells[j].innerText)>0) ? Number(t3.rows[i].cells[j+2].innerText)-Number(t3.rows[i].cells[j].innerText) : '';
                t2.rows[i].cells[27].innerText = (Number(t2.rows[i].cells[26].innerText)>0) ? (Number(t2.rows[i].cells[26].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[29].innerText = (Number(t2.rows[i].cells[26].innerText)>0)&&(Number(t2.rows[i].cells[28].innerText)>0) ? Number(t2.rows[i].cells[28].innerText)-Number(t2.rows[i].cells[26].innerText) : '';                  
                t2.rows[i+7].cells[27].innerText = (Number(t2.rows[i+7].cells[26].innerText)>0) ? (Number(t2.rows[i+7].cells[26].innerText)*1.1).toFixed(2) : '';
                t2.rows[i+7].cells[29].innerText = (Number(t2.rows[i+7].cells[26].innerText)>0)&&(Number(t2.rows[i+7].cells[28].innerText)>0) ? Number(t2.rows[i+7].cells[28].innerText)-Number(t2.rows[i+7].cells[26].innerText) : '';
            }
            if((j-3)%5===0){ //part2
                var divs=0; var tols =0;
                for (let g = 0; g<6; g++) { var divs = (Number(t3.rows[i].cells[g*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t3.rows[i].cells[g*5+3].innerText);}
                t3.rows[i].cells[33].innerText = divs>0? (tols/divs).toFixed(2) : (tols).toFixed(2);
                t3.rows[i].cells[35].innerText = Number(t3.rows[i].cells[33].innerText)>0 ?(Number(t3.rows[i].cells[33].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[34].innerText = (Number(t3.rows[i].cells[31].innerText)>0) && (Number(t3.rows[i].cells[33].innerText)>0) ? Number(t3.rows[i].cells[33].innerText)-Number(t3.rows[i].cells[31].innerText) : '';
                var divs=0; var tols =0;
                for (let g = 7; g<9; g++) { var divs = (Number(t3.rows[i].cells[g*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t3.rows[i].cells[g*5+3].innerText);}
                t3.rows[i].cells[48].innerText = divs>0? (tols/divs).toFixed(2) : (tols).toFixed(2);
                t3.rows[i].cells[50].innerText = Number(t3.rows[i].cells[48].innerText)>0 ?(Number(t3.rows[i].cells[48].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[49].innerText = (Number(t3.rows[i].cells[46].innerText)>0) && (Number(t3.rows[i].cells[48].innerText)>0) ? Number(t3.rows[i].cells[48].innerText)-Number(t3.rows[i].cells[46].innerText) : '';
                var divs=0; var tols =0;
                for (let f = 0; f<9; f++) { var divs = (Number(t3.rows[i].cells[f*5+3].innerText)>0)&&!(f==6) ? divs+1:divs; tols= !(f==6) ? tols+Number(t3.rows[i].cells[f*5+3].innerText):tols;}
                t3.rows[i].cells[53].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);
                t3.rows[i].cells[55].innerText = Number(t3.rows[i].cells[53].innerText)>0 ?(Number(t3.rows[i].cells[53].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[54].innerText = (Number(t3.rows[i].cells[51].innerText)>0) && (Number(t3.rows[i].cells[53].innerText)>0) ? Number(t3.rows[i].cells[53].innerText)-Number(t3.rows[i].cells[51].innerText) : '';
                if(i<11){
                    
                    for (let f = 0; f<9; f++) { var divs = (Number(t3.rows[i].cells[f*5+3].innerText)>0)&&!(f==6) ? divs+1:divs; tols= !(f==6) ? tols+Number(t3.rows[i].cells[f*5+3].innerText):tols;}
                    t2.rows[i].cells[28].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);
                } else if(i<15&&i>=11){
                    for (let f = 0; f<4; f++) { var divs = (Number(t2.rows[i+7].cells[f*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t2.rows[i+7].cells[f*5+3].innerText);}
                    t2.rows[i+7].cells[28].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);
                }

                t3.rows[i].cells[j+2].innerText = (Number(t3.rows[i].cells[j].innerText)>0) ? (Number(t3.rows[i].cells[j].innerText)*1.1).toFixed(2) : '';
                t3.rows[i].cells[j+1].innerText = (Number(t3.rows[i].cells[j-2].innerText)>0) && (Number(t3.rows[i].cells[j].innerText)>0) ? Number(t3.rows[i].cells[j].innerText)-Number(t3.rows[i].cells[j-2].innerText) : '';
                t2.rows[i].cells[30].innerText = (Number(t2.rows[i].cells[28].innerText)>0) ? (Number(t2.rows[i].cells[28].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[29].innerText = (Number(t2.rows[i].cells[26].innerText)>0)&&(Number(t2.rows[i].cells[28].innerText)>0) ? Number(t2.rows[i].cells[28].innerText)-Number(t2.rows[i].cells[26].innerText) : '';
                t2.rows[i+7].cells[30].innerText = (Number(t2.rows[i+7].cells[28].innerText)>0) ? (Number(t2.rows[i+7].cells[28].innerText)*1.1).toFixed(2) : '';
                t2.rows[i+7].cells[29].innerText = (Number(t2.rows[i+7].cells[26].innerText)>0)&&(Number(t2.rows[i+7].cells[28].innerText)>0) ? Number(t2.rows[i+7].cells[28].innerText)-Number(t2.rows[i+7].cells[26].innerText) : '';
            }
            var whole = 0;
            for (let e = 3; (e+1)<t3.rows.length; e++) {
                var whole = whole + Number(t3.rows[e].cells[j].innerText);
                t3.rows[15].cells[j].innerText = whole;
                t3.rows[15].cells[j+1].innerText = (j-1)%5===0 ? (whole*1.1).toFixed(2) : whole-t3.rows[15].cells[j-2].innerText;
                t3.rows[15].cells[j+2].innerText = (j-3)%5===0 ? (whole*1.1).toFixed(2) :t3.rows[15].cells[j+2].innerText;
                t3.rows[15].cells[j+3].innerText = (j-1)%5===0 ? t3.rows[15].cells[j+2].innerText - whole: t3.rows[15].cells[j+3].innerText;
            }
        });
        if(localStorage.getItem('er'+i+'c'+j)){
            t3.rows[i].cells[j].innerHTML = localStorage.getItem('er'+i+'c'+j);
            t3.rows[i].cells[j].dispatchEvent(new KeyboardEvent('keyup',{})); 
        }
    }
}


//table 2 calculation and storage
for (let i = 3; (i+1)<t2.rows.length; i++) {
    for (let j = 0; (j+1)<t2.rows[i].cells.length; j++) {
        t2.rows[i].cells[j].addEventListener("keyup", function() { //calculation onkeyup
            localStorage.setItem('dr'+i+'c'+j,t2.rows[i].cells[j].innerText);
            if((j-1)%5===0){ //part 1
                var divt=0; var tolt =0;
                for (let h = 0; h<4; h++) { var divt = (Number(t2.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t2.rows[i].cells[h*5+1].innerText);}
                t2.rows[i].cells[21].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                t2.rows[i].cells[j+1].innerText = (Number(t2.rows[i].cells[j].innerText)>0) ? (Number(t2.rows[i].cells[j].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[j+3].innerText = (Number(t2.rows[i].cells[j+2].innerText)>0)&&(Number(t2.rows[i].cells[j].innerText)>0) ? Number(t2.rows[i].cells[j+2].innerText)-Number(t2.rows[i].cells[j].innerText) : '';
                if(i<11){
                    
                    for (let h = 0; h<9; h++) { var divt = (Number(t3.rows[i].cells[h*5+1].innerText)>0)&&!(h==6) ? divt+1:divt; tolt= !(h==6) ? tolt+Number(t3.rows[i].cells[h*5+1].innerText): tolt;}
                    t2.rows[i].cells[26].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                } else if(i<21&&i>=18){
                    for (let h = 0; h<9; h++) {if(!(h==6)){ var divt = (Number(t3.rows[i-7].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t3.rows[i-7].cells[h*5+1].innerText);}}
                    t2.rows[i].cells[26].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);

                } else if(i<18&&i>=11){
                    var divt=0; var tolt =0;
                    for (let h = 0; h<4; h++) { var divt = (Number(t2.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t2.rows[i].cells[h*5+1].innerText);}
                    t2.rows[i].cells[26].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
                } 
                t2.rows[i].cells[22].innerText = (Number(t2.rows[i].cells[21].innerText)>0) ? (Number(t2.rows[i].cells[21].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[27].innerText = (Number(t2.rows[i].cells[26].innerText)>0) ? (Number(t2.rows[i].cells[26].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[24].innerText = (Number(t2.rows[i].cells[21].innerText)>0)&&(Number(t2.rows[i].cells[23].innerText)>0) ? Number(t2.rows[i].cells[23].innerText)-Number(t2.rows[i].cells[21].innerText) : '';
                t2.rows[i].cells[29].innerText = (Number(t2.rows[i].cells[26].innerText)>0)&&(Number(t2.rows[i].cells[28].innerText)>0) ? Number(t2.rows[i].cells[28].innerText)-Number(t2.rows[i].cells[26].innerText) : '';
                
            }
            if((j-3)%5===0){ //part2
                var divs=0; var tols =0;
                for (let g = 0; g<4; g++) { var divs = (Number(t2.rows[i].cells[g*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t2.rows[i].cells[g*5+3].innerText);}
                t2.rows[i].cells[23].innerText = divs>0? (tols/divs).toFixed(2) : (tols).toFixed(2);
                t2.rows[i].cells[j+2].innerText = (Number(t2.rows[i].cells[j].innerText)>0) ? (Number(t2.rows[i].cells[j].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[j+1].innerText = (Number(t2.rows[i].cells[j-2].innerText)>0) && (Number(t2.rows[i].cells[j].innerText)>0) ? Number(t2.rows[i].cells[j].innerText)-Number(t2.rows[i].cells[j-2].innerText) : '';
                if(i<11){
                    
                    for (let f = 0; f<9; f++) { var divs = (Number(t3.rows[i].cells[f*5+3].innerText)>0)&&!(f==6) ? divs+1:divs; tols= !(f==6) ? tols+Number(t3.rows[i].cells[f*5+3].innerText):tols;}
                    t2.rows[i].cells[28].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);
                } else if(i<21&&i>=18){
                    for (let f = 0; f<9; f++) {if(!(f==6)){ var divs = (Number(t3.rows[i-7].cells[f*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t3.rows[i-7].cells[f*5+3].innerText);}}
                    t2.rows[i].cells[28].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);

                } else if(i<18&&i>=11){
                    var divt=0; var tolt =0;
                    for (let f = 0; f<4; f++) { var divs = (Number(t2.rows[i].cells[f*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t2.rows[i].cells[f*5+3].innerText);}
                    t2.rows[i].cells[28].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);
                }
                t2.rows[i].cells[25].innerText = (Number(t2.rows[i].cells[23].innerText)>0) ? (Number(t2.rows[i].cells[23].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[30].innerText = (Number(t2.rows[i].cells[28].innerText)>0) ? (Number(t2.rows[i].cells[28].innerText)*1.1).toFixed(2) : '';
                t2.rows[i].cells[24].innerText = (Number(t2.rows[i].cells[21].innerText)>0)&&(Number(t2.rows[i].cells[23].innerText)>0) ? Number(t2.rows[i].cells[23].innerText)-Number(t2.rows[i].cells[21].innerText) : '';
                t2.rows[i].cells[29].innerText = (Number(t2.rows[i].cells[26].innerText)>0)&&(Number(t2.rows[i].cells[28].innerText)>0) ? Number(t2.rows[i].cells[28].innerText)-Number(t2.rows[i].cells[26].innerText) : '';
            }
            var whole = 0;
            for (let e = 3; (e+1)<t2.rows.length; e++) {
                var whole = whole + Number(t2.rows[e].cells[j].innerText);
                t2.rows[22].cells[j].innerText = whole;
                t2.rows[22].cells[j+1].innerText = (j-1)%5===0 ? (whole*1.1).toFixed(2) : whole-t2.rows[22].cells[j-2].innerText;
                t2.rows[22].cells[j+2].innerText = (j-3)%5===0 ? (whole*1.1).toFixed(2) :t2.rows[22].cells[j+2].innerText;
                t2.rows[22].cells[j+3].innerText = (j-1)%5===0 ? t2.rows[22].cells[j+2].innerText - whole: t2.rows[22].cells[j+3].innerText;
            }
        });
        if(localStorage.getItem('dr'+i+'c'+j)){
            t2.rows[i].cells[j].innerHTML = localStorage.getItem('dr'+i+'c'+j);
            t2.rows[i].cells[j].dispatchEvent(new KeyboardEvent('keyup',{})); 
        }
    }
}



//table 1 calculation and storage
for (let i = 3; (i+1)<t1.rows.length; i++) {
for (let j = 0; (j+1)<t1.rows[i].cells.length; j++) {
t1.rows[i].cells[j].addEventListener("keyup", function() { //calculation of on keyup
localStorage.setItem('cr'+i+'c'+j,t1.rows[i].cells[j].innerText);
var tol=0; var tolu=0; var tolv=0; var tolw=0; var tolx=0; var toly=0; var tolz=0; 
var divi=0; var divu=0; var divv=0; var divw=0; var divx=0; var divy=0; var divz=0; var diva=0;
if((j-1)%5===0){ //part 1
    // expected result cells
    t1.rows[i].cells[j+1].innerText = (Number(t1.rows[i].cells[j].innerText)*1.1).toFixed(2);
    //situational
    if(j==1|j==11){t1.rows[i].cells[21].innerText = Number(t1.rows[i].cells[1].innerText) && Number(t1.rows[i].cells[11].innerText) ? ((Number(t1.rows[i].cells[1].innerText)+Number(t1.rows[i].cells[11].innerText))/2).toFixed(2) : (Number(t1.rows[i].cells[1].innerText)+Number(t1.rows[i].cells[11].innerText)).toFixed(2);}
    if(j==6|j==16){t1.rows[i].cells[26].innerText = Number(t1.rows[i].cells[6].innerText) && Number(t1.rows[i].cells[16].innerText) ? ((Number(t1.rows[i].cells[6].innerText)+Number(t1.rows[i].cells[16].innerText))/2).toFixed(2) : (Number(t1.rows[i].cells[6].innerText)+Number(t1.rows[i].cells[16].innerText)).toFixed(2);}
    if(j==1|j==6){t2.rows[i].cells[11].innerText = Number(t1.rows[i].cells[1].innerText) && Number(t1.rows[i].cells[6].innerText) ? ((Number(t1.rows[i].cells[1].innerText)+Number(t1.rows[i].cells[6].innerText))/2).toFixed(2) : (Number(t1.rows[i].cells[1].innerText)+Number(t1.rows[i].cells[6].innerText)).toFixed(2);}
    if(j==11|j==16){t2.rows[i].cells[16].innerText = Number(t1.rows[i].cells[11].innerText) && Number(t1.rows[i].cells[16].innerText) ? ((Number(t1.rows[i].cells[11].innerText)+Number(t1.rows[i].cells[16].innerText))/2).toFixed(2) : (Number(t1.rows[i].cells[11].innerText)+Number(t1.rows[i].cells[16].innerText)).toFixed(2);}
    if(j==1|j==11|j==6|j==16){
        var var21 = (Number(t1.rows[i].cells[21].innerText)+Number(t1.rows[i].cells[26].innerText));
        t1.rows[i].cells[31].innerText = Number(t1.rows[i].cells[21].innerText) && Number(t1.rows[i].cells[26].innerText) ? var21.toFixed(2)/2 : var21.toFixed(2);
        t1.rows[i].cells[32].innerText = (Number(t1.rows[i].cells[31].innerText)*1.1).toFixed(2);
        t1.rows[i].cells[24].innerText = (t1.rows[i].cells[23].innerText) ? (Number(t1.rows[i].cells[23].innerText)-Number(t1.rows[i].cells[21].innerText)).toFixed(2) : '';
        t1.rows[i].cells[29].innerText = (t1.rows[i].cells[28].innerText) ? (Number(t1.rows[i].cells[28].innerText)-Number(t1.rows[i].cells[26].innerText)).toFixed(2) :'';
        t1.rows[i].cells[34].innerText = (t1.rows[i].cells[33].innerText) && (t1.rows[i].cells[31].innerText) ? (Number(t1.rows[i].cells[33].innerText)-Number(t1.rows[i].cells[31].innerText)).toFixed(2):'';
        t1.rows[i].cells[22].innerText = (t1.rows[i].cells[21].innerText) ? (Number(t1.rows[i].cells[21].innerText)*1.1).toFixed(2) : '';
        t1.rows[i].cells[27].innerText = (t1.rows[i].cells[26].innerText) ? (Number(t1.rows[i].cells[26].innerText)*1.1).toFixed(2) : '';
        for (let p = 3; (p+1)<t1.rows.length; p++) { 
            divy = Number(t1.rows[p].cells[21].innerText)>0 ? divy+1 : divy ; var toly = toly + Number(t1.rows[p].cells[21].innerText);
            divz = Number(t1.rows[p].cells[26].innerText)>0 ? divz+1 : divz ; var tolz = tolz + Number(t1.rows[p].cells[26].innerText);
            divw = Number(t1.rows[p].cells[31].innerText)>0 ? divw+1 : divw ; var tolw = tolw + Number(t1.rows[p].cells[31].innerText);
            divx = Number(t1.rows[p].cells[33].innerText)>0 ? divx+1 : divx ; var tolx = tolx + Number(t1.rows[p].cells[33].innerText);
        }
        t1.rows[18].cells[21].innerText = (toly/divy).toFixed(2); 
        t1.rows[18].cells[26].innerText = (tolz/divz).toFixed(2);
        t1.rows[18].cells[31].innerText = (tolw/divw).toFixed(2);
        t1.rows[18].cells[33].innerText = (tolx/divx).toFixed(2);

        t2.rows[i].cells[12].innerText = (Number(t2.rows[i].cells[11].innerText)>0) ? (Number(t2.rows[i].cells[11].innerText)*1.1).toFixed(2) :'';
        t2.rows[i].cells[17].innerText = (Number(t2.rows[i].cells[16].innerText)>0) ? (Number(t2.rows[i].cells[16].innerText)*1.1).toFixed(2) : '';
        t2.rows[i].cells[14].innerText = (Number(t2.rows[i].cells[11].innerText)>0 && Number(t2.rows[i].cells[13].innerText)>0 ? Number(t2.rows[i].cells[13].innerText)-Number(t2.rows[i].cells[11].innerText) : '');
        t2.rows[i].cells[19].innerText = (Number(t2.rows[i].cells[16].innerText)>0 && Number(t2.rows[i].cells[18].innerText)>0 ? Number(t2.rows[i].cells[18].innerText)-Number(t2.rows[i].cells[16].innerText) : '');
        var divt=0; var tolt =0;
        for (let h = 0; h<4; h++) { var divt = (Number(t2.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t2.rows[i].cells[h*5+1].innerText);}
        t2.rows[i].cells[21].innerText = divt>0? (tolt/divt).toFixed(2) : tolt.toFixed(2);
        t2.rows[i].cells[22].innerText = (Number(t2.rows[i].cells[21].innerText)>0) ? (Number(t2.rows[i].cells[21].innerText)*1.1).toFixed(2) : '';
        t2.rows[i].cells[27].innerText = (Number(t2.rows[i].cells[26].innerText)>0) ? (Number(t2.rows[i].cells[26].innerText)*1.1).toFixed(2) : '';
        t2.rows[i].cells[24].innerText = (Number(t2.rows[i].cells[21].innerText)>0)&&(Number(t2.rows[i].cells[23].innerText)>0) ? Number(t2.rows[i].cells[23].innerText)-Number(t2.rows[i].cells[21].innerText) : '';
        t2.rows[i].cells[29].innerText = (Number(t2.rows[i].cells[26].innerText)>0)&&(Number(t2.rows[i].cells[28].innerText)>0) ? Number(t2.rows[i].cells[28].innerText)-Number(t2.rows[i].cells[26].innerText) : '';

        t1.rows[18].cells[22].innerText = (toly/divy*1.1).toFixed(2); 
        t1.rows[18].cells[27].innerText = (tolz/divz*1.1).toFixed(2);
        t1.rows[18].cells[32].innerText = (tolw/divw*1.1).toFixed(2); 
        t1.rows[18].cells[35].innerText = (tolx/divx*1.1).toFixed(2); 
        t1.rows[18].cells[24].innerText = (Number(t1.rows[18].cells[23].innerText)-Number(t1.rows[18].cells[21].innerText)).toFixed(2); 
        t1.rows[18].cells[29].innerText = (Number(t1.rows[18].cells[28].innerText)-Number(t1.rows[18].cells[26].innerText)).toFixed(2); 
        t1.rows[18].cells[34].innerText = (Number(t1.rows[18].cells[33].innerText)-Number(t1.rows[18].cells[31].innerText)).toFixed(2); 
    }
    //end to situational
    t1.rows[i].cells[j+3].innerText = (t1.rows[i].cells[j+2].innerText) ? Number(t1.rows[i].cells[j+2].innerText)-Number(t1.rows[i].cells[j].innerText) : '';
    //average bottom
    for (let i = 3; (i+1)<t1.rows.length; i++) { divi = Number(t1.rows[i].cells[j].innerText)>0 ? divi+1 : divi ; var tol = tol + Number(t1.rows[i].cells[j].innerText);}
    t1.rows[18].cells[j].innerText = (tol/divi).toFixed(2); 
    t1.rows[18].cells[j+1].innerText = ((tol/divi)*1.1).toFixed(2);
    t1.rows[18].cells[j+3].innerText = (t1.rows[18].cells[j+2].innerText) ? (Number(t1.rows[18].cells[j+2].innerText)-Number(t1.rows[18].cells[j].innerText)).toFixed(2) : ''; 

    var divt=0; var tolt =0;
    for (let h = 0; h<4; h++) { var divt = (Number(t2.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t2.rows[i].cells[h*5+1].innerText);}
    t2.rows[i].cells[21].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
    if(i<11){
                    
        for (let h = 0; h<9; h++) { var divt = (Number(t3.rows[i].cells[h*5+1].innerText)>0)&&!(h==6) ? divt+1:divt; tolt= !(h==6) ? tolt+Number(t3.rows[i].cells[h*5+1].innerText): tolt;}
        t2.rows[i].cells[26].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
    }else if(i<18&&i>=11){
    var divt=0; var tolt =0;
    for (let h = 0; h<4; h++) { var divt = (Number(t2.rows[i].cells[h*5+1].innerText)>0) ? divt+1:divt; tolt=tolt+Number(t2.rows[i].cells[h*5+1].innerText);}
    t2.rows[i].cells[26].innerText = divt>0? (tolt/divt).toFixed(2) : (tolt).toFixed(2);
    } 
}
if((j-3)%5===0){ //part2
    // expected result cells
    t1.rows[i].cells[j+2].innerText = (Number(t1.rows[i].cells[j].innerText)*1.1).toFixed(2);
    //situational
    if(j==3|j==13){t1.rows[i].cells[23].innerText = Number(t1.rows[i].cells[3].innerText) && Number(t1.rows[i].cells[13].innerText) ? ((Number(t1.rows[i].cells[3].innerText)+Number(t1.rows[i].cells[13].innerText))/2).toFixed(2): (Number(t1.rows[i].cells[3].innerText)+Number(t1.rows[i].cells[13].innerText)).toFixed(2);}
    if(j==8|j==18){t1.rows[i].cells[28].innerText = Number(t1.rows[i].cells[8].innerText) && Number(t1.rows[i].cells[18].innerText) ? ((Number(t1.rows[i].cells[8].innerText)+Number(t1.rows[i].cells[18].innerText))/2).toFixed(2) : Number(t1.rows[i].cells[8].innerText)+Number(t1.rows[i].cells[18].innerText).toFixed(2);}
    if(j==3|j==8){t2.rows[i].cells[13].innerText = Number(t1.rows[i].cells[3].innerText) && Number(t1.rows[i].cells[8].innerText) ? ((Number(t1.rows[i].cells[3].innerText)+Number(t1.rows[i].cells[8].innerText))/2).toFixed(2) : (Number(t1.rows[i].cells[3].innerText)+Number(t1.rows[i].cells[13].innerText)).toFixed(2);}
    if(j==13|j==18){t2.rows[i].cells[18].innerText = Number(t1.rows[i].cells[13].innerText) && Number(t1.rows[i].cells[18].innerText) ? ((Number(t1.rows[i].cells[13].innerText)+Number(t1.rows[i].cells[18].innerText))/2).toFixed(2) : (Number(t1.rows[i].cells[8].innerText)+Number(t1.rows[i].cells[18].innerText)).toFixed(2);}
    if(j==3|j==13|j==8|j==18){
        var var21 = (Number(t1.rows[i].cells[21].innerText)+Number(t1.rows[i].cells[26].innerText));
        t1.rows[i].cells[31].innerText = Number(t1.rows[i].cells[21].innerText) && Number(t1.rows[i].cells[26].innerText) ? var21.toFixed(2)/2 : var21.toFixed(2);
        t1.rows[i].cells[33].innerText = Number(t1.rows[i].cells[23].innerText) && Number(t1.rows[i].cells[28].innerText) ? ((Number(t1.rows[i].cells[23].innerText)+Number(t1.rows[i].cells[28].innerText))/2).toFixed(2) : (Number(t1.rows[i].cells[23].innerText)+Number(t1.rows[i].cells[28].innerText)).toFixed(2);
        t1.rows[i].cells[24].innerText = (t1.rows[i].cells[21].innerText) ? (Number(t1.rows[i].cells[23].innerText)-Number(t1.rows[i].cells[21].innerText)).toFixed(2) : '';
        t1.rows[i].cells[29].innerText = (t1.rows[i].cells[26].innerText) ? (Number(t1.rows[i].cells[28].innerText)-Number(t1.rows[i].cells[26].innerText)).toFixed(2) :'';
        t1.rows[i].cells[34].innerText = (t1.rows[i].cells[33].innerText) && (t1.rows[i].cells[31].innerText) ? (Number(t1.rows[i].cells[33].innerText)-Number(t1.rows[i].cells[31].innerText)).toFixed(2):'';
        t1.rows[i].cells[35].innerText = (Number(t1.rows[i].cells[33].innerText)*1.1).toFixed(2);
        t1.rows[i].cells[25].innerText = (t1.rows[i].cells[23].innerText) ? (Number(t1.rows[i].cells[23].innerText)*1.1).toFixed(2) : '';
        t1.rows[i].cells[30].innerText = (t1.rows[i].cells[28].innerText) ? (Number(t1.rows[i].cells[28].innerText)*1.1).toFixed(2) : '';
        for (let p = 3; (p+1)<t1.rows.length; p++) { 
            divu = Number(t1.rows[p].cells[23].innerText)>0 ? divu+1 : divu ; var tolu = tolu + Number(t1.rows[p].cells[23].innerText);
            divv = Number(t1.rows[p].cells[28].innerText)>0 ? divv+1 : divv ; var tolv = tolv + Number(t1.rows[p].cells[28].innerText);
            divw = Number(t1.rows[p].cells[31].innerText)>0 ? divw+1 : divw ; var tolw = tolw + Number(t1.rows[p].cells[31].innerText);
            divx = Number(t1.rows[p].cells[33].innerText)>0 ? divx+1 : divx ; var tolx = tolx + Number(t1.rows[p].cells[33].innerText);
        }
        t1.rows[18].cells[23].innerText = (tolu/divu).toFixed(2); 
        t1.rows[18].cells[28].innerText = (tolv/divv).toFixed(2);
        t1.rows[18].cells[31].innerText = (tolw/divw).toFixed(2);
        t1.rows[18].cells[33].innerText = (tolx/divx).toFixed(2);
        t1.rows[18].cells[33].innerText = (tolx/divx).toFixed(2);

        t2.rows[i].cells[15].innerText = (Number(t2.rows[i].cells[13].innerText)>0) ? (Number(t2.rows[i].cells[13].innerText)*1.1).toFixed(2) :'';
        t2.rows[i].cells[20].innerText = (Number(t2.rows[i].cells[18].innerText)>0) ? (Number(t2.rows[i].cells[18].innerText)*1.1).toFixed(2) : '';
        t2.rows[i].cells[14].innerText = (Number(t2.rows[i].cells[11].innerText)>0 && Number(t2.rows[i].cells[13].innerText)>0 ? Number(t2.rows[i].cells[13].innerText)-Number(t2.rows[i].cells[11].innerText) : '');
        t2.rows[i].cells[19].innerText = (Number(t2.rows[i].cells[16].innerText)>0 && Number(t2.rows[i].cells[18].innerText)>0 ? Number(t2.rows[i].cells[18].innerText)-Number(t2.rows[i].cells[16].innerText) : '');
        var divs=0; var tols =0;
        for (let g = 0; g<4; g++) { var divs = (Number(t2.rows[i].cells[g*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t2.rows[i].cells[g*5+3].innerText);}
        t2.rows[i].cells[23].innerText = divs>0? (tols/divs).toFixed(2) : (tols).toFixed(2);
        if(i<11){
            for (let f = 0; f<9; f++) { var divs = (Number(t3.rows[i].cells[f*5+3].innerText)>0)&&!(f==6) ? divs+1:divs; tols= !(f==6) ? tols+Number(t3.rows[i].cells[f*5+3].innerText):tols;}
            t2.rows[i].cells[28].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);
        }else if(i<18&&i>=11){
            var divt=0; var tolt =0;
            for (let f = 0; f<4; f++) { var divs = (Number(t2.rows[i].cells[f*5+3].innerText)>0) ? divs+1:divs; tols=tols+Number(t2.rows[i].cells[f*5+3].innerText);}
            t2.rows[i].cells[28].innerText = divs>0 ? (tols/divs).toFixed(2) : (tols).toFixed(2);
        }
        t2.rows[i].cells[25].innerText = (Number(t2.rows[i].cells[23].innerText)>0) ? (Number(t2.rows[i].cells[23].innerText)*1.1).toFixed(2) : '';
        t2.rows[i].cells[30].innerText = (Number(t2.rows[i].cells[28].innerText)>0) ? (Number(t2.rows[i].cells[28].innerText)*1.1).toFixed(2) : '';
        t2.rows[i].cells[24].innerText = (Number(t2.rows[i].cells[21].innerText)>0)&&(Number(t2.rows[i].cells[23].innerText)>0) ? Number(t2.rows[i].cells[23].innerText)-Number(t2.rows[i].cells[21].innerText) : '';
        t2.rows[i].cells[29].innerText = (Number(t2.rows[i].cells[26].innerText)>0)&&(Number(t2.rows[i].cells[28].innerText)>0) ? Number(t2.rows[i].cells[28].innerText)-Number(t2.rows[i].cells[26].innerText) : '';

        t1.rows[18].cells[25].innerText = (tolu/divu*1.1).toFixed(2); 
        t1.rows[18].cells[30].innerText = (tolv/divv*1.1).toFixed(2);
        t1.rows[18].cells[32].innerText = (tolw/divw*1.1).toFixed(2); 
        t1.rows[18].cells[35].innerText = (tolx/divx*1.1).toFixed(2);
        t1.rows[18].cells[24].innerText = (Number(t1.rows[18].cells[23].innerText)-Number(t1.rows[18].cells[21].innerText)).toFixed(2); 
        t1.rows[18].cells[29].innerText = (Number(t1.rows[18].cells[28].innerText)-Number(t1.rows[18].cells[26].innerText)).toFixed(2); 
        t1.rows[18].cells[34].innerText = (Number(t1.rows[18].cells[33].innerText)-Number(t1.rows[18].cells[31].innerText)).toFixed(2);  
    }
    //end to situational
    t1.rows[i].cells[j+1].innerText = (t1.rows[i].cells[j-2].innerText) ? Number(t1.rows[i].cells[j].innerText)-Number(t1.rows[i].cells[j-2].innerText) : '';
    //average bottom
    for (let i = 3; (i+1)<t1.rows.length; i++) { divi = Number(t1.rows[i].cells[j].innerText)>0 ? divi+1 : divi ; var tol = tol + Number(t1.rows[i].cells[j].innerText);}
    t1.rows[18].cells[j].innerText = (tol/divi).toFixed(2); 
    t1.rows[18].cells[j+2].innerText = ((tol/divi)*1.1).toFixed(2); 
    t1.rows[18].cells[j+1].innerText = (t1.rows[18].cells[j-2].innerText) ? (Number(t1.rows[18].cells[j].innerText)-Number(t1.rows[18].cells[j-2].innerText)).toFixed(2) : '';
}
});
if(localStorage.getItem('cr'+i+'c'+j)){
t1.rows[i].cells[j].innerHTML = localStorage.getItem('cr'+i+'c'+j);
t1.rows[i].cells[j].dispatchEvent(new KeyboardEvent('keyup',{}));
}
}
}
