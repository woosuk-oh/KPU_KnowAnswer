<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="utf-8"%>
	        <%@ page import="bean.*" %>
    <%@ page import="java.util.*" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Code Block</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery-1.11.0.min.js"> </script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"> </script>
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">

</style>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>
<%
//Console 진행 사항 체크
System.out.println("***********************[Second_Mission ex00pro 진입 완료] ");

stepDao1 stepdao = new stepDao1();

stepdao.UpdateStep("1");
System.out.println("2차 스탭 업데이트완료->"+ stepdao.getStep());

%>
<body>
	 	<script>
		location.href = "step_check.jsp";
	</script>
</body>
</html>

