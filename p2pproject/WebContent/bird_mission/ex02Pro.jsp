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
//Console 진행 사항 체크
System.out.println("***********************[Bird_Mission ex02Pro 진입 완료] ");
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

	while (st.hasMoreTokens()) { //토근이 있는동안 while문이 실행됨
		temp = st.nextToken(); // 토근을 temp 변수에 저장
		System.out.println("데이터Pro[" + number + "]->" + temp);
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

System.out.println("우행후-> "+keydata_temp);

 if(keydata.equals("0K2K4")){
	 %>
	 	<script>
		alert("알맞은 해결방법입니다. 수고하셨습니다. 다음 단계로 넘어갑니다. <준비한 건 여기까지입니다.> ");
		location.href = "../main.jsp";
	</script>
	<%
	 
 }else if(keydata.equals("0K2K0K4")){
	 %>
	<script>
	alert("알맞은 해결방법입니다. 수고하셨습니다. 다음 단계로 넘어갑니다. <준비한 건 여기까지입니다.> ");
	location.href = "../main.jsp";
</script>
<%
 }else if(keydata.equals("1K1K4")){
	 %>
	<script>
	alert("알맞은 해결방법입니다. 수고하셨습니다. 다음 단계로 넘어갑니다. <준비한 건 여기까지입니다.> ");
	location.href = "../main.jsp";
</script>
<%
  }else{
	 //문제 맞음
	 %>
	 	 <script> 
		  alert("그런방식으론 문제를 해결 할 수 없습니다. 다시 풀어보세요");
	      history.go(-1);
		</script>
	 <% 
 }
 
 %>
</body>
</html>