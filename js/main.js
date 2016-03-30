alert("hi");
var banner = $("<div role ='banner'><a href = '../index.html'>Poko</a><a href='./pages/login.html'>Login</a></div>");
var footer = $("<div role = 'footer'><a href='#'>About</a><a href='#'>Settings</a><a href='#'>Contact</a></div>");
$("html").prepend(banner);
$("html").append(footer);
