# yeoman-generator-hawk
this yeoman-generator is used for angularJS + requireJS.

#### Usage
```
npm install yo -g
npm install yeoman-generator-hawk -g 
```

##### Tree
```
 -bower_componnets
 -dist
 -modules
  -core
  -static
   -css
   -less
  -module
   -router
   -controllers
   -services
   -stores
   -less
   -views
  -test
```

##### Generate Project
```
$ yo hawk
? Your project name (myProject) default is current folder name.
? Your name (yeoman) 
```

##### Generate Module
```
$ yo hawk:module
? Your module name (myModule) 
? Your name (yeoman) 
```

##### Generate Controller
```
$ yo hawk:controller moduleName controllerName author 
```

##### Generate Store
```
$ yo hawk:store moduleName storeName author
```

##### Generate Service
```
$ yo hawk:service moduleName serviceName author
```

##### Generate Template
```
$ yo hawk:view moduleName tplName
```
