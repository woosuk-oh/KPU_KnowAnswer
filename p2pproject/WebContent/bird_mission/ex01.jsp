<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Code Block</title>
<script src="../js/jquery.min.js"></script>
<script type="text/javascript"  src="../js/jquery-1.11.0.min.js"> </script>
<script type="text/javascript"  src="../js/jquery.easing.1.3.js"> </script>
<!-- Bootstrap Core CSS -->
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/style.css" rel="stylesheet" type="text/css" media="all" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">


/*HTML 5 지원 - 태그를 올바르게 렌더링하는 방법을 브라우저에서 인식하도록 display:block에 새로운 HTML 5 태그를 설정합니다. */
header, section, footer, aside, article, figure {
	display: block;
	text-align: center;
}
#apDiv1 {
	position: absolute;
	left: 92px;
	top: 571px;
	width: 137px;
	height: 134px;
	z-index: 1;
}
.container footer #ground table {
	border-top-style: dotted;
	border-right-style: dotted;
	border-bottom-style: dotted;
	border-left-style: dotted;
}
#abc, th, td{
border-style:dotted;
border-width:1px;

}
</style>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>

<body>
<%
//Console 진행 사항 체크
System.out.println("***********************[Bird_Mission ex01 진입 완료] ");
%>
        <div id="panel">
<div class="container">
  <header>
    <a href="#"><img src="https://s3.ap-northeast-2.amazonaws.com/p2pprojectmory/logo.png" alt="여기에 로고 삽입" width="124" height="61" id="Insert_logo" style="background-color: #FFFFFF; display: block; color: #0000CC;" /></a>
  </header>
  <footer>

    <div id="ground">

      <table id="abc width="150" align="center">
        <tr>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" rowspan="4"><img src="https://s3.ap-northeast-2.amazonaws.com/p2pprojectmory/bric.png" width="150" height="587"></td>
          <td width="150" height="150"><img src="https://s3.ap-northeast-2.amazonaws.com/p2pprojectmory/KakaoTalk_20161216_120349595.png" alt="" width="150" height="150"></td>
          <td width="150" height="150">&nbsp;</td>
        </tr>
        <tr>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150">&nbsp;</td>
        </tr>
        <tr>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150">&nbsp;</td>
        </tr>
        <tr>
          <td width="150" height="150">  
          <img id="fish" src="https://s3.ap-northeast-2.amazonaws.com/p2pprojectmory/KakaoTalk_20161216_120344786.png" width="150" height="150">
          </td>
          <td width="150" height="150"><img src="https://s3.ap-northeast-2.amazonaws.com/p2pprojectmory/KakaoTalk_20161216_120349595.png" width="150" height="150"></td>
          <td width="150" height="150">&nbsp;</td>
          <td width="150" height="150"><img src="https://s3.ap-northeast-2.amazonaws.com/p2pprojectmory/KakaoTalk_20161216_120346799.png" width="150" height="150"></td>
        </tr>
        </table>
    </div>
  </footer>
  <div class="row">
				<div class="col-lg-12">
      <div id="submit" align="center">
           <form action="ex01Pro.jsp">
     <input type="submit" class="btn btn-primary" value="정답확인하기"/>
   </form>
 		<form action="../index.jsp">
			<input type="submit" class="btn btn-warning" value="처음으로">
			</from>
    </div>
    </div>
    </div>
<!-- end .container --></div>


   </div>
    
</body>
</html>

