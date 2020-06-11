---
title: "Threat Modelling"
date: 2020-99-99
updated: 2020-99-99
categories: security
slug: "threat-modelling"
draft: true
---


Disaster Scenarios

### Assets


Something of value to the organization or the attacker. Can be physical or immaterial goods. => What is valuable to us as a company? (e.g. user trust, ...) What is valuable to the user? (e.g. their money, secrecy of their data).


### Securit Goals

Confidentiality -> privacy of our and our user's data

Integrity -> Information is kept accurately and is unchanged in transit (e.g. from user's phone to our servers)

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






















Sources:
Felix Hammerl's excellent [blog post series on Rational Security](https://felixhammerl.com/2018/05/03/Sec-1-Introduction-to-Rational-Security.html)
