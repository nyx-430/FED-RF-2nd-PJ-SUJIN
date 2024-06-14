<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertUAgentStatistics");
$query->setAction("insert");
$query->setPriority("");

${'uagent19_argument'} = new Argument('uagent', $args->{'uagent'});
${'uagent19_argument'}->checkNotNull();
if(!${'uagent19_argument'}->isValid()) return ${'uagent19_argument'}->getErrorMessage();
if(${'uagent19_argument'} !== null) ${'uagent19_argument'}->setColumnType('varchar');

${'count20_argument'} = new Argument('count', $args->{'count'});
${'count20_argument'}->ensureDefaultValue('1');
if(!${'count20_argument'}->isValid()) return ${'count20_argument'}->getErrorMessage();
if(${'count20_argument'} !== null) ${'count20_argument'}->setColumnType('number');

$query->setColumns(array(
new InsertExpression('`uagent`', ${'uagent19_argument'})
,new InsertExpression('`count`', ${'count20_argument'})
));
$query->setTables(array(
new Table('`xe_referer_uagent_statistics`', '`referer_uagent_statistics`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>