# Github Development Action 

https://help.github.com/ja/actions/building-actions/creating-a-javascript-action
Marks a deployment for GitHub actions.

## Parameters

### Inputs

- `description`: Short description of the deployment.
- `environment`: Name for the target deployment environment.
- `payload`: JSON payload with extra information about the deployment. 
- `ref-id`: The node ID of the ref to be deployed.
- `task`: Specifies a task to execute.

## Example

```yaml
# .github/workflows/deploy.yml
name: Deploy

on: ['deployment']

jobs:
  deployment:

    runs-on: 'ubuntu-latest'

    steps:
    - uses: actions/checkout@v1
    - name: 'use node 8.x'
      uses: actions/setup-node@v1
      with:
        node-version: 8.x

    - name: 'create deployment'
      uses: 'sadayuki-matsuno/github-deployment@v1'
      with:
        token: '${{ github.token }}'
        ref-id: '${{ github.ref }}'
        task: 'deploy'
        description: 'this is executed by github action'
        environment: 'production'
```
