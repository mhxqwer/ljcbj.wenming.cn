// JavaScript Document


function doZoom(size,content){
	document.getElementById(content).style.fontSize=size+'px';
}


function doPrint(vTitle,vTime,vContent)
{
	var Title = document.getElementById(vTitle).innerHTML;
	var Time = document.getElementById(vTime).innerHTML;
	var Position =""; //= document.all.Position.innerHTML;
	var mContent = document.getElementById(vContent).innerHTML;
	var Images = ""; //document.all.Image.innerHTML;
var PartI = ' \
<style type="text/css"><!-- \
p { \
padding-top:10px; \
} \
--></style><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bordercolor="#FFCC66" > \
 <tr>  <td bgcolor="#FFCC00" width="465"><b><font class="font-family: 宋体 ;font-size: 9pt">欢迎访问中国文明网</font>  <font face="Verdana, Arial, Helvetica, sans-serif" size="1"> - WWW.WENMING.CN</font></b> </td> \
    <td bgcolor="#FFDC71" width="23">&nbsp;</td>    <td bgcolor="#FFE8A2" width="13">&nbsp;</td>    <td bgcolor="#FFF1BB" width="12">&nbsp;</td>    <td bgcolor="#FFF8D9" width="15">&nbsp;</td> \
    <td bgcolor="#FFF9DD" width="34">&nbsp;</td>  </tr>  <tr bgcolor="#EAEAEA">     <td class="p9" colspan="6">       <div align="right"><font color="#000000"> ';

var PartII = Position+'<font size="1"><b>&gt;&gt;</b></font></font></div>    </td>  </tr>  <tr><td colspan="6">      <hr size="1" noshade>    </td></tr>  <tr valign="top" align="left"> \
    <td colspan="6">       <table width="100%" border="0" cellspacing="0" cellpadding="5" align="center" class="main">        <tr>           <td>  ';
	
var PartIII= '<div align="center"><b>'+Title+'</b></div>';
var Part4='</td></tr><tr><td> <div align="center" class="p9">'+Time+'</div>';
var Part5='</td></tr><tr><td align="center">'+Images+'</td></tr><tr> <td>'+mContent+'</td></tr></table> </td></tr> <tr> <td colspan="6">      <hr noshade size="1"></td>  </tr>  <tr>     <td bgcolor="#FFCC66" colspan="6">       <div align="right" class="p9"><b><font face="宋体" font-size="9pt">中国文明网版权所有</b></font></div> </td>  </tr></table>';
document.body.innerHTML = PartI+PartII+PartIII+Part4+Part5;
window.print();

}