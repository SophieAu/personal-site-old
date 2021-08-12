---
title: "User Interviews"
date: 2021-08-11
updated: 2021-08-11
categories: product-dev
slug: "user-interviews"
draft: false
---

Before building something and dumping a lot of time and energy into it you should make sure that people will actually use it. That's where user interviews come in.

In a user interview you will look at how the user experiences the problem your solving and what they'er currently doing to solve/work around it.

## Selecting Interviewees

Make sure that the group of users you'll be interviewing is as diverse as possible. Of course they should fit your target group but aside from that they should be on different levels of seniority, different environments (e.g. practice doctors, teaching hospital doctors, rural doctors), ideally different levels of 'scepticism' (tech wizes to luddites), ...

And most importantly: __They should have no idea what you're trying to build and should have no stake in it__! Even if they ask, be extremely vague. You can totally tell them that you're being vague to make sure they're not going in biased. And make sure you're not interviewing people who for whatever reason will try to always please you. Don't ask your mum, dad, direct report at work, ... People who are lying to you to make you feel good are the worst kind of people you can talk to. They'll give you inaccurate results and will only stroke your ego instead of providing valuable feedback. How about instead of scheduling a interview with them just take them out for coffee and have a nice chat?

Try to get in around 5 interviews as that is usually the perfect ratio of time investment vs lessons learned.

## Location, Location, Loc--- Timing

When scheduling interviews, keep the timeslot to 30 - 45 minutes. This is both to respect your interviewees time and because you'll get diminishing returns after 45 minutes. Less than 30 minutes tends to quickly become a rushed job interview-type situation instead of the relaxed conversational chat you're after.

In an ideal world you'll do the interview right at the problem site. That is, if you're interviewing a truck driver, ask if they can take you up into their cabin and ride with you for a bit. If you're solving an everyday problem, your interviewees will often do things around it almost subconciously so they'll forget to tell you important details. In this case, (you can observe the user as a fly on the wall), you can schedule the interview for as long as the task at the problem site takes.

Now, not every interview can be done on location. In that case, try to still do it as personal and as close to the problem as possible. Maybe meet the interviewee for lunch when they're fresh from the problem site. Or do a video interview when they have 30 minutes in their calendar. The closer you can get to the actual problem scenario the more you will learn.

__You will want to observe what the user is already doing, not what they might theoretically do.__

## What You Want to Learn

Before staring the interview, make sure you're clear on what you really want to learn. And it's never "Would they want to use my product?". It is generally some variation on __"Does the user encounter the problem that I (think I) have identified and how are they currently solving/working around it?"__

One framework around this that I like to use is '__Jobs to be done__': What does the user want to achieve? What is their environment like when they want to do that?

E.g. our assumption is: We sell hammers, the users want to hang a picture (action) make their house feel homely (intention). A user interview's job is to see if our assumption aligns with what users actually need and feel. Maybe they are fine with not hanging pictures but putting them onto a sideboard because they don't want to dent the wall. Maybe they're all using poster strips and are 100% happy with those. Maybe they want to hang pictures of their defeated arch enemies to frequently remind them of their triumphs.

All of this are questions you want answers to before you rent out a factory and put in an order for 1 million hammers.

A nice template for describing your assumption is:
__When I (NEED X) but (Y IS GETTING IN THE WAY), help me (Z WOULD OVERCOME Y) so I can (DO A).__

  * User wants to do A, by doing X
  * Y is getting in the way of achieving A, Z would overcome that

So, for the hammer assumption:

_When I want to hang a picture on the wall but gravity goes down not to the side, help me make it stick to the wall so I can feel at home, gloating over my vanquished foes._


## The Interview

The interview should always feel like a fun chat, never like a chore or a job interview. Take care throughout the interview that the interviewee is comfortable and try to never interrupt even if they ramble on a bit.

If possible, record the interview so that you can come back to it later. If you cannot for whatever reason, try to get a second person in to jot down notes while the primary interviewer leads the interview.

### Intro (5 Minutes)

Start every interview by introducing yourself and doing a tiny bit of small talk. Just enough to make the interviewee feel at easy. Make sure you make it absolutely clear that there are no wrong answers. The user will not be judged and the best answer they can give is one that's honest.


### General Info (5 Minutes)

Let the user give you a quick intro into themselves and they relationship to the problem space. E.g. if you want to build a tool to improve a workflow at their job:
* How did they get to where they are now?
* What does an average day at work look like?
* If you can actually observe them do their job: Is today an average day or is something different?
* What is the most/least fun part of their job?

### Problem Space (25 Minutes)

After the user has talked you through their day gently guide them towards the problem space. "You said that you spend on average X hours on Y and other things don't get done because of it? Can you describe to me why or which specific part of Y takes so much time?" 

Ideally, if you have the chance to observe the interviewee while doing their work, just ask them to complete the task around the problem space and ask them to narrate what they're doing and thinking. If you get the chance to do that, this part of the interview might get a bit longer of course. While observing the interviewee also take note of their environment. What do you hear? What does it smell like? Is it hot/cold/dirty?

In most cases (in my experience) you don't get to observe the interviewee though so this is where you ask them to describe the last time they ran into the problem: __"Looking back at the last time you ran into [PROBLEM], can you walk me through in as much detail as possible exactly what you did?"__. From there, go into as much detail as possible, always making sure to ask open questions. "Interesting. Can you go into that a bit deeper? Why did you do X? How exactly did you do that? How does that make you feel?". Especially around tasks where the interviewee assumes they're self-explanatory, ask them to explain what exactly they did and why.

Stay away from hypotheticals, and when the interviewee says something like "usually I do X", ask back "what did you do the last time?". And anticipate 'negative' answers like "oh, that's not a problem at all".

Do not interrupt or rush the interviewee. When in doubt, wait for a bit too long to answer back.

A nice guideline for what questions to ask is: 

1. What is the hardest part about [thing you're looking into]
2. Tell me about the last time you encountered that problem
3. Why was that hard?
4. What, if anything, have you tried to solve that problem?
5. What don't you love about the solutions you already tried?

### Outro (5 Minutes)

Once you've explored the problem space well enough or (most likely) you're running out of time, slowly close the interview.

Ask the interviewee if there is anything they want to mention/they think might help us. Maybe they know people? Maybe they're currently looking into a tool that might solve their problem?

Thank the interviewee for their time and energy and promise them to keep them up to date with the project progress if they're interested.



## Evaluating User Interviews

Try to do a first evaluation immediately after the interview. Jot down your 3 biggest takeaways and if possible compare them with the 2nd interviewer's.

Then, come back to the interview a day or so later and try to draw the biggest insights, especially around
* does the user have the problem you've identified
* if yes: is it actually a pain point for them? if no: why not? is your problem too specific?
* what is the user currently doing to solve/get around the problem
* what would make our solution better/worse?

Make sure to look at it as objectively as possible and rather err on the side of being too negative than positive. Keep in mind that people don't want your specific solution. They want to not have the problem. Even if that would just mean making someone else have that problem.

Once you've done 5-ish interviews you should be able to identify patterns:
* What did people generally agree/disagree on?
* Did they all have the problem you've identified? Are there solutions out there already?
* Why do they want the problem solved? (To have more time for other work? It's boring? It's draining? ...?)
* What assumptions were met/not met?
* What new things did you learn?

As a result of the interviews you should be able to confidently say whether or not your idea is a realistic and useful solution to the problem you've identified.
