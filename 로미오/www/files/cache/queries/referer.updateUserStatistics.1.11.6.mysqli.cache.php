<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateUserStatistics");
$query->setAction("update");
$query->setPriority("");

${'count15_argument'} = new Argument('count', $args->{'count'});
${'count15_argument'}->setColumnOperation('+');
${'count15_argument'}->ensureDefaultValue(1);
if(!${'count15_argument'}->isValid()) return ${'count15_argument'}->getErrorMessage();
if(${'count15_argument'} !== null) ${'count15_argument'}->setColumnType('number');
if(isset($args->member_srl)) {
${'member_srl16_argument'} = new ConditionArgument('member_srl', $args->member_srl, 'equal');
${'member_srl16_argument'}->createConditionValue();
if(!${'member_srl16_argument'}->isValid()) return ${'member_srl16_argument'}->getErrorMessage();
} else
${'member_srl16_argument'} = NULL;if(${'member_srl16_argument'} !== null) ${'member_srl16_argument'}->setColumnType('number');

$query->setColumns(array(
new UpdateExpression('`count`', ${'count15_argument'})
));
$query->setTables(array(
new Table('`xe_referer_user_statistics`', '`referer_user_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`member_srl`',$member_srl16_argument,"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>