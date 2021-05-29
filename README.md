# ShellJS #1024 Reproduction

```sh
yarn install
yarn ts-node repro.ts
```

Result:

```
$ yarn ts-node repro.ts

yarn run v1.22.10
warning package.json: No license field
$ /path/to/shelljs-repro/node_modules/.bin/ts-node repro.ts
cmd: git clone --depth 1 git@github.com:politics-rewired/shelljs-repro.git /var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302356560-247
Cloning into '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302356560-247'...
Do stuff in the repo
cmd: git clone --depth 1 git@github.com:politics-rewired/shelljs-repro.git /var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302357434-83
Cloning into '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302357434-83'...
Do stuff in the repo
cmd: git clone --depth 1 git@github.com:politics-rewired/shelljs-repro.git /var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302358380-671
Cloning into '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302358380-671'...
Do stuff in the repo
cmd: git clone --depth 1 git@github.com:politics-rewired/shelljs-repro.git /var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302359291-986
error in cd:false attempt 1 Error [ShellJSInternalError]: ENOENT: no such file or directory, open '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs_2b05e0cad532189703cd'
    at Object.openSync (fs.js:498:3)
    at Object.readFileSync (fs.js:394:35)
    at execSync (/path/to/shelljs-repro/node_modules/shelljs/src/exec.js:89:17)
    at Object._exec (/path/to/shelljs-repro/node_modules/shelljs/src/exec.js:205:12)
    at Object.<anonymous> (/path/to/shelljs-repro/node_modules/shelljs/src/common.js:335:23)
    at cloneRepo (/path/to/shelljs-repro/repro.ts:14:9)
    at attempt (/path/to/shelljs-repro/repro.ts:34:5)
    at Object.<anonymous> (/path/to/shelljs-repro/repro.ts:44:1)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Module.m._compile (/path/to/shelljs-repro/node_modules/ts-node/src/index.ts:1295:23) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs_2b05e0cad532189703cd'
}
cmd: git clone --depth 1 git@github.com:politics-rewired/shelljs-repro.git /var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302359329-462
error in cd:true attempt 0 Error [ShellJSInternalError]: ENOENT: no such file or directory, open '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs_99f76a5aec8043fbae82'
    at Object.openSync (fs.js:498:3)
    at Object.readFileSync (fs.js:394:35)
    at execSync (/path/to/shelljs-repro/node_modules/shelljs/src/exec.js:89:17)
    at Object._exec (/path/to/shelljs-repro/node_modules/shelljs/src/exec.js:205:12)
    at Object.<anonymous> (/path/to/shelljs-repro/node_modules/shelljs/src/common.js:335:23)
    at cloneRepo (/path/to/shelljs-repro/repro.ts:14:9)
    at attempt (/path/to/shelljs-repro/repro.ts:29:5)
    at Object.<anonymous> (/path/to/shelljs-repro/repro.ts:47:1)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Module.m._compile (/path/to/shelljs-repro/node_modules/ts-node/src/index.ts:1295:23) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs_99f76a5aec8043fbae82'
}
cmd: git clone --depth 1 git@github.com:politics-rewired/shelljs-repro.git /var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs-repro-1622302359335-920
error in cd:true attempt 1 Error [ShellJSInternalError]: ENOENT: no such file or directory, open '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs_da5c1117e7cb6638536a'
    at Object.openSync (fs.js:498:3)
    at Object.readFileSync (fs.js:394:35)
    at execSync (/path/to/shelljs-repro/node_modules/shelljs/src/exec.js:89:17)
    at Object._exec (/path/to/shelljs-repro/node_modules/shelljs/src/exec.js:205:12)
    at Object.<anonymous> (/path/to/shelljs-repro/node_modules/shelljs/src/common.js:335:23)
    at cloneRepo (/path/to/shelljs-repro/repro.ts:14:9)
    at attempt (/path/to/shelljs-repro/repro.ts:34:5)
    at Object.<anonymous> (/path/to/shelljs-repro/repro.ts:47:1)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Module.m._compile (/path/to/shelljs-repro/node_modules/ts-node/src/index.ts:1295:23) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: '/var/folders/pz/t4k0tlvn2pvbprzhlkbsrm100000gn/T/shelljs_da5c1117e7cb6638536a'
}
✨  Done in 4.34s.
```
