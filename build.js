var fs = require('fs');  
var path = require('path');  
var exec = require('child_process').exec;  
var less = require('less');

var srcFilePath = path.resolve('./src');  
// 打包的文件夹名
var distFolderName = 'lib';

build(srcFilePath);

// 打包非js文件
function build(srcFilePath) {
	fs.readdir(srcFilePath, function(err, files) {
		if(err) {
			console.log(err);
		} else {
			files.forEach(function(filename){ 
				var filePath = path.join(srcFilePath, filename);  
				var _src = filePath;
            	var _dst = filePath.replace('\\src\\',`\\${distFolderName}\\`);
                var readable;
                var writable;
				fs.stat(filePath, function(eror, stats) {
					if(err) {
						console.warn('获取文件stats失败');  
					} else {
						var isFile = stats.isFile();//是文件  
                		var isDir = stats.isDirectory();//是文件夹  
	                    if(isFile){
	                    	// less
	                    	if(/\.(less)$/.test(filename)) {
								readable=fs.createReadStream(_src);//创建读取流
			                    writable=fs.createWriteStream(_dst);//创建写入流
			                    readable.pipe(writable);
			                    if(/\\assets\\style\\index\.(less)$/.test(_src)) {
			                    	compileLess(_src, _dst);
			                    }
	                    	}
	                    	if(/\.(css|jpg|png)$/.test(filename)) {
								readable=fs.createReadStream(_src);//创建读取流
			                    writable=fs.createWriteStream(_dst);//创建写入流
			                    readable.pipe(writable);
	                    	}
						}
	                    if(isDir){  
	                    	exists(_dst, function() {
	                    		build(filePath);//递归，如果是文件夹，就继续遍历该文件夹下面的文件  
	                    	});
                        }  
					}
				})
			})
		}
	})
}

// less 编码
function compileLess(srcFilePath, distPath) {
	var _dst = distPath.replace('\.less','\.css');
	var cmd = ['lessc ', srcFilePath, ' ', _dst].join('');  
	exec(cmd, {encoding: 'utf-8'}, function(error, stdout, stderr) {  
        if(error !== null) {  
            console.log(error);  
            return;  
        }  
    }); 
	// fs.readFile(srcFilePath, 'utf8', function(err, data) {
	// 	if(err) {
	// 		// console.log(err);
	// 	}
	// 	// 在node中调用less编译器
	// 	console.log(data.replace(/\//g, '\\'))
	// 	less.render(data, (err, css) => {
	// 		if(err) {
	// 			// console.log(err);
	// 		}
	// 		fs.writeFile( _dst, (css || {}).css, ( err ) => {

	//             if ( err ) {
	//             	// console.log(err);
	//             }
	//         })
	// 	})
	// })
}

// 判断当前目录下文件夹是否存在
function exists(distPath, callback) {
	fs.exists(distPath, function(exists) {
		// 不存在文件夹
		if(!exists) {
			// 创建目录
			fs.mkdir(distPath, function(err) {
				if(err) {
					console.log(err);
				}
            })
		}
		callback();
	})
}
