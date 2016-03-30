alert("welcome to Poko Cafe");
var banner = $("<div role ='banner'><a href = '../index.html'>Poko</a><a href='../pages/space.html'>Space</a></div>");
var footer = $("<div role = 'footer'><a href='https://github.com/UrchinZ/poko/'>About</a></div>");
$("html").prepend(banner);
$("html").append(footer);
