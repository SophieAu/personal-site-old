---
title: "CLI Guidelines"
date: 2020-12-28
updated: 2020-12-28
categories: cli
slug: "cli-guidelines"
draft: false
---

## Quick Definitions

While there doesn't seem to be consent, I differentiate between these three things using the example `git commit --message "Commit Message Here"`:

1. Command. The 'name' of the CLI (`git`)
2. Flags/Options. (Usually Optional) named parameters in the command (`--message` and its short code `-m`)
3. Arguments. The value of the parameter (`"Commit Message Here"`)
4. Subcommand (`commit`)

Furthermore, I differentiate between:

1. __CL App__: 'End User App' that lives in the CL (e.g. `todoster`). Not usually used in scripts
2. __CL Tool__: CLI interface for an app that 'lives' somewhere else (e.g. `netlify-cli`, `npm`). Expected to be used in scripts
3. __Script__: Short-ish bash script used to conditionally chain together other CL tools and apps

The collective term for all three is __CLI__ (short for 'Command Line Interface').


## General Rules

* Rule number one is: __Your cli should really do only one thing.__ If it does two separate things that aren't that related it should be two CLIs.
* Your parameters' position should never have significance. If you need them to be in a specific order, they should be flags instead. E.g. `mv <source> <target>` would be much nicer with `mv --src=file.txt dest=merp/text.txt`.
* Having multiple arguments (note that it does _not_ say parameters) in a row is fine though. E.g. `git branch -D branch1 branch2 branch3` where all branches get deleted
* Never guess what the user means and execute that. If you can guess what the user means, still print the error and then tell the user what you think they meant.
* You should be able to force actions without interactive user input with the `--force/-f` flag
* If the command has potentially destructive effects, either
    * force confirmation (interactive or via the `--force/-f` flag)
    * allow a 'dry run' command (`--dry-run`) showing the user what would happen
    * force the user to confirm the command by typing in the resource that's going to be acted on (e.g. force the user to write the repository name when deleting a repository)
* When working on files/directories allow (or even force) the user to explicitly specify those (e.g. as a flag)
* If possible, allow users to recover at a failure point (i.e. do a rollback if something went wrong)
* respect the `NO_COLOR` env var
* CL tools should have a detailed `man` page and online documentation


## Output and Error Handling

* Only exit with a non-zero status code if the program actually terminated with an error
* When there is an error, make sure to give the user a useful error message: What, where, why, error code if applicable, how to resolve, and/or who to contact
* `stderr` should only get status, warning and error messages


## On Flags/Options

* Every option that can have a default option should have a default option. And this default option should be the 'least dangerous' option. E.g. deletion and override should never be the default
* Provide long, readable option names with short aliases (e.g. `--help` and `-h`).
* you should, at the least, have the following flags:
    * `--version/-V`
    * `--help/-h`
* If you're building a CL tool, the following flags make sense too:
    * `--quiet/-q` to suppress status and warning messages
    * `--verbose/-v`
* If you expect the output of your tool to be piped/transformed, add the following formatting flags:
    * `--plain` for a plain-text list
    * `--json` for JSON output


## Sources
* [Exploring CLI Best Practices by Kevin Deisz](https://eng.localytics.com/exploring-cli-best-practices/)
* [12 Factor CLI Apps by Jeff Dickey](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)
* [Command Line Interface Guidelines](https://clig.dev/)