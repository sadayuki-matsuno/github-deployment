# Github Development Action 

Marks a deployment status for GitHub actions.

## Parameters

### Inputs

- `staus`: Deployment status. (default: pending)
- `description`: Descriptive message about the deployment state.
- `log-url`: Log url location.
- `token`: Github repository token.
- `environment`: Name for the target deployment environment, which can be changed when setting a deploy status.
- `environment-url`: URL for accessing your environment.

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

    - name: 'deploy'
      run: |
        npm run deploy

    - name: 'change deployment status'
      uses: 'sadayuki-matsuno/github-deployment@v1'
      with:
        state: '${{ job.status }}'
        token: '${{ github.token }}'
```
