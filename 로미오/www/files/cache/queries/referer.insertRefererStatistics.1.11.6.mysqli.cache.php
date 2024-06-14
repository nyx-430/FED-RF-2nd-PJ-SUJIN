<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertRefererStatistics");
$query->setAction("insert");
$query->setPriority("");

${'host2_argument'} = new Argument('host', $args->{'host'});
${'host2_argument'}->checkNotNull();
if(!${'host2_argument'}->isValid()) return ${'host2_argument'}->getErrorMessage();
if(${'host2_argument'} !== null) ${'host2_argument'}->setColumnType('varchar');

${'count3_argument'} = new Argument('count', $args->{'count'});
${'count3_argument'}->ensureDefaultValue('1');
if(!${'count3_argument'}->isValid()) return ${'count3_argument'}->getErrorMessage();
if(${'count3_argument'} !== null) ${'count3_argument'}->setColumnType('number');

$query->setColumns(array(
new InsertExpression('`host`', ${'host2_argument'})
,new InsertExpression('`count`', ${'count3_argument'})
));
$query->setTables(array(
new Table('`xe_referer_statistics`', '`referer_statistics`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>