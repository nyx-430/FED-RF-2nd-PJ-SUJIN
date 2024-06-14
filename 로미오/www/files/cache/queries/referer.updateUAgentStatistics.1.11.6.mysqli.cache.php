<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateUAgentStatistics");
$query->setAction("update");
$query->setPriority("");

${'count13_argument'} = new Argument('count', $args->{'count'});
${'count13_argument'}->setColumnOperation('+');
${'count13_argument'}->ensureDefaultValue(1);
if(!${'count13_argument'}->isValid()) return ${'count13_argument'}->getErrorMessage();
if(${'count13_argument'} !== null) ${'count13_argument'}->setColumnType('number');

${'uagent14_argument'} = new ConditionArgument('uagent', $args->uagent, 'equal');
${'uagent14_argument'}->checkNotNull();
${'uagent14_argument'}->createConditionValue();
if(!${'uagent14_argument'}->isValid()) return ${'uagent14_argument'}->getErrorMessage();
if(${'uagent14_argument'} !== null) ${'uagent14_argument'}->setColumnType('varchar');

$query->setColumns(array(
new UpdateExpression('`count`', ${'count13_argument'})
));
$query->setTables(array(
new Table('`xe_referer_uagent_statistics`', '`referer_uagent_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`uagent`',$uagent14_argument,"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>