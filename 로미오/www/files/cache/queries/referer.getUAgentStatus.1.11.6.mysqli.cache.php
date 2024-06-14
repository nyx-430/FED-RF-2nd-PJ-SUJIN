<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getUAgentStatus");
$query->setAction("select");
$query->setPriority("");

${'uagent18_argument'} = new ConditionArgument('uagent', $args->uagent, 'equal');
${'uagent18_argument'}->checkNotNull();
${'uagent18_argument'}->createConditionValue();
if(!${'uagent18_argument'}->isValid()) return ${'uagent18_argument'}->getErrorMessage();
if(${'uagent18_argument'} !== null) ${'uagent18_argument'}->setColumnType('varchar');

$query->setColumns(array(
new SelectExpression('count(*)', '`count`')
));
$query->setTables(array(
new Table('`xe_referer_uagent_statistics`', '`referer_uagent_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`uagent`',$uagent18_argument,"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>