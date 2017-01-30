angular.module('gachat').run(['$templateCache', function($templateCache) {$templateCache.put('about.html','<h1>About</h1>');
$templateCache.put('chat.html','<h3>\n  <span>Chat with other gamers!</span>\n</h3>\n<div class="row">\n  <div class="col s8">\n    <strong>Message</strong>\n  </div>\n  <div class="col s1 offset-s3">\n    <strong>Date</strong>\n  </div>\n</div>\n<div class="row">\n  <div class="chat-box col s12">\n    <div class="row message-border" ng-repeat="message in $ctrl.messages">\n      <div class="col s8">\n        <strong><em>{{message.user}}</em> :</strong>\n        {{message.message}}\n      </div>\n      <div class="col s2 offset-s2 right-align">\n        {{$ctrl.stripDate(message.date)}}\n      </div>\n      <br>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="input-field col s12 ">\n    <textarea ng-model="$ctrl.chatMessage.newMessage" id="icon_prefix2" class="materialize-textarea"></textarea>\n    <label for="icon_prefix2">Message text</label>\n  </div>\n</div>\n<button ng-click="$ctrl.sendMessage()"class="btn waves-effect waves-light" type="submit" name="action">Send message\n    <i class="material-icons right">send</i>\n</button>\n');
$templateCache.put('home.html','<div class="home-menu grey darken-4">\n\t<div class="container">\n\t\t<h1>Logged in as: <a ui-sref="profile" class="cyan-text">{{$ctrl.userName}}</a></h1>\n\t\t<div class="row">\n\t\t\t<div class="col s3">\n\t\t\t\t<div class="card hoverable">\n\t\t      <div class="card-image">\n\t\t      \t<a ng-href="#/chat/counter-strike:global-offensive"><img class="responsive-img" src="public/img/csgo.jpg"></a>\n\t\t      </div>\n\t\t      <div class="card-content">\n\t\t        <p>Counter-Strike: Global Offensive</p>\n\t\t      </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t    <div class="col s3">\n\t\t\t\t\t<div class="card hoverable">\n\t\t        <div class="card-image">\n\t\t        \t<a ng-href="#/chat/dota2"><img class="responsive-img" src="public/img/dota2.png"></a>\n\t\t        </div>\n\t\t        <div class="card-content">\n\t\t          <p>Dota 2</p>\n\t\t        </div>\n\t\t\t\t\t</div>\n\t\t    </div>\n\t\t    <div class="col s3">\n\t\t\t\t\t<div class="card hoverable">\n\t\t        <div class="card-image">\n\t\t        \t<a ng-href="#/chat/leagueoflegends"><img class="responsive-img" src="public/img/lol.jpeg"></a>\n\t\t        </div>\n\t\t        <div class="card-content">\n\t\t          <p>League of Legends</p>\n\t\t        </div>\n\t\t\t\t\t</div>\n\t\t    </div>\n\t\t     <div class="col s3">\n\t\t\t\t\t <div class="card hoverable">\n\t\t         <div class="card-image">\n\t\t         \t<a ng-href="#/chat/overwatch"><img class="responsive-img" src="public/img/overwatch.jpg"></a>\n\t\t         </div>\n\t\t         <div class="card-content">\n\t\t           <p>Overwatch</p>\n\t\t         </div>\n\t\t \t\t\t</div>\n\t\t\t\t </div>\n\t\t</div>\n\t</div>\n</div>\n');
$templateCache.put('login.html','<div class="login">\n  <div class="container">\n    <div class="row">\n      <form name="loginForm" class="col s6 offset-s4 login-form" ng-submit="$ctrl.onSubmit()" required>\n        <h4 class="user-login grey-text text-lighten-5">Log in</h4>\n          <div class="row">\n            <div class="input-field col s8">\n                <input id="email" name="email" type="email" class="validate grey-text text-lighten-5"\n                  ng-model="$ctrl.credentials.email" required>\n                <label for="email">Email Adress</label>\n                <div ng-messages="loginForm.email.$error">\n                  <div ng-if="loginForm.email.$dirty">\n                    <div ng-message="required" class="red-text darken-1">This field is required</div>\n                    <div ng-message="email" class="red-text darken-1">Your email address is invalid</div>\n                  </div>\n                </div>\n            </div>\n          </div>\n          <div class="row">\n            <div class="input-field col s8">\n              <input name="password" class="validate grey-text text-lighten-5" id="password" type="text"\n                class="validate" ng-model="$ctrl.credentials.password" required>\n              <label for="password">Password</label>\n              <div ng-messages="loginForm.password.$error">\n                <div ng-if="$ctrl.password === false">\n                  <div class="red-text darken-1">Wrong password or email</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="row btn-container">\n            <button class="btn waves-effect waves-light" type="submit" name="action">Log in\n              <i class="material-icons right">send</i>\n            </button>\n          </form>\n          <a class="btn waves-effect waves-light" name="action" href="#/signup">Create new user\n            <i class="material-icons right">send</i>\n          </a>\n          </div>\n      </div>\n  </div>\n</div>\n');
$templateCache.put('navbar.html','<nav>\n    <div class="nav-wrapper">\n      <div class="container">\n        <a href="#" class="brand-logo">Gachat</a>\n\n        <ul id="nav-mobile" class="right hide-on-med-and-down">\n              <li><a href="#/about">About</a></li>\n              <li><a href="#"> {{$ctrl.userName}}</a></li>\n        </ul>\n        </div>\n    </div>\n</nav>\n');
$templateCache.put('profile.edit.html','<div class="edit-profile">\n  <form name="editProfilePictureForm" ng-submit="$ctrl.uploadProfilePicture(e, $ctrl.user.file)">\n    <div class="row edit-profile-field">\n      <div class="file-field input-field col s12 edit-profile-field" ngf-select ng-model="$ctrl.user.file" name="file" ngf-pattern="\'image/*\'"\n        accept="image/*">\n          <div class="btn">\n            <span>File</span>\n            <input type="file">\n          </div>\n          <div class="file-path-wrapper">\n            <input class="file-path validate" type="text">\n      </div>\n      <div ng-if="$ctrl.uploadSuccess === true">\n        <p class="green-text darken-1 upload-message">Your profile picture was successfully updated!</p>\n      </div>\n      <div ng-if="$ctrl.uploadSuccess === false">\n        <p class="red-text darken-1 upload-message">Error! Your profile picture was not updated!</p>\n      </div>\n    </div>\n    <button class="btn waves-effect waves-light" type="submit" name="action">Upload Photo</button>\n    <br/>\n      <i class="display-block margin-top-10">Recommended values for height and width are Minimum 200px and Maximum 280px. If your profile picture is not in line with the recommended values\n        your profile picture will be transformed into poor quality.\n      into poor quality</i>\n  </form>\n  <form name="editEmailForm" ng-submit="$ctrl.updateEmail()">\n    <div class="row edit-profile-field">\n      <div class="input-field col s12">\n        <input id="textarea-email" name="email" type="email" class="validate" ng-model="$ctrl.user.newEmail">\n        <label for="textarea-email">Email</label>\n        <div ng-messages="editEmailForm.email.$error"></div>\n        <div ng-if="$ctrl.emailUpdateSuccess === true">\n          <p class="green-text darken-1 upload-message">Your email was successfully updated!<p>\n        </div>\n        <div ng-if="$ctrl.emailUpdateSuccess === false">\n          <p class="green-text darken-1 upload-message">Error! Your email was not updated!<p>\n        </div>\n        <button class="btn waves-effect waves-light" type="submit" name="action">Update Email Adress</button>\n        </div>\n      </div>\n    </form>\n    <form name="editBioForm" ng-submit="$ctrl.updateBio()">\n      <div class="row edit-profile-field">\n        <div class="input-field col s12">\n          <textarea id="textarea-bio" name="bio" class="materialize-textarea" length="120"\n            ng-model="$ctrl.user.bio" ng-minlength="50" ng-maxlength="1000"></textarea>\n          <label for="textarea-bio">Your bio</label>\n          <div ng-messages="editBioForm.bio.$error">\n            <div ng-if="$ctrl.bioLength === false">\n              <div ng-message="minlength" class="red-text darken-1">Bio is too short. Minimum characters allowed is 50</div>\n              <div ng-message="maxlength" class="red-text darken-1">Bio is too long. Minimum characters allowed is 1000</div>\n            </div>\n          </div>\n          <div ng-if="$ctrl.bioUpdateSuccess === true">\n            <p class="green-text darken-1 upload-message">Your bio was successfully updated!<p>\n          </div>\n          <div ng-if="$ctrl.bioUpdateSuccess === false">\n            <p class="red-text darken-1 upload-message">Error! Your bio was not updated!<p>\n          </div>\n          <button class="btn waves-effect waves-light" type="submit" name="action">Update Bio</button>\n        </div>\n      </div>\n    </form>\n</div>\n');
$templateCache.put('profile.html','<div class="profile">\n  <div ng-if="$ctrl.imageUrl">\n    <div class="row profile-picture-container">\n        <img class="responsive-img profile-picture" ng-src="{{$ctrl.imageUrl}}" rel="image" />\n  </div>\n  </div>\n  <div class="row">\n    <div class="col s3 offset-s3">\n      <a class="btn waves-effect waves-light btn-large" type="submit" name="action"\n        ui-sref="edit">Edit Profile</a>\n      </div>\n      <div class="col s3">\n        <button class="btn waves-effect waves-light btn-large red darken-1" type="submit" name="action"\n        ng-click="$ctrl.deleteProfile()">Delete Profile\n              <i class="material-icons right">send</i>\n        </button>\n      </div>\n  </div>\n</div>\n');
$templateCache.put('signup.html','<div class="signup">\n  <div class="container">\n    <div class="row">\n      <form name="signupForm" class="col s6 offset-s4 signup-form" ng-submit="$ctrl.onSubmit()">\n        <h4 class="create-new-user grey-text text-lighten-5">Create new user</h4>\n        <div class="row">\n          <div class="input-field col s8">\n            <input name="email" id="email" type="email" class="validate grey-text text-lighten-5" ng-model="$ctrl.credentials.email" required>\n            <label for="email">Email Adress</label>\n            <div ng-messages="signupForm.email.$error">\n              <div ng-if="signupForm.email.$dirty">\n                <div ng-message="required" class="red-text darken-1">This field is required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="input-field col s8">\n            <input name="password" id="password" type="text"\n              class="validate grey-text text-lighten-5" ng-model="$ctrl.credentials.password" ng-minlength="6" required>\n            <label for="password">Password</label>\n            <div ng-messages="signupForm.password.$error">\n              <div ng-if="signupForm.password.$dirty">\n                <div ng-message="required" class="red-text darken-1">This field is required</div>\n                <div ng-message="minlength" class="red-text darken-1">Password must be over 6 characters</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row btn-container">\n          <button class="btn waves-effect waves-light" type="submit" name="action">Register\n            <i class="material-icons right">send</i>\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/navbar.html','<nav class="cyan darken-4">\n    <div class="nav-wrapper">\n      <div class="container">\n        <a href="#" class="brand-logo">Gachat</a>\n        <ul id="nav-mobile" class="right hide-on-med-and-down">\n          <div>\n            <li><a ui-sref="profile">Profile</a></li>\n            <li><a href="#/about">About</a></li>\n            <li><a ng-click="$ctrl.logout()">Logout</a></li>\n          </div>\n        </ul>\n        </div>\n    </div>\n</nav>\n');}]);