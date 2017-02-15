<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="utf-8"%>
<%@ page import="bean.*"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD Xhtml 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%
stepDao1 stepdao = new stepDao1();
keyDao keydao = new keyDao();
	String abc[]= new String[5];
//int step = stepdao.getStep();
String keydata = keydao.getKey();
System.out.println("키값->"+keydata);
String temp = null;
int number = 0;

for(int a=0; a< 5; a++){
	abc[a] = "9";
}

StringTokenizer st = new StringTokenizer(keydata, "K");
while (st.hasMoreTokens()) { //占쏙옙域뱀�깍옙占� 占쏙옙占쏙옙占쏙옙占쏙옙 while�얜�占쏙옙 占썬�쏙옙占쏙옙占�
	temp = st.nextToken(); // 占쏙옙域뱀�깍옙占� temp 癰�占쏙옙占쏙옙占� 占쏙옙占쏙옙
	abc[number] = temp;
	number++;
}


System.out.println("첫번째값[0]=>"+abc[0]+" 두번째값[1]=>"+abc[1]+" 세번째값[2]=>"+abc[2]+" 네번째값[3]=>"+abc[3]+" 다섯번째값[4]=>"+abc[4]);

int left_right_value=0;
int up_down_value=0;
int left_right_value1=0;
int up_down_value1=0;
int left_right_value2=0;
int up_down_value2=0;
int left_right_value3=0;
int up_down_value3=0;
int left_right_value4=0;
int up_down_value4=0;


%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Code Block</title>
<!-- Bootstrap Core CSS -->
<link href="../css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link href="../css/landing-page.css" rel="stylesheet">

<!-- Custom Fonts -->
<link href="../font-awesome/css/font-awesome.min.css" rel="stylesheet"
	type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
	rel="stylesheet" type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<style>
body {
	font-size: 9pt;
}

#panel {
	width: 1100px;
	height: 600px;
	border: 1px solid #999;
	margin-top: 10px;
	position: relative;
	background-image: url("bg2.png"); 
}

#fish {
	position: absolute;
	left: 500px;
	top: 150px;
}


</style>

<script type="text/javascript" src="../libs/jquery-1.11.0.min.js"> </script>
<script type="text/javascript" src="../libs/jquery.easing.1.3.js"> </script>

<script>
<%




//abc[0] 기준
if(abc[0].equals("0")){
   //오른쪽으로 이동
   left_right_value = left_right_value + 200;
}
if(abc[0].equals("1")){
   //왼쪽으로 이동
   left_right_value = left_right_value - 200;
}
if(abc[0].equals("2")){
   //위로 이동
   up_down_value = up_down_value - 150;
}
if(abc[0].equals("3")){
   //아래로 이동
   up_down_value = up_down_value + 150;
}
if(abc[0].equals("4")){
	up_down_value =0;
	left_right_value =0;
}
%>
<%
//abc[1] 기준
if(abc[1].equals("0")){
 //오른쪽으로 이동
 left_right_value1 = left_right_value1 + 200;
}
if(abc[1].equals("1")){
 //왼쪽으로 이동
 left_right_value1 = left_right_value1 - 200;
}
if(abc[1].equals("2")){
 //위로 이동
 up_down_value1 = up_down_value1 - 150;
}
if(abc[1].equals("3")){
 //아래로 이동
 up_down_value1 = up_down_value1 + 150;
}
if(abc[1].equals("4")){
	up_down_value1 =0;
	left_right_value1 =0;
}
%>
<%
//abc[2] 기준
if(abc[2].equals("0")){
 //오른쪽으로 이동
 left_right_value2 = left_right_value2 + 200;
}
if(abc[2].equals("1")){
 //왼쪽으로 이동
 left_right_value2 = left_right_value2 - 200;
}
if(abc[2].equals("2")){
 //위로 이동
 up_down_value2 = up_down_value2 - 150;
}
if(abc[2].equals("3")){
 //아래로 이동
 up_down_value2 = up_down_value2 + 150;
}
if(abc[2].equals("4")){
	up_down_value2 =0;
	left_right_value2 =0;
}
%>
<%
//abc[3] 기준
if(abc[3].equals("0")){
 //오른쪽으로 이동
 left_right_value3 = left_right_value3 + 200;
}
if(abc[3].equals("1")){
 //왼쪽으로 이동
 left_right_value3 = left_right_value3 - 200;
}
if(abc[3].equals("2")){
 //위로 이동
 up_down_value3 = up_down_value3 - 150;
}
if(abc[3].equals("3")){
 //아래로 이동
 up_down_value3 = up_down_value3 + 150;
}
if(abc[3].equals("4")){
	up_down_value3 =0;
	left_right_value3 =0;
}
%>
<%
//abc[4] 기준
if(abc[4].equals("0")){
 //오른쪽으로 이동
 left_right_value4 = left_right_value4 + 200;
}
if(abc[4].equals("1")){
 //왼쪽으로 이동
 left_right_value4 = left_right_value4 - 200;
}
if(abc[4].equals("2")){
 //위로 이동
 up_down_value4 = up_down_value4 - 150;
}
if(abc[4].equals("3")){
 //아래로 이동
 up_down_value4 = up_down_value4 + 150;
}
if(abc[4].equals("4")){
	up_down_value4 =0;
	left_right_value4 =0;
}
%>

    $(document).ready(function(){   
        var $fish = $("#fish");
        var $info = $("#info");
        var $first = $("#first");
        var offsetX;
        var offsetY;

    	// 첫번째 클릭 
    if(<%=abc[0]%> != 4 ){
        $("#aaa").click(function(e){
       
        	offsetX = 500;
           offsetY = 150;
           $fish.animate({
               left:offsetX+ <%=left_right_value%>,
               top:offsetY + <%=up_down_value%>
          
           },3000, "easeOutBounce");
        })
    }
        // 두번째 클릭
        if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4){
       $("#bbb").click(function(e){
        	
          offsetX = offsetX+ <%=left_right_value%>;
          offsetY = offsetY + <%=up_down_value%>;
           $fish.animate({
               left:offsetX + <%=left_right_value1%>,
               top:offsetY + <%=up_down_value1%>
           },3000, "easeOutBounce");
        })
        }
      // 세번째 클릭
               	if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4 && <%=abc[2]%> != 4){
       $("#ccc").click(function(e){
    	 
    	  offsetX = offsetX + <%=left_right_value1%>;
        offsetY = offsetY + <%=up_down_value1%>;
         $fish.animate({ 
             left:offsetX + <%=left_right_value2%>,
             top:offsetY + <%=up_down_value2%>
         },3000, "easeOutBounce");
      })
               	}
      // 네번째 클릭
               	if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4 && <%=abc[2]%> != 4 && <%=abc[3]%> != 4){
      $("#ddd").click(function(e){
    	 
  offsetX = offsetX + <%=left_right_value2%>;
        offsetY = offsetY + <%=up_down_value2%>;
         $fish.animate({
    
             left:offsetX + <%=left_right_value3%>,
             top:offsetY + <%=up_down_value3%>
         },3000, "easeOutBounce");
      })
               	}
      // 다섯번째 클릭
                 	if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4 && <%=abc[2]%> != 4 && <%=abc[3]%> != 4 && <%=abc[4]%> != 4){
     $("#eee").click(function(e){
    	  
    	  offsetX =offsetX + <%=left_right_value3%>;
        offsetY =offsetY + <%=up_down_value3%>;
         $fish.animate({
    
             left:offsetX + <%=left_right_value4%>,
             top:offsetY + <%=up_down_value4%>
         },3000, "easeOutBounce");
      })
                 	}
      
            // 전체 클릭-----------------------------------------------------------------------------
     $("#first").click(function(e){
    		if(<%=abc[0]%> != 4 ){
    		offsetX = 500;
            offsetY = 150;
            $fish.animate({
                left:offsetX+ <%=left_right_value%>,
                top:offsetY + <%=up_down_value%>
           
            },3000, "easeOutBounce");
           	}
            
    		if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4){
            offsetX = offsetX+ <%=left_right_value%>;
            offsetY = offsetY + <%=up_down_value%>;
             $fish.animate({
                 left:offsetX + <%=left_right_value1%>,
                 top:offsetY + <%=up_down_value1%>
             },3000, "easeOutBounce");
    		}
         	if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4 && <%=abc[2]%> != 4){
             offsetX = offsetX + <%=left_right_value1%>;
             offsetY = offsetY + <%=up_down_value1%>;
             var cccc = $fish.animate({ 
                  left:offsetX + <%=left_right_value2%>,
                  top:offsetY + <%=up_down_value2%>
              },3000, "easeOutBounce");
         	}
         	if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4 && <%=abc[2]%> != 4 && <%=abc[3]%> != 4){
              offsetX = offsetX + <%=left_right_value2%>;
              offsetY = offsetY + <%=up_down_value2%>;
               $fish.animate({
          
                   left:offsetX + <%=left_right_value3%>,
                   top:offsetY + <%=up_down_value3%>
               },3000, "easeOutBounce");
         	}
           	if(<%=abc[0]%> != 4 && <%=abc[1]%> != 4 && <%=abc[2]%> != 4 && <%=abc[3]%> != 4 && <%=abc[4]%> != 4){
         	  offsetX =offsetX + <%=left_right_value3%>;
              offsetY =offsetY + <%=up_down_value3%>;
               $fish.animate({
          
                   left:offsetX + <%=left_right_value4%>,
                   top:offsetY + <%=up_down_value4%>
               },3000, "easeOutBounce");
           	}
      })
      
      
    })  
</script>

</head>

<body>
	<div id="panel">
		<img
			src="https://s3.ap-northeast-2.amazonaws.com/p2pprojectmory/fish.png"
			id="fish">
	</div>
	<a href="javascript:location.reload()">다시 문제 풀어보기</a>
	<div id="button">
		<input type="button" class="btn btn-default" value="순서1" id="aaa">
		<input type="button" class="btn btn-default" value="순서2" id="bbb">
		<input type="button" class="btn btn-default" value="순서3" id="ccc">
		<input type="button" class="btn btn-default" value="순서4" id="ddd">
		<input type="button" class="btn btn-default" value="순서5" id="eee"><br>
		<input type="button" class="btn btn-default" value="모든 순서 시작"
			id="first">
	</div>
</body>

</html>
