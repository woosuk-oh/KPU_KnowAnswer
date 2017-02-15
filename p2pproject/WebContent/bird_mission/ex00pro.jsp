<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
        <%@ page import="bean.*" %>
    <%@ page import="java.util.*" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Code Block</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<script src="js/jquery.min.js"></script>
<script type="text/javascript"  src="js/jquery-1.11.0.min.js"> </script>
<script type="text/javascript"  src="js/jquery.easing.1.3.js"> </script>
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
<script>
    /*
     �̼� 01: �ִϸ��̼��� ������ ����� �����̱�
     ���� ������ ��08��, Lesson 05: ���콺 ��ġ �� ũ�� ���� ����� �ٽ� ���롯���� �ٷ� ����⸦ Ŭ����
     ���콺 ��ġ�� �����̴� �����Դϴ�. �̹� �̼��� �ִϸ��̼��� ������ Ŭ���� ���콺 ��ġ�� ����⸦
     �ε巴�� �̵��ϵ��� ����� ���Դϴ�.
     */
    $(document).ready(function(){   
        // ����� ��� ���ϱ�.
        var $fish = $("#fish");
        var $info = $("#info");
        
        $("#panel").click(function(e){
            var offsetX = e.pageX - $(this).offset().left;
            var offsetY = e.pageY - $(this).offset().top;
            
            // Ŭ���� ��ġ �� �˾Ƴ���
            var strInfo = "offsetX = "+offsetX+", offsetY = "+offsetY;
            
            // Ŭ���� ��ġ �� ���
            $info.html(strInfo);
            
            // ���⿡ �ڵ带 �ۼ����ּ���.
            /*
            // Ŭ���� ��ġ�� �̵�
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
/* ~~ ���/�±� ���ñ� ~~ */
ul, ol, dl { /* ���������� �ٸ��Ƿ� ����� �е��� ������ 0���� �����ϴ� ���� ���� �����ϴ�. �ϰ����� ����, ���⿡�� �Ǵ� �����ϰ� �ִ� ��� �׸�(LI, DT, DD)���� ���ϴ� ũ�⸦ ������ �� �ֽ��ϴ�. ���� ��ü���� ���ñ⸦ ���� �ʴ� �� ���⿡�� ������ �۾��� .nav ��Ͽ� ��ܽ����� ǥ�õ˴ϴ�. */
	padding: 0;
	margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
	margin-top: 0;	 /* ���� ������ �����ϸ� ���Ե� ��Ͽ��� ������ �̽��������Ǵ� ������ ������ �� �ֽ��ϴ�. ������ �Ʒ��� ������ �̾����� ��ҿ��� �� ������ �����մϴ�. */
	padding-right: 15px;
	padding-left: 15px; /* ��� ��ҿ� ���� �߰��ϴ� ��� ��� ���� �ִ� ����� ���鿡 �е��� �߰��ϸ� ���� �� ������ ���ŵ˴ϴ�. ���� �е��� �ִ� ��ø�� ����� ��ü �޼���� ����� ���� �ֽ��ϴ�. */
	text-align: center;
}
a img { /* �� ���ñ�� ��ũ�� �ѷ����� �̹��� �ֺ��� �ִ� �Ϻ� �������� ǥ�õ� �Ķ��� �⺻ �׵θ��� �����մϴ�. */
	border: none;
}
/* ~~ ����Ʈ ��ũ�� ��Ÿ�ϸ��� Ŀ�� ���� ȿ���� �����ϴ� ���ñ� �׷��� �����Ͽ� �� ������� ���� �־�� �մϴ�. ~~ */
a:link {
	color: #42413C;
	text-decoration: underline; /* �ſ� ��Ư�ϰ� ���̵��� ��ũ�� ��Ÿ���� �����ϴ� ��츦 �����ϰ�� �ð������� ������ �ĺ��ǵ��� ������ �����ϴ� ���� ���� �����ϴ�. */
}
a:visited {
	color: #6E6C64;
	text-decoration: underline;
}
a:hover, a:active, a:focus { /* �� ���ñ� �׷��� ���콺�� ����ϴ� ����� ������ Ŀ�� ���� ȯ���� Ű���� Ž���⿡ �����մϴ�. */
	text-decoration: none;
}
/* ~~ �� ���� �� �����̳ʴ� �ٸ� ��� ����� �ѷ��Դϴ�. ~~ */
.container {
	width: 960px;
	background-color: #FFFFFF;
	margin: 0 auto; /* ���� �ڵ� ��, ������ ����, ���̾ƿ� ��� ���� */
}
/* ~~ �Ӹ��ۿ��� ���� �������� �ʽ��ϴ�. ���̾ƿ��� ��ü ���� Ȯ��˴ϴ�. ~~ */
header {
	background-color: #FFFFFF;
}
/* ~~ �� �׸��� ���̾ƿ��� ���� ���Դϴ�. ~~ 

1) �е��� ��� ����� ���� ��/�Ǵ� �Ʒ��ʿ��� ��ġ�˴ϴ�. �� ��Ͽ� ���Ե� ����� ��� ���鿡 �е��� �ֽ��ϴ�. �̸� ���� "���� �� ����"���� ���ܵ˴ϴ�. ��� ��ü�� ���� �е� �Ǵ� �׵θ��� �߰��ϸ� *��ü* ���� ����� ���� ������ ���� �߰��˴ϴ�. ��� ��� ���� ��ҿ��� �е��� �����ϰ�, �����ο� �ʿ��� �е��� ���� ���� ���·� ���ο� �� ��° ��� ��Ҹ� ��ġ�� ���� �ֽ��ϴ�.

2) ��� �ε�ȭ�ʿ� ���� ���� ������ �������� �ʾҽ��ϴ�. ������ �߰��ؾ� �ϴ� ��쿡�� �ε�ȭ�ϴ� ������ ���鿡 ��ġ���� �ʵ��� �Ͻʽÿ�(��: ������ �ε�ȭ�� ������ ����� ������ ����). ��ſ� ���� �� �е��� ���� �� �ֽ��ϴ�. �� ��Ģ�� �����ؾ� �ϴ� ����� ���, �Ϻ� ������ Internet Explorer���� ������ �������� ���ԵǴ� ���׸� �ذ��ϱ� ���� ��� ����� ��Ģ�� "display:inline" ������ �߰��ؾ� �մϴ�.

3) �������� Ŭ������ ���� �� ����� �� �����Ƿ�(���� ��ҿ� ���� Ŭ������ ������ �� �����Ƿ�), ���� ID ��� Ŭ���� �̸��� �����Ǿ����ϴ�. ���� ���, �ʿ��� ��� �� ���� ���̵�� ����� ������ �� �ֽ��ϴ�. ������ �� ���� ����ϴ� ��, ������� ȯ�� ������ �ش��ϴ� ��� �� ���̵�� ����� �ս��� ID�� ������ �� �ֽ��ϴ�.

4) nav�� ������ ��� ���ʿ� ���� �Ϸ��� ���, �̷��� ���� �ݴ� ����(��ü ������ ��� ��ü ����)���� �ε�ȭ�ϸ� �������� �������˴ϴ�. HTML �ҽ����� ����� �̸����� �ű��� �ʾƵ� �˴ϴ�.

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

/* ~~ �׷�ȭ�� �� ���ñ�� .content ���� ������ ����� �����մϴ�. ~~ */
.content ul, .content ol {
	padding: 0 15px 15px 40px; /* �� �е��� �Ӹ����� ������ �е��� ���� �ܶ� ��Ģ�� �̷����մϴ�. �е��� ��Ͽ��� �ٸ� ��ҵ� ������ ���� �Ʒ��ʰ� �鿩���� ������ ���� ���ʿ� ��ġ�Ǿ����ϴ�. �е��� ���ϴ� ��� ������ �� �ֽ��ϴ�. */
}

/* ~~ Ž�� ��� ��Ÿ��(Spry�� ���� �̸� ������� �ö��̾ƿ� �޴��� ����ϱ�� ������ ��� ���ŵ� �� ����) ~~ */
ul.nav {
	list-style: none; /* ��� ǥ�� ��ȣ�� �����մϴ�. */
	border-top: 1px solid #666; /* ��ũ�� ���� �׵θ��� ����ϴ�. �ٸ� ��� �׸��� LI���� �Ʒ��� �׵θ��� ����Ͽ� ��ġ�˴ϴ�. */
	margin-bottom: 15px; /* �Ʒ� ������ ������̼� ���̿� ������ ����ϴ�. */
}
ul.nav li {
	border-bottom: 1px solid #666; /* ��ư ������ ����ϴ�. */
}
ul.nav a, ul.nav a:visited { /* �̷��� ���ñ⸦ �׷�ȭ�Ͽ� �湮�� ���Ŀ��� ��ũ�� ��ư ����� �����ϵ��� �մϴ�. */
	padding: 5px 5px 5px 15px;
	display: block; /* ��ũ�� ��� �Ӽ��� �����Ͽ� �̸� ������ ��ü LI�� ä�쵵�� �մϴ�. �̷��� �ϸ� ��ü ������ ���콺 Ŭ���� �����ϰ� �˴ϴ�. */
	width: 160px;  /*�� ���� IE6���� ��ü ��ư�� Ŭ���� �� �ֵ��� �մϴ�. IE6�� ������ �ʿ䰡 ���� ��쿡�� ������ �� �ֽ��ϴ�. ���̵�� �����̳��� ������ �� ��ũ�� �е��� ���������ν� �ùٸ� ���� ����մϴ�. */
	text-decoration: none;
	background-color: #C6D580;
}
ul.nav a:hover, ul.nav a:active, ul.nav a:focus { /* ���콺 �� Ű���� Ž������ ��� �� �ؽ�Ʈ ������ �����մϴ�. */
	background-color: #FFFFFF;
	color: #FFF;
}

/* ~~ �ٴڱ� ~~ */
footer {
	padding: 10px 0;
	background-color: #FFFFFF;
	position: relative;/* ����� ����� ���� IE6 hasLayout�� �����մϴ�. */
	clear: both; /* �� ����� �Ӽ��� ���� ������ �����ϴ� ��ġ�� .container�� �ν��ϵ��� �մϴ�. */
}
/* ~~ ��Ÿ �ε�/Ŭ���� ����� ~~ */
.fltrt {  /* �� Ŭ������ ���������� ������ ��Ҹ� �ε�ȭ�ϴ� �� ���� �� �ֽ��ϴ�. �ε�ȭ�� ��Ҵ� ���������� ���� �ִ� �ٸ� ����� ���ʿ� ��ġ�Ǿ�� �մϴ�. */
	float: right;
	margin-left: 8px;
}
.fltlft { /* �� Ŭ������ ���������� ���� ��Ҹ� �ε�ȭ�ϴ� �� ���� �� �ֽ��ϴ�. �ε�ȭ�� ��Ҵ� ���������� ���� �ִ� �ٸ� ����� ���ʿ� ��ġ�Ǿ�� �մϴ�. */
	float: left;
	margin-right: 8px;
}
.clearfloat { /* .container���� �ٴڱ��� ���ŵǰų� ������ ��� �� Ŭ������ ������ �ε� ���(.container ��) �ڿ� ���� ���� ��ҷ� <br /> �Ǵ� �� ��� ��ҿ� ��ġ�� �� �ֽ��ϴ�. */
	clear:both;
	height:0;
	font-size: 1px;
	line-height: 0px;
}

/*HTML 5 ���� - �±׸� �ùٸ��� �������ϴ� ����� ���������� �ν��ϵ��� display:block�� ���ο� HTML 5 �±׸� �����մϴ�. */
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
//Console ���� ���� üũ
System.out.println("***********************[Bird_Mission ex00pro ���� �Ϸ�] ");
stepDao stepdao = new stepDao();

stepdao.UpdateStep("1");
%>
<body>
	 	<script>
		location.href = "step_check.jsp";
	</script>
</body>
</html>

