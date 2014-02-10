/**
* This is the main API class for Cursame, all the responses are in JSON and are calle using JSONP all the params are send using GET, for more infomation check the JSONP API
*/
Ext.define("ApiController", {
    extend: "ApplicationController",    
	/**
	 * This method is used to list all the publications on web-mobile.
	 * </br>http://cursame.com/api/tokens/publications.json?type=Comment&auth_token=gQq4gRdZxjneg7KmZx2L&limit=20&page=3&callback=Ext.data.JsonP.callback5
	 * @param {String} type The type of the publication, available options 'Course', 'User', 'Network'.
	 * @param {String} auth_token A valid user auth_token.
	 * @param {Number} [publicacionId] The id of the publication when it is Course type.
	 * @param {Number} limit The size of the page for pagination.
	 * @param {Number} page The size number of the page for pagination.
	 * @return {Object} The JSON success object
	 * @return {Number} return.count A number with the total of elements
	 */
	publications: function(type, auth_token, publicacionId, limit, page){
	},
	/**
	 * This method is used to list all the publications on mobile.
	 * </br>http://cursame.com/api/tokens/publications.json?type=Comment&auth_token=gQq4gRdZxjneg7KmZx2L&limit=20&page=3&callback=Ext.data.JsonP.callback5
	 * @param {String} type The type of the publication, available options 'Course', 'User', 'Network'.
	 * @param {String} auth_token A valid user auth_token.
	 * @param {Number} [publicacionId] The id of the publication when it is Course type.
	 * @param {Number} limit The size of the page for pagination.
	 * @param {Number} page The size number of the page for pagination.
	 * @return {Object} The JSON success object
	 * @return {Number} return.count A number with the total of elements
	 */
	native_publications: function(type, auth_token, publicacionId, limit, page){
	},
	/**
	 * This method is use to list all the comments for  Courses/Comments/Surveys/Assigments/Discussions
	 * </br>http://cursame.com/api/api/comments.json?_dc=1374103318297&commentable_type=Delivery&commentable_id=16&auth_token=gQq4gRdZxjneg7KmZx2L&page=1&start=0&limit=25&callback=Ext.data.JsonP.callback13
	 * @param {String} commentable_type with this posible values "Course / Comment / Survey / Assigment / Discussion" to list comments.
	 * @param {Number} commentable_id The id of the Course / Comment / Survey / Assigment / Discussion send.
	 * @param {String} auth_token A valid user auth_token.
	 * @param {Number} limit The size of the page for pagination.
	 * @param {Number} page The size number of the page for pagination.
	 * @return {Object} A JSON object
	 * @return {Object} return.comments A JSON object with the comments
	 * @return {Number} return.count A number with the total of comments
	 */
	comments: function(commentable_type, commentable_id, auth_token){
	},	
	/**
	 * This method is use to list all the network curses
	 * </br>http://cursame.com/api/api/courses.json?_dc=1374101789792&auth_token=gQq4gRdZxjneg7KmZx2L&page=1&start=0&limit=25&callback=Ext.data.JsonP.callback9
	 * @param {String} auth_token A valid user auth_token.
	 * @param {Number} limit The size of the page for pagination.
	 * @param {Number} page The size number of the page for pagination.
	 * @return {Object} A JSON object with the courses object
	 * @return {Object} return.courses A JSON object with the courses
	 * @return {Number} return.count A number with the total of elements
	 */
	courses: function(auth_token, limit, page){
	},	
	/**
	 * This method is use to list all users in the network.
	 * </br>http://cursame.com/api/api/users.json?_dc=1374101741721&auth_token=gQq4gRdZxjneg7KmZx2L&page=1&start=0&limit=100&callback=Ext.data.JsonP.callback7
	 * @param {String} auth_token A valid user auth_token.
	 * @param {Number} limit The size of the page for pagination.
	 * @param {Number} page The size number of the page for pagination.
	 * @return {Object} A JSON object 
	 * @return {Object} A return.users JSON object with the users
	 * @return {Number} A return.count number with the total of users
	 */
	users: function(auth_token, limit, page){
	},
	
	/**
	 * This method is use to list all the current user notifications
	 * </br>http://cursame.com/api/api/notifications.json?_dc=1374101916836&auth_token=gQq4gRdZxjneg7KmZx2L&page=1&start=0&limit=25&callback=Ext.data.JsonP.callback10
	 * @param {String} auth_token A valid user auth_token.
	 * @param {Number} limit The size of the page for pagination.
	 * @param {Number} page The size number of the page for pagination.
	 * @return {Object} A JSON object 
	 * @return {Object} A return.notifications JSON object with the notifications of the user
	 * @return {Number} A return.count number with the total of notifications
	 */
	notifications: function(auth_token, limit, page){
	},

	/**
	 * This method is use to list the assigments of the deliveries
	 * </br>http://cursame.com/api/api/assignments.json?_dc=1374103994242&delivery_id=7&auth_token=wBqKcM7KozHvF7dqsYZT&page=1&start=0&limit=25&callback=Ext.data.JsonP.callback21
	 * @param {Number} delivery_id The id of the delivery to list its assigments
	 * @param {String} auth_token A valid user auth_token.
	 * @return {Object} A JSON object
	 * @return {Object} return.assignments A JSON object with the assignments
	 * @return {Number} return.count A number with the total of assignments
	 */
	assignments: function(delivery_id, auth_token){
	},
	
	/**
	 * This method is use to add a comment to a Course / Comment / Survey / Assigment / Discussion
	 * </br>http://cursame.com/api/api/create_comment?auth_token=gQq4gRdZxjneg7KmZx2L&comment=hola&commentable_type=Delivery&commentable_id=16&callback=Ext.data.JsonP.callback14
	 * @param {String} commentable_type A valid comment type "Course / Comment / Survey / Assigment / Discussion".
	 * @param {Number} commentable_id The id of the Course / Comment / Survey / Assigment / Discussion send.
	 * @param {String} comment The comment text.
	 * @param {String} [id] The comment id when the comment is going to be edited.
	 * @param {String} auth_token A valid user auth_token.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	create_comment: function(commentable_type, commentable_id, comment, id, auth_token){
	},
	
	/**
	 * This method is use to add a like to a Course / Comment / Survey / Delivery / Survey / Discussion
	 * </br>http://cursame.com/api/api/create_like?auth_token=wBqKcM7KozHvF7dqsYZT&type=Delivery&id=23&callback=Ext.data.JsonP.callback33	 
	 * @param {String} type A valid like type "Course / Comment / Survey / Delivery / Survey / Discussion".
	 * @param {Number} id The id of the Course / Comment / Survey / Delivery / Survey / Discussion send.
	 * @param {String} auth_token A valid user auth_token.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	create_like: function(type,id,auth_token){
	},
	/**
	 * This method is use to add a delivery to a Course
	 * </br>http://cursame.com/api/api/create_delivery?auth_token=wBqKcM7KozHvF7dqsYZT&title=Entregar%20Resum%C3%A9n&description=Generaci%C3%B3n%20de%20n%C3%BAmeros%20aletatorios&publication=2013-07-17T16%3A48%3A42&deliver=2013-08-17T00%3A00%3A00&value=45&courseId=1&callback=Ext.data.JsonP.callback29	 
	 * @param {String} title The delivery title.
	 * @param {String} description The dellivery description.
	 * @param {Date} publication The publication date.
	 * @param {Date} deliver The deliver date.
	 * @param {Number} value The value of the  delivery.
	 * @param {Number} courseId The id of the course.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	create_delivery: function(auth_token, title, description, publication,deliver, value, couseId){
	},
	/**
	 * This method is use to add a delivery to a Course from a native application iOS/Android
	 * </br>http://cursame.com/api/api/native_create_delivery?auth_token=wBqKcM7KozHvF7dqsYZT&title=Entregar%20Resum%C3%A9n&description=Generaci%C3%B3n%20de%20n%C3%BAmeros%20aletatorios&publication=2013-07-17T16%3A48%3A42&deliver=2013-08-17T00%3A00%3A00&value=45&courseId=1&callback=Ext.data.JsonP.callback29	 
	 * @param {String} title The delivery title.
	 * @param {String} description The dellivery description.
	 * @param {Date} publication The publication date.
	 * @param {Date} deliver The deliver date.
	 * @param {Number} value The value of the  delivery.
	 * @param {Number} courseId The id of the course.
	 * @param {Array} files The attached files of the delivery.
	 * @param {Array} areas The areas of evaluation of the delivery.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_create_delivery: function (auth_token, title, description, publication,deliver, value, couseId, files, areas) {
	},	
	/**
	 * This method is use to add a discussion to a course or a network
	 * </br>http://cursame.com/api/api/create_discussion?auth_token=wBqKcM7KozHvF7dqsYZT&title=Hola&discussion=hay&courseId=1&callback=Ext.data.JsonP.callback5	 
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param {String} title The discussion title.
	 * @param {String} discussion The dellivery description.
	 * @param {Number} courseId The id of the course.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	create_discussion: function(auth_token,title, discussion, courseId){
	},	
	/**
	 * This method is use to delete an element in the network
	 * </br>http://cursame.com/api/api/delete?auth_token=wBqKcM7KozHvF7dqsYZT&type=Discussion&id=5&callback=Ext.data.JsonP.callback7	 
	 * @param {String} type A valid like type "Course / Comment / Survey / Delivery / Survey / Discussion".
	 * @param {Number} id The id of the Course / Comment / Survey / Delivery / Survey / Discussion send.
	 * @param {String} auth_token A valid user auth_token.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	delete: function(type,id,auth_token){
	},
	/**
	 * This method is use for students to deliver the assigment
	 * </br>http://cursame.com/api/api/assigment_delivery?auth_token=gQq4gRdZxjneg7KmZx2L&deliveryId=23&title=Entregar%20Resum%C3%A9n&description=Los%20%20n%C3%BAmeros%20aleatorios%20se%20generan%20con%20la%20fecha%20del%20sistema%20y%20una%20combinaci%C3%B3n%20de%20un%20algoritmo%20genetico&userId=8&callback=Ext.data.JsonP.callback5	 * @param {Number} deliveryId The id of the delivery title.
	 * @param {String} title The title of the assigment.
	 * @param {String} description The description of the assigment.
	 * @param {Number} userId The userid of the assigment delivery.
	 * @param {Number} deliveryId the id of the delivery the assigment belongs from.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	assigment_delivery: function(auth_token, title, description, userId, deliveryId){
	},
	/**
	 * This method is use for students to deliver the assigment
	 * </br>http://cursame.com/api/api/native_assigment_delivery?auth_token=gQq4gRdZxjneg7KmZx2L&deliveryId=23&title=Entregar%20Resum%C3%A9n&description=Los%20%20n%C3%BAmeros%20aleatorios%20se%20generan%20con%20la%20fecha%20del%20sistema%20y%20una%20combinaci%C3%B3n%20de%20un%20algoritmo%20genetico&userId=8&callback=Ext.data.JsonP.callback5	 * @param {Number} deliveryId The id of the delivery title.
	 * @param {String} title The title of the assigment.
	 * @param {String} description The description of the assigment.
	 * @param {Number} userId The userid of the assigment delivery.
	 * @param {Number} deliveryId The id of the delivery the assigment belongs from.
	 * @param {Array} files The array of files of the assigment.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_assigment_delivery: function(auth_token, title, description, userId, deliveryId, files){
	},
	/**
	 * This metod is for creating surveys in the app
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Object} survey The user object to create
	 * @param  {Object} delivery This object has the ids of the courses, where the survery belongs
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_create_survey: function (auth_token, survey, delivery) {
	},
	/**
	 * This method changes the status of the notifications to false, or seen
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Number} id The id of the notification
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_change_notification_status: function (auth_token, id) {
	},
	/**
	 * This method is use for teachers to qualify the assiment
	 * </br>http://cursame.com/api/api/qualify_assignment?auth_token=wBqKcM7KozHvF7dqsYZT&assignment_id=17&calification=80&callback=Ext.data.JsonP.callback10	 * @param {Number} assignment_id The id of the Assigment .
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param {Number} assignment_id The id of the assigment.
	 * @param {Number} calification The calification of the assigment.
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	qualify_assignment: function(auth_token,assignment_id,calification){
	},
	/**
	 * The method for updating the a user profile.
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Number} id The id of the user
	 * @param  {String} email The email of the user
	 * @param  {String} first_name The first name of the user
	 * @param  {String} last_name  The last name of the user
	 * @param  {String} [bios] The bio of the user
	 * @param  {String} [twitter_link] The twitter link of the user
	 * @param  {Object} [avatar] A valid image used for the avatar of the user 
	 * @param  {Object} [coverphoto] A valid image for the cover photo of the user
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_update_user_profile: function (auth_token, id, email, first_name, last_name, bios, twitter_link, avatar, coverphoto) {
	},
	/**
	 * The method for creating or updating courses
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Object} course A valid course object
	 * @param  {Number} [id] A valid course id for updating a course
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_create_courses: function (auth_token, course, id) {
	},
	/**
	 * The method for answering surveys
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Number} survey_id A valid user id to answers
	 * @param  {Object} questions A valid questions response object
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_answer_survey: function (auth_token, survey_id, questions) {
	},
	/**
	 * The native method for listing comments
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {String} commentable_type A valid type object to comment User,Network,Delivery,Survey,Discussion ...
	 * @param  {Number} commentable_id The id of the object that will recieve the comment
	 * @param  {Number} limit The limit of records for the pagination
	 * @param  {Number} page The number of the current page listing
	 * @return {Object} The JSON success object
	 * @return {Number} return.count A number with the total of elements
	 * @return {Array} return.comments An array of comments to list
	 */
	native_comments: function (auth_token, commentable_type, commentable_id, limit, page) {
	},
	/**
	 * The native method for listing course members
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Number} id A valid id of a course
	 * @param  {Number} limit The limit of records for the pagination
	 * @param  {Number} page The number of the current page listing
	 * @return {Object} The JSON success object
	 * @return {Number} return.count A number with the total of elements
	 * @return {Array} return.users An array of users to list
	 */
	native_list_members_in_course: function (auth_token, id, limit, page) {
	},
	/**
	 * The method for accepting or editing members of a course
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Number} id A valid id of a course
	 * @param  {Number} user_id A valid id of a user to change status
	 * @param  {String} status The status of a member to change join/accept/decline
	 * @param  {Boolean} owner True if the user is owner of the course
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_change_members_in_course_status: function (auth_token, id, user_id, status, owner) {
	},
	/**
	 * The method for adding messages to the chat
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {String} mesage The message to save/show on the chat
	 * @param  {String} [channel_name] The name of the channel of the chat
	 * @return {Object} The JSON success object
	 * @return {Boolean} return.success If the success is true
	 */
	native_add_new_message: function (auth_token, mesage, channel_name) {
	},
	/**
	 * The method to show the chat list
	 * @param  {String} auth_token
	 * @return {Object} The JSON success object
	 * @return {Number} return.count A number with the total of elements
	 * @return {Array} return.users An array of comments to list
	 */
	native_chat_list: function (auth_token) {
	},
	/**
	 * The method to list the messages of a chat
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {String} channel_name The channel name of the chat to list
	 * @param  {Number} limit The limit of records for the pagination
	 * @param  {Number} page The number of the current page listing
	 * @return {Object} The JSON success object
	 * @return {Number} return.count A number with the total of messages
	 * @return {Array} return.messages An array of users to list
	 */
	native_load_chat_messages: function (auth_token, channel_name, limit, page) {
	},
	/**
	 * The method to list a user califications
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Number} id The valid user id
	 * @return {Number} return.count A number with the total of elements
	 * @return {Array} return.results An array of users to list
	 */
	native_list_user_calification: function (auth_token, id) {
	},
	/**
	 * [native_list_events description]
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Date} date the month and year to show the events
	 * @return {Number} return.count A number with the total of elements
	 * @return {Array} return.results An array of users to list
	 */
	native_list_events: function (auth_token, date) {
	},

	/**
	 * The method to list the activities of a course
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {Number} id The valid id of the course
	 * @return {Number} return.count A number with the total of elements
	 * @return {Array} return.publications An array of users to list
	 */
	native_list_activities_of_course: function (auth_token, id) {
	},
	/**
	 * The method to list all the networks
	 * @param  {String} auth_token The user token to have access to the methods
	 * @param  {String} text Text with part of the network name
	 * @param  {Number} limit The limit of records for the pagination
	 * @param  {Number} page The number of the current page listing
	 * @return {Number} return.count A number with the total of messages
	 * @return {Array} return.networks An array of users to list
	 */
	native_list_networks: function (auth_token, text, limit, page) {
	}
});