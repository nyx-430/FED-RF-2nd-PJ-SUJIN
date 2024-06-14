<?php if(!defined("__XE__")) exit();
$_m = Context::get('mid');
$before_time = microtime(true);
$rm = '';
$ml = array(
);
$addon_file = './addons/autolink/autolink.addon.php';
if(file_exists($addon_file)){
if($rm === 'no_run_selected'){
if(!isset($ml[$_m])){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}else{
if(isset($ml[$_m]) || count($ml) === 0){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}}
$after_time = microtime(true);
$addon_time_log = new stdClass();
$addon_time_log->caller = $called_position;
$addon_time_log->called = "autolink";
$addon_time_log->called_extension = "autolink";
writeSlowlog("addon",$after_time-$before_time,$addon_time_log);
$before_time = microtime(true);
$rm = '';
$ml = array(
);
$addon_file = './addons/counter/counter.addon.php';
if(file_exists($addon_file)){
if($rm === 'no_run_selected'){
if(!isset($ml[$_m])){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}else{
if(isset($ml[$_m]) || count($ml) === 0){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}}
$after_time = microtime(true);
$addon_time_log = new stdClass();
$addon_time_log->caller = $called_position;
$addon_time_log->called = "counter";
$addon_time_log->called_extension = "counter";
writeSlowlog("addon",$after_time-$before_time,$addon_time_log);
$before_time = microtime(true);
$rm = '';
$ml = array(
);
$addon_file = './addons/member_communication/member_communication.addon.php';
if(file_exists($addon_file)){
if($rm === 'no_run_selected'){
if(!isset($ml[$_m])){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}else{
if(isset($ml[$_m]) || count($ml) === 0){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}}
$after_time = microtime(true);
$addon_time_log = new stdClass();
$addon_time_log->caller = $called_position;
$addon_time_log->called = "member_communication";
$addon_time_log->called_extension = "member_communication";
writeSlowlog("addon",$after_time-$before_time,$addon_time_log);
$before_time = microtime(true);
$rm = '';
$ml = array(
);
$addon_file = './addons/member_extra_info/member_extra_info.addon.php';
if(file_exists($addon_file)){
if($rm === 'no_run_selected'){
if(!isset($ml[$_m])){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}else{
if(isset($ml[$_m]) || count($ml) === 0){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}}
$after_time = microtime(true);
$addon_time_log = new stdClass();
$addon_time_log->caller = $called_position;
$addon_time_log->called = "member_extra_info";
$addon_time_log->called_extension = "member_extra_info";
writeSlowlog("addon",$after_time-$before_time,$addon_time_log);
$before_time = microtime(true);
$rm = 'run_selected';
$ml = array(
'romeo' => 1,
);
$addon_file = './addons/popup/popup.addon.php';
if(file_exists($addon_file)){
if($rm === 'no_run_selected'){
if(!isset($ml[$_m])){
unset($addon_info); $addon_info = unserialize(base64_decode('Tzo4OiJzdGRDbGFzcyI6MTM6e3M6MTU6InhlX3ZhbGlkYXRvcl9pZCI7czozMToibW9kdWxlcy9hZGRvbi90cGwvc2V0dXBfYWRkb24vMSI7czoxMDoicG9wdXBfdHlwZSI7czo1OiJsYXllciI7czoxNDoicG9wdXBfcG9zaXRpb24iO3M6NDoibGVmdCI7czo3OiJwb3NfdG9wIjtzOjM6IjE1MCI7czo4OiJwb3NfbGVmdCI7czozOiIyODAiO3M6MTA6IndpZHRoX3R5cGUiO3M6NToiZml4ZWQiO3M6NToid2lkdGgiO3M6MzoiMzUwIjtzOjEyOiJjb250ZW50X3R5cGUiO3M6NToiaW1hZ2UiO3M6OToiaW1hZ2VfdXJsIjtzOjI2OiJwb3B1cC9yb21lb19wb3B1cF8yMTA2LnBuZyI7czoxMDoic3RhcnRfZGF0ZSI7czoxMjoiMjAyMTA2MDEwMDAwIjtzOjg6ImVuZF9kYXRlIjtzOjEyOiIyMDIxMDYzMDIzNTkiO3M6MTM6InhlX3J1bl9tZXRob2QiO3M6MTI6InJ1bl9zZWxlY3RlZCI7czo4OiJtaWRfbGlzdCI7YToxOntpOjA7czo1OiJyb21lbyI7fX0=')); @include($addon_file);
}}else{
if(isset($ml[$_m]) || count($ml) === 0){
unset($addon_info); $addon_info = unserialize(base64_decode('Tzo4OiJzdGRDbGFzcyI6MTM6e3M6MTU6InhlX3ZhbGlkYXRvcl9pZCI7czozMToibW9kdWxlcy9hZGRvbi90cGwvc2V0dXBfYWRkb24vMSI7czoxMDoicG9wdXBfdHlwZSI7czo1OiJsYXllciI7czoxNDoicG9wdXBfcG9zaXRpb24iO3M6NDoibGVmdCI7czo3OiJwb3NfdG9wIjtzOjM6IjE1MCI7czo4OiJwb3NfbGVmdCI7czozOiIyODAiO3M6MTA6IndpZHRoX3R5cGUiO3M6NToiZml4ZWQiO3M6NToid2lkdGgiO3M6MzoiMzUwIjtzOjEyOiJjb250ZW50X3R5cGUiO3M6NToiaW1hZ2UiO3M6OToiaW1hZ2VfdXJsIjtzOjI2OiJwb3B1cC9yb21lb19wb3B1cF8yMTA2LnBuZyI7czoxMDoic3RhcnRfZGF0ZSI7czoxMjoiMjAyMTA2MDEwMDAwIjtzOjg6ImVuZF9kYXRlIjtzOjEyOiIyMDIxMDYzMDIzNTkiO3M6MTM6InhlX3J1bl9tZXRob2QiO3M6MTI6InJ1bl9zZWxlY3RlZCI7czo4OiJtaWRfbGlzdCI7YToxOntpOjA7czo1OiJyb21lbyI7fX0=')); @include($addon_file);
}}}
$after_time = microtime(true);
$addon_time_log = new stdClass();
$addon_time_log->caller = $called_position;
$addon_time_log->called = "popup";
$addon_time_log->called_extension = "popup";
writeSlowlog("addon",$after_time-$before_time,$addon_time_log);
$before_time = microtime(true);
$rm = '';
$ml = array(
);
$addon_file = './addons/referer/referer.addon.php';
if(file_exists($addon_file)){
if($rm === 'no_run_selected'){
if(!isset($ml[$_m])){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}else{
if(isset($ml[$_m]) || count($ml) === 0){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}}
$after_time = microtime(true);
$addon_time_log = new stdClass();
$addon_time_log->caller = $called_position;
$addon_time_log->called = "referer";
$addon_time_log->called_extension = "referer";
writeSlowlog("addon",$after_time-$before_time,$addon_time_log);
$before_time = microtime(true);
$rm = '';
$ml = array(
);
$addon_file = './addons/resize_image/resize_image.addon.php';
if(file_exists($addon_file)){
if($rm === 'no_run_selected'){
if(!isset($ml[$_m])){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}else{
if(isset($ml[$_m]) || count($ml) === 0){
unset($addon_info); $addon_info = unserialize(base64_decode('')); @include($addon_file);
}}}
$after_time = microtime(true);
$addon_time_log = new stdClass();
$addon_time_log->caller = $called_position;
$addon_time_log->called = "resize_image";
$addon_time_log->called_extension = "resize_image";
writeSlowlog("addon",$after_time-$before_time,$addon_time_log);