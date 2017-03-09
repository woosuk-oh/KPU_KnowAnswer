<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%@ page import="bean.*"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Code Block</title><link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<script src="js/jquery.min.js"></script>
</head>
<body>
<%
//String a = request.getParameter("stepdata");
//처음에 화면이 띄워졌을 떄 문제 푸는 시작 페이지 출력 
stepDao1 stepdao1 = new stepDao1();
int step1 = stepdao1.getStep();

//Console 진행 사항 체크
System.out.println("=======================[step check - -  -> " + step1  + "] ");



//만약 스텝이 0 일 경우 스토리 부분 시작해주기.
if(step1 == 0){
	%>
 	<script>
	location.href = "ex00.jsp";
</script>
<%
}
//만약 스텝이 1 일 경우 1단계 실행해주기.
if(step1 == 1 ){
	%>
 	<script>
	location.href = "ex01.jsp";
</script>
<%
}
//만약 스텝이 2일 경우 2단계 실행해주기.
if(step1 == 2){
	%>
 	<script>
	location.href = "ex02.jsp";
</script>
<%
}
//만약 스텝이 3일 경우 3단계 실행해주기.
if(step1 == 3){
	%>
 	<script>
	location.href = "ex03.jsp";
</script>
<%
}
%>
</body>
</html>