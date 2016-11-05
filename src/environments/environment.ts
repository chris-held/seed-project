// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  //This is for the baytek prizehub app, but it was built using the strongloop starter
  //so it has the endpoints we want and it's hosted so we don't have to fuck with it
  apiUrl: "https://btphc.zymo.io:8443/api"
};
