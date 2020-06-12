---
title: "Threat Modeling"
date: 2020-99-99
updated: 2020-99-99
categories: security
slug: "threat-modeling"
draft: true
---

Disaster Scenarios

### Assets


Something of value to the organization or the attacker. Can be physical or immaterial goods. => What is valuable to us as a company? (e.g. user trust, ...) What is valuable to the user? (e.g. their money, secrecy of their data).


### Securit Goals

Confidentiality -> privacy and control/possession of our and our user's data

Integrity -> Information is kept accurately and is unchanged in transit (e.g. from user's phone to our servers). Also, the information is authentic, i.e. generated and managed by authorized sources only

Availabilty -> the system and all information is available and usable when needed/wanted


### Threat Actors

"Who or what might try to mess with me, and how?"

Can be a person, can also be: Natural Disaster, Power outage, Server down, ...


Relationship
Is the threat actor external, internal or a partner?

External: typical 'hackers', fraudsters, ...
Internal: Employees
Partners: E.g. investors, synapse, end users (might even include fraudsters)

Motive
* why are they doing this? What do they have to gain?

Intent
* are they doing this on purpose. Do they have a specific target? Do they just want to break everything? Were they reckless or negligent (usually internal or patners)

Capabilities
Separated into  'COmmitment' and 'Resources'

Are they just script kiddies or is it an organized attack. Are they just out for a quick buck? And is it a one-person operation or is it an organized operation with personell, deep knowledge, ...



### Disaster Scnarios

What could possibly go wrong?

Build a Threat Profile that consists of multiple disaster scenarios. It needs to evolve alongside the app though.

When starting out, do impact mapping: What's the worst that could happen if a scenario happens? Do this for all scenarios and rank by severity. And then start working on the worst one. Don't factor in the likelyhood of the scenario happening but actually only focus on the impact.















## Creating a Risk profile

Each disaster scenario can be described using this template:

As an ACTOR
I want to OUTCOME
By EXPLOIT
To ASSET
Because MOTIVATIOM









To figure out what areas of your system are vulnerable, create a Data Flow Diagram visualizing the data flow though your system. This should also map your architecture in the process.

From there on, figure out what information a process really needs and block access to everything else (trust boundary). This also counts for humans. Not everyone needs to know every master password. Similarly, a process might need to look at certain data but if they do not need to write to it, do not give them write access (privilege boundary).

On these boundaries you usually do Montoring, Logging, Firewalls, Sanitization, Rate Limiting, all the fun security stuff.




## Identify Threats
STRIDE

Spoofing of Identity -> credentials, ip addresses, http headers, ...
Tampering -> Circumvent validation, supply false data -> cookies, request params, man-in-the-middle
Repudiation -> successfully challenging the vaildity of a contract (e.g. user claims that money left theor account and we can't prove otherwise)
Information disclosure -> the standard 'hack' -> email, passwords, transaction data, ... being exposed to individuals who shouldn;t have access
Denial of Service -> make resource unavailable -. deletion, removal, ddos, ...
Elevation of Privilege -> allows someone to access and action things they shouldn't be allowed to


## Build Attack Trees
You start with the disaster scenario (e.g. user's money gets stolen) and work your way up the in data tree. Who could get access to that data and how. And then who could get access and data from them, ... Try to find as many different possibilities per 'level'. All these Nodes and paths are called 'Attack Vector'.

Once you have your Attack vector down, figure out how can you prevent the disaster scenario at every step of the way. At every connection you should ensure that nothing can go wrong. Write down everything ignoring budget and resources. You can rank everything later.




## Weigh risks and countermeasures
This is where we need to weigh the risk against the effort and cost

The four things you can do after assessing severity vs cost are:

Accept: You know it could happen but you're conciously deciding not to do something about it (with a good reason)
Avoid:  Avoid the risk. E.g. if doing x causes risk Y, can we just not do X?
Transfer: Make someone else deal with the problem. E.g. move your hosting to a cloud provider
Mitigate: Take measures to reduce the impact and/or likelyhood of the risk














-----



OTHER NON-FELIX STUFF


There are 3 steps in a Threat Modeling process
1. Diagraming
2. Threat Enumeratin
3. Mitigation
4. Verification

### diagramming

Build a Data Flow Diagram with trust boundaries and such. For each asset that we have, apply CIA and see which ones are valid (all of them should be valid usually).

### Threat Enumeration

For each element/node, do STRIDE. As in: check if one of them applies.


### Mitigation
For each threat risk, get rid of it, or ignore and such


### Validation
Review the threat model and make sure everything works as advertised













---- 

Sources:
Felix Hammerl's excellent [blog post series on Rational Security](https://felixhammerl.com/2018/05/03/Sec-1-Introduction-to-Rational-Security.html)
