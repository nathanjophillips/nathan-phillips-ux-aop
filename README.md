# ux-intern-onboarding
**CURRENTLY UNDER CONSTRUCTION**

## New repository direction
### [Project introduction](https://docs.banno.com/ux/intern-onboarding-project/README/) > README
- Use `ux-intern-onboarding/README.md` as the project introduction
- Update the introduction. It's real out of date.

### [Units & Tasks](https://docs.banno.com/ux/intern-onboarding-project/1-project-setup-1/) > Milestones & Issues
- Create an issue template for each task and place them in `ux-intern-onboarding/unit-*/`
  - most issues already created in [Jropp/jason-ropp-js-iobp](https://github.com/Jropp/jason-ropp-js-iobp/issues?utf8=%E2%9C%93&q=is%3Aissue) and could be copied directly over
  - issues, _when detailed, labeled and number correctly,_ should be good enough to replace the [old directions](https://docs.banno.com/ux/intern-onboarding-project/README/) entirely
  - each can/probably will contain a `README` laying out the unit and what it hopes to accomplish

### [Project resources](https://docs.banno.com/ux/intern-onboarding-project/Resources/) > Resource folder
#### Links
  - `ux-intern-onboarding/resources/links.md`

#### Repository templates
  - `ux-intern-onboarding/templates/`
  - Have new intern copy over files in first steps of their repository initialization

## Old repository and project directions
### ux_onboarding
With the use of `localStorage`, there's no need for `ux_onboarding`, so it can be removed. `ux-intern-onboarding` will contain everything the intern will need for the project, anyway.

### Wiki Page Cleanup and Use
With all the changes in `ux-intern-onboarding`, we should be able to remove the Intern Onboarding Project subsection entirely. From there, though, we'll either have to create a new wiki page for interns *or* add a section in Onboarding specifically for interns.

## Initial Proposal

### Utilize Github... _for about everything_
In the past, the project wasn't being tracked within the intern's repository. I'm not sure _why_, but it seems like a no brainer to do so now.
- It'll mimic our team's current process with Github.
- Many of the tasks from the [old directions](https://docs.banno.com/ux/intern-onboarding-project/README/) should translate into an issue or two, and the units can be tracked with milestones.
- May utilize Projects, as well, as the visual may be beneficial for both the intern and those reviewing progress

### Update tasks to align with our current stack and processes
In it's current state the onboarding project is outdated by a few years. Here are a few proposed updates to make the building process a bit smoother.

- Use npm scripts over Gulp
- Ditch Angular for custom web components with Polymer (_duh_)
  - This changes [unit 6](https://docs.banno.com/ux/intern-onboarding-project/6-angular/) almost entirely. [Jason's unit 6](https://github.com/Jropp/jason-ropp-js-iobp/milestone/4) will be more in line with the new one.
- Would eventually like to include a compiler and I hope to make [changes @bryandcoulter made](https://github.com/Jropp/jason-ropp-js-iobp/pull/45/commits/63442343df6d4b4584bf21c815e6cf3eb369f845) to Jason's repository accessible so that getting a Webpack running properly doesn't take a month or more.
- Not sure a router is necessary for the end result, so I've chosen _not_ to require one. One may be implemented if they so choose.
- Utilize `localStorage` as a **"**database**"** over [the old way](https://github.com/Banno/ux_onboarding) and create a similar API, in project, around `localStorage` to be used by components.

# Updating onboarding repository and wiki
_No plan yet... stay tuned._
