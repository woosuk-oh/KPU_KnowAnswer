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
			while (st.hasMoreTokens()) { //����� �ִµ��� while���� �����
				temp = st.nextToken(); // ����� temp ������ ����
				abc[number] = temp;
				number++;
			}
			System.out.println(" ");
		}
		System.out.println("===============================[���������κ��� ���� �����Ͱ� ���� ����]============================");
		System.out.println("�����Ͱ�[0]=>"+abc[0]+" �����Ͱ�[1]=>"+abc[1]+" �����Ͱ�[2]=>"+abc[2]+"�����Ͱ�[3]=>"+abc[0]+"�����Ͱ�[4]=>"+abc[0]);
		System.out.println("===========================================================================================");
		
	%>
</body>
</html>