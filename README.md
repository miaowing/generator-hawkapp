# generator-hawkapp
this yeoman-generator is used for angularJS + requireJS.

#### Usage
```
npm install yo -g
npm install generator-hawkapp -g
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
$ yo hawkapp
? Your project name (myProject) default is current folder name.
? Your name (yeoman) 
```

##### Generate Module
```
$ yo hawkapp:module
? Your module name (myModule) 
? Your name (yeoman) 
```

##### Generate Controller
```
$ yo hawkapp:controller moduleName controllerName author
```

##### Generate Store
```
$ yo hawkapp:store moduleName storeName author
```

##### Generate Service
```
$ yo hawkapp:service moduleName serviceName author
```

##### Generate Template
```
$ yo hawkapp:view moduleName tplName
```
