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
//Console ���� ���� üũ
System.out.println("***********************[Bird_Mission ex01Result ���� �Ϸ�] ");
%>
<%
stepDao stepdao = new stepDao();
keyDao keydao = new keyDao();


//�ϴ� ���⼭ ������ �Ѱ� �÷��ش�. 
stepdao.UpdateStep("2");

//�׸��� ����ȭ������ �Ѿ��. -> ����ȭ�鿡�� ���� �� ������ ���� �Ѱ��ֱ� 

%>
	 	<script>
		location.href = "step_check.jsp?stepdata=2";
	</script>

<%

%>

</body>
</html>