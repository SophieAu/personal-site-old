---
title: "Threat Modeling"
date: 2020-07-05
updated: 2020-07-05
categories: security
slug: "threat-modeling"
draft: true
---

The goal of Threat Modeling is to figure out the vulnerabilities in your system and, if needed, plan to fix them. You'll very likely never find all potential threats but this exercise (done regularly) should help you over most of them. As with (almost) everything, awareness is key.

## Prerequisites

### Assets and Security Goals

Before getting into threat modeling you need to identify what it is you actually want to protect. What assets does your company have that you want to keep safe? This can be things like user's personal data', the company's bank accounts/monetary asssets',  trade secrets' or even the company's employees.

In most cases you will be talking about digital data though, things like users' personal data, transaction records, passswords and usernames.

These things can be threatened in 3 major ways:

**Confidentiality**: The data is not shared with unintended 3rd parties, even in its encrypted form

**Integrity**: The data is kept accurately and authentic, meaning it is only generated, changed and managed by authorized sources.

**Availability**: The data is available and usable to authorized sources when needed.


### Threat Actors

> "Why or what might try to mess with us, why, and how?

Threat Actors can be a single person but also whole organizations or even natural disasters and other 'unusual' events. We will focus on sentient actors though (which does include Script Kiddies).

You will want to figure out the following:

1. **Relationship**: Is the threat actor external (hacker, competitor), internal (employee), or a partner (investors, SaaS provider, end user).
2. **Motive**: Why are they doing this? What do they have to gain?
3. **Intent**: Are they doing this on purpose? Do they have a specfic target? Do they just want to break as much as possible? Were they 'just' reckless or negligent (usually internal or partners)?
4. **Capabilities**: What are their resources? Is it a lone person or a whole organization? What is their commitment? Are they just hoping for a quick buck or is it a targeted attack?



## Threat Modeling a Feaure

This is where the actual threat modeling comes in. With all the prerequisites out of the way, you can now focus on finding the vulnerabilities in your system.

You can do threat modeling for the system as a whole but generally speaking it is easier (and less daunting) to do it on a feature by feature bases, ideally even during feature breakdowns in the product development lifecycle. The following will assume that you're doing threat modeling for a specific feature.

### Building a Data Flow Diagram

Figure out which components of the system will be touched or affected. This includes changing existing components and adding new ones. it also includes the user and any 'non-tech' components that will have to interact with the change. 'Tech' components can include the database, backend microservices, the web frontend or an authentication service.

Once you've identified all components, show the data flow by drawing arrows between the connected components. Also label networks and draw their boundaries (e.g. on the phone, server, ...).

And finally, mark down any place where assets are held (e.g. user auth tokens in an auth db).

### Brainstorm Threats

Based on the diagram, use the STRIDE methodology to identify threats. There are no wrong answers. Even outrageous (e.g. aliens) or already mitigated threats are valid.

* **S**poofing of Identity: credentials, ip addresses, http headers, ...
* **T**ampering: Circumvent validation, supply false data
* **R**epudiation: Successfully challenge the vaildity of a contract (e.g. user claims that money left theor account and we can't prove otherwise)
* **I**nformation disclosure: The standard 'Hack': Expose email, passwords, transaction data to individuals who shouldn't have access
* **D**enial of Service: Make resource unavailable through e.g. deletion (permanently) or ddos (temporarily)
* **E**levation of Privilege: Allow someone to access and action things they shouldn't be allowed to

Add these threats to the attack point in the diagram.

Do not forget 'meta' vulnerabilities such as: CI/CD pipelines and even 3rd party partners or current employees. E.g. when it comes to DB credentials, these can not only be accidentally leaked but also bribed/extorted from employees who have access to them.

### Propritize and Fix

Go through all the threats you've identified and decide on the ones that need to be mitigated immediately.

To rank the severity of a threat, use the DREAD methodology:

* **D**amage
* **R**eproducibility
* **E**xpolitability
* **A**ffected Users
* **D**iscoverability

Based on this ranking, you should do one of the following for each threat:

1. Accept: You know it could happen but you're conciously deciding not to do something about it (with a good reason)
2. Avoid: Avoid the risk, e.g. if doing X causes risk Y, can we get around doing X?
3. Transfer: Make someone else deal with the problem, e.g. move your hosting to a cloud provider
4. Mitigate: Take measures to reduce the impact and/or likelyhood of the risk

In any case, write down all threats including the action taken on them to have a record to get back to later.


### Validate findings

Check back in regularly and go over your findings and ensure every agreed-on action has been taken. Introduce more actions and/or remind people to do their task if necessary.



## Introducing Threat Modeling to an Existing System

When you're introducing threat modeling to an existing system, start out with Impact Mapping: What is the worst thing that could happen to the system/company? Using the discovered assets and threat actors, build disaster scenarios using the following template:

As an ACTOR  
I want to OUTCOME  
By EXPLOIT  
To ASSET  
Because MOTIVATIOM  
Which leads to IMPACT  

The Impact is the actual effect on the company? Is it bad press? Competitors gaining an advantage? ...?

Based on the severity of a disaster coming to pass, start to mitigate the worst one. Don't factor in the likelyhood of it happening (unless the threat actor is Aliens) but only focus on the impact.



## Bonus: Mitigation Measures

### Trust and Privilege Boundaries

Many vulenariblities can be mitigated by properly set trust and privilege boundaries. _Trust Boundaries_ define who (both code and humans) has access to certain information. _Privilege Boundaries_ define who can act on certain information. This usually means the split between read and write access.

On these boundaries you would usually do monitoring, logging, sanitization and similar.



---- 

## Sources

* Felix Hammerl's excellent [blog post series on Rational Security](https://felixhammerl.com/2018/05/03/Sec-1-Introduction-to-Rational-Security.html)
* Adam Shostack's talk on [Threat Modeling in 2019](https://www.youtube.com/watch?v=ZoxHIpzaZ6U)

## Resources

* Adam Shostack's [Conflict Modeling](https://github.com/adamshostack/conflictmodeling) which tackles social/reputation threat modeling -> How can our software be used for evil.
* This [Awesome Threat Modeling list](https://github.com/hysnsec/awesome-threat-modelling) on GitHub
