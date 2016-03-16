#Results 
Foreword: Devtools timeline is really untrustworthy, mutiple tests with the same set-up sometimes give other results 
##Default fork 
![Image of the master fork](http://thomasmachielsen.nl/img/defaultfork.jpg)

##Deleted jQuery and rewrote app.js 
![Image of jsnative](http://thomasmachielsen.nl/img/jsnative.jpg)

##Edited CSS & HTML, minified CSS as well
![Image of Edited css](http://thomasmachielsen.nl/img/css.jpg)

##Added spritesheet for the icons
![image of spritesheets](http://thomasmachielsen.nl/img/sprite.jpg)

##Added Gulp
Lost some perfomance here, Gulp makes it slower, browser-syn/watches, keeping it because I like it
![image of gulp](http://thomasmachielsen.nl/img/gulp.jpg)

##Added gulp-webp 
Got some perfomance back
![image of gulp](http://thomasmachielsen.nl/img/webp.jpg)

##SPA
Made it SPA-y, script to body, changed some divs 
Overview page
Before SPA:
![image of before SPA](http://thomasmachielsen.nl/img/finalbranch-overview.jpg)

After SPA
![image of before SPA](http://thomasmachielsen.nl/img/overviewSPA.jpg)

Detail page
Before SPA 
![image of before SPA](http://thomasmachielsen.nl/img/finaldetail.jpg)

After SPA
![image of before SPA](http://thomasmachielsen.nl/img/detailSPA.jpg)



# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).

#Important note
Devtools timeline had a lot of issues, the strength of your internet connection + extensions + other internet use may change the times, no test is ever the same. & Cache can make the difference in seconds - perfomance all about whether user visited before or not :O

##Results 

**Detail page**
**With Jquery**
Dom loaded: 291ms

First paint: 446ms

Load: 941ms

**Without Jqeury**
Dom loaded: 262ms

Paint: 413ms

Load: 734ms

**Overview page with edited CSS & HTML**
Before: 
Dom: 354ms

Paint: 510ms

Load: 6.9s

After:
Dom:350ms

Paint: 526ms

Load: 6.88s

###Detail page with edited CSS & HTML
Before
Dom: 291ms

Paint 446ms

Load 941ms

After
Dom: 232ms

Paint: 389ms

Load: 617ms

##Overview page with spritesheet added
Before: 
Dom:350ms
Paint: 526ms
Load: 6.88s

After:
Dom: 283ms 
Paint: 457ms
Load: 5.82s

##Detail page with Spritesheet added
Before
Dom: 232ms
Paint: 389ms
Load: 617ms

After
Dom: 234ms
Paint: 378ms
Load: 518ms

Added gulp but since I already minified css & js it did add a few ms however the workflow is much nicer so I kept it...

##Overview with changed header 
Before
Dom: 273ms 
Paint: 301ms
Load: 5.68s 

After 
Dom: 315ms
Paint: 375ms
Load: 5.97s

#Progressive Web App Research

A progressive web app has the following requirements 
+ Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet.
+ Responsive - Fit any form factor: desktop, mobile, tablet, or whatever is next.
+ Connectivity independent - Enhanced with service workers to work offline or on low quality networks.
+ App-like - Feel like an app to the user with app-style interactions and navigation because it's built on the app shell model.
+ Fresh - Always up-to-date thanks to the service worker update process.
+ Safe - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
+ Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.
+ Re-engageable - Make re-engagement easy through features like push notifications.
+ Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.
+ Linkable - Easily share via URL and not require complex installation.

A progressive APP loads extremely fast, it sents out static content before anything else so the users get the first static content really fast. Then it gets the rest of the dynamic content all the while using service workers to cache it. By using server workers to cache stuff a progressive APP becomes useful even with LIE-FI or no internet. 



