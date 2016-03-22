#Results 
The feed can be found on [https://thomasmachielsen.me](https://thomasmachielsen.me)

##Week3 - Well that went fast

**Build Tools**
Build tools are small scripts which aim to automate things for the developer. Can you image how tedious it would be to minify mutiple js and css files, all by hand? Well that's what build tools solve. Automating tedious boring tasks nobody really wants to do. The most common build tools out there are Grunt and Gulp. Recently I've heard of people using plain npm to automate build tasks though. This to me seems a bit tedious and boring in itself. 

**Gulp I choose you!** 
I don't recall when I exactly made the choice of Gulp over Grunt, I just know for some reason (maybe I liked the logo more) I picked Gulp.From the little research I've done Grunt doesn't seem much different at all and Gulp treats me lovely so I don't see any reason to change.

I love Gulp because it's easy in use and has a suprisingly strong eco-system. There's a huge load of packages for it and basically everything can be used. In new project I usually start out with my own small Gulp file. 

**What do I use Gulp for?**
Personally perfomance-wise I use Gulp for minifying, concatting and also for Stylus. Minifying everything is a perfomance win. For developing I also like to use browser-sync and nodemon, so when the back-end changes stuff gets restarted automatically and I use browser-sync to sync my app across all devices. (Even my television, which is awesome or horrible). Also in the looklive server I used webp for my images sadly this is supported so badly so I will change this package to some other image optimisation package. 

**Gulp perfomance**
Even though I love Gulp there's some things I still have to find out, in my graduation project Gulp starts extremely slow. In the Looklive server I also have 2 functions who are basically the same. I should probably fix this but the destination is different for both files so I'm unsure.

##HTTP requests
I already minified/concat files with Gulp last week.

##Content images 
 


##Week2
#Service Worker
An error kept bugging up, saying that the service worker exist, which is good so I've ignored the error as per suggestion here http://stackoverflow.com/questions/33328579/service-worker-throwing-an-neterr-file-exists-error

Regular cached before SW - overview page

![image before SW](http://thomasmachielsen.nl/img/finalbranch-overview-cached.jpg)

And now after having a SW

![image before SW](http://thomasmachielsen.nl/img/sw-cached.jpg)

Really impressive results. 
Regular cached before SW - detail page

![image before SW](http://thomasmachielsen.nl/img/finalbranch-detail-cached.jpg)

After SW 

![image before SW](http://thomasmachielsen.nl/img/sw-cached-detail.jpg)

Really impressive results!


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

##Week1
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

#Conclusion
After painstakingly measuring and measuring and measuring again I know 2 things for sure a) Devtools is really unreliable at times so measurements can be really different, location and other internet users are a big part b) all the small minor changes actually seem to add up at the end, so it's all worth it. The only exception might be Gulp, browser-sync uses a load perfomance and doesn't work well with this current setup. And webP is an amazing format yet badly supported so next time I should provide a fallback.




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




