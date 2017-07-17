/**
 * Created by Administrator on 2017/7/17.
 */

"use strict"

var promise = require('bluebird');

async function logging(req, res, next){
	console.log('logging >>>');
	await promise.delay(500);
	await next();
	console.log('logging <<<')
}

async function parseToken(req, res, next){
	console.log('parseToken ===');
	await promise.delay(500);
	await next();
	console.log('parseToken ===')
}

async function auth(req, res, next){
	console.log('auth ---');

	// do auth
	await promise.delay(500);

	let b = Date.now()%2;
	if(b == 1)
		res.json("invalid token")
	else
		await next();

	console.log('auth ---')
}

module.exports = {
	logging: logging,
	parseToken: parseToken,
	auth: auth
}