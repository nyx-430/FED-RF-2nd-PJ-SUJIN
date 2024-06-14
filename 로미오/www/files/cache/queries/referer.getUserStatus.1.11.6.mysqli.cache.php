<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getUserStatus");
$query->setAction("select");
$query->setPriority("");

${'member_srl21_argument'} = new ConditionArgument('member_srl', $args->member_srl, 'equal');
${'member_srl21_argument'}->checkNotNull();
${'member_srl21_argument'}->createConditionValue();
if(!${'member_srl21_argument'}->isValid()) return ${'member_srl21_argument'}->getErrorMessage();
if(${'member_srl21_argument'} !== null) ${'member_srl21_argument'}->setColumnType('number');

$query->setColumns(array(
new SelectExpression('count(*)', '`count`')
));
$query->setTables(array(
new Table('`xe_referer_user_statistics`', '`referer_user_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`member_srl`',$member_srl21_argument,"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>