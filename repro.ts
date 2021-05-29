import * as shell from "shelljs";

const REPO = "politics-rewired/shelljs-repro";

const cloneRepo = () => {
  // Shallow clone the manifests
  const rand = Math.floor(Math.random() * 1000);
  const localPath = `/tmp/shelljs-repro-${new Date().getTime()}-${rand}`;
  const repoRemoteUri = `git@github.com:${REPO}.git`;
  shell.set("-e");
  shell.exec(`git clone --depth 1 ${repoRemoteUri} ${localPath}`);
  shell.cd(localPath);

  // Make changes to the repo
  shell.echo("Do stuff in the repo").to("tmp.txt");

  // Clean up
  shell.rm("-rf", localPath);
};

try {
  cloneRepo();
} catch (err) {
  console.error(`error in attempt 0`, err);
}
try {
  cloneRepo();
} catch (err) {
  console.error(`error in attempt 1`, err);
}
