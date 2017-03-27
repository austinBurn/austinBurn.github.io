var contentIDs = ["about", "portfolio", "social", "resume"];

if(getCookieVal("testMode") == "")
{
	setCookieVal("testMode", false);
}

var testMode = eval(getCookieVal("testMode"));

if(testMode)
{
	setInterval(function(){
		if(document.hasFocus()){reloadData}},10000);
}
	
function toggleTestMode()
{
	if(testMode)
	{
		testMode = false;
	}
	else
	{
		testMode = true;
	}
	setCookieVal("testMode", testMode);
	reloadData();
}

function setContent(contentID)
{
	console.log(contentID);
	for(var i = 0; i < contentIDs.length; i++)
	{
		document.getElementById(contentIDs[i] + "_btn").className = "";
	}
	document.getElementById(contentID + "_btn").className = "active_button";
	
	for(var i = 0; i < contentIDs.length; i++)
	{
		document.getElementById(contentIDs[i]).style.display = "none";
	}
	document.getElementById(contentID).style.display = "block";
	setLastViewed(contentID);
}

function navTo(buttonElem)
{
	setContent(buttonElem.id.substring(0,buttonElem.id.indexOf("_")));
	//replace the og b.w one with this
}

function setLastViewed(lastViewed)
{
	setCookieVal("lastViewed", lastViewed);
}

function initSite()
{
	if(getCookieVal("lastViewed") != "")
	{
		console.log(getCookieVal("lastViewed"));
		setContent(getCookieVal("lastViewed"));
	}
	else
	{
		setContent("about");
	}
}

