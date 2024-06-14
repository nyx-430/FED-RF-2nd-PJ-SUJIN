<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertCounterLog");
$query->setAction("insert");
$query->setPriority("");

${'site_srl5_argument'} = new Argument('site_srl', $args->{'site_srl'});
${'site_srl5_argument'}->ensureDefaultValue('0');
${'site_srl5_argument'}->checkNotNull();
if(!${'site_srl5_argument'}->isValid()) return ${'site_srl5_argument'}->getErrorMessage();
if(${'site_srl5_argument'} !== null) ${'site_srl5_argument'}->setColumnType('number');

${'regdate6_argument'} = new Argument('regdate', $args->{'regdate'});
${'regdate6_argument'}->ensureDefaultValue(date("YmdHis"));
${'regdate6_argument'}->checkNotNull();
if(!${'regdate6_argument'}->isValid()) return ${'regdate6_argument'}->getErrorMessage();
if(${'regdate6_argument'} !== null) ${'regdate6_argument'}->setColumnType('date');

${'ipaddress7_argument'} = new Argument('ipaddress', $args->{'ipaddress'});
${'ipaddress7_argument'}->ensureDefaultValue($_SERVER['REMOTE_ADDR']);
${'ipaddress7_argument'}->checkNotNull();
if(!${'ipaddress7_argument'}->isValid()) return ${'ipaddress7_argument'}->getErrorMessage();
if(${'ipaddress7_argument'} !== null) ${'ipaddress7_argument'}->setColumnType('varchar');
if(isset($args->user_agent)) {
${'user_agent8_argument'} = new Argument('user_agent', $args->{'user_agent'});
if(!${'user_agent8_argument'}->isValid()) return ${'user_agent8_argument'}->getErrorMessage();
} else
${'user_agent8_argument'} = NULL;if(${'user_agent8_argument'} !== null) ${'user_agent8_argument'}->setColumnType('varchar');

$query->setColumns(array(
new InsertExpression('`site_srl`', ${'site_srl5_argument'})
,new InsertExpression('`regdate`', ${'regdate6_argument'})
,new InsertExpression('`ipaddress`', ${'ipaddress7_argument'})
,new InsertExpression('`user_agent`', ${'user_agent8_argument'})
));
$query->setTables(array(
new Table('`xe_counter_log`', '`counter_log`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>