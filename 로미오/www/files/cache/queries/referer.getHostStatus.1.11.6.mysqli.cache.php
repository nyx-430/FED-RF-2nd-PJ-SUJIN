<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getHostStatus");
$query->setAction("select");
$query->setPriority("");

${'host1_argument'} = new ConditionArgument('host', $args->host, 'equal');
${'host1_argument'}->checkNotNull();
${'host1_argument'}->createConditionValue();
if(!${'host1_argument'}->isValid()) return ${'host1_argument'}->getErrorMessage();
if(${'host1_argument'} !== null) ${'host1_argument'}->setColumnType('varchar');

$query->setColumns(array(
new SelectExpression('count(*)', '`count`')
));
$query->setTables(array(
new Table('`xe_referer_statistics`', '`referer_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`host`',$host1_argument,"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>