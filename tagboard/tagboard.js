'use strict';

$(document).ready(function(){
	var posturl = 'http://localhost:5000/messages/approved';
	//5000 ms = 5s interval for update function below
	var interval = 5000;
	//div id and corresponding string
	//idea: sorted oldest to newest
	var strings = [{"c1", ""}, {"c2", ""},  {"c3", ""}, {"c4", ""}, {"c5", ""}, {"c6", ""}, {"c7", ""}, {"c8", ""}, {"c9", ""}];

	//check for new string, replace oldest with this one
	window.setInterval(function(){
		
		
	}, interval);

	//WHEN POSTING JSON - SET HEADER TO content_type:application/json
	//http://stackoverflow.com/questions/15801782/how-to-correctly-pass-a-json-object-to-flask-server-using-jquery-ajax