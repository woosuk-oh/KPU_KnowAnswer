<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%@ page import="bean.*" %>
    <%@ page import="java.util.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Code Block</title></head>
<body>
<%
//Console 진행 사항 체크
System.out.println("***********************[Bird_Mission ex02Result 진입 완료] ");
%>
<%
stepDao stepdao = new stepDao();
keyDao keydao = new keyDao();


//일단 여기서 스탭을 한개 올려준다. 
stepdao.UpdateStep("3");

//그리고 메인화면으로 넘어간다. -> 메인화면에서 스탭 값 가지고 문제 넘겨주기 

%>
	 	<script>
		location.href = "step_check.jsp?stepdata=3";
	</script>

<%

%>

</body>
</html>