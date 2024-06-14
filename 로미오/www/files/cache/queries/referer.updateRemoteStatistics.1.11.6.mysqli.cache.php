<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateRemoteStatistics");
$query->setAction("update");
$query->setPriority("");

${'count11_argument'} = new Argument('count', $args->{'count'});
${'count11_argument'}->setColumnOperation('+');
${'count11_argument'}->ensureDefaultValue(1);
if(!${'count11_argument'}->isValid()) return ${'count11_argument'}->getErrorMessage();
if(${'count11_argument'} !== null) ${'count11_argument'}->setColumnType('number');

${'remote12_argument'} = new ConditionArgument('remote', $args->remote, 'equal');
${'remote12_argument'}->checkNotNull();
${'remote12_argument'}->createConditionValue();
if(!${'remote12_argument'}->isValid()) return ${'remote12_argument'}->getErrorMessage();
if(${'remote12_argument'} !== null) ${'remote12_argument'}->setColumnType('varchar');

$query->setColumns(array(
new UpdateExpression('`count`', ${'count11_argument'})
));
$query->setTables(array(
new Table('`xe_referer_remote_statistics`', '`referer_remote_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`remote`',$remote12_argument,"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>