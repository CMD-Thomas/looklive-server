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
Devtools timeline had a lot of issues, the strength of your internet connection + extensions + other internet use may change the times, no test is ever the same. & Cache can make the difference in seconds

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