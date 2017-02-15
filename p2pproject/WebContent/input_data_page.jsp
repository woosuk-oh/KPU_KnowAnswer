<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%@ page import="bean.*" %>
    <%@ page import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Code Block</title></head>
<body>
	<%
	ArrayList<String> a = new ArrayList<String>();
	
	String temp;
	String abc[]= new String[5];
	
		String keydata = request.getParameter("key");
	int number=0;
	keyDao kk = new keyDao();
	//kk.insertAdmin(keydate);
	kk.UpdateStep(keydata);
	System.out.println("key->"+keydata);
		if (keydata != null) {
			StringTokenizer st = new StringTokenizer(keydata, "K");
			while (st.hasMoreTokens()) { //토근이 있는동안 while문이 실행됨
				temp = st.nextToken(); // 토근을 temp 변수에 저장
				abc[number] = temp;
				number++;
			}
			System.out.println(" ");
		}
		System.out.println("===============================[웹페이지로부터 들어온 데이터값 분할 내용]============================");
		System.out.println("데이터값[0]=>"+abc[0]+" 데이터값[1]=>"+abc[1]+" 데이터값[2]=>"+abc[2]+"데이터값[3]=>"+abc[0]+"데이터값[4]=>"+abc[0]);
		System.out.println("===========================================================================================");
		
	%>
</body>
</html>