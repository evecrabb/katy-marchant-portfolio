# Katy's Portfolio

This site is built on Guthub using Eleventy and deploying to Netlify.
All of the content, and the scripts and files that run this thing, live in Github, which is a version control program that developers use to keep track of changes, revert back to old versions, and just generally keep files in one place so that other developers can access files to work on them. 

Eleventy is the engine that takes any content you create and add, and spits out your website. It's been styled by me to look like your mockup. 
You can see the styles in src/styles if you're curious! 

Netlify is a super easy and very popular deployment engine. This has been set up to trigger a build every time we push any changes to Github. So all we need to do is push to Github, and ypour site will update itself. 


## Prerequisites

You need to have the following: 
- A github account
- [Github Desktop](https://desktop.github.com/) - this is for pushing your changes up to Github.
- A code editor ([VSCode](https://code.visualstudio.com/), [Atom](https://atom.io/) or [Brackets](http://brackets.io/) are all great editors)

## Things to note
You can build your site in Markdown or in html. 

## Installation

### Get the files onto your machine

On Github - this page in fact, scroll to the top. You'll see a green button that says 'Clone or download'. Click it - it will open a little dropdown. Copy the code under the 'Clone with HTTPS' option. 

In Github Desktop, click the clone repository option and paste in the code you copied. This should start cloning this repository to your local machine. Please note whrere you're saving this. 

### Install the project

So you've got the files but you need to install all of the components that make everything work. Generally, components like this are not stored on Github, as they tend to take up unecessary space. What that means is, that when you download a new project, you need to install the main components that make it work. 

There's a file that the machine reads which tells it what it needs to install, so all you need to do is tell it to install. 

To do this, open up Terminal. 

In Terminal, you need to navigate to the file that contains this project. The command to move folders is ```cd```. 
So, for example, if you saved your project in documents, the command you'd type is: 
```
cd katy/documents/katy-marchant-portfolio
```

Once there, type this command: 
```
npm run install
```

This will start installing all of the components for this project. It will take a couple of minutes, and you will see loads of code running down the screen. That's ok - you only need to worry about the end when it says 'x packages installed'. 


### Starting up the server

While we're in Terminal, let's stay here. 
Run this command: 
```
npm run serve
```

This will open up a new tab in your browser, and show you your site! 
You can now get on with working, and any changes will update in real time. 

### Site / content structure

#### /content

Contains all of the actual files which house all of your content. 

The main index page is the one file in the content directory. This is the homepage of your site.

All other pages must be in their own folder. So, if you wanted a page that showed all of, for example, sprout pictures, and you wanted to create a page called sprout-pictures, create a folder called sprout-pictures and create an index.md file within. 
Any files, be it video, photo, etc, need to also live in the same folder as the post. 

#### /_includes

This contains the templates for the content. 
Please don't touch these!

### MD FILES

ok, here's where your content is going to be generated. 

#### Front Matter
Front Matter is like the key data that helps the site know how to organise the content. 

In your .md file, you will always need to specify the following: 

- Layout: this is the template file that the page uses. There are only two at the moment - one for the homepage layout and one for a project layout. 
- featuredImage: this determines which image to use to represent this project on the homepage. 
- title: obvious. But, this will also be used on the homepage to generate the title there, and, in the nav. 
- year: again, obvious. This will also generate content on the homepage. 

```
---
layout: _project.html
featuredImage: eve.jpg
title: "This is the title of project 1"
year: 2020
---
```

#### Adding images

Unfortunately it's not just a case of adding images to the folder and watchinf them be spit out onto your site. 
I have created a couple of codes for you to use. 
I will make more as and when you need them. 

To add a single image: 
```
{% image "conga.png" "conga!" %}
```

To add two images next to each other:
``` 
{% multiColumns %}
  {% image "eve.jpg" "LSH1" %}
  {% image "eve.jpg" "LSH2" %}
{% endmultiColumns %}
```

### Pushing your content live

Once you're happy, you can push up your changes. 
To do that, go back to Githiub Desktop. 
You will see that it's been tracking all of your changes as you've been going. 

To push them up, there should be an 'add' button or something (I don't use github desktop so I'm having to go by memory).
Then, there should be a button or box asking you to add a commit message. This allows you to identify what you did. Add whatever to this, and then hit commit. 
it will send your changes up to Github and, after about 5 minutes, you'll see your site updated! 

## Getting me to do stuff
[Here's my list of to-dos for this project](https://github.com/evecrabb/katy-marchant-portfolio/issues). 
If you need me to do anything, add it here and it'll be added to my to-do list! 

## Dev notes/resources
https://shopify.github.io/liquid/basics/introduction/
https://rphunt.github.io/eleventy-walkthrough/template-files.html#folderstructure