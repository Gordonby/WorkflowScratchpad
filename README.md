# Workflow Scratchpad
Playground for action workflow scaffolds

## Summary

Name | Summary | Descrption / Typical Use Case
---|---|---
Fork Validate | Shows checking for a forked PR, and conditionally taking actions such as adding a comment to the PR. | Forked PR's cannot access Repo secrets when they run - so this leads into handling Pull Requests from forks differently where your workflow actions leverage secrets as part of the process to validate PR's
Matrix-iterate | Shows dymamically building an array which then feeds a Matrix Strategy. | Taking multiple files and validating their contents. Each files pass/fail needs to be respresented in the GitHub workflow step log.
