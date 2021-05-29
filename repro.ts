import * as shell from "shelljs";

const REPO = "politics-rewired/shelljs-repro";

const cloneRepo = (cd: boolean) => {
  // Shallow clone the manifests
  const rand = Math.floor(Math.random() * 1000);
  const tmpDir = shell.tempdir() as any;
  const localPath = `${tmpDir}/shelljs-repro-${new Date().getTime()}-${rand}`;
  shell.set("-e");
  const repoRemoteUri = `git@github.com:${REPO}.git`;
  const cloneCommand = `git clone --depth 1 ${repoRemoteUri} ${localPath}`;
  console.log(`cmd: ${cloneCommand}`);
  shell.exec(cloneCommand);
  shell.cd(localPath);

  // Make changes to the repo
  shell.echo("Do stuff in the repo").to("tmp.txt");

  // The key line!
  if (cd) shell.cd(tmpDir);

  // Clean up
  shell.rm("-rf", localPath);
};

const attempt = (cd: boolean) => {
  try {
    cloneRepo(cd);
  } catch (err) {
    console.error(`error in cd:${cd} attempt 0`, err);
  }
  try {
    cloneRepo(cd);
  } catch (err) {
    console.error(`error in cd:${cd} attempt 1`, err);
  }
};

// Changing directory before removing works for both attempts
attempt(true);

// Changing directory works for first, but fails for second
attempt(false);

// All subsequent exec's fail with same error
attempt(true);
