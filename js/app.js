(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function () {
    /*
    Licensing for the icons in the Connect section
    as needed by the Flaticon.com licensing agreement.
    */
    var license = document.getElementById('license');
    var licenseText = "The phone, email, Twitter, linkedIn, and Facebook icons were designed by 'Freepix' from Flaticon. The GitHub icon was designed by 'Pixel Buddha' from Flaticon.";
    license.addEventListener('click', function () {
        window.alert(licenseText);
    });

    /*
    Navigational JavaScript
    */
    var topButton = document.getElementById('top-button');
    topButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
    });

    var educationUrl = document.getElementById('educationUrl');
    educationUrl.addEventListener('click', function () {
        var educationSection = document.getElementById('education');
        educationSection.scrollIntoView();
    });

    var skillsUrl = document.getElementById('skillsUrl');
    skillsUrl.addEventListener('click', function () {
        var skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView();
    });

    var projectsUrl = document.getElementById('projectsUrl');
    projectsUrl.addEventListener('click', function () {
        var projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView();
    });

    var contactUrl = document.getElementById('contactUrl');
    contactUrl.addEventListener('click', function () {
        var contactSection = document.getElementById('contact');
        contactSection.scrollIntoView();
    });


    // This object holds the self evaluated scores of each skill
    var skillScores = {
        html: '7/10',
        css: '8/10',
        js: '8/10',
        git: '9/10',
        angular: '6/10',
        jquery: '5/10',
        underscore: '5/10',
        backbone: '5/10',
        gulp: '9/10',
    };

    // This object is a reference for the functions below to know what to switch to.
    var skillFlip = {
        html: false,
        css: false,
        js: false,
        git: false,
        angular: false,
        jquery: false,
        underscore: false,
        backbone: false,
        gulp: false,
    };

    var skillHtml = document.getElementById('skill-html');
    var skillCss = document.getElementById('skill-css');
    var skillJs = document.getElementById('skill-js');
    var skillGit = document.getElementById('skill-git')
    var skillAngular = document.getElementById('skill-angular');
    var skillJquery = document.getElementById('skill-jquery');
    var skillUnderscore = document.getElementById('skill-underscore');
    var skillBackbone = document.getElementById('skill-backbone');
    var skillGulp = document.getElementById('skill-gulp');

    var flipBack = function () {
        if (skillFlip.html === true) {
            skillHtml.textContent = "HTML5";
            skillFlip.html = false;
        }
        if (skillFlip.css === true) {
            skillCss.textContent = "CSS / SASS";
            skillFlip.css = false;
        }
        if (skillFlip.js === true) {
            skillJs.textContent = "JavaScript";
            skillFlip.js = false;
        }
        if (skillFlip.git === true) {
            skillGit.textContent = "Git / GitHub";
            skillFlip.git = false;
        }
        if (skillFlip.angular === true) {
            skillAngular.textContent = "AngularJS";
            skillFlip.angular = false;
        }
        if (skillFlip.jquery === true) {
            skillJquery.textContent = "JQuery";
            skillFlip.jquery = false;
        }
        if (skillFlip.underscore === true) {
            skillUnderscore.textContent = "UnderscoreJS";
            skillFlip.underscore = false;
        }
        if (skillFlip.backbone === true) {
            skillBackbone.textContent = "BackboneJS";
            skillFlip.backbone = false;
        }
        if (skillFlip.gulp === true) {
            skillGulp.textContent = "Gulp";
            skillFlip.gulp = false;
        }
    };

    skillHtml.addEventListener('click', function () {
        if (skillFlip.html === false) {
            flipBack();
            skillHtml.textContent = skillScores.html;
            skillFlip.html = true;
        } else {
            skillHtml.textContent = 'HTML5';
            skillFlip.html = false;
        }
    });
    skillCss.addEventListener('click', function () {
        if (skillFlip.css === false) {
            flipBack();
            skillCss.textContent = skillScores.css;
            skillFlip.css = true;
        } else {
            skillCss.textContent = 'CSS / SASS';
            skillFlip.css = false;
        }
    });
    skillJs.addEventListener('click', function () {
        if (skillFlip.js === false) {
            flipBack();
            skillJs.textContent = skillScores.js;
            skillFlip.js = true;
        } else {
            skillJs.textContent = 'JavaScript';
            skillFlip.js = false;
        }
    });
    skillGit.addEventListener('click', function () {
        if (skillFlip.git === false) {
            flipBack();
            skillGit.textContent = skillScores.git;
            skillFlip.git = true;
        } else {
            skillGit.textContent = 'Git / GitHub';
            skillFlip.git = false;
        }
    });
    skillAngular.addEventListener('click', function () {
        if (skillFlip.angular === false) {
            flipBack();
            skillAngular.textContent = skillScores.angular;
            skillFlip.angular = true;
        } else {
            skillAngular.textContent = 'AngularJS';
            skillFlip.angular = false;
        }
    });
    skillJquery.addEventListener('click', function () {
        if (skillFlip.jquery === false) {
            flipBack();
            skillJquery.textContent = skillScores.jquery;
            skillFlip.jquery = true;
        } else {
            skillJquery.textContent = 'JQuery';
            skillFlip.jquery = false;
        }
    });
    skillUnderscore.addEventListener('click', function () {
        if (skillFlip.underscore === false) {
            flipBack();
            skillUnderscore.textContent = skillScores.underscore;
            skillFlip.underscore = true;
        } else {
            skillUnderscore.textContent = 'UnderscoreJS';
            skillFlip.underscore = false;
        }
    });
    skillBackbone.addEventListener('click', function () {
        if (skillFlip.backbone === false) {
            flipBack();
            skillBackbone.textContent = skillScores.backbone;
            skillFlip.backbone = true;
        } else {
            skillBackbone.textContent = 'BackboneJS';
            skillFlip.backbone = false;
        }
    });
    skillGulp.addEventListener('click', function () {
        if (skillFlip.gulp === false) {
            flipBack();
            skillGulp.textContent = skillScores.gulp;
            skillFlip.gulp = true;
        } else {
            skillGulp.textContent = 'Gulp';
            skillFlip.gulp = false;
        }
    });

    /*
    This Imediately Invoked Function is responsible for checking
    whether or not the return to top button should be run each time
    the window stops scrolling.
    */
    (function () {
        var time;
        var displayElevator = function () {
            var totalScroll = document.body.scrollHeight;
            var educationScroll = document.getElementById('education').scrollHeight;
            var educationPercent = Math.round((educationScroll / totalScroll) * 1000) / 1000;
            var button = document.getElementById('top-button');
            if (Math.round((document.body.scrollTop / totalScroll) * 100) / 100 <= educationPercent) {
                button.classList.add('hidden');
            } else {
                button.classList.remove('hidden');
            }
        };
        window.addEventListener('scroll', function () {
            clearTimeout(time);
            time = setTimeout(displayElevator, 800);
        });
    })();

});

},{}]},{},[1])