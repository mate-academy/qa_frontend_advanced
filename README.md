# QA Frontend Advanced

## Task
Explore the code in files `src/helpers/state.js` and `src/helpers/list.js`. Make sure you understand what each of the functions is doing and how it is supposed to work. Create a test suite for all of them. Here are a few points that you might want to consider:

- Instead of initializing the list in every test, you can use `beforeEach`.

- You can also create a set of tests where `add` and `addAsync` are tested on an already non-empty list. For this, use `describe` for grouping tests, `beforeEach` for populating with initial data, and `afterEach` for cleaning up.

- Using mocking, verify that `setState` and `getState` are being called from the functions defined in `list.js` a reasonable number of times. For instance, there is no need for `initialize` to call `getState` or for `addItem` to call `setState` more than once.

- Don’t forget to test immutability.

## Workflow
- Fork the repository with this task.
- Clone forked repository:
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Work on the task.

## Development mode
- Use the `npm test` command to run the tests that you have created. You would not need to run `npm start` for this task.
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified).
- Before committing, use `npm run lint` to check your code for any styling issues.
- Commit and push.
- Create `Pull Request` from the forked repo to the original one.
- Add the link to the pull request to your Google spreadsheet.

In this task, you will only be working with the `src/helpers` folder.
