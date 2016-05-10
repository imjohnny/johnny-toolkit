//DOM Ready
function ready(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn && fn();
		},false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn && fn();
			};
		});
	};
};
//获取css样式
getStyle=function(obj,attr){
	return obj.currentStyle?obj.currentStyle[atrr]:getComputedStyle(obj,false)[attr];
}
//通过css类名获取对象
getByClassName=function(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}
	else{
		var aEle=oParent.getElementsByTagName('*');
		var result=[];
		for(var i=0;i<aEle.length;i++){
			var tempArr=aEle[i].className.split(' ');
			for(var j=0;j<tempArr.length;j++){
				if(tempArr[j]==sClass){
					result.push(aEle[i]);
					break;
				}
			}
		}
		return result;
	}
}
//正则选取类名对象 无法选取类似-box-类名
function getByClass(oParent,sClass){
	var aEle=oParent.getElementsByTagName('*');
	var result=[];//结果数组

	var re=new RegExp('\\b'+sClass+'\\b');//使用单词边界 注意类似-box-类名

	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			result.push(aEle[i]);
		}
	}

	return result;
}
//获取范围内随机数
function rnd(n,m){
    return parseInt(n+Math.random()*(m-n));
}
//补零
function fillZero(n){
    return n<10?'0'+n:''+n;
}
//处理时间戳
function getTime(time){
    var d=new Date();
    d.setTime(time*1000);
    var year=d.getFullYear();
    var month=fillZero(d.getMonth()+1);
    var date=fillZero(d.getDate());
    var hours=fillZero(d.getHours());
    var minutes=fillZero(d.getMinutes());
    var seconds=fillZero(d.getSeconds());
    var t=year+'-'+month+'-'+date+' '+hours+':'+minutes+':'+seconds;
    return t;
}
//json2hash
function json2hash(json){
	var arr=[];
	for(var key in json){
		arr.push(key+'='+json[key]);
	}
	return '#'+arr.join('&');
}
//hash2json
function hash2json(hash){
	var str=hash.substring(1);
	var arr=str.split('&');
	var json={};
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split('=');
		json[arr2[0]]=arr2[1];
	}
	return json;
}
//cookie
//设置cookie
function setCookie(name, value,timeout){
	var d=new Date();
	d.setDate(d.getDate()+timeout);

	document.cookie=name+'='+value+';expires='+d;
}
//获取cookie
function getCookie(name){
	var cookie=document.cookie;
	var arr=cookie.split('; ')
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return;
}
//删除cookie
function removeCookie(name){
	var d=new Date();
	d.setDate(d.getDate()-1);

	setCookie(name,'',d);
}
//清除空格
function trim(str){
	str=str.replace(/^\s+|\s+$/g,'');
	return str;
}