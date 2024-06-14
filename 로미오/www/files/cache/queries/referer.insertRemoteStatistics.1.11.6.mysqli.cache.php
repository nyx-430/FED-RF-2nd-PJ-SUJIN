<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertRemoteStatistics");
$query->setAction("insert");
$query->setPriority("");

${'remote16_argument'} = new Argument('remote', $args->{'remote'});
${'remote16_argument'}->checkNotNull();
if(!${'remote16_argument'}->isValid()) return ${'remote16_argument'}->getErrorMessage();
if(${'remote16_argument'} !== null) ${'remote16_argument'}->setColumnType('varchar');

${'count17_argument'} = new Argument('count', $args->{'count'});
${'count17_argument'}->ensureDefaultValue('1');
if(!${'count17_argument'}->isValid()) return ${'count17_argument'}->getErrorMessage();
if(${'count17_argument'} !== null) ${'count17_argument'}->setColumnType('number');

$query->setColumns(array(
new InsertExpression('`remote`', ${'remote16_argument'})
,new InsertExpression('`count`', ${'count17_argument'})
));
$query->setTables(array(
new Table('`xe_referer_remote_statistics`', '`referer_remote_statistics`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>