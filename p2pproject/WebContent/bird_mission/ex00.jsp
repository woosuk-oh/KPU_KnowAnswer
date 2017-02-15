<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
        <%@ page import="bean.*" %>
    <%@ page import="java.util.*" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Code Block</title>
<link href="../css/bootstrap.css" rel='stylesheet' type='text/css' />
<script src="../js/jquery.min.js"></script>
<script type="text/javascript"  src="../js/jquery-1.11.0.min.js"> </script>
<script type="text/javascript"  src="../js/jquery.easing.1.3.js"> </script>
<link href="../css/style.css" rel="stylesheet" type="text/css" media="all" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
<script>
    /*
     미션 01: 애니메이션을 적용해 물고기 움직이기
     다음 예제는 ‘08장, Lesson 05: 마우스 위치 및 크기 관련 기능의 핵심 내용’에서 다룬 물고기를 클릭한
     마우스 위치로 움직이는 예제입니다. 이번 미션은 애니메이션을 적용해 클릭한 마우스 위치로 물고기를
     부드럽게 이동하도록 만드는 것입니다.
     */
    $(document).ready(function(){   
        // 물고기 노드 구하기.
        var $fish = $("#fish");
        var $info = $("#info");
        
        $("#panel").click(function(e){
            var offsetX = e.pageX - $(this).offset().left;
            var offsetY = e.pageY - $(this).offset().top;
            
            // 클릭한 위치 값 알아내기
            var strInfo = "offsetX = "+offsetX+", offsetY = "+offsetY;
            
            // 클릭한 위치 값 출력
            $info.html(strInfo);
            
            // 여기에 코드를 작성해주세요.
            /*
            // 클릭한 위치로 이동
            $fish.css({
                left:offsetX,
                top:offsetY
            })
            */
           
           $fish.animate({
               left:offsetX,
               top:offsetY
           },300, "easeOutBounce");
        })
    })  
</script>
<style>
body {
	font: 100%/1.4 Verdana, Arial, Helvetica, sans-serif;
	background-color: #42413C;
	margin: 0;
	padding: 0;
	color: #000;
}
/* ~~ 요소/태그 선택기 ~~ */
ul, ol, dl { /* 브라우저마다 다르므로 목록의 패딩과 여백을 0으로 지정하는 것이 가장 좋습니다. 일관성을 위해, 여기에서 또는 포함하고 있는 목록 항목(LI, DT, DD)에서 원하는 크기를 지정할 수 있습니다. 보다 구체적인 선택기를 쓰지 않는 한 여기에서 수행한 작업은 .nav 목록에 계단식으로 표시됩니다. */
	padding: 0;
	margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
	margin-top: 0;	 /* 위쪽 여백을 제거하면 포함된 블록에서 여백이 이스케이프되는 문제를 방지할 수 있습니다. 나머지 아래쪽 여백은 이어지는 요소에서 이 문제를 보류합니다. */
	padding-right: 15px;
	padding-left: 15px; /* 블록 요소에 직접 추가하는 대신 블록 내에 있는 요소의 측면에 패딩을 추가하면 상자 모델 수학이 제거됩니다. 측면 패딩이 있는 중첩된 블록을 대체 메서드로 사용할 수도 있습니다. */
	text-align: center;
}
a img { /* 이 선택기는 링크로 둘러싸인 이미지 주변에 있는 일부 브라우저에 표시된 파란색 기본 테두리를 제거합니다. */
	border: none;
}
/* ~~ 사이트 링크의 스타일링은 커서 놓기 효과를 생성하는 선택기 그룹을 포함하여 이 순서대로 남아 있어야 합니다. ~~ */
a:link {
	color: #42413C;
	text-decoration: underline; /* 매우 독특하게 보이도록 링크에 스타일을 지정하는 경우를 제외하고는 시각적으로 빠르게 식별되도록 밑줄을 적용하는 것이 가장 좋습니다. */
}
a:visited {
	color: #6E6C64;
	text-decoration: underline;
}
a:hover, a:active, a:focus { /* 이 선택기 그룹은 마우스를 사용하는 사람과 동일한 커서 놓기 환경을 키보드 탐색기에 제공합니다. */
	text-decoration: none;
}
/* ~~ 이 고정 폭 컨테이너는 다른 모든 블록을 둘러쌉니다. ~~ */
.container {
	width: 960px;
	background-color: #FFFFFF;
	margin: 0 auto; /* 측면 자동 값, 폭으로 연결, 레이아웃 가운데 정렬 */
}
/* ~~ 머리글에는 폭이 지정되지 않습니다. 레이아웃의 전체 폭이 확장됩니다. ~~ */
header {
	background-color: #FFFFFF;
}
/* ~~ 이 항목은 레이아웃에 대한 열입니다. ~~ 

1) 패딩은 블록 요소의 위쪽 및/또는 아래쪽에만 배치됩니다. 이 블록에 포함된 요소의 경우 측면에 패딩이 있습니다. 이를 통해 "상자 모델 수학"에서 제외됩니다. 블록 자체에 측면 패딩 또는 테두리를 추가하면 *전체* 폭을 만들기 위해 정의한 폭에 추가됩니다. 블록 요소 내의 요소에서 패딩을 제거하고, 디자인에 필요한 패딩과 폭이 없는 상태로 내부에 두 번째 블록 요소를 배치할 수도 있습니다.

2) 모두 부동화됨에 따라 열에 여백이 지정되지 않았습니다. 여백을 추가해야 하는 경우에는 부동화하는 방향의 측면에 배치하지 않도록 하십시오(예: 오른쪽 부동화로 설정된 블록의 오른쪽 여백). 대신에 여러 번 패딩이 사용될 수 있습니다. 이 규칙을 무시해야 하는 블록의 경우, 일부 버전의 Internet Explorer에서 여백이 이중으로 삽입되는 버그를 해결하기 위해 블록 요소의 규칙에 "display:inline" 선언을 추가해야 합니다.

3) 문서에서 클래스를 여러 번 사용할 수 있으므로(또한 요소에 여러 클래스를 적용할 수 있으므로), 열에 ID 대신 클래스 이름이 지정되었습니다. 예를 들어, 필요한 경우 두 개의 사이드바 블록을 누적할 수 있습니다. 문서당 한 번만 사용하는 한, 사용자의 환경 설정에 해당하는 경우 이 사이드바 블록을 손쉽게 ID로 변경할 수 있습니다.

4) nav를 오른쪽 대신 왼쪽에 오게 하려는 경우, 이러한 열을 반대 방향(전체 오른쪽 대신 전체 왼쪽)으로 부동화하면 역순으로 렌더링됩니다. HTML 소스에서 블록을 이리저리 옮기지 않아도 됩니다.

*/
.sidebar1 {
	float: left;
	width: 180px;
	background-color: #EADCAE;
	padding-bottom: 10px;
}
.content {
	padding: 10px 0;
	width: 600px;
	float: left;
}
aside {
	float: left;
	width: 180px;
	background-color: #EADCAE;
	padding: 10px 0;
}

/* ~~ 그룹화된 이 선택기는 .content 영역 공간에 목록을 제공합니다. ~~ */
.content ul, .content ol {
	padding: 0 15px 15px 40px; /* 이 패딩은 머리글의 오른쪽 패딩과 위의 단락 규칙을 미러링합니다. 패딩은 목록에서 다른 요소들 사이의 공간 아래쪽과 들여쓰기 생성을 위한 왼쪽에 배치되었습니다. 패딩은 원하는 대로 조정할 수 있습니다. */
}

/* ~~ 탐색 목록 스타일(Spry와 같이 미리 만들어진 플라이아웃 메뉴를 사용하기로 선택한 경우 제거될 수 있음) ~~ */
ul.nav {
	list-style: none; /* 목록 표시 기호를 제거합니다. */
	border-top: 1px solid #666; /* 링크의 위쪽 테두리를 만듭니다. 다른 모든 항목은 LI에서 아래쪽 테두리를 사용하여 배치됩니다. */
	margin-bottom: 15px; /* 아래 내용의 내비게이션 사이에 공간을 만듭니다. */
}
ul.nav li {
	border-bottom: 1px solid #666; /* 버튼 간격을 만듭니다. */
}
ul.nav a, ul.nav a:visited { /* 이러한 선택기를 그룹화하여 방문한 이후에도 링크가 버튼 모양을 유지하도록 합니다. */
	padding: 5px 5px 5px 15px;
	display: block; /* 링크에 블록 속성을 제공하여 이를 포함한 전체 LI를 채우도록 합니다. 이렇게 하면 전체 영역이 마우스 클릭에 반응하게 됩니다. */
	width: 160px;  /*이 폭은 IE6에서 전체 버튼을 클릭할 수 있도록 합니다. IE6를 지원할 필요가 없는 경우에는 제거할 수 있습니다. 사이드바 컨테이너의 폭에서 이 링크의 패딩을 제외함으로써 올바른 폭을 계산합니다. */
	text-decoration: none;
	background-color: #C6D580;
}
ul.nav a:hover, ul.nav a:active, ul.nav a:focus { /* 마우스 및 키보드 탐색기의 배경 및 텍스트 색상을 변경합니다. */
	background-color: #FFFFFF;
	color: #FFF;
}

/* ~~ 바닥글 ~~ */
footer {
	padding: 10px 0;
	background-color: #FFFFFF;
	position: relative;/* 제대로 지우기 위한 IE6 hasLayout을 제공합니다. */
	clear: both; /* 이 지우기 속성은 열이 끝나고 포함하는 위치를 .container가 인식하도록 합니다. */
}
/* ~~ 기타 부동/클래스 지우기 ~~ */
.fltrt {  /* 이 클래스는 페이지에서 오른쪽 요소를 부동화하는 데 사용될 수 있습니다. 부동화된 요소는 페이지에서 옆에 있는 다른 요소의 앞쪽에 배치되어야 합니다. */
	float: right;
	margin-left: 8px;
}
.fltlft { /* 이 클래스는 페이지에서 왼쪽 요소를 부동화하는 데 사용될 수 있습니다. 부동화된 요소는 페이지에서 옆에 있는 다른 요소의 앞쪽에 배치되어야 합니다. */
	float: left;
	margin-right: 8px;
}
.clearfloat { /* .container에서 바닥글이 제거되거나 없어진 경우 이 클래스는 마지막 부동 블록(.container 내) 뒤에 오는 최종 요소로 <br /> 또는 빈 블록 요소에 배치될 수 있습니다. */
	clear:both;
	height:0;
	font-size: 1px;
	line-height: 0px;
}

/*HTML 5 지원 - 태그를 올바르게 렌더링하는 방법을 브라우저에서 인식하도록 display:block에 새로운 HTML 5 태그를 설정합니다. */
header, section, footer, aside, article, figure {
	display: block;
	text-align: center;
}
#apDiv1 {
	position: absolute;
	left: 92px;
	top: 571px;
	width: 137px;
	height: 134px;
	z-index: 1;
}
.container footer #ground table {
	border-top-style: dotted;
	border-right-style: dotted;
	border-bottom-style: dotted;
	border-left-style: dotted;
}
#abc, th, td{
border-style:dotted;
border-width:1px;

}
</style>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>
<%
//Console 진행 사항 체크
System.out.println("***********************[Bird_Mission ex00 진입 완료] ");
//stepDao stepdao = new stepDao();

//stepdao.UpdateStep("1");
%>
<body>
	스토리 시작.

	<form action="ex00pro.jsp">
		<input type="submit" class="btn btn-default" value="시작하기">
		</form>
		<form action="../index.jsp">
			<input type="submit" class="btn btn-warning" value="처음으로">
			</form>
</body>
</html>

