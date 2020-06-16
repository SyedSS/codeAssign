# Welcome to Code Asssignment!

## Installation

```bash
npm install @olive/react
```

**NOTE**: You can also [install from a git branch](https://github.docusignhq.com/pages/FrontEndShared/front-end-guides/docs/node-and-npm/#install-via-a-git-branch) to test unreleased code.

## Usage

Import from our transpiled ES6 library (allows tree-shaking, requires that your project uses ES6 module syntax).

```javascript
import { Olive, Button } from '@olive/react'
```

**IMPORTANT**: Use of this library requires that you pass your application content as a child to the top-level `<Olive />` component, as demonstrated [here](https://github.docusignhq.com/pages/olive/react/?selectedKind=1.%20Entry%20Point%7COlive&selectedStory=EXAMPLE).

**IMPORTANT**: We output deprecation warnings to the browser console. It is important to pay attention to the console while developing, and address these warnings so you have a smooth upgrade to future major releases.

## Documentation

We use the open source tool [Storybook](https://storybook.js.org/) to develop and document our UI components in isolation.

### Latest Version

You will find the API documentation for our latest published version at the OliveReact [GitHub Pages site](https://github.docusignhq.com/pages/olive/react/?selectedKind=Olive).

### Previous Versions

If you have OliveReact installed as a dependency in your project, you can view the documentation for that version locally using [`npx`](https://github.docusignhq.com/pages/FrontEndShared/front-end-guides/docs/node-and-npm/#npx-package-runner).

- At the root of your project, execute:

    `npx olive-react`

- Open http://localhost:5678 in your browser to view documentation for your locally-installed version of the @olive/react library.

- If port 5678 is already in use on your system, you can provide an alternate using the `--port` flag:

    `npx olive-react --port 8888`

### Experiments

Some components are marked as experimental or in an alpha state, so keep the following in mind:

- These components can have breaking changes, so pay attention to the [CHANGELOG](https://github.docusignhq.com/olive/react/blob/master/CHANGELOG.md) when updating
- We welcome all feedback on these components so we can make them better for you!

## Translations and Localization

**You must provide a `lang` attribute on the `html` element.**

* OliveReact uses the `lang` attribute to translate internal strings.
* This is also an accessibility requirement: assistive technologies use the `lang` attribute to determine in which language to operate.
* English will be used if a value for the `lang` attribute is not supplied, or if the supplied value is not recognized.
* OliveReact does not translate any strings provided to components by consumers (all strings should be translated before used as prop values).

## Troubleshooting

You can find tips for troubleshooting common issues [here](https://github.docusignhq.com/olive/react/blob/master/wiki/TROUBLESHOOTING.md).

### Troubleshooting: Issues with npm or Artifactory

DocuSign uses Artifactory to deliver NPM packages. If installation is failing, you must first set up your environment to fetch packages from the internal NPM registry.

View the [Artifactory guide](https://github.docusignhq.com/pages/FrontEndShared/front-end-guides/docs/artifactory/) for more information.

### Troubleshooting: Missing Knobs/Addons Panel in Storybook

If you cannot see the knobs/addons panel in Storybook, try the following:

- toggle the panel's visibility by pressing `A`
- toggle the panel's orientation by pressing `D`

### Troubleshooting: Stories appear to not be working

If clicking an interactive element in a story doesn't do anything, fear not, we have done that on purpose. Presentational components don't really do much on their own, so if you want to see something wired up, then look at a component's `example` story.

## Contributing

Please read the [contributing guidelines](https://github.docusignhq.com/olive/react/blob/master/.github/CONTRIBUTING.md) (which include directions on linking from your application to a local copy of the OliveReact respository in order to facilitate active development).

## Olive Create React App

You can view a sample application that leverages the OliveReact library [here](https://github.docusignhq.com/olive/olive-create-react-app), bootstrapped from [Create React App](https://github.com/facebook/create-react-app).

## @ds/components

Can't find what you're looking for in OliveReact? Check out the [@ds/components](https://github.docusignhq.com/pages/FrontEndShared/components/index.html#/) shared library for more!

## Contact

- [Report a bug](https://jira.corp.docusign.com/secure/CreateIssue.jspa?pid=12509&issuetype=1) ([Reporting bugs best practices](https://github.docusignhq.com/pages/FrontEndShared/front-end-guides/docs/reporting-bugs/))
- [Request a feature](https://jira.corp.docusign.com/secure/CreateIssue.jspa?pid=12509&issuetype=7)
- Slack: [#proj-olive](https://app.slack.com/client/THN1XRC2X/CJHLM3YMC)
