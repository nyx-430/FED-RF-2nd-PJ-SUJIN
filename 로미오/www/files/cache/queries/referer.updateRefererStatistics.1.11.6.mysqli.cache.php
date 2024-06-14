<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateRefererStatistics");
$query->setAction("update");
$query->setPriority("");

${'count1_argument'} = new Argument('count', $args->{'count'});
${'count1_argument'}->setColumnOperation('+');
${'count1_argument'}->ensureDefaultValue(1);
if(!${'count1_argument'}->isValid()) return ${'count1_argument'}->getErrorMessage();
if(${'count1_argument'} !== null) ${'count1_argument'}->setColumnType('number');

${'host2_argument'} = new ConditionArgument('host', $args->host, 'equal');
${'host2_argument'}->checkNotNull();
${'host2_argument'}->createConditionValue();
if(!${'host2_argument'}->isValid()) return ${'host2_argument'}->getErrorMessage();
if(${'host2_argument'} !== null) ${'host2_argument'}->setColumnType('varchar');

$query->setColumns(array(
new UpdateExpression('`count`', ${'count1_argument'})
));
$query->setTables(array(
new Table('`xe_referer_statistics`', '`referer_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`host`',$host2_argument,"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>