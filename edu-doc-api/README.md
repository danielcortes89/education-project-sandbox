This sub-project, named edu-doc-api is meant to hold the
web API used to create, read, update, and delete education project
documents that contain either images or text that is to be rendered
at runtime from a front-end GUI.

To run the test cases, run: 

    npm run test

By default the test cases will create the required test database edu-docs-api-test
and will seed it with the mongo DB documents needed by the test cases.

Here is an example of the output produced when runing the test cases:

    PASS  tests/pic.test.js
    √ Should fetch doc001 by ID (80 ms)
    √ Should fetch 4 docs sorted by sequence (19 ms)
    √ Should fetch 2 Turkey docs sorted by sequence (14 ms)

    Test Suites: 1 passed, 1 total
    Tests:       3 passed, 3 total
    Snapshots:   0 total
    Time:        1.056 s, estimated 2 s


Status of this sub-project:
The current commit only has tests cases that use the mongoose model API.
The next commit will include the initial web API code as well as corresponding test cases.
