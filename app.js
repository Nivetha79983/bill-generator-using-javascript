function clr(){
    let x,y;
    x=document.getElementById('billno').value;
    y=(x*1)+1;
    document.getElementById("billno").value=y;
    document.getElementById("cname").value="";
    document.getElementById("pname").value="";
    document.getElementById("qty").value="";
    document.getElementById("pprice").value="";
    document.getElementById("tprice").value="";
    document.getElementById("disc").value="";
    document.getElementById("gst").value="";
    document.getElementById("tot").value="";
}
function check(){
    let bill,ccname,product,quantity,perprice,totprice,dis,tax,grandtot,total,discount,gstax,finalprice;
    bill=document.getElementById('billno').value;
    ccname=document.getElementById('cname').value;
    product=document.getElementById('pname').value;
    quantity=document.getElementById('qty').value;
    perprice=document.getElementById('pprice').value;
    totprice=document.getElementById('tprice').value;
    dis=document.getElementById('disc').value;
    tax=document.getElementById('gst').value;
    grandtot=document.getElementById('tot').value;
    total=(quantity*perprice);
    discount=(totprice*10.00/100);
    gstax=(totprice*2.00/100);
    finalprice=(total-discount)+gstax;
   
    if(product=="milk"){
        document.getElementById("pprice").value=40;
    }
    else if(product=="rice"){
        document.getElementById("pprice").value=500;
    }
    else if(product=="chacolate"){
        document.getElementById('pprice').value=50;
    }
    else if(product=='noodles'){
        document.getElementById("pprice").value=100;
    }
    else{
        document.getElementById('pprice').value="enter correct product";
    }
   document.getElementById('tprice').value=total;
   document.getElementById('disc').value=discount;
   document.getElementById('gst').value=gstax;
   document.getElementById('tot').value=finalprice;
}

/*function generate(){
    
   a=document.getElementById('billno').value;
   document.getElementById('line1').innerHTML="Bill no :"+" "+a;

   b=document.getElementById('cname').value;
   document.getElementById('line2').innerHTML="customer name :"+" "+b;

   c=document.getElementById('pname').value;
   document.getElementById('line3').innerHTML="product name :"+" "+c;

   d=document.getElementById('qty').value;
   document.getElementById('line4').innerHTML="quantity :"+" "+d;

   e=document.getElementById('pprice').value;
   document.getElementById('line5').innerHTML="per price :"+" "+e;

   f=document.getElementById('tprice').value;
   document.getElementById('line6').innerHTML="total price :"+" "+f;

   g=document.getElementById('disc').value;
   document.getElementById('line7').innerHTML="discount :"+" "+g;

   h=document.getElementById('gst').value;
   document.getElementById('line8').innerHTML="gst :"+" "+h;

   i=document.getElementById('tot').value;
   document.getElementById('line9').innerHTML="grand total :"+" "+i;

}
*/
function generate(){
    let a=document.getElementById('billno').value;
     document.getElementById('line1').innerHTML=a;

     let b=document.getElementById('cname').value;
     document.getElementById('line2').innerHTML=b;

     let c=document.getElementById('pprice').value;
     document.getElementById('line3').innerHTML=c;

     let d=document.getElementById('qty').value;
     document.getElementById('line4').innerHTML=d;

     let e=document.getElementById('pprice').value;
     document.getElementById('line5').innerHTML=e;

     let f=document.getElementById('tprice').value;
     document.getElementById('line6').innerHTML=f;

     let g=document.getElementById('disc').value;
     document.getElementById('line7').innerHTML=g;

     let h=document.getElementById('gst').value;
     document.getElementById('line8').innerHTML=h;

     let i=document.getElementById('tot').value;
     document.getElementById('line9').innerHTML=i;

}


function ans(){
    window.print();
}

function feresh(){
    document.getElementById('print1').innerHTML="";
    document.getElementById('line1').innerHTML="";
    document.getElementById('print2').innerHTML="";
    document.getElementById('line2').innerHTML="";
    document.getElementById('print3').innerHTML="";
    document.getElementById('line3').innerHTML="";
    document.getElementById('print4').innerHTML="";
    document.getElementById('line4').innerHTML="";
    document.getElementById('print5').innerHTML="";
    document.getElementById('line5').innerHTML="";
    document.getElementById('print6').innerHTML="";
    document.getElementById('line6').innerHTML="";
    document.getElementById('print7').innerHTML="";
    document.getElementById('line7').innerHTML="";
    document.getElementById('print8').innerHTML="";
    document.getElementById('line8').innerHTML="";
    document.getElementById('print9').innerHTML="";
    document.getElementById('line9').innerHTML="";
    document.getElementById('print').style.display="none";
   
}
