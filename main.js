function RGBtoCMY(R, G, B){
    if (R>255 || G>255 || B>255){
        alert("введите правильное значение");
        return {C:NaN, M:NaN, Y:NaN, H:NaN, L:NaN, S:NaN};
       
    } else{return {C:255-R, M:255-G, Y:255-B};}
    
}
function CMYtoRGB(C,M,Y){
    if (C>255 || M>255 || L>255){
        alert("введите правильное значение");
        return {R:NaN, G:NaN, B:NaN, H:NaN, L:NaN, S:NaN};
       
    } else    
    return {R:255-C, G:255-M, B:255-Y};
}
function RGBToHSL(r,g,b) {
    
    r = r / 255
    g = g / 255;
     b = b / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    
    if (r>1 || g>1 || b>1){
        return {H:NaN,S:NaN,L:NaN}; 
    }
    if(max == min){
        h = 0; 
        s = 0;
        l = (max + min) / 2; }
    else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
        return {H:Math.round(h*360),S:Math.round(s*100),L:Math.round(l*100)};        
}
function HSLToRGB(h,s,l) {
    
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c/2,
    r = 0,
    g = 0,
    b = 0;
      if ( s>1 || l>1) {
       alert("введите правильное значение");
       r =NaN; g = NaN; b = NaN;
       return {R:r,G:g,B:b}; 
     } if (0 <= h && h < 60) {
       r = c; g = x; b = 0;  
     } else if (60 <= h && h < 120) {
       r = x; g = c; b = 0;
     } else if (120 <= h && h < 180) {
       r = 0; g = c; b = x;
     } else if (180 <= h && h < 240) {
       r = 0; g = x; b = c;
     } else if (240 <= h && h < 300) {
       r = x; g = 0; b = c;
     } else if (300 <= h && h < 360) {
       r = c; g = 0; b = x;
     } else if ( h>360) {
       alert("введите правильное значение");
       r =NaN; g = NaN; b = NaN;
       
     } 
     
     
     r = Math.round((r + m) * 255);
     g = Math.round((g + m) * 255);
     b = Math.round((b + m) * 255);
    
     return {R:r,G:g,B:b};
}               
function CMYvalueAndBcgStyle(e){
    let Red = parseInt(R.value);
    let Green = parseInt(G.value);
    let Blue = parseInt(B.value);
    rez1 = RGBtoCMY(Red,Green,Blue);
    rez2 = RGBToHSL(Red,Green,Blue);
    console.log(rez1);
    console.log(rez2);
    H.value = rez2.H;
    L.value = rez2.L;
    S.value = rez2.S;         
    C.value = rez1.C;
    M.value = rez1.M;
    Y.value = rez1.Y;
    document.body.style.backgroundColor=`RGB(${Red},${Green},${Blue})`;
}    
function RGBvalueAndBcgStyle(e){
    let c = parseInt(C.value);
    let m = parseInt(M.value);
    let y = parseInt(Y.value);
    rez3 = CMYtoRGB(c,m,y);
    console.log(rez3);
    c=255-c;
    m=255-m;
    y=255-y;
    rez4 = RGBToHSL(c,m,y);
    H.value = rez4.H;
    L.value = rez4.L;
    S.value = rez4.S;
   
    R.value = rez3.R;
    G.value = rez3.G;
    B.value = rez3.B;            
    document.body.style.backgroundColor=`RGB(${c},${m},${y})`;
   
}
function HLSvalueAndBcgStyle(e){
    let h = parseInt(H.value);
    let l = parseInt(L.value);
    let s = parseInt(S.value);
  
    rez5 = HSLToRGB(h,s,l);
    console.log(rez5);
    rez6 = RGBtoCMY(parseInt(rez5.R), parseInt(rez5.G), parseInt(rez5.B));
    C.value = rez6.C;
    M.value = rez6.M;
    Y.value = rez6.Y;
    R.value = rez5.R;
    G.value = rez5.G;
    B.value = rez5.B;            
    document.body.style.backgroundColor=`RGB(${parseInt(rez5.R)},${parseInt(rez5.G)},${parseInt(rez5.B)})`;
   
}

R.addEventListener('change', CMYvalueAndBcgStyle, false);
G.addEventListener('change', CMYvalueAndBcgStyle, false);
B.addEventListener('change', CMYvalueAndBcgStyle, false);
C.addEventListener('change', RGBvalueAndBcgStyle, false);
M.addEventListener('change', RGBvalueAndBcgStyle, false);
Y.addEventListener('change', RGBvalueAndBcgStyle, false);
H.addEventListener('change', HLSvalueAndBcgStyle, false);
L.addEventListener('change', HLSvalueAndBcgStyle, false);
S.addEventListener('change', HLSvalueAndBcgStyle, false);       
color.addEventListener('change', CircleValueGetAndBcgStyle, false);