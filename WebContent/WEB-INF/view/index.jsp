<%@page import="com.newlecture.web.dao.oracle.NoticeView"%>
<%@page import="com.newlecture.web.dao.file.FileNoticeDao"%>
<%@page import="com.newlecture.web.dao.NoticeDao"%>
<%@page import="java.util.Scanner"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="com.newlecture.web.entity.Notice"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en" style="font-size: 10px">

<head>
<meta charset="UTF-8">
<mete name="viewport" content="width=device-width, initial-scale=1">
<title>Document</title>
<link rel="stylesheet" href="../CSS/style.css" type="text/css">
</head>

<body>
	<header id="header">
		<div>
			<a href='' class='icon icon-menu'>펼침버튼</a>
		</div>
        <h1><a href='' id='logo'>뉴렉처 온라인</a></h1>
    	<div>
    		<a href='' class='icon icon-search'>검색버튼</a>
    	</div>
    </header>
	<section id="visual">
	
	</section>
	<main>
		<section id="top-lecture">
		</section>
		<section id="lecture">
		</section>
		<section id="notice">
		</section>
	</main>
	
	<%-- <jsp:include page="inc/footer.jsp" /> --%>
</body>

</html>