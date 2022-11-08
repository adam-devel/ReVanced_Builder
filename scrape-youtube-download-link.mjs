#!/usr/bin/env node

import { JSDOM as jsdom } from 'jsdom'
import jquery from 'jquery'

const baseurl = 'https://www.apkmirror.com/apk/google-inc/youtube/';
const version = process.argv[2]

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
process.stdout.write($('a:contains(here)').prop('href'))
