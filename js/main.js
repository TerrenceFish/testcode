window.onload=function(){
  unflod();
 test();
  del(v); 
  add();
  SAVE();
}
//չ�����رձ����Ϣ
    function unflod(){
                var list_table=document.getElementsByClassName('list_table');
                if(list_table[0].style.display=="block"){
                  list_table[0].style.display="none";
                }else{
                  list_table[0].style.display="block";
                }
              }
     //��ѯ
      function test(){
      var Textfield=document.getElementById('textfield');
     /* var Textfield3=document.getElementById('textfield3');*/
      var Textfield2=document.getElementById('textfield2');
        var table=document.getElementById("table");
          var tr1=document.getElementById("tr1");
          var tr2=document.getElementById("tr2");

           //var rows = table.rows.length;
          // var cols=table.cols.length;
          var oTd=document.getElementById("code1"); 
             /*if(oTd.innerHTML==Textfield.value)
              {
               tr1.style.display="block";
               
              }
              else
              {
                 tr1.style.display="none";
               }     
         }*/
        var rows=table.rows;//��������С�
         for(var i=1;i<rows.length;i++)
        {
            if(Textfield.value == ""||Textfield2.value== ""){
              rows[i].style.display="";
              Textfield.setAttribute("placeholder","����Ϊ��");
              Textfield2.setAttribute("placeholder","����Ϊ��");
            }
            else 
            {
              for(var j=0;j<rows[i].cells.length;j++){
                if(rows[i].cells[j].innerHTML==Textfield.value||rows[i].cells[j+2].innerHTML==Textfield2.value){
                  rows[i].style.display="";       //����дblock����Ϊ�ᱻ�黯����ѯdisplay��
                break;             //����ѭ����
                  
                }else{
                   rows[i].style.display="none";
                   //rows[i].style.visibility="hide";
                break;
                }
            }  
           }
        }
    }
    
    //ɾ��
    function del(v){
        // var tr=document.getElementById('table').getElementsByTagName('tr');
        // var tbody=document.getElementById('table').getElementsByTagName("tbody")[0];
        //       tbody.removeChild(tbody.childNodes[v]);
        document.getElementById('tr'+v).remove();
    }
  //����
     

          var table=document.getElementById("table");
            var adda=document.getElementById("adda");

     function add(){
              var obtn1=document.getElementById("btn1");
              var but=document.getElementById("but")
            /*  var newTr=document.createElement("tr");
              

              newTr.innerHTML="<td>"+things+"</td><td>2</td> <td>3</td> <td></td> <td></td> <td></td> <td></td>"
            
          
              table.appendChild(newTr);*/
               table.style.display="none";
               adda.style.display="block";
               but.style.display="none";

     }

     var n = 4;
     function SAVE(){
       var things=document.getElementById("things").value;
        var name=document.getElementById("name").value;
        var date=document.getElementById("date").value;
        var kinds=document.getElementById("kinds").value;
        var people=document.getElementById("people").value;
        var more=document.getElementById("more").value;
        // var last =document.getElementById("last");
      /* last.setAttribute("className","edit");
       last.setAttribute("className","delete");*/
             table.style.display="block";
               adda.style.display="none";
               but.style.display="block";
            var ntr=document.createElement("tr");
            ntr.setAttribute("id",'tr'+n);
              var enter=[];
             /* alert(things);*/
              enter[0]=things;
              enter[1]=name;
              enter[2]=date;
              enter[3]=kinds;
              enter[4]=people;
              enter[5]=more;
              // enter[6]=last;
             /* alert(enter[1]);*/
              for(var i=0;i<enter.length;i++){
              //����td
                  var td=document.createElement("td");
                  //����ID��
                   td.setAttribute("id","code1");
                //�ı�׷�ӵ�td
                  td.innerHTML=enter[i];  
                  td.setAttribute("height","34px")
                     //��td��ӵ�tr
                  ntr.appendChild(td);
            }

            var tded=document.createElement("td");
            tded.innerHTML='<a href="�Ʊ���Ϣά��.html" class="edit" title="�༭"></a>'+'<a href="#" class="delete" title="ɾ��" onclick="del('+n+')"></a>';
            ntr.appendChild(tded);
      table.appendChild(ntr);
      n++;
 }