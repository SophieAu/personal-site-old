---
title: "Accessibility on the Web: Inclusive Design"
date: 2020-06-26
updated: 2020-06-26
categories: web-dev a11y product-development
slug: "web-a11y-inclusive-design"
draft: false
---

In the [Accessibility: Big Picture post](/article/web-a11y-big-picture/)) I referred to the 'Default User' and making sure to not forget people who don't fall into that category. Since this is probably the least technical thing you need to think about I've constructed a bit of a case study:

## Setup

You (male, 24 from SoCal now living in Portland) and your buddy from college are really into beard care and together with your goto babrber (32, part-time barrista, most glorious beard ever) you developed the perfect beard care and now want to sell them nationally to help other people reach their beard potential.

On first glance your user base is people just like you which hits exactly the Default User traits:

* white
* heterosexual
* cis-male
* aged between 20 and 45
* tech savvy
* are fluent in English
* have a Christian/Anglo-Saxon first and last name
* live in an English-language (or at least 'Western') country
* have the newest/fastest devices
* always have a great internet connection with unlimited data
* have 'Western' values (whatever that is...)
* right-handed
* of average height and limb size
* calm, rational and collected

You're not a dick so you make sure that your shop website is accessible to users who use a screenreader, keyboard navigation and who have vision deficiencies. Your site has a very comfortable WCAG AA rating.

The website is a work of art. The hero image is a stereotypical hipster in a flanel shirt: Mid twenties to early thirties, white, tall and very toned. Definitely spends more time in the gym and in front of the mirror than chopping wood. Your tagline is 'perfect what God has given you'. Your website oozes stereotypical masculinity.

When loooking at your webtracking you notice that a lot of people leave your homepage after a few seconds though. No coments nothing. They don't even scroll, just close the site. You wonder why that could be. And how can you get more people to be interested in product?

The second point where you see a large drop-off rate is your checkout. Why do people not want to finish shopping? They've already added the items in their cart but they just won't check out.

You artificially kept your target user base smaller than it needs to be. Because beard care is not just the concern of white mid twenties guys. Here is how you might be loosing customers:


### Imagery

The images on your page are all of white men aged 20 - 35 who follow the 'manly man' stereotype: Big, burly, doing manly things such as chopping wood or fixing cars. There is also a prominently featured pictures of a bearded man being surrounded by multiple scantly clad women.

However, people of all skin tones and colors can grow beards. And those people can be aged anywhere from 12ish (i.e. puberty) to above 100. In fact, most men alive today are older than 35. By focusing on stereotypically masculine and heterosexual men you've also excluded non-hetero men and men who present a bit more feminine. And the picture with the scantly clad women might turn off women looking for presents for their partners or simply people who do not want to see half-naked women when shopping for beard care supplies.


### User Info

On your checkout page you've created your custom form for user info. By optimizng for the Default user you've made a few oversights:

* Your title field only allows the options 'Mr, Mrs, Ms'. This excludes people who do not identify in the binary gender spectrum. Simply adding 'Mx' or just not having this field (as required) can help here
* You allow international shopping but adding their address is impossible for some user since all validation is based on US addresses which e.g. have different ZIP code requirements. Also, users won't know the shipping costs until after the payment info insertion.


### Additional Improvements

After you've fixed all the above issues and you take a look at your analytics again. It's looking much better. You also notice a large number of visitors from Middle and Latin America. In that case it might make sense to translate the site to Spanish to help these users.

As a bonus, you could also look for a picture of a left-handed person using your product. It's a small and almost invisible thing for most people but it could delight the left-handed users that notice.


## Conclusion

When you decide on a target user make sure you're not accidentally excluding people who do not fit the Default User persona. Just by aknowledging otherwise marginalised users you might just accidentally become that user group's go-to company (as [happened to a lovely tailor](https://www.youtube.com/watch?v=YW7bA683bYU)).