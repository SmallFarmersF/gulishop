# gulishop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development(用于开发的编译和热加载)
```
npm run serve
```

### Compiles and minifies for production(编译和缩小生产)
```
npm run build
```

### Lints and fixes files(查找和修复文件)
```
npm run lint
```

### Customize configuration(自定义配置)
See [Configuration Reference](https://cli.vuejs.org/config/).

## eslint错误级别禁用
    1.在根目录下创建vue.config.js
    2.module.exports = {
  		lintOnSave: false,
	}

## jsconfig.json配置别名@提示     import XXX from '@/'
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths": {
                "@/*": ["src/*"]
            }
        },
        "exclude": ["node_modules", "dist"]
    }

## git的基本操作和分支基本操作

### git基本操作
#### 先有本地代码
	创建本地库
	创建远程库
	关联本地和远程
	修改本地
	修改远程
	
远程代码提交到本地：git pull origin master

#### 先有远程代码
	直接克隆


###	git分支扩展
#### 分支创建和合并
		本地创建分支   git checkout -b dev
		本地推送新分支自动在远程库建立新分支  git push origin dev


		合并分支之前如果是多人协作先拉取一下远程master，以防止别人已经做了更改
		本地切换到master 然后再合并分支  git merge dev 
		合并之后再次推送到远程master


#### 分支删除
		项目开发完成可以删除分支		  
		git push origin --delete dev  删除远程分支
		git branch -d dev  删除本地分支 
