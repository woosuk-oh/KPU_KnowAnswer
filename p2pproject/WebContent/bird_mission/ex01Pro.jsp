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
<!-- 

 -->
 <%
//Console ���� ���� üũ
System.out.println("***********************[Bird_Mission ex01Pro ���� �Ϸ�] ");
%>
 <%
 
 stepDao stepdao = new stepDao();
 keyDao keydao = new keyDao();
	String abc[]= new String[3];
 int step = stepdao.getStep();
 String keydata = keydao.getKey();
 String temp = null;
 int number = 0;
 
 System.out.println("STAGE["+step+"]");
 System.out.println("key->"+ keydata);
 /* 
	StringTokenizer st = new StringTokenizer(keydata, "K");

	while (st.hasMoreTokens()) { //����� �ִµ��� while���� �����
		temp = st.nextToken(); // ����� temp ������ ����
		System.out.println("������Pro[" + number + "]->" + temp);
		abc[number] = temp;
		number++;
	}
*/

String keydata_temp= "";

for(int a=0; a< keydata.length() ; a+=2){
	char cmd = keydata.charAt(a);
	keydata_temp += cmd;
	if (cmd == '4') {
		break;
	}
	keydata_temp += "K";
}

System.out.println("������-> "+keydata_temp);

 
 if(keydata_temp.equals("0K0K4")){
	 %>
	 	<script>
		alert("�˸��� �ذ����Դϴ�. �����ϼ̽��ϴ�. ���� �ܰ�� �Ѿ�ϴ�. ");
		location.href = "ex01Result.jsp";
	</script>
	<%
 }else{
	 //���� ����
	 %>
	 	 <script> 
		  alert("�׷�������� ������ �ذ� �� �� �����ϴ�. �ٽ� Ǯ�����");
	      history.go(-1);
		</script>
	 <% 
 }
 
 %>
</body>
</html>