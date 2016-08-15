angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'staff/staff.tpl.html', '../common/components/footer/footer.tpl.html', '../common/components/header/header.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"app-about\">\n" +
    "    <h1>About</h1>\n" +
    "    <img src=\"assets/img/AngularJS-large.png\" alt=\"AngularJs Logo\" class=\"img-rounded\">\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"app-home\">\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <h1>Hello Awesome App {{ 'v%VERSION%' | versionInterpolate }}!</h1>\n" +
    "            <p>My skills are {{teamMember.getSkills()}}</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-5 col-xs-12\">\n" +
    "\n" +
    "            <div class=\"well well-lg\">\n" +
    "                <ul>\n" +
    "                    <li><a href=\"http://www.sitepoint.com/10-reasons-use-angularjs/\" target=\"_blank\">10 Reasons Why You Should Use AngularJS</a></li>\n" +
    "                    <li><a href=\"http://wintellect.com/blogs/jlikness/10-reasons-web-developers-should-learn-angularjs\" target=\"_blank\">10 Reasons Why Developers Should Learn AngularJS</a></li>\n" +
    "                    <li><a href=\"https://www.youtube.com/watch?v=HCR7i5F5L8c\" target=\"_blank\">Design Principles of AngularJS (video)</a></li>\n" +
    "                    <li><a href=\"http://www.youtube.com/watch?v=i9MHigUZKEM\" target=\"_blank\">Fundamentals in 60 Minutes (video)</a></li>\n" +
    "                    <li><a href=\"http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background\" target=\"_blank\">For folks with a jQuery background</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-6 col-md-offset-1 col-xs-12\">\n" +
    "\n" +
    "            <div class=\"embed-responsive embed-responsive-4by3\">\n" +
    "                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZhfUv0spHCY?showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("staff/staff.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("staff/staff.tpl.html",
    "<!--<div class=\"app-staff\">\n" +
    "        <div id=\"main-pane\" class=\"ui-layout-center\">\n" +
    "            <ul class=\"nav nav-tabs\">\n" +
    "                <li class=\"active\"><a href=\"#home\" data-toggle=\"tab\">Home</a>\n" +
    "                </li>\n" +
    "                <li><a href=\"#profile\" data-toggle=\"tab\">Profile</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <div class=\"tab-content\" ng-controller=\"staffCtrl\">\n" +
    "                <div class=\"tab-pane fade in active\" id=\"home\" data-split-pane>\n" +
    "                    <div data-split-pane-component data-width=\"20em\">left</div>\n" +
    "                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n" +
    "                    <ul class=\"employees\" ng-model=\"employees.name\">\n" +
    "                        <li ng-repeat=\"employee in employees\">\n" +
    "                            <span>{{employee.name}}</span>\n" +
    "                            <p>{{employee.age}}</p>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <div data-split-pane-divider data-width=\"5px\"></div>\n" +
    "                    <div data-split-pane-component>right</div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"tab-pane fade\" id=\"profile\">\n" +
    "                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\n" +
    "                    <ul class=\"employees\">\n" +
    "                        <li ng-repeat=\"employee in $ctrl.employees\">\n" +
    "                            <span>{{employee.name}}</span>\n" +
    "                            <p>{{employee.age}}</p>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "</div>-->\n" +
    "<style>\n" +
    "    table {\n" +
    "        border-collapse: collapse;\n" +
    "        width: 100%;\n" +
    "    }\n" +
    "\n" +
    "    th, td {\n" +
    "        text-align: left;\n" +
    "        padding: 8px;\n" +
    "    }\n" +
    "\n" +
    "    tr:nth-child(even){background-color: #f2f2f2}\n" +
    "\n" +
    "    th {\n" +
    "        background-color: #87CEEB;\n" +
    "        color: black;\n" +
    "    }\n" +
    "    .ui-layout-pane {\n" +
    "        background: #060606;\n" +
    "        height: 100%;\n" +
    "    }\n" +
    "    .stretch {\n" +
    "        width: 100%;\n" +
    "        overflow: hidden;\n" +
    "    }\n" +
    "</style>\n" +
    "<div class=\"stretch\">\n" +
    "    <input ng-model=\"search.title\" placeholder=\"Search\" style=\"width: 80%\" />Size: {{photos.length}}\n" +
    "    <p>\n" +
    "    <ul ng-repeat=\"photo in photos | filter:search | limitTo:10\">\n" +
    "        <li>\n" +
    "            <img ng-src=\"{{photo.url_sq}}\">\n" +
    "            <br><b>{{photo.title}}</b>\n" +
    "\n" +
    "            <br>Lat: {{photo.latitude}} Lon: {{photo.longitude}}\n" +
    "            <br>{{photo.tags}}</li>\n" +
    "    </ul>\n" +
    "    </p>\n" +
    "</div>\n" +
    "<div class=\"left\">\n" +
    "    <div class=\"searching\">\n" +
    "        <p>\n" +
    "            Search:\n" +
    "            <input ng-model=\"$ctrl.query\" />\n" +
    "        </p>\n" +
    "\n" +
    "        <p>\n" +
    "            Sort by:\n" +
    "            <select ng-model=\"$ctrl.orderProp\">\n" +
    "                <option value=\"name\">Alphabetical</option>\n" +
    "                <option value=\"age\">Newest</option>\n" +
    "            </select>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div class=\"app-staff\">\n" +
    "        <!--{{status}} {{employees}}-->\n" +
    "        <!--<ul class=\"employees\">-->\n" +
    "            <table border=\"1\" class=\"employees\">\n" +
    "                <tr>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Job Title</th>\n" +
    "                    <th>Age</th>\n" +
    "                    <th>Grade</th>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat=\"employee in employees | filter:$ctrl.query | orderBy:$ctrl.orderProp\">\n" +
    "                    <td>{{employee.name}}</td>\n" +
    "                    <td>{{employee.job}}</td>\n" +
    "                    <td>{{employee.age}}</td>\n" +
    "                    <td>{{employee.grade}}</td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "            <!--<li ng-repeat=\"employee in employees track by $index\">\n" +
    "                <span>{{employee.id}}</span>\n" +
    "            </li>-->\n" +
    "        <!--</ul>-->\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--add two tab-panes-->\n" +
    "<div class=\"right\" align=\"right\">\n" +
    "    <div class=\"add-box\">\n" +
    "        <div style=\"float:right;margin:20px;\">\n" +
    "            <input type=\"text\" ng-model=\"teamname\" placeholder=\"Enter the Team\" />\n" +
    "            <p><button ng-click=\"add()\">Add the Team</button></p>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"teamlist\">\n" +
    "        <table border=\"1\" class=\"teams\">\n" +
    "            <tr>\n" +
    "                <th>Team title</th>\n" +
    "            </tr>\n" +
    "            <tr ng-repeat=\"team in teams\">\n" +
    "                <td>{{team.teamname}}</td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ui-view></div>\n" +
    "");
}]);

angular.module("../common/components/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../common/components/footer/footer.tpl.html",
    "<div class=\"navbar navbar-default navbar-fixed-bottom\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"nav navbar-nav\" ng-transclude></ul>\n" +
    "        <div class=\"navbar-text pull-right\">\n" +
    "            <span>Awesome App v<span awesome-app-version></span></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../common/components/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../common/components/header/header.tpl.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#awesome-header-navbar-collapse\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"{{homeState}}\">{{title}}</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"awesome-header-navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav\" ng-transclude></ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "    </div><!-- /.container -->\n" +
    "</nav>\n" +
    "");
}]);
