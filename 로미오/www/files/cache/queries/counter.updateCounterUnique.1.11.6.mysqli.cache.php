<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateCounterUnique");
$query->setAction("update");
$query->setPriority("");

${'unique_visitor9_argument'} = new Argument('unique_visitor', NULL);
${'unique_visitor9_argument'}->setColumnOperation('+');
${'unique_visitor9_argument'}->ensureDefaultValue(1);
if(!${'unique_visitor9_argument'}->isValid()) return ${'unique_visitor9_argument'}->getErrorMessage();
if(${'unique_visitor9_argument'} !== null) ${'unique_visitor9_argument'}->setColumnType('number');

${'pageview10_argument'} = new Argument('pageview', NULL);
${'pageview10_argument'}->setColumnOperation('+');
${'pageview10_argument'}->ensureDefaultValue(1);
if(!${'pageview10_argument'}->isValid()) return ${'pageview10_argument'}->getErrorMessage();
if(${'pageview10_argument'} !== null) ${'pageview10_argument'}->setColumnType('number');

${'regdate11_argument'} = new ConditionArgument('regdate', $args->regdate, 'in');
${'regdate11_argument'}->checkNotNull();
${'regdate11_argument'}->createConditionValue();
if(!${'regdate11_argument'}->isValid()) return ${'regdate11_argument'}->getErrorMessage();
if(${'regdate11_argument'} !== null) ${'regdate11_argument'}->setColumnType('number');

$query->setColumns(array(
new UpdateExpression('`unique_visitor`', ${'unique_visitor9_argument'})
,new UpdateExpression('`pageview`', ${'pageview10_argument'})
));
$query->setTables(array(
new Table('`xe_counter_status`', '`counter_status`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`regdate`',$regdate11_argument,"in")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>