var devil = 666;

var userAgent = window.navigator.userAgent;

function getViewWidth()
{
	return document.documentElement.clientWidth;
}
function getViewHeight()
{
	return document.documentElement.clientHeight;
}

function getCookieVal(cookieName)
{
	var cookieVal = "";
	var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) 
	{
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            cookieVal = c.substring(name.length,c.length);
			break;
        }
    }
    return cookieVal;
}
function setCookieVal(cookieName, value)
{
	var d = new Date();
    d.setTime(d.getTime() + (666*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

function checkBooleanCookie(cookieName)
{
	result = false;
	if(getCookieVal(cookieName) == "true")
	{
		result = true;
	}
	return result;
}

function getAesBG()
{
	return checkBooleanCookie("aesBG");
}
function getAesCur()
{
	return checkBooleanCookie("aesCur");
}

function getBGCookie()
{
	return getCookieVal("setBG");
}
function setBGCookie(BGNum)
{
	setCookieVal("setBG", BGNum);
}
function getCursorCookie()
{
	return getCookieVal("setCursor");
}
function setCursorCookie(curNum)
{
	setCookieVal("setCursor", curNum);
}

function showStyle(styleName, choice)
{
	choice = !choice;
    var styles = document.styleSheets;
    var href = "";
    for (var i = 0; i < styles.length; i++) 
	{
        href = styles[i].href.split("/");
        href = href[href.length - 1];
        if (href === styleName+".css") {
            styles[i].disabled = choice;
            break;
        }
    }
}
function addStyleSheet(url) 
{
    var head = document.getElementsByTagName('head')[0];
    var cssnode = document.createElement('link');

    cssnode.type = 'text/css';
    cssnode.rel = 'stylesheet';
    cssnode.href = url;

    head.appendChild(cssnode);
}

function disableButtons(choice)
{
	document.getElementById("home_btn").disabled = choice;
	document.getElementById("see_btn").disabled = choice;
	document.getElementById("hear_btn").disabled = choice;
	document.getElementById("cool_btn").disabled = choice;
}

function xThParent(element,steps)
{
	if(steps > 0)
	{
		element=element.parentNode;
		steps--;
		element=xThParent(element,steps);
	}
	return element;
}

function checkIfContained()
{
	var isContained = false;
	if(window.self !== window.top)
	{
		isContained = true;
    } 
	return isContained;
}

function checkIfExists(elementID)
{
	var result = true;
	var elementToCheck = document.getElementById(elementID);
	if (elementToCheck === null)
	{
		result = false;
	}
	return result;
}

function remove(element) 
{
	xThParent(element,1).removeChild(element);
}

function reloadData()
{
	location.reload(true);
}

function randPct()
{
	return Math.floor(Math.random() * 101);
}

function randPixPosition(elemHeight, elemWidth)
{
    var h = getViewHeight() - elemHeight; //skull height
    var w = getViewWidth() - elemWidth; //"" width
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
}
function randPctPosition(elemHeight, elemWidth)
{
	var pixPos = randPixPosition(elemHeight, elemWidth);
	return [pixPos[0]/getViewHeight()*100,pixPos[1]/getViewWidth()*100];
}


function setIDPos(elementID, xPos, yPos)
{
	setPos(document.getElementById(elementID), xPos, yPos)
}
function setIDPosX(elementID, xPos)
{
	document.getElementById(elementID).style.top = xPos;
}
function setIDPosY(elementID, yPos)
{
	document.getElementById(elementID).style.left = yPos;
}

function setPos(element, xPos, yPos)
{
	setPosX(element, xPos);
	setPosY(element, yPos);
}
function setPosX(element, xPos)
{
	element.style.left = xPos;
}
function setPosY(element, yPos)
{
	element.style.top = yPos;
}

var fonts = [
		"Arial",
		"Arial Black",
		"Book Antiqua",
		"Courier New",
		"Comic Sans MS",
		"Georgia",
		"Helvetica",
		"Impact",
		"Lucida Console",
		"Lucida Sans Unicode",
		"new century schoolbook",
		"Palatino Linotype",
		"Tahoma",
		"Times New Roman",
		"Trebuchet MS",
		"Verdana",
		];