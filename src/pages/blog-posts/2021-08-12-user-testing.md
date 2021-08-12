---
title: "User Testing"
date: 2021-08-12
updated: 2021-08-12
categories: product-dev
slug: "user-testing"
draft: false
---

Once you've validated your baseline product idea with [[User Testing]] and you've created a super-barebones prototype you-re ready for User Testing.

The prototype can and should be as minimal as you want, even just a few pen-and-paper sketches work. You'll only ever want to test one thing so don't prototype everything yet.

## Finding Good Testers

After you've identified the one part of your product you want to validate you can start throwing together the first round of user testing sessions. Like with the user interviews you'll want to interview as many diverse people as possible. Since you will probably do multiple rounds of interviews it makes sense to cast a wide net and get as many willing candidates as possible. Per iteration you'll want to keep the number of testers to around 5 though.

If you can, try to pre-screen your users by asking them a few _relevant_ questions, like:

- What gender do you identify as ( (cis-)male/female, non-binary/agender/transgender/...)?
- What age are you (allow brackets)?
- How long have you been working as X?
- Would you consider yourself X? (yes, no, not sure/somewhere in the middle) (e.g. tech-savy)


## Planning the Session

The most important thing you can do once you've lined up all your candidates is figuring out what task you want them to accomplish. That task can be anything from "Cure cancer using the provided tool" to "log into the tool". It all depends on what your prototype is built for.

Of course the "curing cancer" question might be a bit ambitious for one round of testing. Something like "Using the tool and given this image of a cell, find out if the cell is malignant." This would be 'building the scenario'. In order to have test results that are comparable you'll want to have as few variables as possible, ideally only your candidate. So, if you can provide the problem scenario for the user go ahead and do that. Make sure that what you're building out is a _scenario_ not _instructions_. The user should have to think for themselves here.

Just like user interviews, the testing sessions should run 30-45 minutes. You're asking your candidate to take time out of their day so out of respect for them you should try to optimize here. This also means that you should make sure the task you'll have them complete takes at max 30 minutes.

Try to have the session recorded and/or have a 2nd interviewer there to make sure you capture all the nuances of the session.

## Goals of the Session

We want to learn:
* Can the user complete the task we've given them using our tool?
* How long does it take them to complete the task?
* Is the user satisfied with the product? What do they like/dislike? What is missing?
* Did the user hit any roadblocks. Did they manage to resolve them? How? 


## The Session

Do not change how you run the sessions of the same iteration. Otherwise your results won't be comparable. A script can be super-useful here to make sure every session runs the same way.

## Intro (10 Minutes)

Start with a bit of small talk, asking your tester how their day went. Try to find out what mood they're in as that does influence how they will approach the testing. Are they stressed and therefore might be a bit more impatient?

Make your tester as comfortable as possible. While the user testing session is for testing that your protoype is usable, for the tester it's going to feel like you're testing them. Make it absolutely clear to the tester that you're testing the usability of the prototype and any issues that the tester has will be because your protoype needs to be improved, not because the tester did anything wrong. Anything they don't understand or don't like is super-valuable feedback since they will 100% not be the only people with that problem.

In the same vein, ask the tester to be as honest as possible when they don't understand something or think something isn't good. You need that criticism, otherwise you won't learn anything.

To get the most out of the session, ask the tester to narrate what they're doing, i.e. think out loud. During the session you can encourage this by asking the tester what they're thinking, what they're wanting to do, ... You will try to be as quiet as possible in order to make sure you're not influencing the user in any way. It should feel as if you weren't even there.

Since you're not working with a fully functional product but only a prototype, make the user aware that some things might not be working and if they stumble upon something like that ask them to explain what they would've expected to happen.

Finally, explain the scenario to the user and ask them if they understand their task. Make it abundantly clear to them that they really should ask if anything is unclear now.



## Testing (20 Minutes)

During testing, try to be as quiet as possible. Only ever speak when a) the user asks you something or b) they become quiet and you need to remind them to think out loud or c) you want the user to clarify when they did/said something (e.g. "when you said x, what exactly did you mean?").

If they get quiet, try to get them back on track by asking them to clarify what they just did or what they were expecting (e.g. "you just clicked on X, could you tell us why you clicked that?")

If the tester asks you something (quite often it's "I tried to click this but nothing happened...?") try to turn the question back around ("yeah, because this is prototype we haven't implemented that part yet. what would you have expected would happen?"). You will always want to make the user take their own action instead of relying on you. So even when they ask "What should I do now?" come back with "Do what feels the most right for you". Feel free to reiterate in cases like these that they can do no wrong.

As with all user interviews, _never_ ask leading questions, explain things or interrupt the user. In a perfect situation, you would not even interact with the user at all during the testing period.


## Wrap-Up (10 Minutes)

At some point, the user will either have finished with their task or you will be running out of time. At that point, stop the testing part and start wrapping up.

Ask the user for a short recap of their experience:
* What did using the prototype feel like?
* What did you like the most/least?
* Is there anything you would change (improve/get rid off/add)?


And that's it. Thank the user for their time and then let them go.



## Evaluating User Testing Sessions

Try to do a first evaluation immediately after the session. Jot down your 3 biggest takeaways and if possible compare them with the 2nd interviewer's.

Then, come back to the session a day or so later and try to draw the biggest insights, especially around
* Did the user complete the task? Why? Why not?
* What did they struggle with? What went better than expected?
* Did the user uncover any bugs/edge cases you hadn't discovered yet?
* Did the user seem to enjoy themselves?

After about 5 sessions you should be able to identify some patterns:
* Was the task doable in the time frame?
* Did people struggle at the same point in the prototype?
* Did the users misinterpret the same thing?
* Are users missing the same feature?
* ...


Based on this feedback you should be able to iterate on the protoype and then do the same thing again.