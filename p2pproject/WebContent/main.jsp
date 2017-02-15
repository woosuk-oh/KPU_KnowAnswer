<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="bean.*"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>Code Block</title>
<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link href="css/landing-page.css" rel="stylesheet">

<!-- Custom Fonts -->
<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet"
	type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
	rel="stylesheet" type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script  type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
    <script>
        /*
         예제01: 앞에서 배운 윈도우 크기를 구하는 세 가지 방법을 활용해 윈도우의 크기를 구한 값을 실행화면처럼 #info 영역에 출력해 주세요.
         */        
        $(document).ready(function(){
            // 윈도우 크기 출력
            var strInfo = "";
            // 일반 너비,높이 구하기
            strInfo += ""+$(window).width()+"<br>";
            strInfo += ""+$(window).height()+"<br>";

            // 정보 출력
            $("#info").html(strInfo);
        })
    </script>
</head>

<body>


<%
//Console 진행 사항 체크
System.out.println("***********************[Main 진입 완료] ");
%>
	<a name="about"></a>
	<div class="intro-header">
		<div class="container">

			<div class="row">
				<div class="col-lg-12">
					<div class="intro-message">
						<h1>Know Answer</h1>
						<h3>Let's Play</h3>
						<h3>    <div id="info"> </div></h3>
						<hr class="intro-divider">
						<ul class="list-inline intro-social-buttons">
						<li>
						<!-- 시나리오 스테이지로 이동  -->
								<form action="stage.jsp">
									<input
										type="submit" class="btn btn-default" value="시작해보자">
								</form>
							</li>
							<li>
								
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
		<!-- /.container -->

	</div>
	<!-- /.intro-header -->


	<!-- jQuery -->
	<script src="js/jquery.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="js/bootstrap.min.js"></script>
	
    

</body>

</html>
