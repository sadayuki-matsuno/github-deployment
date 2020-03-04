const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const context = github.context;
    const token = core.getInput('token', {required: true});
    const autoMerge = core.getInput('auto-merge', {required: false}) | false;
    const description = core.getInput('description', {required: false});
    const environment = core.getInput('environment', {required: false});
    const payload = core.getInput('payload', {required: false});
    const refId = core.getInput('ref-id', {required: true});
    const task = core.getInput('task', {required: false});

    const client = new github.GitHub(token);
    const params = {
      ...context.repo,
      auto_merge: autoMerge,
      description,
      environment,
      payload,
      ref: refId,
      required_contexts: [],
      task,
    };
    // https://developer.github.com/v4/mutation/createdeployment/
    await client.repos.createDeployment(params);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
