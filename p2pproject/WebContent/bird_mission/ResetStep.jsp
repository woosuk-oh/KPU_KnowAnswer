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
stepDao stepdao = new stepDao();
keyDao keydao = new keyDao();

stepdao.UpdateStep("0");
%>
<%
//Console 진행 사항 체크
System.out.println("=======================[리셋 완료] ");
%>
 	<script>
	location.href = "ex00.jsp";
</script>

</body>
</html>