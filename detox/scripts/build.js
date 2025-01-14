const fs = require('fs-extra');

const { sh } = require('./utils');

//No need to pack iOS artifacts here. The build_framework.ios.sh script will be called during the post-install phase.

if (process.argv[2] === 'android' || process.argv[3] === 'android') {
	// eslint-disable-next-line no-console
	console.log('\nBuilding Detox aars');
	const aars = [
		'detox-debug.aar',
		'detox-release.aar'
	];
	aars.forEach(aar => {
		fs.removeSync(aar);
	});

	sh('./gradlew assembleDebug assembleRelease', {
		cwd: 'android',
		stdio: 'inherit',
		shell: true
	});

	aars.forEach(aar => {
		fs.copySync(`android/detox/build/outputs/aar/${aar}`, aar);
	});
}
