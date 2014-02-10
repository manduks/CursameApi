/**
* This is the login class for Cursame, all the responses are in JSON and are calle using JSONP all the params are send using GET,
* for more infomation check the JSONP API.
* We will use the next demo url`s http://demo.cursame.com/ 
*/
Ext.define("TokensController", {
    extend: "ApplicationController",
    
	
	/**
	 * This method is use to start the User session, Returns a JSON User object with an auth_token property.
	 * This property must be used in all forward requests.
	 * http://cursame.com/api/tokens/create.json?email=armando%40cursa.me&password=123456&callback=Ext.data.JsonP.callback2 
	 * @param {String} email A valid user email.
	 * @param {String} password A valid user password.
	 * @param {Boolean} recover the password with te email.
	 * @return {Object} the new ID
	 */
	create: function(email, [password], recover){
	},
	/**
	 * This method is use to destroy the User session, Returns a JSON object with the token and succes poperty to true
	 * http://cursame.com/api/tokens/destroy.json?auth_token=gQq4gRdZxjneg7KmZx2L&callback=Ext.data.JsonP.callback2
	 * @param {String} auth_token A valid user auth_token to destroy the user session.
	 * @return {Object} the success object
	 */
	destroy: function(auth_token){
	},

	/**
	 * This method is for creating users in to the network
	 * @param  {String} email A valid user email.
	 * @param  {String} first_name The first name of the user
	 * @param  {String} last_name The last name of the user
	 * @param  {String} password A valid password for the user
	 * @param  {String} subdomain The network form of the user
	 * @return {Object} The response object
	 * @return {Boolean} success true or false
	 * @return {String} msg The message os the response
	 */
	native_create_user: function (email, first_name, last_name, password, [subdomain]) {		
	}
});