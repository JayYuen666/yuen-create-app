#! /usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const program = require('commander');


// 配置 config 命令
program
	.command('config [value]')
	.description('inspect and modify the config')
	.option('-g, --get <path>', 'get value from option')
	.option('-s, --set <path> <value>')
	.option('-d, --delete <path>', 'delete option from config')
	.action((value, options) => {
		console.log(value, options)
	})
// 配置 ui 命令
program
	.command('ui')
	.description('start add open yuen-cli ui')
	.option('-p, --port <port>', 'Port used for the UI Server')
	.action((option) => {
		console.log(option)
	})

program
	.command('create <app-name>')
	.description('create a new project')
	.option('-f, --force', 'overwrite target directory if it exist') // 是否强制创建，当文件夹已经存在
	.action((name, options) => {
		// 在 create.js 中执行创建任务
		require('../lib/create.js')(name, options)
	});
program
	// 配置版本号信息
	.version(`v${require('../package.json').version}`)
	.usage('<command> [option]');

program
	// 监听 --help 执行
	.on('--help', () => {
		// 新增说明信息
		console.log(`\r\nRun ${chalk.cyan(`yuen <command> --help`)} for detailed usage of given command\r\n`)
	})

program
	.on('--help', () => {
		// 使用 figlet 绘制 Logo
		console.log('\r\n' + figlet.textSync('JayYuen', {
			font: 'Ghost',
			horizontalLayout: 'default',
			verticalLayout: 'default',
			width: 80,
			whitespaceBreak: true
		}));
		// 新增说明信息
		console.log(`\r\nRun ${chalk.cyan(`yuen <command> --help`)} show details\r\n`)
	})

program.parse(process.argv);