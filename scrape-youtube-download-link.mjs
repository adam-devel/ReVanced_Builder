#!/usr/bin/env node
import {JSDOM as jsdom} from 'jsdom'
import jquery from 'jquery'


const version = process.argv[2]
const baseurl = 'https://www.apkmirror.com/apk/google-inc/youtube/';

let $;

// download page
const downloadpageUrl = `${baseurl}/youtube-${version}-release/youtube-${version}-2-android-apk-download/`;
const downloadpageDom = await jsdom.fromURL(downloadpageUrl);

// redirect page
$ = jquery(downloadpageDom.window);
const redirectpageUrl = $('.accent_bg.btn.btn-flat.downloadButton')
	.prop('href');
const redirectpageDom = await jsdom.fromURL(redirectpageUrl);

// download url
$ = jquery(redirectpageDom.window);
const dlUrl = $('a:contains(here)').prop('href');

console.log(dlUrl)

//Uri = `https://www.apkmirror.com/apk/google-inc/youtube/youtube-${version}-release/youtube-${version}-2-android-apk-download/download/$($Key)"
