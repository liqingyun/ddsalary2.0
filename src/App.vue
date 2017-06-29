<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/**
 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

html,
body {
  width: 100%;
  height: 100%;
}



/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}



/* custom */

a {
  color: #7e8c8d;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
}

li {
  list-style: none;
}

body {
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
}



/* my style*/

.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}

.clearfix {
  zoom: 1;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 14px;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 14px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 14px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 14px;
}

.mint-cell-wrapper,
.mint-cell {
  background-size: 120% 0px;
}

.mint-cell:last-child {
  background-size: 100% 0px;
}

.mint-header {
  z-index: 100 !important;
}
input[type="search"] {
  -webkit-appearance: none;
}

input::-webkit-search-cancel-button {
  display: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.clear_margin {
  width: 100%;
  border-bottom: 1px solid transparent;
}
a,
a:link,
a:visited,
a:hover {
  text-decoration: none;
}
.mint-cell-allow-right::after {
  width: 10px;
  height: 10px;
  right: 10px;
}
.is-link > span {
  font-size: 14px;
}
.mint-cell-value.is-link {
  margin-right: 30px;
}
:focus{
  outline: 0;
}
input[type="button"], button {
  border: none;
  background-color: transparent;
}
</style>
