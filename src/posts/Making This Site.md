---
title: "Making this site"
date: "2020-07-10"
slug: "making this site"
---

When i first went on to make this site, i hadn't originally heard of Gatsby and had planned to make this with just react/express.

Anyway, this is how i first went on about making this site and then what i did later. I Had created both the backend and frontend, i would make the Blog Post separately in a folder as text files(I hadn't heard of markdown files back then). I would then use the backend to get the files from the backend and put them in the frontend. the react state would then change the page into the text from the text file.
This wouldn't of allowed me to be very flexible with my text and i would have to start the frontend and backend server each, the blogs would also take a quite bit of space than just put the information on a web service and get the data using its api. You can still view this particular project on my github btw.
This is how i did it in gatsby:

gatsby is static-site generator which is useful as its fast and specializies in making blogs, it uses the graphql query language to data from anywhere, which is helpful for us as it allows us to get data from the contentful api. while the sites are static it can dynamically get data from pretty much anywhere and generate html files for it
